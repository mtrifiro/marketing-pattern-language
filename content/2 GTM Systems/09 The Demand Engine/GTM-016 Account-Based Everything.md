---
pattern: "Account-Based Everything"
aliases: ["Account-Based Everything", "The Whole Company Aims at the Kingmakers"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[MS-016 Power Law Accounts]]", "[[MS-033 Spear Fishing]]", "[[GTM-012 Targeted Reputation Building]]"]
smaller: []
source: "PDF pp. 341–354 (Power Law Accounts, founder essay); pp. 121–140 (ABM coordination)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *When a handful of accounts decide the year, aim the whole company at them; the marketing team can't carry it alone.*

> [!tldr] About this pattern
> When Kingmaker accounts decide the year, Account-Based Everything points sales, marketing, product, and customer success at the same short list so the company acts as one instrument aimed at a few targets. It sits below [[MS-016 Power Law Accounts]], [[MS-033 Spear Fishing]], and [[GTM-012 Targeted Reputation Building]].

> [!warning] Admonition
> Don't let each department keep tuning its own funnel to its own metric once you've accepted that a few accounts decide the company's fate. The named accounts meet a fragmented company that never adds up to a coherent reason to buy.

The money and the credibility live in twenty to fifty accounts whose wins would make your success inevitable. Accepting that fact is one decision. Acting on it across the whole company is a different and harder one, because most go-to-market organizations run in parallel, each function tuned to a number that has nothing to do with the target list. Left alone, marketing chases MQL volume and buys broad reach that lands mostly on Tourists, sales works whatever leads arrive, product prioritizes the loudest bug queue, and customer success measures ticket deflection. Each function looks healthy on its own dashboard while the accounts that actually matter get a scattered, incoherent experience.

The effort cancels itself out. A named target researches you and finds a website written for a generic buyer, a webinar aimed at the mass market, a support portal built to deflect them, and a product roadmap driven by people who'll never sign a six-figure contract. Gartner's B2B buying research puts six to ten decision makers in the typical buying group for a complex purchase, each arriving with information they gathered on their own, and each of them meeting your company through whichever channel they happened to use. When those touches come from departments that never coordinated, the buyer assembles a picture of a company that doesn't know who it's for. The spend was real; the impression was diffuse.

The obvious fix, telling everyone to "focus on enterprise," changes the slogan and leaves the wiring alone. Focus is a set of shared targets, shared data, and shared incentives, and no value statement substitutes for them. Absent those, the sales team's account list, the marketing team's audience, and the product team's roadmap drift apart within a quarter, and the company is back to running several funnels that happen to share a logo.

## Complications

- **Departments optimize local metrics.** Left alone, each function tunes to its own number (leads, tickets, bugs closed), and those numbers pull away from the short list of accounts that determine viability.
- **Enterprise buying is a committee crossing many touches.** Interactions across many channels precede a close, so no single function can win a Kingmaker alone; the account experiences the sum of them.
- **Coordination has a real cost.** Aiming everyone at the same accounts means shared account plans, shared data, and meetings a parallel-funnel org avoids, and that overhead pays off only when the target list is small and high-value.
- **The list must be shared and stable to coordinate on.** You can't align five functions on a target set that changes weekly, and every revision costs the other functions the account work they'd already started. [[MS-016 Power Law Accounts]] and [[MS-033 Spear Fishing]] supply the discipline that keeps the list from moving.
- **Broad-funnel infrastructure resists narrowing.** Tools, comp plans, and habits built for lead volume fight an account-based motion, because the legible metrics reward reach and punish the patience a named-account campaign requires.
- **Concentration raises the stakes on every touch.** When you bet on fifty accounts, a botched hand-off or an off-message support interaction with one of them is a measurable hit to the pipeline the whole company shares.

## Recommendations

> [!check] Set the named accounts once at company level and require the same list across demand generation, sales, content, product, and customer success. Any function using a different tier-one list fails the alignment test.

Jon Miller's Engagio was arguing for this in 2016 under the label Account Based Everything: account discipline that reaches past marketing into sales development, sales, and customer success. Start from the tier-one list that [[MS-016 Power Law Accounts]] and [[MS-033 Spear Fishing]] produce, and make it the company's list rather than the sales team's list. Then coordinate the functions in this order:

1. **Write an account plan per named account that every function can see.** Name the buying committee, the problem they're trying to solve, what would move them, and who owns the relationship.
2. **Fire every channel at the same accounts in the same window.** Run SDR outbound tuned to those accounts, retarget a manually uploaded list of the target companies with account-based advertising rather than a broad audience, write content for the specific problems those buyers have, and have executives carry the senior relationships. What matters is that they all hit the same accounts at once, so the committee meets a company that speaks with one voice from every direction.
3. **Extend the alignment past the sale.** The power law's economics live largely in expansion, so bend product prioritization toward what the named accounts need to succeed, use account-level qualification to tell a genuine expansion signal from noise ([[GTM-027 Product-Qualified Lead]]), and turn post-sale support into an expansion motion rather than a cost center to deflect ([[GTM-031 Support Is Sales]]). When a solutions engineer helps a Kingmaker survive a traffic spike, that's the renewal being earned; when a target account's power user hits the limits of the free tier, that's a qualified opening the whole revenue team should already know about.
4. **Build the shared data layer that makes it real.** Keep a single account record that marketing, sales, product, and success all read and write, so the left hand knows what the right hand promised.

Guard the coordination against its two predictable failures. Fight drift, where the list quietly reverts to whatever leads happen to arrive, by standing up a governance review that keeps the named list current and keeps comp and pipeline metrics pointed at it rather than at raw volume. Resist the pull toward custom work, since a company this focused on a few accounts feels every one-off request as pressure; answer a Kingmaker's specific ask with a general-purpose capability, a discipline that belongs to [[MS-016 Power Law Accounts]], and carry it into every function's backlog so the coordination doesn't harden into a bespoke build for one client. Run the governance review on a fixed cadence rather than when someone remembers.

## Implications

Wire the whole company to a shared account list and you turn the go-to-market from several funnels into one instrument, which opens the downstream patterns that run on account-level signal. Read [[GTM-027 Product-Qualified Lead]] at the account level, now that product and revenue read the same account record. Run [[GTM-031 Support Is Sales]] as a real expansion motion, because success is measured on the accounts that matter rather than on ticket volume. Sharpen the coordinated reputation work of [[GTM-012 Targeted Reputation Building]], since being known by the right buyers is easier when every function already aims at the same named people.

Enforce the discipline against the overhead and fragility that concentration creates. Coordination is expensive; it demands shared planning, shared tooling, and the patience to run campaigns a lead-volume dashboard will call slow. It pays only while the target list stays small and high-value, so don't let the list balloon or you lose the focus that justified the machinery. And because the whole company now shares a small pipeline, a fumbled hand-off with one named account costs more than it would in a diffuse model, which is the price the power law charges for the focus it hands back. Keep the governance that holds the list honest as a permanent discipline, revisited as accounts graduate onto the list, churn, or reveal themselves as customization traps.

## Related Patterns

- **Above:** [[MS-016 Power Law Accounts]] (the market-structure truth the coordination serves), [[MS-033 Spear Fishing]] (pursuing the named accounts precisely), [[GTM-012 Targeted Reputation Building]] (being known by the right buyers)
- **Below:** *(none yet)*
- **Peers / variants:** [[GTM-027 Product-Qualified Lead]] (product qualification per user and per account, which the coordination feeds), [[GTM-031 Support Is Sales]] (post-sale expansion as a coordinated motion)

## Examples

**Mesosphere aiming the company at a marquee deployment.** When we were building Mesosphere, we treated one Apple- or Verizon-scale production deployment as worth more than any volume of signups. Getting there meant more than a sales push; engineering prioritized the security and reliability work that account demanded, marketing built the narrative around that class of buyer, and support embedded with the team. We pointed the whole company at a handful of accounts, and the reference we earned changed every enterprise conversation that followed.

**Snowflake and Databricks anchoring on marquee logos.** Through the late 2010s and into the early 2020s, both Snowflake and Databricks built their enterprise positioning on named marquee customers. The public case studies, the conference keynotes, and the product roadmap all concentrated on the large data-platform accounts that defined the category, and the coordinated weight of those logos anchored the positioning that pulled the rest of the market along. Databricks put the concentration on the record in September 2023: of more than 10,000 customers, more than 300 were consuming at a $1 million annual run rate, against a $1.5 billion revenue run rate. Snowflake's August 2020 S-1 shows the same concentration, and [[MS-016 Power Law Accounts]] reads the numbers. Each go-to-market read as one company aimed at the accounts that set precedent.

**Aerospace, where the account list is two names.** Spirit AeroSystems' 2023 annual report puts about 83% of net revenues with its two largest customers, Boeing and Airbus, and approximately 70% of commercial-segment net revenues with Boeing contracts alone. Engineering, quality, program management, and pricing all organize by named program rather than by market segment, because the market is two customers and their aircraft. The concentration cuts both ways, which is this pattern's own warning in industrial form: when one of two customers slows a program, no other account exists to absorb it.

**The startup that coordinated around one client and became its dev shop.** The customization trap has a coordinated-org version I watched play out. A startup pointed everything at one large financial customer, and because every function obeyed that account, the roadmap, the support model, and the sales pitch all forked toward it. The company shipped what that client asked for, the codebase branched into a private build, and within a couple of years the product company had quietly become a service business for one logo. Coordinating the whole company on named accounts is powerful precisely because it's also the fastest way to build one-client software if you skip the generalization discipline.

