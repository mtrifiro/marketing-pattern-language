---
pattern: "Leading and Lagging Indicators"
aliases: ["Leading and Lagging Indicators", "Pair Every Outcome With a Signal"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-020 Metrics That Change Behavior]]"]
smaller: []
source: "PDF pp. 161–180 (leading, lagging, and qualitative indicators)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A lagging metric tells you the score after the game; pair it with a signal that moves while you can still change the outcome.*

> [!tldr] About this pattern
> A lagging result arrives after the game, so every important outcome needs a leading partner that moves while the team can still intervene and the result remains changeable. It sits below [[OPS-020 Metrics That Change Behavior]].

> [!warning] Admonition
> Don't build your dashboard out of outcomes alone. Fill it with revenue, bookings, closed deals, and realized churn, and every number you watch reports a result that already happened, so by the time it moves the window to change it has closed.

Outcomes carry a comforting finality: revenue landed or it didn't, the deal closed or it slipped, the account renewed or it churned. That finality is the problem. When quarterly revenue comes in under plan, the quarter is over; the pipeline that would have made the number was built and lost weeks earlier, and no attention to the revenue figure rebuilds it now. The board reads as a control panel and works as a history.

This breaks quietly, because a lagging dashboard looks responsible: it's built from real money and real accounts, so nobody questions whether it can steer anything. Then a target gets missed, and the review becomes a post-mortem that explains what happened after it happened. Watching the outcome harder next quarter never moves the process that produced it. Attention lands where the number is, and the number always sits downstream of the decision that could have mattered.

Marketing metrics sort into three classes, and the trap sits in the first. Lagging indicators are outcomes: revenue, closed deals, realized churn. Leading indicators tell you how the go-to-market engine runs right now, and when they falter, the lagging results follow soon after. Robert Kaplan and David Norton built *The Balanced Scorecard* (1996) on that distinction, arguing that financial results are lagging outcomes and that a company also has to measure the customer relationships, internal processes, and learning that produce them. A board built only from the first class reports the score with great precision and can't influence it, because every metric on it was decided elsewhere.

## Complications

- **Outcomes are the metrics everyone trusts.** Revenue and churn reconcile to the finance system and mean the same thing to every reader, so they dominate the dashboard by default; their authority is what makes a lagging-only board feel complete when it isn't.
- **A result arrives too late to change.** By the time a lagging number moves, the process that produced it has finished, so the metric with the most credibility is the one you can no longer act on.
- **A leading indicator is a bet rather than a fact.** It claims an early signal predicts a later outcome, and that claim can be wrong; a metric that moves but doesn't forecast the result is worse than none, because it spends real intervention on a false alarm.
- **Prediction and comfort pull opposite ways.** The signals that genuinely lead an outcome are often unflattering and early, while the numbers that feel safe to report are the finished ones.
- **Some real signal never shows up as a number.** Sentiment, sales-rep intuition, and the squishier read on a market lead the outcome too, and a dashboard that admits only clean quantities discards a whole class of early warning.
- **A pair is only as good as the link between its halves.** The value of a leading indicator lies entirely in how tightly it tracks the outcome it's paired with, and a dashboard displays the pair whether or not that link holds.

## Recommendations

> [!check] Pair every lagging outcome you depend on with a leading indicator that moves first and demonstrably predicts it, so you're watching a signal you can still act on while the outcome is being decided rather than a result after it's fixed.

Work from the outcome rather than the metric library.

1. **Name the lagging number that matters.** Write down next quarter's new revenue or this cohort's churn, the result you actually depend on.
2. **Find what moves earlier in the same causal chain.** Ask which signal reliably forecasts that outcome. Chris McChesney, Sean Covey and Jim Huling make this the second of *The 4 Disciplines of Execution* (2012), "act on the lead measures," on the grounds that a lag measure tells you whether you hit the goal after the fact while a lead measure is something you can still influence this week. For pipeline and revenue, the worked example is MQL-to-SQL conversion rate: when qualified leads stop converting to sales-accepted opportunities, the pipeline that would have become next quarter's revenue is already thinning, and the conversion rate shows it weeks before the revenue miss lands. Keep a signal only if it points at the outcome early enough that you can still add pipeline, fix the message, or reset targeting while the quarter is live.
3. **Verify the link before you trust it.** A leading indicator is a hypothesis about prediction, and a false one is expensive; a metric that moves on its own schedule without tracking the outcome triggers interventions that miss and erodes trust in the whole board. Check the pairing against history: when this signal fell in past periods, did the outcome fall after, and by roughly the amount and lag you're assuming? Read that relationship over time with cohorts, which is why [[OPS-022 Cohort Analysis as Decision-Making]] sits alongside this work. Keep the pairing that survives the check; retire the one that doesn't.
4. **Keep the third class in view.** Qualitative indicators (sentiment, NPS, the read a salesperson has on a stalling account) lead outcomes the same way conversion rates do, and they belong on the board as a full class rather than a footnote. They're harder to trend and easier to dismiss, and they often carry the earliest warning a market gives. Choose the partner for how well it predicts rather than for how easy it is to chart.

Hand the composite case to [[OPS-023 Health Scores]], where usage and engagement signals combine into one early read on the lagging churn number. Your job here is the general rule: give every outcome a forward-looking partner, quantitative or qualitative, and pick it for how well it predicts.

## Implications

Build the board on pairs and it reads differently from one built on results. Give every outcome a companion you can move this week, and the weekly review shifts from explaining the past to acting on the present: when the MQL-to-SQL rate softens, put pipeline under attention now, before the revenue it feeds arrives short. Run the board as a set of controls rather than a scoreboard, which is the condition [[OPS-020 Metrics That Change Behavior]] demands. Anchor the pairs on the outcomes the business model turns on, the CAC payback and LTV arithmetic that [[MS-036 Unit Economics as Market Truth]] reads as the market's verdict, and take the composite leading signal for retention from [[OPS-023 Health Scores]]; bind each outcome to a signal ahead of it.

Enforce this discipline, because leading indicators are bets and adding them carelessly leaves you chasing noise. A signal that moves but doesn't predict pulls real intervention toward a false alarm; a signal that predicts but reads as uncomfortable gets quietly dropped from the deck. Keep testing each pairing against realized outcomes, retire the ones that stop tracking, trust the ones that hold, and protect the qualitative signals from being cut for being harder to graph. Treat every pairing as a standing claim about the future, and make it keep earning that claim.

## Related Patterns

- **Above:** [[OPS-020 Metrics That Change Behavior]] (a number earns its place only by changing a decision; this pattern applies that rule to the timing of the signal)
- **Below:** *(none yet)*
- **Peers:** [[MS-036 Unit Economics as Market Truth]] (the CAC payback and LTV outcomes the pairs anchor on, read as the market's verdict), [[OPS-023 Health Scores]] (the composite leading signal for the lagging churn number)

## Examples

**Catching a revenue miss while the quarter was still live (SaaS, 2023).** A mid-stage software team I worked with reported new revenue weekly and treated it as the control number, so every soft quarter surfaced as a post-mortem. We paired the revenue outcome with two leading signals, MQL-to-SQL conversion and new-user activation, and watched them daily. Six weeks into a quarter the conversion rate dropped while revenue still looked on plan, because the deals already in flight were closing normally. The early signal said the next tranche of pipeline was thinning, so we reset targeting and added top-of-funnel spend while there was still time to feed the quarter. Watched alone, the revenue number would have delivered that same news in the quarter-end review, with nothing left to do about it.

**Usage as the leading read on churn (Heap).** Realized churn is a lagging outcome that arrives at renewal, long after the account decided. Heap makes exactly this point in "From Lagging to Leading Indicators: A Proactive Approach to Account Health Scoring," describing how it wired adoption signals into its own account health scores so its customer-success team could act on an advanced warning instead of reacting to a churn it could no longer stop. A customer-success org I advised stopped waiting for the renewal date and paired the churn outcome with product usage and engagement, watching logins, feature adoption, and active seats per account. When an account's usage fell, the renewal was already at risk, months before the contract came up, so the team intervened while the relationship was still open. [[OPS-023 Health Scores]] builds the composite version of that signal.

**Sewage led the hospitals by days (New Haven, 2020).** Confirmed cases and hospital admissions, the counts everyone trusts, both report infections that happened a week or two earlier. Jordan Peccia's group at Yale sampled primary sewage sludge at the New Haven treatment plant daily from 19 March to 1 June 2020, covering about 200,000 residents, and measured SARS-CoV-2 RNA in it. Reporting in *Nature Biotechnology* that year, they found the sludge signal tracked the epidemic's rise and fall and ran 0 to 2 days ahead of positive test results by specimen collection date and 1 to 4 days ahead of local hospital admissions. Both halves of this pattern are in that result. They named the lagging outcome first, then found something upstream of it, then quantified the lag rather than assuming one. A lead of one to four days is small, and it's enough to staff a ward. The pairing held well enough that the CDC built the National Wastewater Surveillance System around it in September 2020, starting from 209 sampling sites and reaching more than 1,500 by December 2022. What earned that expansion was checking the early signal against the realized outcome first.

**A false leading indicator I steered by.** Early in one operating role I picked email open rate as a leading indicator of pipeline, on the theory that engagement led to opportunities. It moved, we acted on it, and it predicted nothing; opens rose in a period when pipeline fell, and we'd spent real effort chasing a signal that didn't track the outcome. Checking it against a few quarters of history would have shown the pairing never held.

