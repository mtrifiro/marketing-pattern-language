---
pattern: "Data Gravity Lock-In"
aliases: ["Data Gravity Lock-In", "System of Record"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-027 Economic Moat]]", "[[MS-026 Fast Follower Arrives]]"]
smaller: []
source: "PDF pp. 1–20 (moat patterns; system of record)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Become the place the data lives, and mass starts attracting mass: the more they store, the harder it is to leave.*

> [!tldr] About this pattern
> Data gravity builds when a product holds the authoritative record and surrounding tools depend on it; every byte and integration raises the cost of leaving as the product becomes more useful. It is a specific [[MS-027 Economic Moat]] and a defense against [[MS-026 Fast Follower Arrives]].

> [!warning] Admonition
> Don't settle for a product that processes a customer's data and leaves the authoritative copy somewhere else. Every advantage then sits on the surface, where a rival that ships something better can run beside you and take the account.

A product that holds no authoritative data is structurally replaceable. Swapping the product out changes one step in a pipeline without disturbing where the data resides, so the customer evaluates a competitor on the merits and moves. The advantage never rises above the current feature set. This is the moat-less condition [[MS-027 Economic Moat]] warns about, seen from the angle of data: if nothing accumulates in you, nothing holds the customer to you.

The opposite condition compounds. When a product becomes the system of record, the authoritative home for data a business depends on, the physics of the account change. Dave McCrory coined the phrase in a 2010 blog post: data has gravity, and the more of it that lives in one place, the more the tools, reports, integrations, and workflows around it assume it lives there, and the more expensive it becomes to move. He was describing where applications and services end up running. The commercial consequence is that the account stops being winnable on features. A team that has stored three years of history, built forty dashboards, wired in a dozen downstream systems, and trained its analysts on your product's quirks has stopped evaluating a competitor on features. It is weighing all of that against the cost, risk, and disruption of a migration, and usually the migration loses, defeated by the difficulty of leaving.

Gravity usually arrives by accident. Companies that end up with it often stumble into it, and companies that badly want a moat often build products that deliberately keep the data elsewhere, giving away the position that would have held their customers. The general moat this instantiates is [[MS-027 Economic Moat]]; the price ceiling it protects sits inside [[MS-020 Profitability Envelope]]; the metering it pairs with is [[MS-019 Unit of Value]].

## Complications

- **Data that lives elsewhere holds no one.** A product that only passes data through leaves the customer free to switch, so its advantage never exceeds its current features.
- **Gravity compounds.** Each added byte, integration, and dependent workflow raises the switching cost, so the moat deepens as the customer succeeds.
- **The barrier is the customer's own investment.** What holds the customer is the work they've built on top of the data, which makes the lock-in feel self-imposed.
- **Openness and gravity pull against each other.** Portability wins the first deal and loosens the hold afterward, and the first deal is the one with a date on it.
- **Strong gravity invites resentment and scrutiny.** A moat that shades into hostage-taking breeds distrust and regulatory attention.

## Recommendations

> [!check] Make the product the authoritative system of record so accumulated data and dependencies raise the cost of leaving. The moat passes only if a customer who could export cleanly today would still choose to stay.

Design for accumulation from the start. Make the product the authoritative home for the data that matters rather than a transient processor of it. Then work the sequence in the order that holds, because most companies get it backward:

1. **Win the first deal on genuine value and generous interoperability.** Make staying worthwhile before you make leaving hard. Give the customer every reason to consolidate more of their data and workflows into you because it works and they trust you.
2. **Build the surrounding surface so value compounds inside the product.** Integrations, history, derived artifacts, and workflows should accrue in you rather than pass through you.
3. **Give downstream systems reasons to depend on the data being there.** Every dependency is another strand of the barrier, so make the data useful to the systems around it.
4. **Meter on the data itself.** Pair the gravity with a [[MS-019 Unit of Value]] tied to storage, records, or usage that grows with accumulation, so revenue rises as the moat deepens and the customer's success and your defensibility move together.

Do not gate export before the accumulation is worth having. Lock-in engineered purely to make leaving painful is resented, invites regulation, and eventually provokes the revolt it was meant to prevent. Lock-in that comes from compounding value, where the data really is more useful where it is and the integrations really do work, is durable and welcome. The switching cost that holds is the one the customer built with their own hands, because they are invested rather than trapped, and invested customers defend the incumbent. Reverse the order, making export painful before making accumulation worthwhile, and you get a thin, brittle moat and a reputation that undermines the next deal. Test yourself honestly: if a customer could export cleanly today, would they still stay? If the answer is no, stop welding doors and go make the product worth keeping.

## Implications

Hold real data gravity and you keep customers and pricing through feature parity and price attacks, because the customer's alternative has become "undertake a migration" and that reframing is worth more than any feature. Expect this to be the most common structural moat in data and infrastructure businesses, and carry it into the expansion economics of Part II: an account anchored by its data expands as that data grows, so plan to grow inside accounts rather than only to win new ones. It sits inside [[MS-027 Economic Moat]] as one of its most dependable forms.

Enforce the discipline that keeps gravity and goodwill aligned. The same force that protects the account can, taken too far, turn customers into hostages, and a hostage is a customer looking for an exit and a regulator to help. Expect antitrust and portability scrutiny as you grow. Build the moat on value the customer is glad to have accumulated, keep telling the difference between earned gravity and welded doors, and revisit that judgment as you scale.

A customer-data or analytics platform holding years of records, the dashboards built on them, and the downstream systems that read from them turns a vendor switch into a migration project with real risk and real cost. Competitors demo better products into these accounts routinely and lose, because the buyer has stopped comparing features and is weighing "keep what works" against "move everything and hope." Build the accumulation and the gravity holds the account.

## Related Patterns

- **Above:** [[MS-027 Economic Moat]], [[MS-026 Fast Follower Arrives]] (the follower risk this moat helps contain)
- **Below:** *(none yet)*
- **Peers:** [[MS-020 Profitability Envelope]] (the ceiling data gravity protects and the margin the moat defends), [[MS-019 Unit of Value]] (metering on the data that accumulates), [[MS-029 Trusted Neutral]] (the alternative moat when openness is the position)

## Examples

**Snowflake metered the gravity (2020).** Snowflake bills for stored data and for the compute its queries consume, so every byte a customer entrusts to it raises the switching cost and the bill in the same motion. Its August 2020 S-1 reported net revenue retention of 158 percent across 3,117 customers as of 31 July 2020. That's what expansion looks like when the [[MS-019 Unit of Value]] and the moat are the same accumulating thing: revenue grew inside existing accounts without a new sale.

**Iron Mountain, gravity you can weigh (2025).** Iron Mountain stores paper, and its 2025 Form 10-K puts the total at over 740 million cubic feet of physical records for more than 240,000 customers in 61 countries, on roughly $6.9 billion of revenue. A customer who wants out has to move the boxes, re-index them, and keep satisfying a retention schedule while doing it, so what holds the account is accumulated mass rather than any feature of the shelving. The same physics runs well outside software; software only makes the accumulation cheap enough to reach this scale.

**Gravity that turned to grievance.** I've watched a company make export deliberately painful and hope friction alone would hold its customers. It worked for a while and then broke outward. The lock-in was resented rather than earned, and when a credible, more open alternative appeared, customers who had felt trapped left in a rush and told everyone why. A moat welded shut holds only until someone opens a door.
