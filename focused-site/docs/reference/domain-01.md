---
title: "Domain 01: Process Maturity"
sidebar_label: "Domain 01: Process Maturity"
---
# Domain 01: Process Maturity

Foundation Layer - Domain 01

Process maturity moves operating knowledge from tacit know-how to reliable automation. Before AI can safely automate work, the process must be documented, practiced, and measured.

This page is the canonical home for the Operating Knowledge Maturity Matrix.

Scope: this page covers automation readiness. AI for autonomous decision-making is out of scope.

## Why Process Maturity Matters

### Core Insight

> Automation does not improve a process. It fixes it in place and runs it faster.

If a process is undefined, automation codifies whichever version an implementer observed. If a process is inconsistent, automation silently chooses one variant and retires the rest. If the process depends on people correcting issues informally, automation removes those corrections.

### The Four-State Ladder

Operating knowledge should move through four states, one process at a time:

1. Define it down to steps and exceptions.
2. Run it manually as-defined to expose edge cases.
3. Automate it under supervision.
4. Run it autonomously with bounded oversight.

Skipping a level is the most common cause of failed automation.

## Readiness Gate: 6 Domains Must Pass

| Domain | What Must Be In Place | Gate Criteria |
| --- | --- | --- |
| Process | Process documented, stable for one cycle, measurable, named owner | Documented, stable, volume and cost known, single owner |
| Data | Source systems known, machine accessible, quality measured, data classified | Machine-accessible, source of truth, quality measured, classified |
| Structure | Outcome-based roles, governance decisions, exception routing | Roles framed by outcomes, governance decided, exceptions routed |
| Technical | API access, scoped identities, logging, non-production environment | APIs available, identity and logging in place, test environment |
| People | Baseline AI literacy, psychological safety, change capacity | Literacy delivered, reporting culture established |
| Measurement | Baseline and post-automation metrics defined | Pre-automation baseline captured |

## L0-L4 Operating Knowledge Maturity Matrix

Once a process passes the readiness gate, it progresses through five levels. A process sits at one level and moves right only when its exit criterion is met.

| Dimension | L0 Tacit | L1 Defined | L2 Practiced | L3 Supervised | L4 Autonomous |
| --- | --- | --- | --- | --- | --- |
| Knowledge | In individuals | In documents | Documents and habit | Documents, habit, and system | In system (docs as reference) |
| Definition | Undocumented | Every step and exception defined | Corrected by real use | Encoded in rules | Versioned in automation |
| Execution | Varies by person | Consistent on paper | Consistent in practice | Machine runs, human reviews all | Machine runs, human samples and exceptions |
| Exceptions | Ad hoc | Listed | Cataloged, frequency known | Routed to human queue | Auto-resolved, novel escalated |
| Data | Wherever | Sources identified | Quality issues known | Machine-readable source of truth | Monitored for drift |
| Exit Criterion | Owner named | Doc survives peer review | One cycle as-defined, exceptions stable | Error rate at or below baseline | Outcomes stable, rollback tested |

### Level Definitions

#### L0: Tacit

The process exists only in people's heads. Output depends on the performer.

Exit: name an owner and document the process.

#### L1: Defined

Steps, branches, inputs, outputs, and exceptions are documented.

Exit: the document survives review by someone who has never run the process.

#### L2: Practiced

The process is run as documented for one full cycle. Exceptions are cataloged and the definition is corrected by real use.

Exit: one full cycle run as-defined and exception list is stable.

#### L3: Supervised

The process is encoded in automation. The machine executes; humans review every output and handle routed exceptions.

Exit: error rate is at or below manual baseline for 2-4 weeks.

#### L4: Autonomous

The machine executes with limited oversight. Humans review samples and novel exceptions.

Exit: outcomes and exception rate remain stable, and rollback is tested.

## Domain 01 Readiness Checklist

Domain 01 is ready when all six prerequisite domains pass and the following four controls are true.

| Checklist Item | What Good Looks Like | Minimum Level |
| --- | --- | --- |
| Key processes documented | Step-by-step SOPs include decision points, inputs, outputs, and exceptions | L1 Defined |
| Process owners assigned | Each process has one named accountable owner | L1 Defined |
| Performance baselines established | Cycle time, error rate, cost, and hands-on time are known | L2 Practiced |
| Exception paths mapped | Missing, malformed, contradictory, and edge-case paths are documented | L2 Practiced |

## Common Gap Signals

- Tribal knowledge is the primary process documentation.
- Different teams perform the same task differently.
- No one can clearly define where a process starts and ends.
- Outcomes are measured, but process behavior is not.
- Teams cannot define what a bad exception looks like.

## Anti-Patterns and Fixes

1. Automating to avoid defining
Fix: define the process first. Automation is step three, not step one.

2. Starting with the hardest process
Fix: start with a boring and bounded process to learn failure modes early.

3. Skipping L2 (manual run)
Fix: run one full cycle manually as-written, then refine before automating.

4. Treating readiness as one-time
Fix: re-run readiness for each automation initiative.

5. Procuring tools before process definition
Fix: define, practice, and measure first; then select tools.

6. Letting vendors set exception thresholds
Fix: keep exception escalation thresholds as an internal governance decision.

## Next Steps

1. Self-assess using the [Foundation Readiness Check](/docs/reference/foundation-check).
2. Verify that all seven prerequisite domains pass in [Pre-Flight Prerequisites](/docs/foundation/prerequisites).
3. Place each target process on L0-L4.
4. Plan only the next-level exit criterion, not a full end-state leap.
5. Work the lowest row first: across the matrix, which row has the biggest gap?
6. When ready to execute, follow the [Implementation Guide](/docs/implementation/guide).

> "There is nothing so useless as doing efficiently that which should not be done at all." — Peter Drucker

Domain 01 exists to make sure you're automating something worth amplifying — not scaling bad practices at speed.
