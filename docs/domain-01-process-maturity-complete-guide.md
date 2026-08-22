# Domain 01: Process Maturity
## A Complete Guide to Documenting and Evolving Workflows for AI Automation

---

## Overview: Three Levels of Maturity

This guide addresses **Process Maturity** — the first and foundational domain for any AI transformation. It answers three sequential questions:

1. **Are we ready?** (The Readiness Gate — Part A)
2. **Where are we?** (The Maturity Framework — Part B)
3. **What do we track?** (Quick Reference — Part C)

The three parts build on each other. You assess readiness first, then use the maturity levels to understand how far you've come and what comes next.

---

# PART A: The Process Maturity Readiness Gate
## What Must Be True Before You Can Mature a Process

### The Governing Principle

**Automation does not improve a process. It fixes it in place and runs it faster.**

If a process is undefined, automation will automate whichever version of it the implementer happened to observe. If a process is inconsistent, automation will pick one variant and silently retire the others. If a process depends on a person quietly correcting bad inputs, automation removes that person and the corrections with them. If the process is wrong, automation produces wrong outcomes at scale, with confidence.

This is not new. Michael Hammer warned in 1990 about "paving the cow paths," and Drucker's observation that "there is nothing so useless as doing efficiently that which should not be done at all" predates both. What is new is that AI lowers the cost of automating something to near zero, which means organizations now automate things they would never have bothered to formalize before. **The prerequisite work therefore matters more in the AI era, not less**, because the barrier that used to force the thinking has been removed.

The prerequisites below are the conditions under which automation amplifies something worth amplifying.

---

## Section 1: Process Pre-requisites

Before any process can be automated, it must first exist as an artifact that can be executed without the person who designed it. Here are the four mandatory conditions:

### 1.1 The Process Exists as an Artifact, Not as a Person

**The test:** If the one person who "knows how this works" left tomorrow, could someone else run it from documentation alone?

Most subject-matter expert (SME) processes fail this test. They exist as tacit knowledge, habits, and a shared sense of "how we do things." That is fine for a human team (humans fill gaps with judgment) and fatal for automation (the system fills gaps with nothing, or with hallucination).

**A process is ready when the following are written down:**

- **Trigger**: What starts it, and what does *not*
- **Inputs**: What it consumes, in what form, from where
- **Steps**: The sequence, including branches and decision points
- **Decisions within the process**: Every point where a human currently says "it depends," and what it depends on
- **Outputs**: What it produces, for whom, in what form
- **Exceptions**: What happens when inputs are missing, malformed, late, or contradictory

The last two items are where nearly all the value lies. A process description that covers only the happy path is a description of perhaps 70% of the volume and 10% of the difficulty.

### 1.2 The Process is Stable

A process that changed three times last quarter is not a candidate for automation; it is a candidate for a design conversation. Automating it locks in the current draft and raises the cost of the fourth change.

**Stability here means:** The process has run in its current form long enough that the exceptions are known and the edge cases have surfaced. For most operational processes that is at least one full business cycle (often a quarter, sometimes a year for anything seasonal).

### 1.3 The Process Has a Known Volume and a Known Cost

You cannot prioritize automation candidates without knowing how often the process runs and what it costs to run manually. This sounds obvious and is routinely skipped. Organizations automate the process that was most annoying to the most senior person in the room, rather than the one with the highest volume × cost × error rate.

**Minimum data per candidate process:**
- Runs per month
- Hands-on time per run
- Who performs it
- Error or rework rate
- What an error costs downstream

### 1.4 Ownership is Singular

Every process that will be automated needs one named owner who is accountable for its definition, its exceptions, and its outcomes. Not a committee, not a department. A person.

This matters because automation changes the failure mode. A manual process that breaks is noticed by the person doing it. An automated process that breaks may run incorrectly for weeks before anyone looks. Someone has to be the person who looks.

---

## Section 2: Data Pre-requisites

AI automation is data-in, data-out. The quality ceiling of the automation is the quality floor of the data it touches.

### 2.1 You Know Where the Data Is

An inventory of the systems that hold the data each candidate process consumes and produces. Not an enterprise data catalogue (SMEs do not need one); a list. For each system: what it holds, who owns it, how it is accessed, whether it is the source of truth or a copy.

Most organizations discover at this stage that the "same" data lives in three places with three slightly different values. That discovery is the prerequisite work functioning as intended.

### 2.2 Data Has a Defined Source of Truth

For every data element the automation depends on, there is one system that wins when systems disagree. Automation that reads from a copy will eventually act on stale data, and the failure will be invisible until it is expensive.

### 2.3 Data is Accessible by Machine, Not Only by Person

A process whose inputs arrive as PDF attachments, screenshots, or phone calls is not automation-ready regardless of how well it is documented. The inputs need to be available through an API, a structured export, a database, or at minimum a consistent machine-readable format. 

**"A person copies it from the portal into the spreadsheet" is itself a step to be eliminated before the downstream process is touched.**

### 2.4 Data Quality is Measured, Not Assumed

Completeness, accuracy, timeliness, and consistency — for the specific fields the automation will consume. Not for everything. A single sample audit of the last 100 records is usually enough to learn whether the data is 98% clean or 70% clean, and those two numbers lead to entirely different automation designs.

### 2.5 Data Classification Exists, at Least Minimally

Before any data is routed to an AI system (and especially to a third-party model), the organization needs to know what it is allowed to send. This requires, at minimum, a three-tier classification (public / internal / restricted) applied to the data each candidate process touches. Personal information, financial data, and anything under contractual or regulatory confidentiality obligations need to be identified before, not after, the first pilot.

This is the point where privacy law intersects with automation readiness. In Canadian and Quebec contexts, PIPEDA and Law 25 impose obligations around automated processing of personal information, cross-border transfer, and privacy impact assessment. Organizations elsewhere face GDPR or sectoral equivalents. The prerequisite is not legal compliance in full; it is knowing which data is in scope so compliance can be designed in.

---

## Section 3: Structural Pre-requisites

### 3.1 Roles are Defined in Terms of Outcomes, Not Activities

When a role is described as "processes invoices," automating invoice processing eliminates the role and creates a conflict. When a role is described as "ensures suppliers are paid accurately and on time," automating invoice processing changes the role's tools and leaves its purpose intact.

This is not a semantic exercise. It determines whether the people closest to the process see automation as a threat to be quietly resisted or as a capability to be shaped. The people closest to the process are also the only ones who know the exceptions. Losing their cooperation means losing the exception list.

### 3.2 Someone Owns the Interface Between Technology and Operations

In a large enterprise this is a function. In an SME it is often one person, frequently the CTO or an operations lead, who understands both what the business does and what the systems can do. The prerequisite is that this person exists, has the mandate, and is not already at capacity.

Automation projects fail in SMEs more often from absence of this bridging role than from any technical cause.

### 3.3 Decision Rights for the Automation Itself are Clear

Who can approve automating a process? Who can pause or roll back an automation that is misbehaving? Who decides the threshold at which an exception escapes the automation and reaches a human? These need to be settled before the first automation goes live, because the first incident will not wait for a governance meeting.

### 3.4 An Exception-Handling Path Exists

Every automation produces exceptions. The prerequisite is a defined path: where exceptions land, who picks them up, how quickly, and how the automation learns (or is updated) from them. An automation with no exception queue is an automation that drops things silently.

---

## Section 4: Technical Pre-requisites

These are deliberately minimal. AI automation does not require a modern stack. It requires a *reachable* one.

- **Systems expose interfaces.** The systems in scope can be read from and written to programmatically. If the core system of record is a desktop application with no API, the prerequisite is either an integration layer or a plan to replace it, and that decision precedes any AI work.

- **Identity and access are managed.** Automations run as identities. Those identities need scoped permissions, audit trails, and a revocation path. An automation running under a shared admin account is a security incident waiting for a date.

- **Logging exists.** Every automated action is recorded with enough context to reconstruct what happened and why. This is the minimum for debugging, for audit, and for the eventual conversation with a regulator or a customer.

- **Environments are separated.** A place to test automation that is not production. In an SME this may be a sandbox tenant or a copy of the database; it does not need to be elaborate, but it needs to exist.

- **Someone can read the output.** Technical capacity in-house or on retainer to understand what the automation did, fix it when it breaks, and modify it when the process changes. Vendor dependency for every change is a structural fragility, not a prerequisite failure, but it should be a conscious choice.

---

## Section 5: People Pre-requisites

### 5.1 Baseline Literacy, Not Expertise

The people who will work alongside automations need to understand what the systems can and cannot do, in concrete terms: that they produce plausible output rather than verified output, that they fail differently from deterministic software, and that "the system did it" is not an acceptable explanation. This is an afternoon of education, not a certification program.

### 5.2 Psychological Safety Around Reporting Problems

Automations fail in ways that are embarrassing to report: the system sent a wrong email to a client, approved something it should not have, misread a document. If the organizational culture punishes the messenger, these failures go unreported and compound. The prerequisite is an established norm (and evidence that it is real) that surfacing a problem is rewarded.

### 5.3 Change Capacity

An organization in the middle of a merger, a system migration, a leadership transition, or a financial crisis does not have capacity to absorb process change, regardless of how good the automation is. This is a timing prerequisite. The honest question is whether the organization can give the initiative sustained attention for the duration it needs.

---

## Section 6: Measurement Pre-requisites

You cannot demonstrate that automation improved anything without a baseline.

Before any automation goes live, the target process needs measured values for:
- **Cycle time** — how long does a process instance take?
- **Hands-on time** — how much active human work is involved?
- **Volume** — how many instances per period?
- **Error rate** — how often is manual rework needed?
- **Cost** — what does it cost to run manually?

After go-live, the same measures are tracked, alongside the new measures that automation introduces:
- **Exception rate** — what % of runs needed human intervention?
- **Exception resolution time** — how quickly are exceptions cleared?
- **Automation uptime** — what % of the time is the automation working?

Organizations that skip the baseline end up arguing about whether the automation worked, and the argument is settled by whoever has the most seniority rather than by evidence.

---

## The Readiness Gate: Is This Process Ready?

A process is ready for AI automation when **every item** below is true. A "mostly" on any of them is a "no" for that process, and the gap is the next piece of work.

| Domain | Gate Condition |
|--------|---|
| **Process** | Documented including branches and exceptions; stable for at least one cycle; volume and cost known; one named owner |
| **Data** | Inputs machine-accessible; source of truth defined; quality measured on a sample; classification applied |
| **Structure** | Affected roles framed by outcome; bridging role staffed with capacity; decision rights for pause/rollback settled; exception path defined |
| **Technical** | Systems reachable programmatically; automation identity scoped and audited; logging in place; non-production environment exists |
| **People** | Baseline literacy delivered; reporting norm established; no competing organizational crisis |
| **Measurement** | Pre-automation baseline captured |

---

## Anti-patterns to Recognize and Avoid

- **Automating to avoid defining.** "We'll let the AI figure out the process." The AI will figure out *a* process. It will not be yours, and you will not know what it is.

- **Starting with the hardest process.** The one with the most exceptions, the most stakeholders, the least documentation. Start with the boring one; the organization needs to learn how automation fails before it can afford an interesting failure.

- **Treating readiness as a one-time assessment.** Every prerequisite decays. Processes drift, data degrades, owners leave. The gate is re-run for each new automation, not passed once.

- **Confusing tool procurement with readiness.** Buying the platform before the process is defined produces a platform looking for a use case. The tooling decision is downstream of the prerequisites, not upstream.

- **Letting the vendor define the exception threshold.** The point at which an automation should hand off to a human is a business decision, shaped by the cost of errors in your context. Defaults are set for the vendor's typical customer, who is not you.

---

# PART B: The Process Maturity Framework
## The L0-L4 Model: How Processes Evolve from Tacit to Autonomous

### The Foundation Principle

Every organization runs on **operating knowledge**: its processes, workflows, definitions, policies, and procedures. Most of it lives in people's heads.

**Maturing that knowledge** — moving it from heads to documents to practiced habit to automated systems — is work that predates AI by decades. The Capability Maturity Model formalized it in the 1980s. Organizations that do it run better whether or not they ever automate anything: fewer errors, faster onboarding, less dependence on individuals, and the ability to change a process deliberately instead of by accident.

AI changes one thing: **the stakes**. An undefined process run by people degrades gracefully, because people fill the gaps. The same process run by a machine fails at scale, silently, with confidence. AI does not add a new prerequisite. It makes the old one unforgiving.

---

## The Four-State Ladder

One process at a time, operating knowledge moves through four distinct states:

1. **Define it** down to every detail, including the exceptions.
2. **Run it manually** as defined, so staff build intuition for where it bends.
3. **Automate it under supervision**, by interviewing the people who hold that intuition.
4. **Let it run autonomously** with limited oversight.

**Skipping a level is the most common cause of failed automation.** Automation freezes whatever state a process is in. If that state is tacit or untested, the automation inherits the gaps.

---

## The L0-L4 Maturity Matrix

This matrix describes the detailed progression. Each column is a gate that must be passed in order; a process moves right only when the exit criterion is met. Each row describes an aspect that must mature together. A process that is L3 on execution but L1 on data will fail, and the data row tells you where.

| | **L0 Tacit** | **L1 Defined** | **L2 Practiced** | **L3 Supervised Automation** | **L4 Autonomous** |
|---|---|---|---|---|---|
| **Where the knowledge lives** | In individuals | In documents | In documents and team habit | In documents, habit, and system logic | In system logic, with documents as reference |
| **Process definition** | Undocumented or happy-path only | Every step, branch, input, output, and exception written down | Definition corrected by real use | Definition encoded in automation rules/prompts | Definition versioned; changes flow through the automation |
| **Execution** | Varies by person | Consistent on paper, not yet in practice | Consistent in practice; staff can predict outcomes | Machine executes, human reviews every output | Machine executes, human reviews exceptions and samples |
| **Exceptions** | Handled ad hoc, unrecorded | Listed | Catalogued from experience; frequency known | Routed to a human queue by rule | Most resolved automatically; novel ones escalated |
| **Data** | Wherever it happens to be | Inputs and sources identified | Quality issues surfaced by manual runs | Machine-readable, source of truth fixed, classified | Monitored for drift |
| **Ownership** | Whoever does it | Named owner | Owner plus practitioners | Owner plus automation maintainer | Owner accountable for outcomes; maintainer for uptime |
| **Measurement** | None | Volume and cost estimated | Baseline measured (cycle time, errors, cost) | Automation vs. baseline compared | Exception rate and drift tracked |
| **Human role** | Performer | Author | Performer and critic | Supervisor and trainer | Auditor |
| **Exit criterion** | Process chosen and owner named | Document survives review by someone who has never done the job | One full business cycle run as defined; exception list stable | Error rate at or below manual baseline over an agreed period | Exception rate and outcomes stable; rollback path tested |

---

### Reading the Matrix: Key Principles

#### **Columns are gates, not phases.**
A process sits at exactly one level at any given time. It moves right only when the exit criterion is met. You cannot claim to be "mostly L2" — you are either at L2 or you are not.

#### **Rows are the things that must mature together.**
A process that is L3 on execution but L1 on data will fail. The data row tells you the bottleneck. Similarly, ownership that is still L1 while execution is L3 means the process will break down the moment the original author leaves.

#### **L2 is the level everyone skips.**
The temptation is to go straight from a finished document to automation. The manual run is where the document meets reality: it is how staff discover the exceptions that the author never imagined, and it is what makes the L3 interviews worth conducting. Organizations that skip L2 discover this mistake expensively.

#### **L4 is not "no humans."**
It is humans at the edges: auditing samples, handling novel exceptions, deciding when the process itself should change. The goal is not to remove humans from the process — it is to remove tedium and replace manual execution with judgment.

---

### Detailed Level Descriptions

#### **L0 — Tacit: The Individual Performer**

**Characteristics:**
- Process exists only in people's heads
- How it is done varies based on who does it and their experience
- Output quality depends entirely on the performer
- Exceptions are handled ad hoc and often not recorded

**Why you're here:** This is where every brand-new process starts, and where processes remain that have never been formalized.

**How to get out:** Name a process owner. Have them document it. Move to L1.

---

#### **L1 — Defined: The Documented Process**

**Characteristics:**
- Every step, branch, input, output, and exception is written down
- A stranger to the job could theoretically follow the document
- Execution is still variable in practice (people have not yet run it as written)
- The document is mostly right, but gaps will emerge

**The Exit Criterion:** A document that survives review by someone who has never done the job. They should be able to say "I see the steps" — not "this is complete."

**Why you're here:** You documented it, but no one has run it as documented yet.

**How to get out:** Run the process manually, exactly as documented, for one full business cycle. Record what breaks. Move to L2.

**What's new from L0:**
- Knowledge is captured and shareable
- Onboarding is possible
- The process is reproducible by design (though not yet in practice)

---

#### **L2 — Practiced: The Process Validated by Use**

**Characteristics:**
- The process has been run as documented for at least one full cycle
- Staff have built intuition for where it bends and breaks
- Exceptions are known and their frequency is understood
- The definition has been corrected by real use
- Cycle time and error rates are measurable from actual runs

**The Exit Criterion:** One full business cycle run as defined; the exception list is stable (no new exceptions surfacing).

**Why you're here:** The document is now grounded in reality. You know what works and what doesn't.

**How to get out:** Systematize what you've learned. Encode the rules and the exception list. Create the data structures you'll need for automation. Move to L3.

**What's new from L1:**
- Process is consistent in practice, not just on paper
- Staff can predict outcomes
- Exceptions are catalogued and understood
- **This is where the document and reality converge — the hardest and most valuable level.**

---

#### **L3 — Supervised Automation: The Human-Reviewed Machine**

**Characteristics:**
- The process is encoded in automation rules or AI system prompts
- The machine executes the process
- A human reviews every output before it is acted upon
- Exceptions that the rules cannot handle are routed to a human queue
- The automation is compared against the manual baseline

**The Exit Criterion:** Error rate at or below the manual baseline, sustained over an agreed period (typically 2-4 weeks).

**Why you're here:** You've automated it, but the system is new and you need supervision before you trust it.

**How to get out:** Build confidence through measurement. Once exception rates and error rates are stable and below baseline, reduce review. Move to L4.

**What's new from L2:**
- Machine handles execution — volume scales
- Human reviews exceptional cases and trains the system
- Consistency is now enforced by rules, not by people remembering
- Exceptions are routed, tracked, and learned from
- You have visibility into what the automation is doing

---

#### **L4 — Autonomous: The Audited Machine**

**Characteristics:**
- The machine executes the process with limited human oversight
- Humans review samples and exceptions, not every output
- Most exceptions are resolved automatically; novel ones are escalated
- Process changes flow through the automation (versioned, tested)
- Data quality is monitored for drift

**The Exit Criterion:** Exception rate and outcomes stable; rollback path tested and verified.

**Why you're here:** You've proven the automation is reliable. It runs without constant supervision.

**How to get out:** You do not. You operate at L4. Humans stay involved in oversight, exception handling, and decisions about process change.

**What's new from L3:**
- Humans move from reviewing everything to sampling and auditing
- The process is truly scaled
- Ownership is split: the business owner is accountable for outcomes; a maintainer is accountable for uptime
- The process adapts through structured change, not by human workaround

---

### The Question to Ask at Each Level

- **At L0:** "Can anyone else run this?"
- **At L1:** "Does this document match reality?"
- **At L2:** "Can we automate this?"
- **At L3:** "Is the automation better than the manual version?"
- **At L4:** "Is the automation still doing what we need?"

---

# PART C: Quick Reference
## Operationalizing Process Maturity for Your Organization

### Domain 01 Process Maturity: The 4-Item Readiness Checklist

These four items are the operational definition of Domain 01 Process Maturity. Use them to self-assess and track progress.

| # | Item | What It Means | Maps to Framework Level |
|---|---|---|---|
| **1** | Key processes documented with step-by-step SOPs and decision points | Every step, branch, input, output, and exception are written down. A stranger could theoretically follow it. | L1 Defined (minimum) |
| **2** | Process owners assigned for all major workflows | Each process has a single named owner accountable for its definition, exceptions, and outcomes. | L1 Defined (minimum) |
| **3** | Performance baselines established (cycle time, error rate, cost) | Current manual performance is known: how long it takes, how many errors occur, what it costs. This is the measurement against which automation will be judged. | L2 Practiced (minimum) |
| **4** | Exception paths and edge cases mapped — not just the happy path | Documented: what happens when inputs are missing, malformed, contradictory, or when the happy path does not apply. | L2 Practiced (minimum) |

### Evidence Types to Collect

For each checklist item, here are the artifacts that demonstrate readiness:

| Item | Evidence Type | Location / Example |
|---|---|---|
| Documented processes | Process maps / SOPs, Flowcharts, Work instructions | SharePoint, Confluence, GitHub wiki |
| Process owners | RACI charts, Process owner register, Org charts | Governance documentation |
| Performance baselines | Process KPIs, Historical data, Audit samples | Analytics platform, spreadsheets, reports |
| Exception mapping | Exception escalation guides, Error logs, Edge case documentation | Process documentation, support tickets |

### Common Gap Signals: Recognize When You're Not Ready

**Watch for these signs that your process is still at L0 or between L1 and L2:**

- "Tribal knowledge is the primary process documentation" — Only the SMEs know how it really works
- "Different teams do the same task differently" — No consistency or standardization
- "No one can describe where a process starts and ends" — Fuzzy boundaries, unclear triggers
- "Outcomes are measured, but the process producing them is not" — You track results but not the steps

---

## Using the Full Framework

### For Process Assessment

1. **Take the readiness checklist** (Part C) and score each item per process
2. **If gaps exist,** work on the lowest row first (data, before execution; ownership before measurement)
3. **Use the gate table** (Part A) to identify blockers
4. **Use the L0-L4 matrix** (Part B) to place the process and understand what maturity level is needed

### For Organization-Wide Maturity

Your organization's overall maturity is **not a single score**. It is the distribution of your processes across levels:
- 50% of processes at L0 (not yet formalized)
- 30% at L1 (documented, not yet proven)
- 15% at L2 (practiced, ready for automation pilots)
- 4% at L3 (automated, supervised)
- 1% at L4 (autonomous)

You are ready to scale AI automation when you can reliably move processes from L0 to L4 — not when you have one process at L4.

### Key Milestone Criteria

| Milestone | What It Means |
|---|---|
| **L0 → L1** | Process is documented. An outside reviewer says "I can see the steps." |
| **L1 → L2** | Process has been run as documented for one full cycle. Exception list is stable. |
| **L2 → L3** | Process is automated. The first output is reviewed by a human. Performance is measured against baseline. |
| **L3 → L4** | Automation performance is at or better than manual baseline, sustained over time. Humans move to sampling and auditing. |

---

## Relationship to the AI+ Readiness Framework

This **Process Maturity domain** is foundational. The other six domains are:

- **Domain 02: Data Foundation** — Inventoried, classified, quality-assured data
- **Domain 03: Information Security** — Policies, controls, and access governance
- **Domain 04: Privacy & Compliance** — PII mapping and regulatory coverage
- **Domain 05: Technology Baseline** — Cloud readiness, APIs, platform standards
- **Domain 06: People & Change Readiness** — AI literacy, buy-in, change capability
- **Domain 07: Ethics & AI Principles** — Values, accountability, responsible use

All seven domains must mature together. A process that is L3 on execution but L1 on data will fail. A process that is L4 on execution but L0 on governance will create risk. Assess and work on domains in parallel, focusing on the weakest link.

---

## The Core Insight

> **"Automation does not improve a process. It fixes it in place and runs it faster."**

If you want AI to transform your operations, the first transformation is not technological. It is organizational — moving operating knowledge from heads to documents to practiced habit. That work is not an option. It is the foundation. Doing it well means your automation, when it comes, has something good to amplify.

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | August 2026 | Initial unified guide combining Operating Knowledge Maturity Framework, Process Maturity Prerequisites, and Domain 01 Readiness Checklist |

