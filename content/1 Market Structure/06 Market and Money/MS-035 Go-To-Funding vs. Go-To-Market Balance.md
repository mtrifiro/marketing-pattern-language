---
pattern: "Go-To-Funding vs. Go-To-Market Balance"
aliases: ["Go-To-Funding vs. Go-To-Market Balance", "Go-To-Funding"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: []
source: "PDF pp. 1–20 (Go-To-Funding vs. Go-To-Market Balance)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Make funding fuel a working engine; run your go-to-market to please investors instead of customers and you're burning cash you haven't earned.*

> [!tldr] About this pattern
> Funding buys time while go-to-market proves customers will sustain the business; confusing the two games lets investor velocity mask a revenue engine that hasn't earned scale, and unit economics reveal whether capital acts as fuel or concealment. It sits below [[MS-001 Designed Market, Not Found Market]].

> [!warning] Admonition
> Don't conflate raising capital with building a business. Tune your go-to-market to the pattern-matching of investors and you buy a sugar-high valuation that collapses the moment the capital markets turn or profitability is finally required.

The two games get played with the same pieces. Go-to-funding optimizes for the next round: top-line velocity, headcount, total bookings, an enormous market, the vanity metrics that match the patterns investors reward. Go-to-market builds a repeatable, efficient revenue engine: customer acquisition cost, payback period, net revenue retention, and the burn multiple David Sacks named at Craft Ventures in 2020, net burn over net new ARR, the sanity metrics that describe a real business. Trouble starts when you operate solely to satisfy the algorithms of venture capitalists, chasing top-line growth while ignoring high burn and broken unit economics, because velocity raises the Series B and efficiency doesn't show up on the slide that raises it.

The confusion is structural rather than a lapse of discipline, because the venture business model and yours are genuinely different. A venture firm optimizes a portfolio, where a few enormous outcomes pay for many failures, so it rewards the swing-for-the-fences growth that maximizes the upside of any single bet. You're running a single company, where survival is the whole game, so the behavior that optimizes a portfolio can destroy the one asset you actually have. A company optimized for the investor's pattern can raise the round and hollow itself out in the same move. The "greater fool" logic, that another investor will pay more for the growth than it costs, holds only until the funding market freezes.

When it freezes, the gap between the two games turns brutal and immediate. A company with an efficient engine survives on its own cash flow. A company with a funding story and nothing underneath it dies when the fuel stops. (The structure the engine has to fit is [[MS-001 Designed Market, Not Found Market]]; the readout of whether it works is [[MS-036 Unit Economics as Market Truth]]; the sizing story told to investors is [[MS-030 Sizing Is Storytelling]].)

## Complications

- **Two games, one set of pieces.** Raising capital and building a business reward different behavior, and founders routinely confuse the metrics that raise a round with the metrics that build a company.
- **Velocity raises rounds; efficiency builds businesses.** Top-line growth matches investor patterns while unit-economic health stays off the slide, so the incentives pull toward the wrong optimization.
- **The venture model differs from yours.** Portfolio optimization rewards swinging for the fences while single-company survival rewards efficiency, and the two diverge sharply under pressure.
- **Cheap capital rewards the wrong game.** Bull markets and abundant capital pay for go-to-funding behavior, right up until they stop.
- **The board pushes for growth.** Resisting the pressure to scale before the engine works takes a strong CEO and a truthful scorekeeper against a room that wants velocity.

## Recommendations

> [!check] Keep the operating plan separate from the fundraising deck and use capital to scale an engine that already works. Scale headcount only after lifetime value is at least three times acquisition cost and CAC payback is under twelve months for a small-business motion or twenty-four months for an enterprise motion.

Do these four things in order:

1. **Audit what you're actually optimizing.** Name the vanity set you may be chasing, headcount, valuation, and total bookings, against the sanity set that matters, CAC payback, net revenue retention, and burn multiple. Write down which one your operating plan currently serves.
2. **Run the physics check before you step on the gas.** Prove the economics of the deal before hiring twenty reps. The thresholds are borrowed and stable: David Skok's "SaaS Metrics 2.0" put a healthy lifetime value at three times acquisition cost, and Bessemer's cloud benchmarks put CAC payback under a year for a small-business product and under two for an enterprise one. Miss them badly and you have a go-to-funding growth story sitting on a broken go-to-market reality, and scaling it only loses money faster.
3. **Hire for the stage rather than the valuation.** Pick the builder who can fix the conversion leaks in the funnel over the big-company executive who looks impressive in a board deck.
4. **Fix the metrics before you raise, or raise on the promise of the fix.** When the go-to-market metrics are broken, repair them first, or raise explicitly on that repair, so new capital fuels a working engine rather than pouring into a leaky bucket.

Remember that cash flow eventually matters, however long venture thrust defers it. Respect the laws of acquisition cost, lifetime value, and churn and you control your own destiny when the funding market turns; ignore them to chase a valuation and you'll find you had a subsidized hobby rather than a business. This is where the pricing and economics patterns meet the fundraise: reconcile the numbers you run on ([[MS-036 Unit Economics as Market Truth]]) with the numbers you show investors ([[MS-030 Sizing Is Storytelling]]). Earn the right to grow before you spend the capital that scales it.

## Implications

Hold this balance and you force unit-economic discipline into the growth plan and protect the company from the sugar-high collapse, so funding accelerates a working engine rather than masking a broken one. Tie the sizing story, the unit economics, and the profitability envelope together at the moment of a raise, and hand Part II a go-to-market built to be efficient rather than merely fast. Inside [[MS-001 Designed Market, Not Found Market]], treat this as the discipline that keeps a designed market from being distorted by the incentives of the capital that funds it.

Enforce the balance as a judgment that shifts with the market and the moment rather than a fixed rule. In a genuine [[MS-003 Window of Inevitability]], lean toward go-to-funding: raise and spend ahead of proven unit economics to capture a closing opportunity, and don't let dogmatic efficiency become its own fatal error. Know when the window justifies the burn and when the burn is merely covering for an engine that doesn't work, and keep a truthful scorekeeper close enough to tell the difference, because a board and a bull market will always argue for more growth than the business has earned.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** *(none yet)*
- **Peers:** [[MS-036 Unit Economics as Market Truth]] (the metrics that reveal whether the engine works), [[MS-030 Sizing Is Storytelling]] (reconciling the investor story with the operating one), [[MS-020 Profitability Envelope]] (the margin the engine has to live within), [[MS-003 Window of Inevitability]] (when a closing window justifies spending ahead)

## Examples

**WeWork, the pure go-to-funding company (2016–2019).** WeWork optimized almost entirely for valuation and capital intake, growing top-line at enormous burn on unit economics that never worked, and raised staggering sums on the growth story. The Form S-1 that The We Company filed on 14 August 2019 shows both halves of that at once. Revenue rose from $436 million in 2016 to $1.82 billion in 2018, and the net loss rose from $430 million to $1.93 billion over the same two years, so the loss grew faster than the revenue it was buying. Sales and marketing alone ran $379 million in 2018. When the market finally demanded a business underneath the story, the company withdrew the registration on 30 September 2019 and the valuation collapsed, because velocity had been mistaken for an engine and there was none when the fuel stopped.

**Atlassian, the go-to-market masterclass (2015 F-1).** Atlassian built an efficient, flywheel-driven motion with minimal capital reliance, taking almost no venture money before its 2015 IPO, growing on sound unit economics rather than on raised capital, which let it dictate terms to the market instead of depending on the next round. The Form F-1 it filed on 9 November 2015 carries the ratio that made this possible. On revenue of $319.5 million for the year to 30 June 2015, Atlassian spent $140.9 million on research and development and $68.0 million on marketing and sales, and the filing states the company had been profitable in each of the last ten fiscal years. Twice as much on the product as on selling it is the arithmetic of a company whose product does the selling. Because the engine worked, it controlled its own destiny through cycles that punished companies whose growth had been bought.

**Solyndra, the same trade inside a factory (2009–2011).** Solyndra's amended Form S-1 of 16 March 2010 states the numbers without softening them. Manufacturing cost was $4.00 per watt in the quarter ended 2 January 2010. The average sales price was $3.24 per watt, itself about 66% above the $1.95 that leading crystalline-silicon manufacturers were getting, so the company sat above the market on price and below its own cost on revenue at the same time. Net losses ran $114.1 million in 2007, $232.1 million in 2008 and $172.5 million in 2009, against an accumulated deficit of $557.7 million. Solyndra had raised about $970 million through equity financings and had signed a $535 million federally guaranteed loan in September 2009, and its auditor put a going-concern paragraph in the report on the audited statements. Solyndra withdrew the registration on 18 June 2010 and filed for Chapter 11 on 6 September 2011. No go-to-market repairs a negative margin on every unit; capital only buys time to keep shipping at a loss. The physics check in step two above is the one that catches this, and it catches it in a factory exactly as it does in software.

**Fixing the physics before the raise.** The pull is to hire the twenty reps the board wants while the payback period is still too long. The healthiest founder I've watched, twelve months from a planned raise, ran the physics check honestly, found the payback too long, and refused to hire until the conversion leaks were fixed. It cost a few quarters of slower headline growth and made the eventual raise far stronger, because the company raised on an engine that worked rather than on a story that hid one that didn't.

