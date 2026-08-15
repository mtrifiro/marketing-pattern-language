---
pattern: "Growth Loop"
aliases: ["Growth Loop", "The Funnel Is a Circle"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[GTM-001 Single Primary Motion]]"]
smaller: ["[[GTM-027 Product-Qualified Lead]]", "[[GTM-028 Sales-Assisted Conversion]]", "[[GTM-029 Land and Expand]]", "[[GTM-032 Customer Success as Growth Engine]]", "[[GTM-033 Expansion Before Acquisition]]"]
source: "PDF pp. 21–40 raw (Public API Flywheel, PLG Engine); pp. 161–180 (NRR, close-the-loop); pp. 241–260 (activation, referral)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A funnel spends a customer once; a loop makes each customer produce the next one, so growth compounds instead of running out the bottom.*

> [!tldr] About this pattern
> A growth loop closes the circuit when retained and expanding customers produce the next round of acquisition through use, referral, or public proof. It sits below [[GTM-001 Single Primary Motion]] and above [[GTM-027 Product-Qualified Lead]], [[GTM-028 Sales-Assisted Conversion]], [[GTM-029 Land and Expand]], [[GTM-032 Customer Success as Growth Engine]], and [[GTM-033 Expansion Before Acquisition]].

> [!warning] Admonition
> Don't treat a closed deal as the finish line. A funnel that pours spend in the top and counts arrivals leaks at the bottom: churn drains the base faster than new logos refill it, and growth stalls when the spending slows.

The funnel is a seductive mental model because it's simple: awareness, interest, consideration, purchase, done. It also quietly assumes a customer is spent once. You put all your energy into the top, treat the sale as the terminal event, and leave what happens after (whether the customer succeeds, stays, expands, or tells anyone) outside the diagram. That assumption is what makes your model leak. Every customer who churns is a hole in the bucket you're filling from the top, and past a certain size the leak overwhelms the inflow.

The arithmetic is the reason the funnel eventually fails. A company at $100M in recurring revenue losing 20% of it a year loses $20M annually, and at $1.50 of sales and marketing spend per dollar of new revenue won, it has to spend $30M just to replace what leaked and stand still. A different churn rate and a different cost per dollar of new revenue move those figures and not the direction. Growth built entirely on new acquisition runs up a down escalator, and the faster it goes the more it costs to stay in place. Dave Kellogg's line for the shift is that churn is the old obsession and net dollar expansion is the new one; a company counting only new logos is measuring the top of a leaking bucket.

The error is structural, sitting in the model itself. More spend at the top doesn't fix a stalling funnel, because the model has no feedback path, so nothing about a successful customer makes the next customer easier or cheaper to win. The best go-to-market systems are loops, where using the product produces more usage, more users, and more accounts. Brian Balfour, Casey Winters, Kevin Kwok, and Andrew Chen put the diagnosis plainly in "Growth Loops are the New Funnels" (Reforge, 2018): a funnel runs in one direction, so the output of one cycle never becomes the input of the next, and every round of growth has to be bought again. Their essay settles the diagnosis. What this pattern adds is where the loop sits: under the single motion a company runs ([[GTM-001 Single Primary Motion]]), with the qualification, conversion, expansion, and retention patterns beneath it as the parts that close the circuit.

## Complications

- **Acquisition-only growth fights its own scale.** The larger your revenue base, the larger your absolute churn, so a pure new-logo model spends more each year just to offset the leak before any real growth.
- **Retention and expansion compound; acquisition doesn't.** A retained customer who expands raises revenue with no new acquisition cost, and a customer who refers or whose usage spreads lowers the cost of your next customer.
- **The loop needs a feedback path built into the product or the motion.** Compounding happens only if something a customer does, invite a colleague, build an integration, generate public proof, makes your next customer easier to win, and nothing about ordinary product work produces that path by itself.
- **Expansion revenue is cheaper but easy to ignore.** Selling more to a happy customer costs far less than winning a new one, yet the funnel model puts all attention and comp on new logos.
- **A loop still has leaks.** Activation failures and churn break the circuit at specific points, so the loop compounds only if activation, retention, and expansion each hold.
- **Loops take longer to pay back.** A funnel shows results as soon as spend goes in; a loop compounds over time, which tempts you to abandon it for faster-looking linear metrics.

## Recommendations

> [!check] Design growth as a closed loop in which retained and expanding customers feed acquisition. Call it a working loop only after every stage holds and net revenue retention stays above 100 percent.

Close the circuit stage by stage:

1. **Acquire.** Bring a user in.
2. **Activate.** Carry them to realized value; a customer who never reaches value can't retain or expand.
3. **Retain.** Keep them.
4. **Expand.** Grow the account.
5. **Feed the next customer.** Make a retained, successful customer produce the next one: get them to invite colleagues so usage spreads inside and across organizations, to build on the product so it becomes more valuable and harder to leave, or to generate the public proof and referrals that lower the cost of your next acquisition.

Each stage is a pattern of its own. [[GTM-027 Product-Qualified Lead]] reads the signals that route users and accounts through the loop, [[GTM-029 Land and Expand]] and [[GTM-033 Expansion Before Acquisition]] carry the compounding, [[GTM-032 Customer Success as Growth Engine]] holds retention, and [[GTM-028 Sales-Assisted Conversion]] engages humans where the loop needs them. Insist the stages form a circle instead of a line.

Measure the loop by whether it compounds, so watch net revenue retention rather than new logos alone; [[GTM-033 Expansion Before Acquisition]] owns that metric and what clearing 100% proves. Benchmarkit's 2025 report puts the median B2B SaaS NRR at 101% for 2024, down from 105% in 2021, and Bessemer's *State of the Cloud 2023* grades 100% as good, 110% better, and 120% or above best. The median company is barely closing its loop. Treat that number as the signature of a working loop: your installed base grows on its own. Where the loop runs through the product, make the feedback path literal, an invitation flow, an API others build on, a template someone shares, and give it a measurable trigger, like a new user reaching a threshold of connections early enough to stick. Make the circuit real and instrumented rather than a flywheel drawn on a slide.

The precondition is that your stages actually hold. A loop with a broken activation step or high churn is a funnel with extra diagrams. Earn the compounding claim only when each stage works, which is why activation, retention, and expansion each get their own patterns beneath this one. Before you call it a loop, prove each stage holds.

## Implications

Designing growth as a loop opens the entire growth-loop chapter. Read the signals that route users and accounts, [[GTM-027 Product-Qualified Lead]], to learn who is ready to advance; add [[GTM-028 Sales-Assisted Conversion]] where the loop needs human touch; run [[GTM-029 Land and Expand]] and [[GTM-033 Expansion Before Acquisition]] to carry the compounding that pushes net revenue retention past 100%; and turn retention into a growth stage with [[GTM-032 Customer Success as Growth Engine]] rather than a cost center. Let the loop reframe your Part III metrics too, replacing top-of-funnel volume with the retention and expansion numbers that show whether the circuit compounds.

Enforce one discipline against a standing temptation: a loop pays back more slowly than a funnel and its compounding is invisible early, which pulls teams back to the legible metrics of new-logo acquisition. Don't declare a loop that doesn't close. A company can draw the flywheel while its activation leaks or its churn runs hot, in which case the compounding never arrives and the "loop" is a funnel in disguise. Hold the loop to one honesty test, net revenue retention over time; until that number clears 100%, treat the circuit as open. And keep the loop subordinate to the single motion above it: a loop built for a self-serve product spreads through usage and referral, while a loop built for a field motion spreads through references and expansion within named accounts, so let the loop's form follow [[GTM-001 Single Primary Motion]].

## Related Patterns

- **Above:** [[GTM-001 Single Primary Motion]] (the motion whose loop this is)
- **Below:** [[GTM-027 Product-Qualified Lead]], [[GTM-028 Sales-Assisted Conversion]], [[GTM-029 Land and Expand]], [[GTM-032 Customer Success as Growth Engine]], [[GTM-033 Expansion Before Acquisition]]
- **Peers / variants:** [[GTM-017 Usage-Based Pricing]] (the expansion mechanism inside the loop), [[GTM-023 Public API Flywheel]] (a loop that runs through an ecosystem), [[MS-036 Unit Economics as Market Truth]] (the math that proves the loop compounds)

## Examples

**Atlassian's product-and-marketplace loop versus Snowflake's sales-and-consumption loop.** Both companies picked a feedback path their motion could actually run, then let it compound. Atlassian ran almost no traditional sales early on and let product adoption, its marketplace, and partners feed each cycle: teams adopted the tools, ecosystem apps made them stickier, and that stickiness pulled in more teams. Its November 2015 Form F-1 reported $319.5 million of fiscal 2015 revenue and $6.8 million of net income from 48,000 customers, earned while spending more on research and development than on sales and marketing. Snowflake closed its loop differently, pairing an aggressive sales motion with a consumption model where a customer's growing data usage automatically grew revenue and reference value that helped win the next Fortune 500 account; the net revenue retention its August 2020 S-1 disclosed is the number [[MS-036 Unit Economics as Market Truth]] reads beside acquisition cost.

**AWS's graduated-spend loop (entry terms through July 2025).** AWS priced so a customer's own growth became its expansion. Until 15 July 2025, AWS paired a twelve-month free tier and an always-free allowance with usage-based pricing, so a developer started for nothing, built something real, and watched their spend grow as the thing they built succeeded. Those builders wrote the tutorials, libraries, and reference architectures that pulled in the next wave. On that date AWS replaced the twelve-month tier for new accounts with $100 in credits, another $100 earned by finishing onboarding tasks, and a six-month free plan, keeping more than 30 always-free services. The shortened free stage still connected acquisition, activation, and expansion; the consumption model made expansion a daily by-product of customer growth.

**Tupperware's party as the loop (1951 to 1954).** Closing a loop has never required software. The party made the selling event and the recruiting event the same event. Brownie Wise joined Tupperware as vice president in 1951 and moved the product into living rooms, where a dealer proved the seal by throwing a bowl of grape juice across the room, guests bought, and the guests most taken with the demonstration were signed up to host the next party or to sell. By 1954 the company was doing more than $25 million a year through more than 20,000 sales reps. Every party retained a customer and recruited the next seller, decades before anyone could instrument a loop inside a product.

**The invitation loop as a built-in feedback path.** Coding the loop into the product makes the retention event and the acquisition event the same. In a product whose value depends on connecting to other people, reaching a threshold of connections early both retains a user and recruits the next ones. Facebook's early activation signal of seven friends within ten days is the canonical version, described publicly by Chamath Palihapitiya, who ran the company's growth team from 2007 to 2011: the act of a user building their graph is the act that brings in more users. The seven-friends figure is a correlation the team chose to act on, since users who add friends fast may be the ones who were going to stay anyway. The structure under the number is a loop where the retention mechanism and the acquisition mechanism fire in one event.
