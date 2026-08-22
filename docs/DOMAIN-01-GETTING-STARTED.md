# Domain 01: Process Maturity — Getting Started

**Welcome!** This page helps you find the right Domain 01 material for your situation.

---

## Quick Navigation

### Are you in a hurry? Start here.

**I have 5 minutes:**
→ Go to `checklist.html` and scan the Domain 01 section. It's 4 items.

**I have 15 minutes:**
→ Go to `prerequisites.html`, find Domain 01, and read "Why AI needs this" + "What to have in place."

**I have an hour:**
→ Read `docs/domain-01-process-maturity-complete-guide.md` — all three parts. This is the complete reference.

**I'm building integration or automation tools:**
→ Read Part B (L0-L4 Maturity Framework) and Part C (Quick Reference) of the guide.

---

## Choose Your Path by Role

### If you are an Organization Leader / Executive
**Goal:** Understand what process maturity means and why it matters before AI transformation.

1. **Start:** `prerequisites.html` → Domain 01 section → "Why AI needs this"
2. **Understand:** The 4 readiness items (what "ready" looks like)
3. **Use:** Take the checklist at `checklist.html` — Domain 01
4. **Deep dive:** If you want to understand the evolution, read Markdown Part B (L0-L4 Framework)

**Key takeaway:** "Automation fixes a process in place. If the process is broken, automation just makes the problem faster."

---

### If you are a Process Owner / SME
**Goal:** Know how mature your process is and what steps to take next.

1. **Start:** `prerequisites.html` → Domain 01 → "Common gap signals"
   - Which ones describe your situation?
2. **Self-assess:** Use `checklist.html` → Domain 01
   - Which of the 4 items do you have? Which are missing?
3. **Understand levels:** Read Markdown Part B (L0-L4 Framework)
   - Where does your process sit today?
   - What does the next level require?
4. **Plan:** Review Markdown Part C (Quick Reference)
   - What evidence do you need to collect?
   - What are the exit criteria for your next level?

**Key takeaway:** "You're probably at L1 or L2 right now. L2 is where the document meets reality — don't skip it."

---

### If you are an Automation Architect / AI Lead
**Goal:** Assess process readiness, design automation approach, measure success.

1. **Assess:** Read Markdown Part A (Readiness Gate)
   - Do all 6 prerequisite domains pass?
   - If not, which are blockers?
2. **Evaluate:** Use Markdown Part B (L0-L4 Matrix)
   - Score each candidate process per row
   - Identify the lowest row (that's your work first)
3. **Plan:** Reference Markdown Part C
   - What's the evidence? Who owns it?
   - What's the baseline you'll measure against?
4. **Go:** Move to Part B → L3 & L4 sections
   - How will supervision work?
   - How will you measure success?

**Key takeaway:** "L2 is where you learn what will and won't automate. Don't skip it."

---

### If you are a Data Steward / Governance Lead
**Goal:** Ensure data is ready to support process automation.

1. **Focus:** Markdown Part A → Section 2 (Data Pre-requisites)
2. **Check:** The Readiness Gate → Data row
3. **Assess:** Against `prerequisites.html` → Domain 02 (Data Foundation)
   - Note: Domain 01 (Process) and Domain 02 (Data) must mature together
4. **Reference:** Markdown Part C → Evidence types table

**Key takeaway:** "Data quality ceiling = automation quality floor. Measure it first."

---

### If you are a Change Manager / Organizational Development
**Goal:** Prepare the organization and people for process evolution.

1. **Understand:** Markdown Part A → Section 5 (People Pre-requisites)
2. **Reference:** Markdown Part B → L0-L4 Matrix → Human role row
   - At each level, what changes about how people work?
3. **Plan:** L0→L1 = training on the new process
   - L1→L2 = practice and feedback loops
   - L2→L3 = trust the automation, supervise
   - L3→L4 = shift to auditing and exceptions

**Key takeaway:** "At L3-L4, the role changes but doesn't disappear. People move from doing to auditing."

---

### If you are a Security / Risk Officer
**Goal:** Ensure process automation does not introduce security or compliance gaps.

1. **Review:** Markdown Part A → Sections 3-6
   - Section 3: Structural (decision rights, exception handling)
   - Section 4: Technical (identity, logging, environments)
   - Section 6: Measurement (you need baseline to catch problems)
2. **Check:** Readiness Gate table → all rows
   - Pay special attention to: Structure, Technical, Measurement
3. **Reference:** `prerequisites.html` 
   - Domain 03 (Information Security)
   - Domain 04 (Privacy & Compliance)
   - These are dependencies for Domain 01 automation

**Key takeaway:** "Undefined process + undefined security = automation that scales the risk."

---

## By Situation

### Situation: "We want to automate something, where do we start?"

1. **Read:** Markdown Part A (Readiness Gate)
2. **Ask:** "Do we pass all 6 prerequisite domains?"
3. **If no:** "Which domain is the biggest gap? Work there first."
4. **If yes:** "Use Markdown Part B to score the process per L-level. Start at L1."

**Timeline:** Typically 1-2 quarters from L0 to L2, 1-2 months L2→L3, then ongoing.

---

### Situation: "We have a process documented but it's not working yet."

**You're at L1.** 
1. **Read:** Markdown Part B → L2 section
2. **Do:** Run the process as documented for one full cycle
3. **Capture:** All exceptions, workarounds, things that broke
4. **Update:** The documentation based on what you learned
5. **Measure:** Cycle time, errors, cost
6. **Exit:** When you've done one full cycle and exceptions are stable

**Do not skip L2.** This is where L1 meets reality.

---

### Situation: "Our process is documented and we've run it, now can we automate?"

**You're ready for L2→L3 planning.**
1. **Read:** Markdown Part B → L3 section
2. **Review:** Part A → Section 4 (Technical pre-requisites)
3. **Ask:** 
   - Can we read data from systems programmatically?
   - Can the automation have a scoped identity?
   - Do we have somewhere to test before production?
4. **Plan:** L2→L3 supervision approach
   - Who reviews every output?
   - How do you route exceptions?
   - What's your baseline to measure against?

---

### Situation: "We're automated but we want to reduce human review."

**You're planning L3→L4.**
1. **Read:** Markdown Part B → L4 section
2. **Measure:** Exception rate, error rate vs. baseline
3. **Ask:** "Have we been at or below baseline for 4 weeks?"
4. **Plan:** Sampling strategy
   - How many outputs per day will humans review?
   - What triggers a full review?
5. **Test:** Rollback path
   - Can we stop the automation and go back to manual?

---

### Situation: "I'm new here and need to understand how process maturity works."

**Read in order:**
1. Markdown Part B: The L0-L4 Maturity Framework (15 min)
2. Markdown Part A: The Readiness Gate (20 min)
3. Markdown Part C: Quick Reference (10 min)
4. Then use the HTML pages (`checklist.html`, `prerequisites.html`) for self-assessment

---

## The Three Materials Explained

### Material 1: The Checklist (checklist.html)
- **What it is:** Interactive, self-assessment checklist
- **How long:** 5-10 minutes to fill out
- **What you get:** Clear picture of what's ready and what's not
- **Auto-saves:** Your progress is saved in your browser

**Use this:** To get a quick organizational snapshot

---

### Material 2: The Prerequisites Page (prerequisites.html)
- **What it is:** Detailed explanation of why each item matters and what "ready" looks like
- **How long:** 15-20 minutes to read thoroughly
- **What you get:** Understanding of the prerequisites and their dependencies
- **Design:** Designed to be read on screen, with navigation between domains

**Use this:** When you need to understand WHY something matters

---

### Material 3: The Complete Guide (docs/domain-01-process-maturity-complete-guide.md)
- **What it is:** Comprehensive reference document with three parts
- **How long:** 45-60 minutes to read thoroughly; can be read in parts
- **What you get:** 
  - Part A: All 6 prerequisite domains explained in detail
  - Part B: L0-L4 framework with detailed level descriptions
  - Part C: Mapping to checklist, evidence types, common gaps
- **Design:** Written for deep reference; heavy with detail

**Use this:** When you need to understand HOW or prepare detailed plans

---

### Material 4: The Reconciliation Guide (docs/DOMAIN-01-TERMINOLOGY-RECONCILIATION.md)
- **What it is:** For maintainers and architects who need to understand how all pieces fit together
- **How long:** 20-30 minutes
- **What you get:** Glossary, layer relationships, maintenance guidelines
- **Audience:** Usually not for end users; for people maintaining the materials

**Use this:** When you're updating materials or training others

---

## Common Questions & Answers

**Q: Do I need to read all three?**
A: No. The HTML pages (checklist, prerequisites) are enough for most users. The markdown guide is for deep dives.

**Q: What's the difference between "readiness" and "maturity"?**
A: **Readiness** = "Are we ready to start automation?" (Part A, Readiness Gate, 6 domains)
**Maturity** = "How evolved is this one process?" (Part B, L0-L4 framework)

**Q: Can we skip L2?**
A: No. L2 is where your documented process meets reality. This is where you discover what will and won't automate. It's hard and it's worth it.

**Q: When do we know we're "ready"?**
A: When you pass all six domains in the Readiness Gate (Part A). That means:
- Process documented and stable
- Data known and accessible
- Governance decided
- Technology reachable
- People understand what's happening
- You have a baseline to measure against

**Q: How long does this take?**
A: L0→L2 is 1-2 quarters (do it right). L2→L3 is 1-2 months. L3→L4 is ongoing.

**Q: What if we fail at L3?**
A: Good — this is why you supervise. Fix the process or the rules, and try again. Failure at L3 costs less than failure at L4.

**Q: Do we need to be at L4?**
A: No. L3 (supervised automation) is acceptable long-term for many processes. L4 (autonomous) is optional.

---

## Next Steps

1. **Take the checklist** → `checklist.html` Domain 01
2. **Read the prerequisites** → `prerequisites.html` Domain 01
3. **Identify gaps** → Where are you NOT ready?
4. **Read the guide** → `docs/domain-01-process-maturity-complete-guide.md` Part A (6 domains)
5. **Plan work** → Address lowest domain first
6. **Reassess** → Come back to the checklist as you progress

---

## Questions? Feedback?

If something is unclear:
- Check the glossary in the reconciliation document
- Re-read the section relevant to your role (see "Choose Your Path by Role" above)
- Look for your situation in "By Situation" section
- Review the anti-patterns in Markdown Part A to see if any apply

**Remember:** The goal is not to be perfect. The goal is to be deliberate — to know what you're doing and why.

> "There is nothing so useless as doing efficiently that which should not be done at all." — Peter Drucker

Domain 01 exists to make sure you're doing the right thing before you make it efficient.

