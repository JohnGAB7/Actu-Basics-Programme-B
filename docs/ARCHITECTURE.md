# Product and Technical Architecture

## 1. Product boundary

Programme B is an independent application. Course authoring files remain versioned in the curriculum source repository; this repository owns the interactive learner platform and its presentation contracts.

The application must distinguish:
- **catalogue content**: what exists in the curriculum;
- **published learning content**: lessons actually available to learners;
- **practice content**: formative questions with feedback;
- **examination content**: controlled, versioned assessment definitions;
- **learner records**: private progress and attempts.

A catalogue entry is not evidence that a lesson or exam is finished.

## 2. Conceptual layers

```text
Learner / Instructor
        |
Accessible responsive web application
        |
Application services
  |             |                 |
Catalogue   Learning progress   Assessment orchestration
  |             |                 |
Content API / typed content contracts
        |
Secure server boundary
  |             |                 |
Identity     Database        Grading and audit
        |
Versioned source curriculum and reviewed question banks
```

The interface must not be treated as a security boundary. Anything shipped to a public browser can be inspected.

## 3. Frontend modules

Recommended bounded modules:
- `app-shell`: routing, navigation, layouts, global error boundaries;
- `catalogue`: programmes, blocks, modules and publication statuses;
- `lessons`: lesson rendering, references, worked examples and callouts;
- `practice`: formative activities and feedback;
- `assessment`: instructions, attempt lifecycle, question navigation, timer, autosave state, submission and results;
- `progress`: learner-facing milestones and skill maps;
- `authoring`: internal preview and content validation (restricted);
- `design-system`: typography, spacing, color tokens, components and accessibility primitives;
- `i18n`: locale-aware content and navigation.

## 4. Domain model

Core entities:
- Programme
- Block
- Module
- Lesson
- LearningObjective
- Skill
- Question
- QuestionVersion
- ExamDefinition
- ExamAttempt
- AttemptAnswer
- AttemptEvent
- AssessmentResult
- LearnerProfile
- ProgressRecord
- ContentReview

Use stable IDs, explicit versions and timestamps. Exam attempts must pin the exact exam-definition and question versions used at start time.

## 5. Assessment lifecycle

```text
draft -> reviewed -> published -> retired
                     |
                     v
created -> in_progress -> submitted -> graded -> result_released
                  |            |
                  |            +-> manual_review (where required)
                  +-> interrupted -> resumed (policy-controlled)
```

A submitted attempt is immutable. Corrections are appended as audited events, not silent edits.

## 6. Security and privacy

Before enabling accounts or real exams:
- authenticate learners on the server;
- authorize each read and write against the learner identity;
- keep answer keys, grading rules and exam selection logic server-side;
- prevent one learner from reading another learner's records;
- validate all inputs server-side;
- apply rate limits and abuse protection;
- use secure session and cookie settings;
- record minimal audit events;
- define retention, export and deletion procedures;
- avoid collecting sensitive information unless strictly necessary.

A client-side timer can improve the experience but cannot be trusted as the authoritative clock. The server must record start and submission times and evaluate policy using server time.

No security claim (anti-cheat, identity assurance, invigilation) is allowed without a dedicated tested implementation and explicit policy.

## 7. Content contracts

All content should be typed and validated at build time. Each lesson and question must include:
- stable identifier and version;
- language;
- learning objectives / skill tags;
- prerequisites;
- difficulty and estimated time;
- editorial status;
- references and scope limitations.

Assessment items additionally require:
- response type;
- prompt and accessible media descriptions;
- correct answer in a protected server-side source;
- scoring method and partial-credit policy;
- numerical tolerance / units where applicable;
- rationale and misconception tags;
- review metadata.

## 8. Deployment evolution

### Phase 1 — static frontend
A deployable responsive catalogue and lesson experience using non-sensitive public content. No claims of persistent learner records or secure exams.

### Phase 2 — assessment prototype
A clearly labelled practice environment with sample questions, deterministic local demonstrations and no high-stakes claims. This is useful to test usability and pedagogy.

### Phase 3 — secure learning platform
Server-backed identity, database, authorization, attempt persistence, server-side grading, audit and privacy controls. Requires a selected and configured backend.

### Phase 4 — operational readiness
Backups, monitoring, migrations, error reporting, security review, accessibility review, retention policy and deployment runbooks.

## 9. Architectural decisions

- Keep platform code separate from source curriculum and the existing ACTU-BASICS LAB.
- Use TypeScript end-to-end where practical.
- Use reusable accessible design primitives rather than page-specific UI duplication.
- Keep content data separate from visual components.
- Use a server-authoritative assessment model.
- Do not couple the application to a single hosting provider before requirements and costs are understood.
- Choose the backend only after identity, privacy, data ownership and hosting needs are specified.
