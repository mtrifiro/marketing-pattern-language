---
pattern: "Price Creates the Buyer"
aliases: ["Price Creates the Buyer", "The Price Tag Is the Bouncer"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: ["[[MS-019 Unit of Value]]", "[[MS-021 Free Changes the Question]]", "[[MS-020 Profitability Envelope]]", "[[MS-036 Unit Economics as Market Truth]]", "[[GTM-018 Good-Better-Best]]", "[[CR-030 Pricing Page Transparency]]"]
source: "PDF pp. 321–354 (Book Proposal essay, 'The Price Tag is the Bouncer', Jan 2026)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Your messaging says "enterprise," but your price tag says "hobbyist," and the price tag always wins.*

> [!tldr] About this pattern
> Price summons a buyer before a message reaches them, since each band opens a different procurement path and attracts a different organization with its own risk tolerance. It sits below [[MS-001 Designed Market, Not Found Market]] and above [[MS-019 Unit of Value]], [[MS-021 Free Changes the Question]], [[MS-020 Profitability Envelope]], [[MS-036 Unit Economics as Market Truth]], [[GTM-018 Good-Better-Best]], and [[CR-030 Pricing Page Transparency]].

> [!warning] Admonition
> Don't build the product, pick the market, craft the message, and then slap a number on it. The number you land on has already set the procurement path, and the procurement path has already picked the buyer's job title.

You'll see this play out in early-stage board meetings. The team reaches the pricing slide, having built a careful financial model and argued over whether the Pro tier should be $29 or $39, and someone asks whether the messaging is reaching the enterprise buyer. The honest answer is usually that the messaging says "enterprise" while the price tag says "hobbyist," and the price tag wins. Pricing sits at the end of the chain in most companies and acts on everything upstream of it. Madhavan Ramanujam and Georg Tacke argued the same sequence in *Monetizing Innovation* (2016), where the instruction is to design the product around the price instead of pricing whatever you finished building. Their case is about capturing value; this one is about which buyer the number lets in. Price is a filter as much as a meter, and it's the single most deterministic factor in the business. It sets the sales motion, the churn rate, the roadmap, and, above all, who walks through the door.

The mechanism is concrete. A price designs the procurement process the customer has to pass through, and that process picks the person with authority to run it. Messaging can't reach a CIO through a $19-a-month credit-card charge, and a bottom-up developer movement won't form behind a "contact sales" wall and a $50k minimum. Christoph Janz worked the same terrain from the other side in "Five Ways to Build a $100 Million Business" (2014), sorting companies by annual revenue per customer and matching each band to the acquisition model that revenue can fund. The bands read the other way too, from the number to the buyer it selects, and three gravitational zones appear there, each one summoning a different organization.

In the coffee-money zone ($10–99 a month), your buyer is an individual contributor, a developer, a freelancer; the mechanism is a credit card with no approval needed; the psychology is "I need this to do my job right now." That number selects for someone who values speed over governance: they don't care about single sign-on or role-based access or SLAs, they care whether the docs are good and whether they can start without talking to a human. A sales call forced into that zone kills the funnel.

In the managerial zone ($5k–25k a year), your buyer is a team lead or director with discretionary budget that needs a manager's nod but stays clear of the CFO; the psychology is "my team needs to be more efficient," which means they want the productivity and the reporting to justify the spend to their boss.

In the enterprise zone ($100k+ a year), your buyer is the C-suite, procurement, and the security review board; the mechanism is capital expenditure, purchase orders, legal, and audits; the psychology is "we need to reduce risk and standardize." A delightful UI counts for nothing here; without SOC 2 and a named customer-success manager, you're vaporware.

A low price looks like a way to reduce friction and reads, in B2B, as high risk. To an enterprise buyer the license is a sliver of total cost of ownership, since the real money goes to implementation and change management, so a CIO who sees $50 a month thinks, "A toy. It won't have the support we need, it'll be gone in 18 months, and I can't bet my career on it." A low number attracts the budget-conscious and repels the serious buyers who have the real problems and the real budgets. (What you actually price on is owned by [[MS-019 Unit of Value]]; how high the ceiling sits is [[MS-020 Profitability Envelope]]; whether a free tier rewrites the entry logic is [[MS-021 Free Changes the Question]]; and the split between the person who uses the tool and the person who pays for it is [[MS-014 Practitioner and Purchaser Are Different People]].)

## Complications

- **Signal as much as cost.** Price reads as a proxy for value and for risk, so a low number can repel the buyers you most want and a high one can attract them. The number still has to cover what the product costs to serve, and the two jobs rarely point at the same figure.
- **Each band implies a decision-maker.** An expense report, a discretionary budget, and a capital expenditure are three different procurement machines, and each hands the decision to a different title. You can aim the message at whichever title you want; the number decides which one actually gets the file.
- **Economics permit one motion.** The unit economics of a price point afford exactly one sales motion; a $100-a-month product can't fund a field team, and a $100k product can't survive pure self-serve, so crossing the streams burns cash (the full treatment is [[MS-036 Unit Economics as Market Truth]]).
- **Delight is band-specific.** What wins the coffee-money buyer (docs, speed, no sales call) is irrelevant to the enterprise buyer (compliance, support, risk), so one price can't satisfy both sets of expectations.
- **Price moves the conversation up or down.** A large number forces the decision up to an executive who cares about outcomes; a small one sends you to a manager comparing feature grids.
- **It's controllable and deferred anyway.** You can set price directly and instantly, so it feels like a decision that can wait for a growth hacker later. Meanwhile the number is already selecting your customers, and has been since the first sale.

## Recommendations

> [!check] Set the price first and choose it by naming the buyer it should summon. A proposed price passes only when the CEO can name the buyer's title and the procurement path the number creates.

Start from the buyer you designed the market for, price into their zone, then build the motion, the product surface, and the support model that zone demands:

1. **To serve the developer,** price for the credit card, build for self-serve, and accept high churn and a volume game.
2. **To serve the enterprise,** price for the budget cycle, build for compliance, and accept long cycles and a focus on net revenue retention.

Do not straddle them. Sell a $100k product through a self-serve checkout and nobody clicks; sell a $10k product with a field team and steak dinners and the cash runs out.

Use price to set the expectation of value, so a higher number does positioning work rather than taxing it. Enterprise software behaves a little like a Veblen good. Position as a strategic platform rather than a utility and the buyer weighs you against a different budget than "servers per dollar" and a different comparison set than the utilities. Ask for $500k and you're escorted to the executive floor, because a Director of IT has no signature authority at that number, and you're now talking to the people who care about outcomes instead of feature parity. Ask for $5k and you're sent to the manager with the grid. Set the price and you choose the altitude of the conversation as surely as you choose the buyer.

## Implications

Set price as strategy and the rest of the business lines up behind it: the motion, the churn profile, the roadmap (docs versus SSO and compliance), and which [[MS-017 Adoption Curve Ownership]] you can reach. Hand the downstream pricing patterns their starting point: [[MS-019 Unit of Value]] (the thing you meter), [[MS-020 Profitability Envelope]] (the ceiling your position sets and the margin band it leaves), and [[MS-021 Free Changes the Question]] (when zero is the entry price). Make it agree with the economics in [[MS-036 Unit Economics as Market Truth]] or the model breaks. Because price and buyer select each other, treat it as inseparable from [[MS-010 ICP Definition]]: change the price and you've changed the ICP whether you meant to or not.

Accept the fork; there's no dial to split the difference. A price that selects a premium buyer forecloses the volume buyer, and the reverse holds too. You can't serve the enterprise at developer prices without looking incompetent, or serve developers at enterprise prices without being ignored. Hold your price against the constant pull to discount for a mismatched deal; that discipline is its own pattern, which is why [[MS-034 No Is the Most Profitable Word]] sits just downstream.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** [[MS-019 Unit of Value]] (the thing you meter), [[MS-021 Free Changes the Question]] (when zero is the entry price), [[MS-020 Profitability Envelope]] (the ceiling your position sets and the margin band it leaves), [[MS-036 Unit Economics as Market Truth]] (the math a price point makes solvable), [[GTM-018 Good-Better-Best]] (the tiers the number gets split into), [[CR-030 Pricing Page Transparency]] (publishing the number)
- **Peers:** [[MS-010 ICP Definition]] (price and ICP select each other), [[MS-017 Adoption Curve Ownership]] (each segment carries its own price), [[MS-014 Practitioner and Purchaser Are Different People]] (the user isn't the payer), [[MS-034 No Is the Most Profitable Word]] (refusing the buyer the price excludes)

## Examples

**The $49 analytics tool.** I advised a company with an excellent analytics product priced at $49 a month. Users loved it, but the users were prosumers, freelancers and tiny agencies. Churn ran about 4% a month, support costs were high (no technical teams, so the tickets were "how do I reset my password?"), and revenue was capped, since you need 2,000 customers to reach $1M ARR, which is a mountain of support for very little money. The messaging said "enterprise-grade analytics"; the price attracted hobbyist-grade headaches. We killed the $49 plan and introduced a "Team" plan starting at $1,500 a month. Overnight the base changed. The freelancers left, loudly. Mid-market companies arrived. Tickets shifted to "how do I integrate this with Snowflake?" Churn fell from 4% a month to under 1%. We didn't touch the code or the logo. We changed the price, and the price changed the buyer.

**Mesosphere, priced as a platform.** We deliberately didn't price container orchestration like a utility, because a utility price invites a utility comparison (against raw EC2 and VMware) and a utility budget. Pricing it as a strategic platform put us in a different budget and a different conversation, with executives weighing the future of their datacenter rather than administrators comparing specs. The number did positioning work the deck alone couldn't.

**Ford picked the buyer by picking the number (1908 to 1925).** The Model T arrived in 1908 at $850, a little more than an average American worker earned in a year, and it sold to people who already had money. Ford then cut the price year after year, to under $300 by 1925, and each cut handed the car to a poorer household with a different reason to want it and a different way of paying for it. No advertisement argued the buyer into existence. The number moved and the buyer changed, which is the same mechanism a software company runs when it moves from a credit card to a purchase order.

**Salesforce and the TCO lesson.** At Salesforce we understood that for an enterprise buyer the license is a sliver of total cost of ownership, and the real money goes to implementation and change management. A rock-bottom sticker backfires at the top of the market: it tells a CIO the vendor can't fund the support and longevity an enterprise deployment needs. The CIO files that vendor under career risk.

