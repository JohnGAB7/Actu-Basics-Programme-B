# B17 didactic data-quality and reproducible-ingestion checks.
# Base R only; not a production ETL or orchestration framework.

validate_required_fields <- function(data, required) {
  issues <- data.frame(row = integer(), field = character(), issue = character())
  for (field in required) {
    if (!(field %in% names(data))) {
      issues <- rbind(issues, data.frame(row = integer(), field = field, issue = "missing_column"))
    } else {
      bad <- which(is.na(data[[field]]))
      if (length(bad)) {
        issues <- rbind(issues, data.frame(row = bad, field = field, issue = "null_value"))
      }
    }
  }
  issues
}

duplicate_keys <- function(data, key) {
  values <- data[[key]]
  unique(values[!is.na(values) & (duplicated(values) | duplicated(values, fromLast = TRUE))])
}

foreign_key_violations <- function(child, child_key, parent, parent_key) {
  which(!is.na(child[[child_key]]) & !(child[[child_key]] %in% parent[[parent_key]]))
}

idempotent_upsert <- function(existing, incoming, key, updated_at) {
  all_rows <- rbind(existing, incoming)
  if (anyNA(all_rows[[key]]) || anyNA(all_rows[[updated_at]])) {
    stop("key and updated_at must be non-missing")
  }
  parse_timestamp <- function(value) {
    if (grepl("^\\d{4}-\\d{2}-\\d{2}$", value)) {
      return(as.numeric(as.POSIXct(as.Date(value), tz = "UTC")))
    }
    normalized <- sub("Z$", "+0000", value)
    normalized <- sub("([+-][0-9]{2}):([0-9]{2})$", "\\1\\2", normalized)
    parsed <- as.POSIXct(normalized, format = "%Y-%m-%dT%H:%M:%OS%z", tz = "UTC")
    if (is.na(parsed)) {
      stop("datetime timestamps must be ISO 8601 and include an explicit UTC offset")
    }
    as.numeric(parsed)
  }
  sort_key <- vapply(as.character(all_rows[[updated_at]]), parse_timestamp, numeric(1))
  all_rows$.sort_key <- sort_key
  all_rows <- all_rows[order(all_rows$.sort_key, seq_len(nrow(all_rows))), , drop = FALSE]
  all_rows <- all_rows[!duplicated(all_rows[[key]], fromLast = TRUE), , drop = FALSE]
  all_rows$.sort_key <- NULL
  all_rows[order(all_rows[[key]]), , drop = FALSE]
}

reconcile_totals <- function(source, target, amount_field) {
  source_missing <- sum(is.na(source[[amount_field]]))
  target_missing <- sum(is.na(target[[amount_field]]))
  source_total <- sum(source[[amount_field]], na.rm = TRUE)
  target_total <- sum(target[[amount_field]], na.rm = TRUE)
  list(
    source_count = nrow(source),
    target_count = nrow(target),
    source_total = source_total,
    target_total = target_total,
    source_missing_amount_count = source_missing,
    target_missing_amount_count = target_missing,
    count_match = nrow(source) == nrow(target),
    total_match = source_missing == 0L && target_missing == 0L &&
      isTRUE(all.equal(source_total, target_total))
  )
}

month_partition <- function(x) format(as.Date(substr(x, 1, 10)), "%Y-%m")

# Executable checks
source <- data.frame(id = c(1L, 2L), amount = c(10, 5))
stopifnot(nrow(validate_required_fields(source, c("id", "amount"))) == 0L)
stopifnot(identical(duplicate_keys(data.frame(id = c(1L, 2L, 1L)), "id"), 1L))
child <- data.frame(parent_id = c(10L, 99L, NA_integer_))
parent <- data.frame(id = 10L)
stopifnot(identical(foreign_key_violations(child, "parent_id", parent, "id"), 2L))
old <- data.frame(id = c("A", "B"), updated = c("2026-01-01", "2026-01-01"), amount = c(2, 3))
new <- data.frame(id = "A", updated = "2026-02-01", amount = 4)
merged <- idempotent_upsert(old, new, "id", "updated")
stopifnot(nrow(merged) == 2L, merged$amount[merged$id == "A"] == 4)
old_tz <- data.frame(id = "A", updated = "2026-01-01T00:30:00+01:00", amount = 1)
new_tz <- data.frame(id = "A", updated = "2025-12-31T23:45:00Z", amount = 2)
tz_merged <- idempotent_upsert(old_tz, new_tz, "id", "updated")
stopifnot(tz_merged$amount == 2)
stopifnot(month_partition("2026-11-21T12:30:00") == "2026-11")
totals <- reconcile_totals(source, source, "amount")
stopifnot(totals$count_match, totals$total_match)
cat("B17 R data-pipeline checks: OK\n")
