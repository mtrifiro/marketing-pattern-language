---
pattern: "Practitioner and Purchaser Are Different People"
aliases: ["Practitioner and Purchaser Are Different People", "User Is Not the Buyer"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-012 Buying Committee]]"]
smaller: ["[[GTM-021 Practitioner-First GTM]]"]
source: "Net-new (manuscript pp. 61–100: 'they are the users; the buyers are their Heads of…')"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *The person who loves your product and the person who pays for it are rarely the same, and they want opposite things.*

> [!tldr] About this pattern
> Technical and enterprise purchases split the buyer in two: the practitioner seeks freedom and speed, while the purchaser seeks governance and defensible risk, so a viable offer must bridge both sets of fears before the sale can finish. It sits below [[MS-012 Buying Committee]] and above [[GTM-021 Practitioner-First GTM]].

> [!warning] Admonition
> Don't treat the hands-on user and the person who signs the check as one buyer. They're usually different people with opposing fears, and a product or a pitch designed for only one of them can't finish the sale.

The practitioner is whoever actually uses the thing: the developer, the analyst, the marketer, the operator. They care about a narrow, immediate question, does this make my work better today, and they want ergonomics, speed, control, good documentation, and the ability to try it without booking a call. The purchaser is whoever releases the money: the manager, the IT owner, procurement, finance. They're asking something else entirely, about cost, risk, governance, consolidation, and whether the decision is defensible if it goes wrong. The two sets of wants pull apart rather than adding together. The practitioner wants to adopt fast and freely, and freedom is exactly what makes the purchaser nervous.

The split ignored produces one of two well-worn results. A company that sells only to the practitioner gets adoption with no revenue: thousands of happy users, enormous usage graphs, and no budget line, because nobody ever sold the person who funds things. A company that sells only to the purchaser gets a signed contract nobody uses: the exec bought it, the seats were provisioned, and it sits on a shelf until someone cancels it at renewal for lack of adoption. Both look like success for a while, which is what makes them expensive.

The two roles are often not even in contact. The practitioner may have no idea who in their org would pay, or how to ask; the purchaser often doesn't know the tool exists until a bill or a security scan surfaces it. The gap between them is a distance in the org chart rather than a difference of opinion, and somebody has to carry the case across it. (The full set of roles is the [[MS-012 Buying Committee]]; the insider who carries the case is the [[MS-013 Champion, Not Contact]]; which role your number reaches first is set by [[MS-018 Price Creates the Buyer]].)

## Complications

- **Objectives that pull apart.** The user optimizes for their own day; the payer optimizes for the organization's cost and risk, and those genuinely pull apart.
- **Delight can look like danger.** A product the user loves for being frictionless can alarm the purchaser for being ungoverned, and one the purchaser loves for its controls can repel the user as bureaucratic.
- **Entry decides the bridge you owe.** Land with the user and you still have to reach the payer; land with the payer and you still have to earn the user.
- **One funnel rarely serves both.** Free and self-serve suit the practitioner; procurement, security review, and contracts suit the purchaser, and a single motion strains to do both.
- **They may never meet on their own.** The user and the payer are often strangers inside the same company, and neither has a reason to go looking for the other.

## Recommendations

> [!check] Choose which buyer you enter through and build the bridge to the other before usage or the contract peaks. A widening usage-to-revenue gap fails the practitioner-first bridge; flat activation during the first ninety days fails the purchaser-first bridge.

Decide first whether your motion is practitioner-first or purchaser-first; the two demand different bridges and you can't improvise either. Your [[MS-018 Price Creates the Buyer]] pushes the decision hard: a credit-card number lands the practitioner and postpones the purchaser, while a "contact sales" motion lands the purchaser and postpones adoption. Whichever you pick, staff and build for the crossing as much as the landing. The deep structure beneath the product-led-versus-sales-led choice that Part II treats as a spectrum is this same split; you don't choose "PLG" or "SLG" in the abstract, you choose which of these two people you land first and how you'll reach the other. Then build the crossing.

1. **If you land the practitioner first, build the purchaser's case before usage peaks.** Aggregate the scattered individual adoption into an account-level story ("forty of your engineers already rely on this"), attach the security and governance posture their review will demand, and hand your [[MS-013 Champion, Not Contact]] the ROI math in a form they can forward upward. Build these late and you'll watch a wave of adoption crest and break with no revenue behind it.
2. **If you land the purchaser first, make adoption the job the day after signature.** Ship a fast path to first value, onboarding that reaches real users in days instead of a rollout that dies in a change-management committee, and enough daily usefulness that the seats light up before the honeymoon ends. Miss this and the contract becomes shelfware and dies at renewal.
3. **Watch the one metric that warns you early.** For practitioner-first, track the ratio of accounts with deep usage to accounts with any revenue; when it yawns open, you have a monetization bridge you haven't built. For purchaser-first, track activation in the ninety days after signature; flat usage there is a renewal you've already lost and don't yet know it. Treat these two numbers as the real health of the business, ahead of the vanity metrics on either side, and act on them before the gap between the user and the payer turns a promising company into a stalled one.

## Implications

Name the split and the whole motion clarifies. Let it tell you which team to build first (self-serve and developer experience, or field sales and solutions engineering), which metrics predict revenue (activation and usage, or pipeline and coverage), and where deals will stall. Feed it into the Part II patterns for activation, sales-assisted conversion, and expansion, all of which are machinery for carrying a landed user across to a paying account or a paying account down to a living deployment. It sits inside [[MS-012 Buying Committee]] and beside [[MS-013 Champion, Not Contact]] and [[MS-018 Price Creates the Buyer]].

Serving both sides fully can demand two products or two funnels: a frictionless free surface for the practitioner and a governed enterprise motion for the purchaser, running at once. Pay that cost deliberately. It's expensive, and it can feel like the company is arguing with itself, offering openness on one page and control on the next. Hold the line anyway; the two surfaces only look contradictory, and they're the price of the gap being real. Don't pretend one side is the whole market.

## Related Patterns

- **Above:** [[MS-012 Buying Committee]]
- **Below:** [[GTM-021 Practitioner-First GTM]] (the Part II posture that lands the practitioner first and builds the purchaser's half behind them)
- **Peers:** [[MS-013 Champion, Not Contact]] (the carrier across the gap), [[MS-018 Price Creates the Buyer]] (the number decides which side you land first), [[MS-010 ICP Definition]] (a two-tier ICP names both roles)

## Examples

**Terraform's two-tier reality.** HashiCorp's Terraform is the model to study. The practitioners were ops engineers who adopted it freely and loved it; the purchasers were IT leaders whose spend was gated by security and compliance. The engineer's delight generated the usage, and by the 1.0 release on 8 June 2021, almost seven years after the first version shipped, that meant more than 100 million downloads. Revenue only appeared once HashiCorp built the collaboration, governance, and security the purchaser required and gave the engineer a way to carry that case up. Serving only the engineer would have left the company beloved and broke.

**Slack building the bridge it skipped.** Slack landed on the practitioner side almost by accident; employees adopted it team by team on their own. Turning that into enterprise revenue meant building the purchaser's half of the product after the fact, the admin controls, security certifications, and compliance features that let IT say yes to something the staff had already chosen. Enterprise Grid, the version written for that buyer, shipped on 31 January 2017, three years after Slack's public launch. IBM is the measurable version of the crossing: 68 engineers on the free tier in 2014, 165,000 users on Enterprise Grid by 2019, and a company-wide standard covering all 350,000 employees in February 2020. The bridge came late and had to be built under pressure, which is the normal tax of a practitioner-first motion.

**The prescription nobody in the room pays for.** Three people take part in one transaction. A physician chooses the drug, the patient takes it, and a pharmacy benefit manager decides whether it's covered and at what tier. The Federal Trade Commission's staff report of July 2024 puts the weight of the paying seat on the record: the three largest PBMs processed nearly 80 percent of the 6.6 billion prescriptions dispensed by US pharmacies in 2023, and the top six processed more than 90 percent. A drug sold only to prescribers gets written and then refused at the counter. A drug sold only to the formulary is covered and never written. Both seats have to be sold, and this arrangement is decades older than software.

**The shelfware I helped clean up.** I once worked with a company that had bought a well-known platform top-down; an executive signed a large contract on a compelling ROI deck. A year later almost no one used it. Nobody had sold the practitioners, so nobody had adopted it, and the renewal was an easy cancellation. The vendor had won the purchaser and forgotten the user, and the signature turned out to be the easy part.

