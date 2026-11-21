# Content Model (Initial Contract)

This is the conceptual contract for course and assessment content. It will be converted into executable TypeScript schemas in the first frontend milestone.

## Common metadata

- `id`: stable slug, never reused for a different concept;
- `version`: immutable content version;
- `locale`: BCP 47 language tag, initially `fr-BE` or `fr-FR` as appropriate;
- `title` and `summary`;
- `status`: planned, draft, reviewed, tested, published or retired;
- `level`, `prerequisites`, `objectives`, `skills`;
- `estimatedMinutes`;
- `references`;
- `scopeNotes`.

## Lesson

A lesson is a sequence of typed blocks rather than one unstructured HTML string. Candidate block kinds:
- prose;
- definition;
- theorem;
- proof;
- worked example;
- warning / misconception;
- equation;
- figure with alt text;
- code example;
- exercise link;
- reference.

Math expressions must be rendered accessibly and must retain readable source representations.

## Question

A question references a specific lesson objective and skill. It has a declared interaction type, prompt, response schema, difficulty, expected time, scoring specification and feedback mapping. Answer keys and privileged scoring details are protected resources.

## Exam

An exam references immutable question versions. It defines duration, maximum score, selection strategy, section structure, attempt policy, allowed materials and correction release.

## Versioning

Changing a question's answer, marking scheme or meaning creates a new version. Existing attempts retain the exact version originally served. Never mutate historical assessment meaning in place.
