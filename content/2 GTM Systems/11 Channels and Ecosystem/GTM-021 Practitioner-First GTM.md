---
pattern: "Practitioner-First GTM"
aliases: ["Practitioner-First GTM", "Win the Practitioner First"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[MS-014 Practitioner and Purchaser Are Different People]]"]
smaller: ["[[GTM-010 Technical Content Marketing]]", "[[GTM-023 Public API Flywheel]]", "[[GTM-022 Developer Advocacy]]", "[[GTM-005 Permissionless First Contact]]"]
source: "PDF pp. 1–40 raw (Practitioner-First GTM ethos); pp. 121–140 (developers hate being sold to)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *In a technical market the person who adopts your product shows up years before the person who signs for it, so point the whole motion at them.*

> [!tldr] About this pattern
> A practitioner-first motion earns adoption with hands-on users before the purchase reaches the person who signs. It sits below [[MS-014 Practitioner and Purchaser Are Different People]]; [[GTM-010 Technical Content Marketing]] teaches, [[GTM-023 Public API Flywheel]] supplies distribution, [[GTM-022 Developer Advocacy]] supplies the peer relationship, and [[GTM-005 Permissionless First Contact]] supplies access.

> [!warning] Admonition
> Don't open by pitching the buyer in a technical market. The purchaser won't commit until the practitioner has adopted the product, so you're talking to someone with no reason to say yes yet and skipping the person who makes the sale possible.

The practitioner is whoever does the work inside the tool: the developer, the site reliability engineer, the data scientist, the analyst. In these markets that person adopts, evaluates, and starts to depend on a product long before anyone with a budget is involved. The motion that worked in older enterprise sales, the one that builds a deck, books a meeting with a director or a VP, and sells the account from the top, arrives at the wrong door here. The reason is plain: developers hate being sold to. A practitioner who catches the scent of a pitch closes the tab and goes back to the docs.

The cost of getting this backward is a signature laid over an indifferent or hostile base. An executive can be persuaded by an ROI deck to sign a contract the people below them never asked for. Then the rollout meets the practitioners, who were never won and often resent the imposition, and the product sits unused until someone cancels it at renewal. What the purchase was buying was adoption, and the adoption was never there.

The obvious fixes each make it worse. More sales pressure on a skeptical practitioner base reads to them as more marketing to discount, and turning up the volume with demos and outbound never reaches a person whose trust is earned through substance and through trying the thing themselves. The practitioner judges on whether the product works in their hands, and no persuasion aimed at their boss shortcuts that judgment.

## Complications

- **The practitioner adopts before the purchaser exists.** In technical markets usage starts at the individual level and accumulates for months or years before a budget conversation happens, and the revenue waits out every month of it.
- **Practitioners distrust being sold to.** Developers hate being sold to, and a sales-shaped approach repels the exact people whose adoption you need.
- **Trust here is earned through substance.** A technical audience gives credence to working code, honest documentation, and people who clearly know the craft, each of which costs engineering time that no marketing budget can substitute for.
- **Self-serve access beats a scheduled demo.** A practitioner who can reach real value on their own, without asking permission or booking a call, evaluates faster and trusts more than one funneled through a gated demo.
- **The practitioner becomes the internal champion.** Someone who already relies on a tool argues for it from the inside when the purchase decision arrives, a pull no top-down pitch can manufacture.
- **A top-down entry meets a wall below it.** A contract signed at the top lands over practitioners who feel imposed on, and their indifference quietly starves the deployment and kills the renewal.

## Recommendations

> [!check] Aim the entire go-to-market motion at the practitioner first, earning their adoption and trust through substance and self-serve access, so that by the time a purchase decision arrives the practitioner is already a champion pulling the product in from the bottom up.

Make the hands-on user the first market and design every early surface for them:

1. **Teach instead of pitching**, so a practitioner researching their own problem finds material worth their time. That work belongs to [[GTM-010 Technical Content Marketing]].
2. **Ship a public API** that lets them build something real without a sales conversation. That's developed in [[GTM-023 Public API Flywheel]].
3. **Put credible technical people into the community as peers** rather than sellers. That function belongs to [[GTM-022 Developer Advocacy]].
4. **Open a path to first value that needs no one's permission**, spelled out in [[GTM-005 Permissionless First Contact]].

Each of these is a distinct tactic; this pattern's job is to insist they all serve one posture and run in one order, the practitioner before the purchaser.

Hold the sequence, because the sequence is the whole point. A practitioner who has read your writing, built against your API, and reached value on their own has formed a judgment you never had to argue for. When their organization eventually needs to standardize, secure, or scale what they're already using, the budget conversation starts from adoption that already exists, and the practitioner carries the case upward because it's their own tool they're defending. Let sales overlay a motion that's already moving; it closes and expands rather than persuading a cold account. Start product-led and layer enterprise sales on top only when IT enters, which is the same sequence stated as tactics. Blake Bartlett named that motion product-led growth at OpenView in 2016, and Wes Bush's *Product-Led Growth* (2019) worked it into a playbook.

Refuse the top-down motion that pitches the executive buyer first. It can produce a signature faster, and for a quarter it looks like the better path. Underneath it the practitioner base was never won, and a deployment no one below the signer wanted decays into shelfware. Practitioner-first is slower to show a contract and far more durable once it does, because the adoption it's built on is the thing that makes the contract renew. Take the durable path and hold your nerve through the slower quarter.

## Implications

Commit to a practitioner-first posture and it organizes the rest of the motion. Build and staff docs, an API, a self-serve tier, and developer advocates first, ahead of a field sales team and an outbound engine. Track active practitioner adoption as the leading indicator that a paying account is possible at all, and reorder the calendar so trust and usage accumulate long before the first serious sales conversation. Turn the four smaller patterns, [[GTM-010 Technical Content Marketing]], [[GTM-023 Public API Flywheel]], [[GTM-022 Developer Advocacy]], and [[GTM-005 Permissionless First Contact]], into the concrete program, and make each inherit the same rule from here: serve the practitioner, do not sell them.

Enforce patience against pressure, which is the tension the posture creates. Practitioner adoption compounds, and it does not convert to revenue on the timeline a top-down deal can, and much of its early progress is usage without a contract behind it. Don't bolt on aggressive sales too early and poison the trust you've been building. Hold the other standing tension too, monetization: winning the practitioner earns the precondition for the purchase without closing it, so build the crossing from adopted user to paying account deliberately, the bridge owned by [[MS-014 Practitioner and Purchaser Are Different People]]. This pattern gets you the first half of that structure, a practitioner who already wants the product.

## Related Patterns

- **Above:** [[MS-014 Practitioner and Purchaser Are Different People]] (the market-structure split this posture responds to)
- **Below:** [[GTM-010 Technical Content Marketing]], [[GTM-023 Public API Flywheel]], [[GTM-022 Developer Advocacy]], [[GTM-005 Permissionless First Contact]]
- **Peers:** [[GTM-001 Single Primary Motion]] (the motion continuum this posture usually rides the self-serve end of), [[GTM-009 Awareness Cascade]] (the practitioners the cascade starts with are the same first market)

## Examples

**Stripe and Twilio winning developers first.** Both companies aimed everything early at the individual developer. Stripe launched in 2011 with a payments API a developer could integrate in an afternoon, and Twilio had done the same for telephony from 2008: clean documentation, a few lines of code to first value, and no sales call in the way. The purchasers came later, once the product was already embedded in production. The order was practitioner adoption first, contract second.

**MongoDB, Docker, and HashiCorp spreading through adoption.** Practitioners pulled the software into their own work and standardized on it team by team. MongoDB (2009), Docker (2013), and HashiCorp (2012) each grew this way. Engineers adopted the tools because they solved a problem in their hands, told their peers, and standardized on them. Enterprise revenue arrived afterward, built on a base of practitioners who were already dependent and ready to champion the purchase upward.

**GitHub's bottom-up developer adoption.** From 2008, GitHub won individual developers first, hosting their code and their communities, and sold to teams and enterprises only after developers had made GitHub the place they already worked. The buyer was ratifying a choice the practitioners had made rather than being persuaded cold.

