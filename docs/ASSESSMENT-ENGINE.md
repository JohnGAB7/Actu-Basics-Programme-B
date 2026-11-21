# Assessment Engine — Product Specification

## Purpose

Provide reliable practice and examination experiences, including a way for the owner to sit the curriculum's exams and receive structured feedback. The engine must support many learners and distinguish learning feedback from summative decisions.

## Assessment types

1. Diagnostic: identifies prior knowledge and gaps; usually no pass/fail.
2. Formative practice: unlimited or policy-limited practice with immediate explanations.
3. Mock examination: simulates the official format, with a clear "practice" label.
4. Validated examination: controlled assessment with reviewed content, declared rules and a secure server workflow.
5. Integrative assessment: multi-topic tasks or projects, potentially requiring rubric-based review.

## Item types

- single choice;
- multiple response;
- numeric response with tolerance and units;
- algebraic / symbolic response (only when a suitable equivalence evaluator has been validated);
- matching or ordering;
- short written response requiring human review;
- case study with several linked questions.

Do not auto-grade free text using opaque heuristics and present the result as mathematically authoritative.

## Question metadata

Every item must have:
- `id`, `version`, `language`;
- prompt and optional accessible assets;
- response type and schema;
- topic, learning objective and skill tags;
- difficulty and expected time;
- answer key and rationale in protected source;
- scoring function and partial-credit rules;
- misconceptions / feedback mapping;
- provenance, references and review status.

## Exam definition

An exam version defines:
- title, purpose, block and learning objectives;
- duration and maximum score;
- item selection plan and fixed/randomized policy;
- per-question or section weights;
- allowed materials and calculator policy;
- navigation and answer-change policy;
- attempt count and eligibility;
- time policy, including interruptions;
- submission policy and late behavior;
- correction release policy;
- pass threshold, if justified by a documented standard-setting process.

A threshold must never be presented as a validated credential solely because a numeric value was chosen.

## Attempt lifecycle

1. Show candidate instructions and policy before starting.
2. Confirm learner consent to the attempt rules.
3. Server creates an immutable attempt snapshot containing exact exam and question versions.
4. Server establishes start time and expiry time.
5. Client autosaves responses through authenticated requests; show explicit saved / saving / offline states.
6. On refresh or connection loss, recover the attempt subject to the declared policy.
7. Submission is idempotent and records server receipt time.
8. Server grades deterministic item types; uncertain/manual items enter review.
9. Release results according to exam policy.
10. Preserve an audit trail for corrections and appeals.

## Timer and interruption policy

- Display a timer based on server-issued start/expiry timestamps.
- Client countdown is a visualization, not the authority.
- Define what happens on disconnection, reload, browser closure or device sleep.
- Avoid silent loss of answers. Communicate synchronization state visibly.
- Never extend an exam automatically without a recorded policy event.

## Scoring

- All weights must be explicit and sum to the declared maximum.
- Partial credit is allowed only where its rubric is explicit.
- Numeric answers specify absolute/relative tolerance and unit conversion policy.
- Rounding occurs only at defined stages.
- Provide item-level reasoning and skill-level aggregation.
- Negative marking, if any, must be announced before the attempt.
- Keep raw points and normalized percentages distinct.

## Results

A result should communicate:
- points earned / maximum;
- percentage;
- pass / not passed / not applicable, with threshold provenance;
- skill-level strengths and gaps;
- questions requiring manual review;
- correction release status;
- next recommended practice.

## Integrity and privacy

Never expose hidden answers or grading algorithms in client bundles. Learner answers and results are private. An exam attempt should be immutable after submission; amendments must be auditable.

Browser lock-down, webcam proctoring and anti-cheat systems are not included in the initial scope. Do not imply they exist.

## Publication checklist

- [ ] Mathematical solution independently checked.
- [ ] Ambiguity and alternate valid answers reviewed.
- [ ] Marking scheme and partial credit tested.
- [ ] Difficulty and expected time estimated.
- [ ] Accessibility of prompt and controls reviewed.
- [ ] Item tagged to objectives and misconceptions.
- [ ] Answer key protected from public distribution.
- [ ] Exam instructions and policies complete.
- [ ] Browser, autosave, interruption and submission tests passed.
- [ ] Result and correction release behavior verified.
