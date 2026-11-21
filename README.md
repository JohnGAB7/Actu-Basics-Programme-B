# Actu-Basics Programme B

**A rigorous, open and interactive learning environment for mathematics, statistics and quantitative sciences.**

Programme B is a standalone educational platform. It is deliberately separated from the existing ACTU-BASICS LAB website and from the source curriculum repository.

## Product vision

Build a learning environment that combines university-level content with a carefully designed learner experience:

- structured learning paths from foundations to advanced quantitative topics;
- lessons with intuition, formal definitions, proofs, worked examples and applications;
- exercises with progressive feedback and complete solutions;
- online examinations with timers, question navigation, autosave and transparent grading;
- diagnostic assessments, remediation paths and mastery tracking;
- a bilingual-ready architecture (French first; English supported by design);
- accessible, responsive and testable user interfaces.

## Repository boundaries

| Repository | Responsibility |
| --- | --- |
| [Actu-Basics-Lab](https://github.com/JohnGAB7/Actu-Basics-Lab) | Existing ACTU-BASICS public learning laboratory and its current experiences |
| [Actu-Basics-Lab — Programme B branch](https://github.com/JohnGAB7/Actu-Basics-Lab/tree/programme-b/bloc-2-algebre-lineaire) | Source material, courses, exercise banks and software workshops for Programme B |
| **Actu-Basics-Programme-B** | Standalone interactive platform: learner interface, lessons, assessments, progress and future backend |

The existing repositories are not overwritten or merged as part of this project.

## Product principles

1. **Learning before scoring.** Assessments support mastery and diagnosis; they do not replace teaching.
2. **Mathematical integrity.** Every assessed item has a verified answer, scoring rule, skill tags and solution rationale.
3. **Assessment integrity.** The learner-facing application must not ship answer keys or privileged grading logic in public bundles.
4. **Privacy by design.** Collect only data required for learning. Never expose learner records publicly.
5. **Accessibility.** Keyboard operation, semantic HTML, contrast, focus visibility, labels and responsive layouts are release criteria.
6. **Honest status.** Planned, drafted, reviewed, tested and published are distinct states.
7. **Source traceability.** Course content retains references, scope notes and editorial status.

## Initial product scope

### Learner experience
- public programme overview and catalogue;
- guided learning paths and lesson pages;
- course progress indicators;
- practice activities;
- exam instructions, attempt flow, timer, autosave and submission confirmation;
- results, corrections (when authorized) and skill-level feedback.

### Assessment engine
- multiple-choice and multi-select questions;
- numeric answers with explicit tolerances and units;
- short structured answers where manual review is appropriate;
- randomized question variants from controlled item banks;
- deterministic, versioned scoring rules;
- time limits, attempt limits and exam windows as configuration;
- accessibility and interruption handling.

### Authoring and governance
- typed question schemas and validation;
- metadata for topic, difficulty, learning objectives, prerequisites and source;
- review workflow before publication;
- versioned exam definitions and immutable submitted attempts.

## Architecture direction

The first milestone is a production-quality frontend foundation, not a premature claim of a complete learning-management system. The recommended implementation is a modern TypeScript application with reusable components, typed content contracts, automated tests and a clearly isolated persistence/authentication boundary.

A secure backend (authentication, database, server-side grading and learner records) must be introduced before real personal accounts or high-stakes examinations are enabled. Public static hosting alone is not sufficient for secure exam delivery.

See:
- [Product and technical architecture](docs/ARCHITECTURE.md)
- [Assessment engine specification](docs/ASSESSMENT-ENGINE.md)
- [Pedagogical and editorial standards](docs/EDITORIAL-STANDARDS.md)
- [Roadmap](docs/ROADMAP.md)

## Development status

**Foundation / specification stage.** This repository was created as the dedicated home of the Programme B platform. A working exam system, secure user accounts, persistent progress and public deployment must not be considered available until implemented and tested.

## Local development

The application scaffold and exact toolchain will be documented here once the first runnable frontend milestone is committed. Do not assume backend credentials or production services exist.

## Quality gates

Every feature must pass:
- type checking and linting;
- unit tests for domain logic;
- integration tests for critical flows;
- browser tests for learner journeys;
- accessibility checks;
- build and deployment smoke tests.

No exam may be labelled official or validated until its content, answer key, scoring, timing, accessibility and delivery workflow have been reviewed.
