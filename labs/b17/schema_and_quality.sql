-- B17 teaching schema: synthetic insurance portfolio.
-- PostgreSQL-flavoured SQL; adapt identity, date and upsert syntax per engine.
CREATE TABLE policy (
  policy_id BIGINT PRIMARY KEY,
  product_code TEXT NOT NULL,
  effective_date DATE NOT NULL,
  expiry_date DATE,
  CHECK (expiry_date IS NULL OR expiry_date >= effective_date)
);

CREATE TABLE claim (
  claim_id BIGINT PRIMARY KEY,
  policy_id BIGINT NOT NULL REFERENCES policy(policy_id),
  occurrence_date DATE NOT NULL,
  reported_at TIMESTAMPTZ NOT NULL,
  paid_amount NUMERIC(14, 2) NOT NULL CHECK (paid_amount >= 0)
);

-- Cardinality check: one row per claim after joining policy.
SELECT c.claim_id, COUNT(*) AS joined_rows
FROM claim AS c
JOIN policy AS p USING (policy_id)
GROUP BY c.claim_id
HAVING COUNT(*) <> 1;

-- Orphan detection for a staging table before enforcing the FK.
SELECT s.*
FROM staging_claim AS s
LEFT JOIN policy AS p ON p.policy_id = s.policy_id
WHERE p.policy_id IS NULL;

-- Reconciliation by month: compare staging and curated counts/totals.
SELECT date_trunc('month', occurrence_date) AS month,
       COUNT(*) AS claim_count,
       SUM(paid_amount) AS paid_total
FROM claim
GROUP BY 1
ORDER BY 1;

-- Transaction pattern: validate and merge a batch atomically.
BEGIN;
-- INSERT ... ON CONFLICT (claim_id) DO UPDATE ...;
-- Run row-count, key and amount reconciliations before COMMIT.
COMMIT;
