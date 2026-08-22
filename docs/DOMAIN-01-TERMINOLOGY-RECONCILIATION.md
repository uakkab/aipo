# Domain 01: Terminology Reconciliation & Implementation Guide

**Purpose:** This document explains how the markdown guide (`domain-01-process-maturity-complete-guide.md`) relates to the HTML pages (checklist.html and prerequisites.html) and the terminology decisions made to create coherence across all three.

---

## The Three Content Layers

### Layer 1: Interactive HTML UI (User-Facing)
- **Files:** `checklist.html`, `prerequisites.html`
- **Audience:** Organization leaders doing self-assessment
- **Purpose:** Provide interactive checklist and prerequisite review
- **Terminology:** "Documented & measurable workflows," "SOPs," "Performance baselines," "Exception paths"

### Layer 2: Detailed Markdown Guide (Reference)
- **File:** `docs/domain-01-process-maturity-complete-guide.md`
- **Audience:** Process owners, automation leads, anyone doing deep-dive work
- **Purpose:** Explain the WHY, provide framework, show progression
- **Terminology:** "Operating knowledge," L0-L4 levels, "Readiness gate," "Maturity framework"

### Layer 3: Assessment Checklist (Operationalization)
- **Embedded in:** Both HTML and markdown
- **Purpose:** Track progress, identify gaps
- **4 core items:** All three layers converge here

---

## Terminology Decisions Made

### 1. **"Process Maturity" remains the domain name**
- **HTML:** "Process Maturity - Documented & measurable workflows"
- **Markdown:** "Process Maturity - A Complete Guide to Documenting and Evolving Workflows"
- **Decision:** Keep the name consistent, but subtitle captures different angles

### 2. **"Operating Knowledge" is the conceptual foundation**
- **Used in:** Markdown only (Part B)
- **Why:** Explains the deeper pattern of how knowledge moves from heads → documents → habit → automation
- **Connection to HTML:** The HTML checklist items operationalize this concept without needing to name it

### 3. **L0-L4 levels are the organizing principle for the guide**
- **NOT in HTML:** HTML does not reference levels (would be too complex for interactive UI)
- **IN markdown:** Part B is explicitly about L0-L4
- **Mapping to HTML:** Each checklist item maps to a minimum level:
  - Item 1 (documented processes) = L1 minimum
  - Item 2 (process owners) = L1 minimum
  - Item 3 (baselines) = L2 minimum
  - Item 4 (exception mapping) = L2 minimum

### 4. **The Readiness Gate (Part A) = Prerequisites in HTML**
- **HTML location:** `prerequisites.html` → Domain 01 section
- **Markdown location:** Part A: The Process Maturity Readiness Gate
- **Decision:** Same content, different framing:
  - HTML: "What to have in place"
  - Markdown: Organized by domain (Process, Data, Structure, Technical, People, Measurement)

### 5. **Checklist mapping to framework**
- **The 4 checklist items appear in:**
  - `checklist.html` (interactive, unchecked state)
  - `prerequisites.html` (informational, in "What to have in place")
  - Markdown Part C (quick reference with framework mapping)

---

## Cross-Reference Guide for Maintainers

### If you change the checklist items in HTML...
Update these locations in the markdown:
- Part C (Quick Reference section)
- The mapping table that links items to L-levels

### If you change the prerequisite text in HTML...
Update these locations in the markdown:
- Part A (The Readiness Gate sections 1-6)
- The gate table at the end of Part A

### If you add a new anti-pattern...
Update these locations:
- Part A: Anti-patterns section
- Potentially Part C: Common gap signals

### If you change what "ready" means...
This is a semantic change. Update:
- The governing principle (Part A intro)
- The exit criteria in the L0-L4 matrix (Part B)
- The readiness gate table (Part A)
- All three HTML files

---

## Unified Language Across Layers

### What to call things:

| Concept | Markdown Term | HTML Term | Use |
|---------|---|---|---|
| The starting state | L0 Tacit | "tribal knowledge" | When describing where most organizations start |
| Documented but untested | L1 Defined | "step-by-step SOPs" | When talking about written procedures |
| Proven in practice | L2 Practiced | "performance baselines established" | When showing that something is ready to automate |
| AI handling it | L3 Supervised / L4 Autonomous | Not used in HTML | Only in technical/architect contexts |
| The whole system | Operating Knowledge Maturity | "Documented & measurable workflows" | When framing the domain broadly |
| The gate before automation | Readiness Gate | Prerequisites | When checking "are we ready?" |
| The exception handling | Exception path / escalation | "Exception paths and edge cases mapped" | When discussing what happens when happy path fails |

---

## How Users Navigate These Three Layers

### Scenario 1: Organization Starting Out
1. **Visit:** `checklist.html`
2. **Realize:** "We're not ready on items 1-4"
3. **Go to:** `prerequisites.html` for "Domain 01" section to understand why
4. **Deeper dive:** Read Part A of the markdown to understand the 6 prerequisite domains

### Scenario 2: Process Owner Preparing for Automation
1. **Visit:** `prerequisites.html` Domain 01 section
2. **Assess:** "We're L1, need to get to L2"
3. **Deep dive:** Open the markdown, read Part B: The Maturity Framework
4. **Plan:** Use the L2 exit criterion to plan the manual validation cycle
5. **Track:** Return to `checklist.html` to check off items as you progress

### Scenario 3: Automation Lead Designing the System
1. **Read:** Part A of markdown (understand prerequisites)
2. **Use:** L0-L4 matrix (Part B) to assess current state
3. **Reference:** Part C to map back to checklist items
4. **Config:** Use data from these docs to configure automation tools/rules

---

## The Hierarchy Visualized

```
Domain 01: Process Maturity
│
├─ Layer 1: HTML User Interface
│  ├─ checklist.html (4 items, auto-save progress)
│  └─ prerequisites.html (Domain 01 section with "Why AI needs this")
│
├─ Layer 2: Markdown Reference Guide
│  ├─ Part A: Readiness Gate (6 domains of prerequisites)
│  ├─ Part B: L0-L4 Maturity Framework (progression model)
│  └─ Part C: Quick Reference (bridges to checklist, maps to levels)
│
└─ Layer 3: Operational Artifacts (created by users)
   ├─ Process maps / SOPs
   ├─ Process owner register
   ├─ Performance baseline reports
   └─ Exception escalation guides
```

---

## What Changed & Why

### Original State (Before Reconciliation)
- Three separate markdown files with overlapping content
- Different terminology ("ladder" vs "matrix," "L0-L4" vs unlabeled levels)
- HTML and markdown used different language for the same concepts
- Unclear how readiness prerequisites relate to maturity levels
- L2 (practiced, manual validation) was mentioned but not emphasized

### Changes Made
1. **Consolidated** three markdown files into one coherent document with three parts
2. **Unified terminology** across all materials
3. **Explicit mapping** of checklist items to maturity levels
4. **Emphasized L2** as the critical (and often-skipped) manual validation step
5. **Added context** showing how HTML UI relates to markdown framework
6. **Created this reconciliation document** for future maintainers

### What Stayed the Same
- The 4-item checklist (unchanged)
- The L0-L4 framework structure
- The 6 prerequisite domains
- The Bill Gates and Drucker quotes
- The core principle: "Automation fixes a process in place and runs it faster"

---

## Future Maintenance Guidelines

### Adding a New Prerequisite Domain
1. Add it to the Readiness Gate section (Part A)
2. Update the gate table
3. Do NOT add it to the 4-item checklist unless it becomes critical for Domain 01
4. Consider whether it deserves its own Domain 0X or is a subset of an existing one

### Updating L-Level Descriptions
1. Update the matrix row first (Part B)
2. Then update the detailed level description (L0-L4 sections in Part B)
3. Review Part C to see if checklist item mapping changes
4. Check if any HTML content needs to be reflected in markdown

### Adding Content to HTML Without Breaking Sync
- **Safe:** Add "evidence entry types" (metadata about artifacts)
- **Risky:** Change what "ready" means at each level
- **Dangerous:** Change the 4 checklist items without updating markdown

### Before You Make Changes
1. Identify which layer(s) are affected (HTML UI, markdown guide, or both)
2. Update all three layers for consistency
3. Test the cross-references (checklist item → framework level mapping)
4. Verify the user journey still makes sense

---

## Glossary: Terms & Where They're Used

| Term | Definition | Used In |
|---|---|---|
| **Operating Knowledge** | All processes, workflows, policies, procedures that run an organization; most exists in people's heads | Markdown Part B |
| **L0: Tacit** | Knowledge lives only in individuals; no documentation | Markdown Part B |
| **L1: Defined** | Process documented; document survives peer review by stranger | Markdown Part B, Gate |
| **L2: Practiced** | Process run as documented; exceptions known; baseline measured | Markdown Part B, Gate |
| **L3: Supervised Automation** | AI/automation executes; human reviews every output | Markdown Part B |
| **L4: Autonomous** | AI/automation executes; human reviews samples and exceptions | Markdown Part B |
| **Readiness Gate** | The 6-domain checklist that must pass before automation; equivalent to "prerequisites" in HTML | Markdown Part A |
| **Maturity Framework** | The L0-L4 progression model showing how a single process evolves | Markdown Part B |
| **Tribal Knowledge** | Process knowledge held only by experienced staff; equivalent to L0 Tacit | HTML |
| **SOPs** | Standard Operating Procedures; written documentation of steps; equivalent to L1 Defined | HTML |
| **Performance Baseline** | Measured cycle time, error rate, cost of manual process; prerequisite for L2 and automation | HTML, Markdown |
| **Exception Path** | Documented handling of edge cases and non-happy-path scenarios; part of L1-L2 documentation | HTML, Markdown |

---

## Links & References

### Within This Project
- Detailed guide: `docs/domain-01-process-maturity-complete-guide.md`
- Interactive checklist: `checklist.html`
- Interactive prerequisites: `prerequisites.html`
- This file: `docs/DOMAIN-01-TERMINOLOGY-RECONCILIATION.md`

### External References (Mentioned in Guide)
- **Capability Maturity Model (CMM):** 1980s formalization of process maturity
- **Michael Hammer (1990):** "Paving the cow paths" — automating bad processes
- **Peter Drucker:** "There is nothing so useless as doing efficiently that which should not be done at all"
- **PIPEDA & Law 25 (Canada/Quebec):** Privacy legislation affecting data handling in automation
- **GDPR:** General Data Protection Regulation (EU)

---

## Questions? Issues?

When you encounter a discrepancy between HTML and markdown, or a term that seems to mean different things in different places:

1. **Check this document first** — it may have the answer
2. **Check the hierarchy** — which layer is the source of truth? (Markdown is the reference; HTML is the UI)
3. **Check the mapping table** — does it reconcile the terms?
4. **Update this document** if a new discrepancy emerges

The goal is that three years from now, a new team member can read this document and immediately understand why things are organized the way they are.

