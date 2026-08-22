# Domain 01: Process Maturity — Documentation Suite

This directory contains the complete documentation for **Domain 01: Process Maturity** — the foundational prerequisite for any AI transformation initiative within the AI+ Organization framework.

---

## What Was Consolidated

Three separate documents have been consolidated into a coherent, unified suite:

1. **Pre-AI: The Organization Before the Invitation** (Original markdown)
2. **Before AI: The Operating Knowledge Maturity Matrix** (Original markdown)  
3. **Pre-requisites: The Organization Before AI** (Original markdown)

These have been reorganized, unified in terminology, and mapped to the interactive HTML materials (`checklist.html` and `prerequisites.html`).

---

## Files in This Suite

### For End Users

#### **DOMAIN-01-GETTING-STARTED.md** ⭐ START HERE
The entry point for everyone. Guides you to the right material based on your role or situation.

- **Read this if:** You need to know where to start
- **Time:** 5 minutes to scan, 20 minutes to find your path
- **Includes:** Role-based navigation, situation guides, FAQs

---

#### **domain-01-process-maturity-complete-guide.md** 📖 THE REFERENCE
The comprehensive guide combining all three original documents into one coherent resource.

**Part A: The Process Maturity Readiness Gate** (50 pages equivalent)
- Explains what must be true before a process can be automated
- 6 prerequisite domains: Process, Data, Structure, Technical, People, Measurement
- Gate table: Conditions for readiness
- Anti-patterns to avoid

**Part B: The L0-L4 Maturity Framework** (30 pages equivalent)
- The four-state ladder: Define → Practice → Automate supervised → Automate autonomous
- Detailed L0-L4 matrix with 9 dimensions
- Detailed descriptions of each level with exit criteria
- The key insight: L2 (practiced/validated) is where most organizations fail

**Part C: Quick Reference** (10 pages equivalent)
- The 4-item Domain 01 readiness checklist
- Mapping checklist items to maturity levels
- Evidence types to collect
- Common gap signals

**Read this if:** You need detailed understanding, planning, or decision-making
**Time:** 45-60 minutes for complete read; can be consumed in parts

---

### For Maintainers & Architects

#### **DOMAIN-01-TERMINOLOGY-RECONCILIATION.md** 🔧 FOR MAINTAINERS
Explains the terminology decisions made and how all three layers (HTML UI, markdown guide, user artifacts) relate.

**Includes:**
- The three content layers (how they fit together)
- Unified language across all materials
- Mapping of checklist items to framework levels
- Cross-reference guide for updates
- User navigation scenarios
- Maintenance guidelines for future changes
- Complete glossary

**Read this if:** 
- You're updating these materials
- You're training others on Domain 01
- You need to understand design decisions
- You're resolving inconsistencies

**Time:** 20-30 minutes

---

## The Three-Layer Architecture

```
Domain 01: Process Maturity
│
├─ Layer 1: Interactive HTML UI (in repo root)
│  ├─ checklist.html (self-assessment checklist, auto-saves)
│  └─ prerequisites.html (Domain 01 section with details)
│  └─ Purpose: Quick assessment, user-friendly
│
├─ Layer 2: Markdown Reference Guide (in docs/)
│  └─ domain-01-process-maturity-complete-guide.md
│  └─ Purpose: Deep understanding, detailed framework
│
└─ Layer 3: User-Created Artifacts (created by organizations)
   ├─ Process maps / SOPs
   ├─ Process owner register
   ├─ Performance baseline reports
   └─ Exception escalation guides
```

---

## How to Use This Suite

### 5-Minute Overview
→ Read the banner on `checklist.html` Domain 01 section

### 20-Minute Assessment
→ Read `prerequisites.html` Domain 01 section, then take the checklist

### 1-Hour Deep Dive
→ Read all of `domain-01-process-maturity-complete-guide.md` (all 3 parts)

### Role-Specific Navigation
→ Use `DOMAIN-01-GETTING-STARTED.md` to find your path

### Training Others
→ Use `DOMAIN-01-TERMINOLOGY-RECONCILIATION.md` as your guide to explain decisions

---

## Key Terminology

| Term | Meaning |
|---|---|
| **Operating Knowledge** | All processes, workflows, policies, procedures running an organization |
| **L0 — Tacit** | Process exists only in people's heads |
| **L1 — Defined** | Process documented; passes peer review by stranger |
| **L2 — Practiced** | Process run as documented; exceptions known; baseline measured |
| **L3 — Supervised** | AI/automation executes; human reviews every output |
| **L4 — Autonomous** | AI/automation executes with limited human oversight |
| **Readiness Gate** | The 6-domain checklist that must pass before automation |
| **Maturity Framework** | The L0-L4 progression model for one process |

---

## The Core Principle

> **"Automation does not improve a process. It fixes it in place and runs it faster."**

Domain 01 exists to ensure you're automating something worth amplifying — not scaling bad practices at speed.

---

## The Checklist (from Part C)

**Domain 01 Process Maturity** is ready when these 4 items are true:

1. ✅ **Key processes documented** with step-by-step SOPs and decision points
2. ✅ **Process owners assigned** for all major workflows  
3. ✅ **Performance baselines established** (cycle time, error rate, cost)
4. ✅ **Exception paths mapped** — not just the happy path

**AND** the 6 prerequisite domains are ready:
- Process (L1 minimum)
- Data (accessible, classified, quality measured)
- Structure (roles, governance, exception handling)
- Technical (APIs, identity, logging, environments)
- People (literacy, psychological safety, capacity)
- Measurement (baseline captured)

---

## What Changed During Consolidation

### ✅ Improvements Made

1. **Unified terminology** across three separate documents
2. **Explicit mapping** between L0-L4 framework and checklist items
3. **Emphasized L2** as the critical manual validation step (most often skipped)
4. **Bridged HTML and markdown** so they refer to the same concepts
5. **Added navigation guide** for different user roles and situations
6. **Created maintainer guide** explaining design decisions
7. **Reorganized for coherence** without losing original content

### ✅ What Stayed the Same

- The 4-item checklist (unchanged, still valid)
- The L0-L4 framework structure (same levels, clearer now)
- The 6 prerequisite domains (same scope, reorganized)
- Original quotes, principles, and anti-patterns

---

## Using Domain 01 with Other Domains

Domain 01 is foundational but not independent. It must mature alongside:

- **Domain 02 (Data Foundation):** Data quality and accessibility must improve together with process definition
- **Domain 03 (Information Security):** Security decisions affect how you structure processes and automations
- **Domain 04 (Privacy & Compliance):** Privacy requirements may force process changes
- **Domain 05 (Technology Baseline):** Technical readiness enables automation
- **Domain 06 (People & Change):** People must understand and adopt process changes
- **Domain 07 (Ethics & AI):** Ethical concerns may change process design

**Start with Domain 01, but mature all seven in parallel.**

---

## Maintenance & Updates

### If You Update Content...

- **Changing checklist items?** → Update Part C of the guide AND this README
- **Adding prerequisite domains?** → Update Part A AND the reconciliation document
- **Clarifying L-levels?** → Update Part B AND the mapping table in Part C
- **Updating any HTML?** → Ensure the markdown guide reflects the changes

See `DOMAIN-01-TERMINOLOGY-RECONCILIATION.md` for detailed maintenance guidelines.

---

## Related Reading

- The **complete AI+ Organization framework** has 7 domains total
- This is **Domain 01: Process Maturity**
- Start here before considering any AI transformation
- Allow **1-2 quarters** to move from L0 to L2 per process
- Allow **1-2 months** to move from L2 to L3
- L3→L4 is ongoing (never really complete)

---

## Questions?

See the **Common Questions & Answers** section in `DOMAIN-01-GETTING-STARTED.md` or the **Glossary** in `DOMAIN-01-TERMINOLOGY-RECONCILIATION.md`.

---

## Version History

| Version | Date | Change |
|---|---|---|
| 1.0 | August 2026 | Initial unified documentation suite consolidating three separate markdown documents |

---

## File Manifest

```
docs/
├── README.md (you are here)
├── DOMAIN-01-GETTING-STARTED.md (navigation & entry point)
├── domain-01-process-maturity-complete-guide.md (reference guide - 3 parts)
└── DOMAIN-01-TERMINOLOGY-RECONCILIATION.md (maintainer guide)
```

HTML files (in repo root):
- `checklist.html` (interactive self-assessment)
- `prerequisites.html` (prerequisite details)

---

**Last updated:** August 2026
**Maintained by:** AI+ Organization Team
**Status:** Complete & ready for use

