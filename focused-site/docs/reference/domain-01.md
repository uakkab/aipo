# Domain 01 — Process Maturity
### Defined, documented & measurable workflows

> "Automation applied to an efficient operation will magnify the efficiency. Automation applied to an inefficient operation will magnify the inefficiency."
> — Bill Gates

## Why AI needs this

AI automates, augments, or optimizes processes. If a process is not documented — if people perform it differently each time, or it only exists in the heads of experienced employees — there is nothing concrete for AI to learn from or act on. Undefined processes produce AI that is either inconsistent, impossible to validate, or actively harmful to quality.

This is worth stating plainly: **this domain predates AI.** Every organization runs on operating knowledge — its processes, workflows, definitions, policies, and procedures. Maturing that knowledge from tacit to documented to practiced is work that has paid off for decades regardless of what technology touches it downstream. What AI changes is the cost of getting it wrong: an undefined process run by people degrades gracefully, because people fill the gaps. The same process automated fails at scale, silently, with confidence. AI doesn't add a new prerequisite — it removes the tolerance for skipping the old one.

## What to have in place

- **Key processes documented** — step-by-step, with decision points, inputs, and outputs clearly defined.
- **Process owners assigned** — each process has a named owner responsible for its quality and accuracy.
- **Performance baselines established** — current cycle time, error rate, or cost is known, so improvement can be measured.
- **Exception paths mapped** — edge cases and exception-handling logic are documented, not just the happy path.

These four items answer *what does "ready" look like*. They don't answer *how a process gets there*, or *what happens after it's documented*. That's what the rest of this page covers.

## The maturity ladder

A process does not go from undocumented to automated in one step. It moves through five states, and skipping one is the most common cause of automation failure — because automation freezes whatever state a process happens to be in when it's touched.

1. **Tacit** — the process lives in someone's head.
2. **Defined** — the four items above are true. This is the checklist's finish line.
3. **Practiced** — staff run the documented process manually long enough to build intuition for where it bends, and the definition gets corrected by real use.
4. **Supervised automation** — the process is automated (AI or otherwise) by interviewing the people who now hold that intuition; a human reviews every output.
5. **Autonomous** — the automation runs with limited oversight; humans audit samples and handle novel exceptions.

| | **Tacit** | **Defined** | **Practiced** | **Supervised automation** | **Autonomous** |
|---|---|---|---|---|---|
| **Knowledge lives in** | Individuals | Documents | Documents and habit | Documents, habit, and system logic | System logic; documents as reference |
| **Process definition** | Undocumented or happy-path only | Every step, branch, input, output, exception written down | Corrected by real use | Encoded in the automation's rules or prompts | Versioned; changes flow through the automation |
| **Execution** | Varies by person | Consistent on paper, not yet in practice | Consistent in practice; staff can predict outcomes | Machine executes, human reviews every output | Machine executes, human reviews exceptions and samples |
| **Exceptions** | Handled ad hoc, unrecorded | Listed | Catalogued from experience; frequency known | Routed to a human queue by rule | Mostly resolved automatically; novel ones escalated |
| **Ownership** | Whoever does it | Named owner | Owner plus practitioners | Owner plus automation maintainer | Owner accountable for outcomes; maintainer for uptime |
| **Human role** | Performer | Author | Performer and critic | Supervisor and trainer | Auditor |
| **Exit criterion** | Process chosen, owner named | Document survives review by someone who's never done the job | One full business cycle run as defined; exception list stable | Error rate at or below the manual baseline over an agreed period | Exception rate and outcomes stable; rollback path tested |

**Reading it:** each column is a gate, not a phase — a process sits at exactly one level and moves right only when its exit criterion is met. The row that gets skipped most often is **Practiced**: the temptation is to go straight from a finished document to automation, but the manual run is where the document meets reality and where staff discover exceptions the author never imagined. Skip it, and the "interview the people who hold the intuition" step in level 4 has no one to interview.

One clarification worth making explicit: this ladder is a maturity model for **process automation**, not for AI. AI doesn't appear as a level or a milestone because it isn't the subject — it's one possible tool for building the supervised-automation stage, the same way a script, a macro, or an integration platform might be. The ladder existed before AI and will outlast any particular AI tool.

## Existing frameworks this ladder is compatible with

Organizations don't need a new framework to satisfy Domain 01 — if one is already in use, it almost certainly maps onto the ladder above rather than competing with it:

- **CMMI** — the direct ancestor of this ladder's structure (Initial → Managed → Defined → Quantitatively Managed → Optimizing).
- **OMG's Business Process Maturity Model (BPMM)** — an open standard built specifically for business processes rather than software.
- **ISO 9001** — its "process approach" clause already requires documented, measured, continually improved processes; organizations certified to it are often further along this ladder than they realize.
- **ISO/IEC 33000** (successor to SPICE/15504) — the formal, audit-grade version, relevant if a regulator or enterprise client requires one.
- **Lean / Six Sigma (DMAIC)** — less a ladder, more a method for *how* a process moves from Defined to Practiced: define, measure, analyze, improve, control.
- **APQC Process Classification Framework** — a taxonomy, not a maturity model; useful before Level 1 if the organization doesn't yet have consistent names for its own processes.
- **ITIL** — the default for IT service management processes specifically (incident, change, request).

If any of these is already in place, use its existing documentation, ownership, and measurement artifacts to populate the checklist above rather than starting a parallel effort.

## Key artifacts

Process maps / SOPs · RACI charts · Process KPIs & baselines · Exception & escalation guides · Process owner register

*(Artifacts at Practiced and beyond: a change log showing how the manual-run period corrected the original document; at Supervised automation, the automation's rule/prompt definition itself, versioned alongside the SOP it was built from.)*

## Measurement addendum

The "performance baselines established" item above is easy to check as a box and hard to do well. Before any automation goes live, the target process needs measured values for cycle time, hands-on time, volume, error rate, and cost. After go-live, the same measures are tracked, alongside two new ones automation introduces: exception rate and exception resolution time. Organizations that skip the baseline end up arguing about whether the automation worked, and the argument gets settled by seniority rather than evidence.

## Exception-handling path addendum

"Exception paths mapped" on the live checklist means the exceptions are *documented*. A separate, later question is whether there's an operational path for them once a process reaches Supervised automation: where exceptions land, who picks them up, how quickly, and how the automation gets updated in response. An automation with a documented exception list but no live queue for those exceptions is an automation that drops things silently — the map exists, but nothing follows it.

## Common gap signals

Tribal knowledge is the primary process documentation · Different teams do the same task differently · No one can describe where a process starts and ends · Outcomes are measured, but the process producing them is not.

*(A gap signal specific to skipping levels: the organization has automated a process nobody ever ran manually as documented — the automation and the SOP describe two different processes, and no one has noticed yet.)*

---

> "There is nothing so useless as doing efficiently that which should not be done at all."
> — Peter Drucker
