---
pattern: "Economic Moat"
aliases: ["Economic Moat", "Building a Moat"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]", "[[MS-026 Fast Follower Arrives]]"]
smaller: ["[[MS-028 Data Gravity Lock-In]]", "[[MS-029 Trusted Neutral]]", "[[GTM-014 Brand as Moat]]"]
source: "PDF pp. 1–20 (Building a Moat); Helmer's 7 Powers"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Features win the first sale; a moat is why you still have the customer, and the margin, three years later.*

> [!tldr] About this pattern
> A durable moat holds customers and margins after feature parity arrives; it ends the treadmill of defending every release with the next one. It sits below [[MS-001 Designed Market, Not Found Market]] and [[MS-026 Fast Follower Arrives]] and above [[MS-028 Data Gravity Lock-In]], [[MS-029 Trusted Neutral]], and [[GTM-014 Brand as Moat]].

> [!warning] Admonition
> Don't assume a win on features is durable. A feature that wins today is a roadmap item for a funded competitor tomorrow, and a price that wins today is a number any rival can match, so the lead expires.

In a market with no structural barrier, advantage is a treadmill: you sprint to stay a release ahead, margins compress toward cost as competitors converge on parity, and the customers you won on features leave the moment someone ships a better one. The fastest company in such a market holds a temporary condition and mistakes it for a position.

A moat is rarely something you can build in a hurry once you notice you need one; it accrues from choices made much earlier, in how you architect the product, how you price the business, and how you position the company in its ecosystem. By the time you feel competition converging, the window to have built certain moats may have closed. Warren Buffett's metaphor, set out in his 2007 letter to Berkshire Hathaway shareholders, is exact: a great business needs an enduring moat around its returns on capital, because the dynamics of capitalism guarantee that competitors will assault any castle earning high ones. A castle without a moat is only as safe as the day's balance of forces.

What separates a moat from a mere advantage is durability and structure. A better product is an advantage; a reason the customer can't easily leave, or the competitor can't easily match, is a moat. (The larger act of designing a defensible market is [[MS-001 Designed Market, Not Found Market]]; the pricing power a moat protects and the margin band it widens are both [[MS-020 Profitability Envelope]].)

## Complications

- **Features get copied; moats resist copying.** Any single capability can be replicated by a determined competitor, so advantage built only on features is temporary.
- **Moats accrue early and slowly.** Most durable advantages come from architectural, pricing, and positioning choices made long before competition arrives, and can't be assembled on demand.
- **A moat defends margin more than share.** The payoff is pricing power, since a defended position lets you hold price where a contested one forces a race to cost.
- **Different moats fit different businesses.** Switching costs, network effects, scale, a cornered resource, and a trusted position each suit particular structures, and a mismatched moat is no moat.
- **Moats decay if unattended.** No structural advantage is permanent; each erodes as markets mature and rivals adapt.

## Recommendations

> [!check] Build a structural reason customers stay and competitors can't quickly match. If a well-funded competitor copied the entire product tomorrow, name the specific reason the customer would remain; a current feature advantage fails the test.

Treat the moat as a first-class design decision, make it deliberately and early, and pick from the handful of structures that actually hold. Four of the five below are Hamilton Helmer's, from *7 Powers* (2016), which sorted persistent advantage into scale economies, network economies, switching costs, a cornered resource, counter-positioning, branding, and process power. The fifth is added here, because open-source and standards markets turn on a kind of advantage his list doesn't carry.

1. **Switching costs.** Make leaving painful through accumulated data, retrained workflows, and rebuilt integrations, the moat [[MS-028 Data Gravity Lock-In]] develops in full.
2. **Network effects.** Make the product more valuable as more people use it, so each new customer deepens the barrier.
3. **Scale economies.** Serve at a cost a smaller operator can't match.
4. **A cornered resource.** Hold an exclusive supply, a patent, or a uniquely productive team that rivals simply lack.
5. **A trusted, neutral position.** Occupy ground competitors can't take, because taking it would compromise the neutrality that makes the position valuable, the moat [[MS-029 Trusted Neutral]] develops.

Choose the one your business can actually build, because a company architected for switching costs and one architected for network effects look different from the start.

Reinforce the moat with the position and the position with the moat. A sharp [[MS-022 Positioning as Contrast]] or a created [[MS-023 Category Creation]] gives you a temporary lead; the moat converts that lead into a durable advantage before fast-followers arrive with the market's education already paid for. Aim the whole exercise at pricing power: a moat lets you hold price where a moat-less competitor is forced to discount, which lifts your [[MS-020 Profitability Envelope]] and sustains the pricing power a contested market would erode. Build the moat while you have the lead, because the lead is exactly what buys you time to build it.

Run a blunt test, early and often: if a well-funded competitor copied your entire product tomorrow, why would your customers stay. If the honest answer is that they wouldn't, you have features and no moat, however good the features. If the answer is that their data lives in you, or that the network is here, or that you're the neutral ground everyone trusts, you've named your moat, so invest in widening it. Treat the answer "because our product is better" as a warning, because it expires in release cycles. Run the test before you need it, since moats are cheapest to build early and nearly impossible to build in the panic after a fast-follower arrives. And hold the moat as a portfolio: the most durable companies usually hold more than one, so a competitor who neutralizes a single barrier still faces the others.

## Implications

A real moat changes the economics of the whole business. It protects margin and pricing power, lengthens customer lifetimes, and lets you invest from a position of safety rather than sprinting to stay a release ahead. It contains the specific structural moats developed downstream, [[MS-028 Data Gravity Lock-In]] and [[MS-029 Trusted Neutral]], and it sits inside [[MS-001 Designed Market, Not Found Market]] as the reason a designed market stays yours. Use it to widen a thin [[MS-020 Profitability Envelope]].

Hold the discipline against decay and against complacency. Some of the strongest moats can curdle into lock-in resentment: a switching-cost moat that becomes hostage-taking invites regulation and revolt, and a scale moat can blind you to a smaller rival attacking from an angle scale can't defend. Every moat erodes as the market matures, so never treat the work as finished; widen the moat continuously, or watch it silt up while you weren't looking.

A data platform that has become a company's system of record holds a switching-cost moat that has almost nothing to do with its current feature set: years of accumulated data and dozens of downstream integrations make migrating cost more than the gain, so a rival with a better product still can't win the account. This is the mechanism [[MS-028 Data Gravity Lock-In]] develops in full.

A standards body or an open, vendor-neutral platform holds ground no commercial competitor can take, because the moment a rival tries to occupy the same position it must do so as an interested party, which disqualifies it. Neutrality is itself the moat, so competitors can build a better product and still fail to be trusted the same way. This is the mechanism [[MS-029 Trusted Neutral]] develops.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]], [[MS-026 Fast Follower Arrives]] (the competitive response a moat is built to withstand)
- **Below:** [[MS-028 Data Gravity Lock-In]], [[MS-029 Trusted Neutral]], [[GTM-014 Brand as Moat]] (the moat built from accumulated trust rather than from switching cost)
- **Peers:** [[MS-020 Profitability Envelope]] (the pricing power a moat protects and the margin band it widens), [[MS-007 Maturity Kills Premium]] (the erosion a moat resists), [[MS-022 Positioning as Contrast]] (the lead a moat makes durable)

## Examples

**See's Candies, a moat with no feature to defend (1972 and 2007).** Blue Chip Stamps, which Buffett and Charlie Munger controlled at the time, bought See's in 1972 for $25 million when it had $30 million of sales and under $5 million of pretax earnings. In 2007, See's earning were $82 million pretax on $383 million of sales, having absorbed only $32 million of additional capital across the 35 years in between. Boxed chocolates went almost nowhere over that span: 16 million pounds sold in 1972 against 31 million in 2007, about 2 percent a year. No competitor could take the shelf See's held in the customer's head, and that's what held the price for three decades.

**The company that mistook fast for safe.** I watched a company win a category on sheer speed and confuse the lead for a moat. It shipped features faster than anyone for two years while holding no structural advantage underneath. Then a better-capitalized entrant matched the pace and undercut the price. With no switching cost, no network effect, and no cornered resource, customers left on the merits, and the "lead" turned out to have been a treadmill all along. Speed had won the sales; nothing had kept them. It never built a structural moat while the speed lead still bought the time to do it.
