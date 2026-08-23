---
title: Pre-Flight Prerequisites
sidebar_label: Pre-Flight Prerequisites
---
# Pre-Flight Prerequisites

Before AI can transform outcomes, the operating foundation must be ready.

AI amplifies what already exists. If processes are unclear, data is unclassified, or governance is weak, AI will scale those weaknesses. These seven domains are required to reduce risk and increase delivery speed.

## Why This Matters

### AI Amplifies What Exists

AI models learn from your data and automate your processes. If those are broken, biased, or undocumented, AI scales the problem — not the solution. Clean foundations produce clean outcomes.

### Governance Failures Are Costly

Regulatory fines, data breaches, and reputational damage from AI missteps are far more expensive than building the right guardrails before launch. Governance is not a brake — it's a seatbelt.

### Speed Comes From Readiness

Teams that invest in prerequisites move faster once AI deployment begins — fewer blockers, fewer rollbacks, faster adoption. Skipping this step creates the slowdowns it was trying to avoid.

## How To Use This Page

For each domain, review what ready looks like and identify current gaps. You do not need perfect scores before starting, but every unmet control is an explicit risk that must be tracked.

## The 7 Foundation Domains

### Domain 01: Process Maturity

Defined, documented, and measurable workflows.

#### Why AI Needs This

AI automates, augments, or optimizes processes. If a process is not documented, if people perform it differently each time, or if it only exists in the heads of experienced employees, there is nothing concrete for AI to learn from or act on. Undefined processes produce AI that is inconsistent, hard to validate, and often harmful.

#### What To Have In Place

- **Key processes documented**: Step-by-step with decision points, inputs, and outputs.
- **Process owners assigned**: Each process has a named accountable owner.
- **Performance baselines established**: Cycle time, error rate, and cost are known.
- **Exception paths mapped**: Edge cases are documented, not only the happy path.

#### Key Artifacts

- Process maps and SOPs
- RACI charts
- Process KPIs and baselines
- Exception and escalation guides
- Process owner register

#### Common Gap Signals

- Tribal knowledge is the primary process documentation.
- Different teams perform the same task differently.
- No one can clearly define process start and end boundaries.
- Outcomes are measured, but the process producing them is not.

**Deep dive later:** Domain 01 (Process Maturity) has a full guide in Reference. Finish the reading pass first, then open it when you need the L0-L4 matrix and readiness gates.

### Domain 02: Data Foundation and Classification

Inventoried, classified, and quality-assured data.

#### Why AI Needs This

Data is the fuel for AI systems. Models trained on incomplete, inaccurate, or unclassified data produce unreliable results. Without classification, teams cannot determine what AI can access safely. Without inventory and ownership, projects stall on discovery and trust.

#### What To Have In Place

- **Data inventory**: Major datasets cataloged by location, owner, format, and update frequency.
- **Classification scheme**: Public, Internal, Confidential, Restricted/PII labels applied.
- **Data quality standards**: Completeness, accuracy, consistency, and timeliness criteria.
- **Data lineage**: Origins and transformations documented for critical data.
- **Data ownership**: Named owner for each dataset.

#### Key Artifacts

- Data catalog or inventory
- Classification policy
- Data quality scorecard
- Data lineage diagrams
- Data ownership register
- Labeling standards

#### Common Gap Signals

- No one knows what data exists or where it lives.
- Sensitive data sits in uncontrolled spreadsheets.
- Systems conflict on core records.
- Data quality varies widely across teams.

### Domain 03: Information Security

Policies, controls, and access governance.

#### Why AI Needs This

AI systems can access broad organizational data and become a high-impact attack surface. Without strong security controls, AI can enable data leakage, adversarial manipulation, and serious compliance exposure.

#### What To Have In Place

- **Security policy**: Documented and approved for data handling and incident response.
- **IAM and RBAC**: Least-privilege access enforced for AI systems and integrations.
- **Secure engineering practices**: Training pipelines and APIs follow secure standards.
- **Secrets management**: Keys and credentials stored in secure vaults.
- **Incident response plan**: Tested procedures for AI-related security events.

#### Key Artifacts

- Information security policy
- IAM and RBAC matrix
- Least-privilege standards
- Secrets management solution
- Incident response plan
- Pen-test and security review process

#### Common Gap Signals

- Shared logins are used by AI services.
- API keys appear in repositories.
- No formal security review before new AI integrations.
- AI security ownership is unclear.

### Domain 04: Privacy and Regulatory Compliance

PII mapping, legal landscape awareness, and review capability.

#### Why AI Needs This

AI systems handling personal data must meet legal requirements (GDPR, CCPA, HIPAA, and equivalents). Without compliance controls, organizations can create immediate legal and reputational risk.

#### What To Have In Place

- **PII mapping**: Personal data identified with purpose and legal basis.
- **Regulatory landscape**: Applicable laws mapped by region and use case.
- **Privacy by design**: Data minimization and purpose limitation by default.
- **Legal review process**: New AI use cases reviewed pre-deployment.
- **Retention and deletion policy**: Includes right-to-erasure handling for training data.

#### Key Artifacts

- Data processing register (ROPA)
- PII inventory and data map
- Privacy policy and notices
- Regulatory compliance matrix
- AI legal review checklist
- Consent management framework

#### Common Gap Signals

- Teams cannot identify applicable regulations for new use cases.
- PII moves through tools without consent tracking.
- Legal review happens only after build completion.
- No process exists for AI-related deletion requests.

### Domain 05: Technology and Integration Baseline

Cloud readiness, APIs, and platform standards.

#### Why AI Needs This

AI must connect to existing systems and run reliably at scale. Without a baseline, each project re-solves integration, identity, and deployment from scratch.

#### What To Have In Place

- **Cloud platform decision**: Standardized provider or hybrid strategy approved.
- **API standards and catalog**: Versioned APIs with clear usage patterns.
- **Identity platform**: SSO and authentication patterns usable by AI services.
- **Observability standards**: Logging, monitoring, and alerting required in production.
- **Deployment pipeline**: CI/CD with security scans, tests, and approvals.

#### Key Artifacts

- Cloud architecture decision record
- API catalog and standards
- Identity and SSO platform documentation
- CI/CD standards
- Observability framework
- Infrastructure-as-code templates

#### Common Gap Signals

- Every AI initiative needs bespoke integration work.
- APIs are undocumented or inconsistent.
- AI systems run without monitoring standards.
- Cloud usage is fragmented across teams.

### Domain 06: People and Change Readiness

AI literacy, sponsorship, and change capability.

#### Why AI Needs This

Even high-quality AI fails without adoption. Teams need literacy, leadership support, and structured change management to use AI effectively and safely.

#### What To Have In Place

- **AI literacy baseline**: Staff understand capabilities, limits, and risks.
- **Leadership sponsorship**: Executives actively support funding and adoption.
- **Change management capability**: Structured plan for communication and rollout.
- **Reskilling pathways**: Support for roles most affected by AI.
- **Feedback mechanisms**: Channels to report issues and improve outcomes.

#### Key Artifacts

- AI literacy curriculum
- Executive sponsorship charter
- Change management plan
- Stakeholder impact assessment
- Reskilling roadmap
- Employee feedback channels

#### Common Gap Signals

- Employees see AI only as a job threat.
- AI initiatives are IT-led without business ownership.
- Training ends at vendor demos.
- Leadership messaging exists without budget commitment.

### Domain 07: Ethics and AI Principles

Values, accountability, and responsible-use standards.

#### Why AI Needs This

AI decisions can scale bias, opacity, and harm if principles are undefined. Ethics is a practical control system for trust, not just a values statement.

#### What To Have In Place

- **Adopted AI principles**: Fairness, transparency, accountability, oversight, explainability.
- **AI ethics owner**: Named role or committee for principle enforcement.
- **Bias assessment process**: Repeatable testing before deployment.
- **Explainability standards**: Meaningful explanations for high-impact outcomes.
- **Escalation and override paths**: Clear challenge and intervention routes.

#### Key Artifacts

- AI ethics policy
- AI principles charter
- Bias testing methodology
- Explainability standard
- Ethics review board terms of reference
- Override and appeal process

#### Common Gap Signals

- Responsible AI is undefined in operational terms.
- Models ship without bias testing.
- Affected people cannot contest AI decisions.
- Ethics is discussed only after incidents.

## Dependency Matrix by Use Case Type

Legend: `Critical`, `High`, `Moderate`, `Low`

| AI Use Case Type | Process Maturity | Data Foundation | Information Security | Privacy and Compliance | Technology Baseline | People and Change | Ethics and Principles |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Automation | Critical | High | High | Moderate | Critical | High | Moderate |
| Augmentation | High | High | High | High | High | Critical | High |
| Generation | Moderate | High | Critical | Critical | High | High | Critical |
| Prediction | High | Critical | High | High | High | Moderate | High |
| Optimization | High | Critical | High | Moderate | High | Moderate | High |
| Autonomous agents | Critical | Critical | Critical | Critical | Critical | Critical | Critical |

## Next Step

Continue to the Framework in the Playbook section. Use the Foundation Readiness Check in Reference later, when you are ready to score gaps and prioritize remediation.
