---
pattern: "Single Primary Motion"
aliases: ["Single Primary Motion", "One Motion Leads", "Motion Follows Structure", "Sales Motion Spectrum", "Market Structure Determines the Motion"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]", "[[MS-002 Market Type Sets the Playbook]]"]
smaller: ["[[GTM-002 PLG-SLG Hybrid]]", "[[GTM-003 Founder-Led Sales]]", "[[GTM-004 Repeatable Sales Motion]]", "[[GTM-009 Awareness Cascade]]", "[[GTM-008 Demand Creation vs. Demand Capture]]", "[[GTM-026 Growth Loop]]", "[[GTM-024 Partner Force Multipliers]]"]
source: "PDF pp. 121–140 (Phase 4 motion selection, PLG/SLG/hybrid economics); pp. 1–40 raw (PLG-to-sales handoff); absorbs MS-006 (the Part I to Part II bridge) and GTM-002 (the motion continuum)"
created: 2026-08-01
modified: 2026-08-16
tags: [pattern]
---

> *A company can run many supporting systems, but only one motion can lead; the rest fall in behind it or quietly fight it.*

> [!tldr] About this pattern
> A primary motion is the one route to market that the product, price, committee, and account structure can all support. Every secondary system falls in behind it. It sits below [[MS-001 Designed Market, Not Found Market]] and [[MS-002 Market Type Sets the Playbook]] and above [[GTM-002 PLG-SLG Hybrid]], [[GTM-003 Founder-Led Sales]], [[GTM-004 Repeatable Sales Motion]], [[GTM-009 Awareness Cascade]], [[GTM-008 Demand Creation vs. Demand Capture]], [[GTM-026 Growth Loop]], and [[GTM-024 Partner Force Multipliers]].

> [!warning] Admonition
> Don't run a self-serve motion and a field sales motion at full strength at once. They hand the product, the price, and the comp plan contradictory instructions, and you end up with two half-motions and no way to tell which one is failing.

A company splits the motion choice because the companies worth imitating visibly run both. It stands up a self-serve funnel and a field sales team in the same quarter, prices for a credit card and for a procurement cycle at once, writes content for developers and for CIOs, and comps reps on bookings while asking them not to interfere with self-serve users. Each half is coherent alone. Together they pull the product in two directions and confuse everyone who touches it.

The contradictions are concrete. A self-serve motion wants a frictionless free entry and a price a single user can approve; a field motion wants a "contact sales" wall and a negotiated contract. A product built to sell itself hides the sales team; a product built for a demo assumes the sales team is there. The self-serve motion measures activation and product-qualified signals; the field motion measures meetings and pipeline. With both running at once, reps chase individual free users who have no authority to buy, marketing optimizes a funnel the enterprise buyer will never traverse, and the roadmap splits between self-serve polish and enterprise controls with neither getting finished. Dave Kellogg is blunt about where that lands: most go-to-market failures are a motion forced onto a structure that can't carry it, either a low-touch product motion bolted onto a deal that needs hands-on selling, or a sales team burning cash to sell something users would happily adopt on their own.

The deeper cost is diagnostic blindness. When one motion leads and underperforms, you know where to look. When two run at once, the numbers come back mediocre, and nobody can tell whether the self-serve funnel is broken, the sales team is mis-hired, or the two are cannibalizing each other, so every fix is a guess.

The choice is also narrower than it feels. Motions range continuously by how much human labor sits between a stranger and a paying customer, from zero at the self-serve pole, through a sales-assisted middle, to a full field team with sales engineers at the other end. Every point on that line costs something, and the deal has to be big enough to cover it. Christoph Janz worked the arithmetic in "Five Ways to Build a $100 Million Business" (2014), sorting software companies by annual revenue per customer: elephants at $100,000 a year, then deer, rabbits, and mice, down to flies at $10, with each band matched to the only acquisition model its revenue can fund. Elephants get a field team; flies get self-serve and word of mouth. Your price band fixes your place on the line, and your preference doesn't get a vote.

The structure you designed has usually settled the question already, which is why imitation is expensive: a motion copied from a company you admire arrives carrying the requirements of that company's structure. A product priced at $19 a month ([[MS-018 Price Creates the Buyer]]) can't carry a field sales team, because the unit economics forbid it and the practitioner who adopts it won't take a sales call. A $500,000 purchase run by a [[MS-012 Buying Committee]] can't be bought through a self-serve checkout, because no checkout clears a security review and a procurement cycle. A field team on a low-price product burns cash on every deal; a self-serve checkout on a high-price product gets no clicks. Effort doesn't rescue either one. The stall is a motion at war with the structure.

## Complications

- **Each structural element rules motions out.** The price band, the split between user and payer, the committee's size, and the account concentration each forbid certain motions outright, and a motion run against one of those vetoes fails slowly enough to read as an execution problem.
- **Every supporting system has to point somewhere.** Product, pricing, content, comp, and support each embed an assumption about how the customer buys. Two motions hand them two contradictory assumptions and they satisfy neither.
- **The buyer's entry is single.** A given customer either lands by trying the product or by taking a meeting, and the motion that governs that first step shapes everything after it.
- **Comp plans enforce a motion whether you meant them to or not.** Reps paid on bookings produce a sales-led motion in practice, whatever the strategy deck says.
- **Focus compounds; division dilutes.** One motion run well accumulates learning, reference customers, and a repeatable playbook, while two half-funded motions each stay sub-scale.
- **Neither pole is cheap; they're differently expensive.** A self-serve motion trades sales salaries for product, onboarding, and growth engineering. Benchmarkit's 2025 SaaS Performance Metrics report puts sales and marketing at 37% of revenue for the median company surveyed, ahead of R&D at 34% and G&A at 24%, so go-to-market stays the largest operating line whichever motion runs.
- **Markets still evolve, so the motion isn't permanent.** A structure that permitted only self-serve at $19 can later carry a field team once enterprise demand appears.
- **Real companies do blend eventually.** The mature examples run more than one motion, which tempts you to start blended; the blend arrived after one motion was already working.

## Recommendations

> [!check] Read the primary motion off the market structure you designed, choose that one motion to lead the whole go-to-market system, align product, pricing, content, comp, and support behind it, and add a second motion only by sequencing or layering it under the lead once the first motion works, rather than running two co-equal motions at once.

Four facts from Part I decide which motion leads. Score each one, then count the vote:

1. **Price band.** [[MS-018 Price Creates the Buyer]] sets what the unit economics can afford: a low price votes self-serve, a high price votes field.
2. **Who lands first.** [[MS-014 Practitioner and Purchaser Are Different People]] sets the point of entry: a practitioner who arrives first votes bottom-up, a purchaser who arrives first votes top-down.
3. **Committee size.** [[MS-012 Buying Committee]] sets the sales complexity: more seats and more vetoes vote for more human selling.
4. **Concentration.** [[MS-016 Power Law Accounts]] sets reach against focus: a fragmented market votes for a volume funnel, and a power-law market votes for the named-account pursuit of [[MS-033 Spear Fishing]].

Count the vote honestly. A low price, a self-adopting user, a single approver, and a fragmented market vote unanimously for self-serve; a high price, a committee, several vetoes, and a handful of decisive accounts vote for field sales. When the four split, your structure is genuinely hybrid, so lead with the motion the price band can afford and layer the other beneath it as the structure earns it. Then price the touch: estimate the fully loaded cost of the human contact a deal would need, and compare it against the deal's contribution over its expected life. Where the deal can't repay the touch, move toward self-serve. Score the four facts this way and you'll rarely argue yourself into a motion your own structure can't pay for.

Point every system at the winner. Design first contact, the demand engine, the pricing model, the channel mix, and the [[GTM-026 Growth Loop]] to reinforce that single path. Treat any supporting system that fights the lead as the tell that you've drifted back into two, and fix it.

Run a hybrid as a sequence or a layer under one lead. The common healthy path is product-led first, then a sales-assist layer added once product-qualified signals appear: self-serve with a safety net. The reverse also works: founder-led enterprise deals first, then a self-serve tier once the product can carry adoption alone. In both, one motion leads and the other arrives later, subordinate; the trigger rule for when a human enters an account belongs to [[GTM-002 PLG-SLG Hybrid]]. McKinsey and Kellogg both argue that even product-led companies should add a sales pipeline; add it as a second source under a primary motion, and staff it to serve the lead. Point traditional quota-carrying closers at individual self-serve users and you destroy the low-friction experience the product promised.

Test the result: ask whether a new hire in any function can name the primary motion in one sentence and whether their own system reinforces it. If two motions get named, you're paying for both and getting the full value of neither, so cut back to one and re-align.

## Implications

With one motion chosen, the rest of Part II has a spine, and all of it, the sales motions, the demand engine, the pricing systems, the growth loops, is the operational working-out of the structure Part I designed. Develop the sales-assisted middle through [[GTM-002 PLG-SLG Hybrid]], and handle the early and scaled forms of a sales lead with [[GTM-003 Founder-Led Sales]] and [[GTM-004 Repeatable Sales Motion]]. Build first contact, the [[GTM-009 Awareness Cascade]] and [[GTM-008 Demand Creation vs. Demand Capture]] of the demand engine, the pricing and packaging systems, the channel routes, and the compounding [[GTM-026 Growth Loop]] to reinforce the single motion, which is what lets the operations layer of Part III instrument one path instead of two. Read most go-to-market failures as structure-motion mismatches before you read them as execution problems.

Hold the discipline against two pressures. Markets change while comp plans and org charts resist changing with them, so a motion correct at launch can fall out of alignment as you cross the [[MS-017 Adoption Curve Ownership]] or move along the [[MS-006 Wedge-to-Platform Gradient]]; re-read the structure and re-sequence, adding a layer or shifting the lead, rather than freezing the first choice. And resist the standing pull of ambition: a growing company wants every motion at once, so make the second motion earn its place under the first rather than beside it.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]] (the designed structure the motion is read off), [[MS-002 Market Type Sets the Playbook]] (whether demand exists yet, which the four transaction variables can't tell you)
- **Below:** [[GTM-002 PLG-SLG Hybrid]], [[GTM-003 Founder-Led Sales]], [[GTM-004 Repeatable Sales Motion]], [[GTM-009 Awareness Cascade]], [[GTM-008 Demand Creation vs. Demand Capture]], [[GTM-026 Growth Loop]], [[GTM-024 Partner Force Multipliers]]
- **Peers / variants:** [[MS-018 Price Creates the Buyer]] (the price band), [[MS-014 Practitioner and Purchaser Are Different People]] (the entry point), [[MS-012 Buying Committee]] (the sales complexity), [[MS-016 Power Law Accounts]] (reach against named-account focus), [[GTM-028 Sales-Assisted Conversion]] (the layer added under a product-led lead)

## Examples

**Atlassian's product-led lead, sales added later.** The F-1 Atlassian filed on 9 November 2015 describes a company selling "without traditional sales infrastructure": over 98% of transactions ran through its website, and in the fiscal year ended 30 June 2015 it spent 44% of revenue on research and development against 21% on marketing and sales. That bought more than 51,000 customers by 30 September 2015, 79 of the Fortune 100 among them. The sales layer arrived later and stayed subordinate. Atlassian's fiscal 2025 10-K still leads with the low-touch flywheel and says the company has "strategically grown our sales team to focus on expanding the relationships with our existing customers, particularly large enterprises," because it doesn't need a commissioned direct force "until a customer reaches a specific size."

**Snowflake's field lead, with a trial underneath.** Snowflake's deals were large and consumption-heavy from the start, bought by data-platform committees at Fortune 500 scale, so its primary motion sat at the field pole. The S-1 it filed in August 2020 put a direct sales force at the center, segmented by the size of the prospective customer and aimed at technical and business leaders in large enterprises, with a self-service trial running underneath to reach the analysts and engineers who would run the queries. No individual engineer clears an enterprise data-platform purchase alone, so the structure chose the motion.

**Dell ran two motions, then kept one (1994).** Dell's own filings show both motions running at once and then one being switched off. The 10-K for the year ended 30 January 1994 names the retail channel, "Best Buy, CompUSA, and Sam's Clubs in the United States," and splits the product line between the two: the Dell Dimension line "is marketed through the Company's direct sales force," the Dell Precision line through the stores. The same filing gives the case for direct, which avoids "high inventory and occupancy costs of physical stores" and the "mark-ups associated with the typical industry model." The next year's 10-K records the decision in one sentence: "In June 1994, the Company adopted a plan to discontinue sales through consumer retailers in the United States and Canada to better focus on its direct marketing model." No software anywhere in that arithmetic; a boxed computer and a retail shelf were enough to force the choice.

