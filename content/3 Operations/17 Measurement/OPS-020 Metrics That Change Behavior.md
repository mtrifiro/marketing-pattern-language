---
pattern: "Metrics That Change Behavior"
aliases: ["Metrics That Change Behavior", "Kill the Vanity Metric"]
altitude: operations
status: draft
domains: [core]
larger: []
smaller: ["[[OPS-021 Leading and Lagging Indicators]]", "[[OPS-022 Cohort Analysis as Decision-Making]]", "[[OPS-023 Health Scores]]", "[[OPS-024 Friction Audit]]"]
source: "PDF pp. 161–180 (Phase 6 Metrics & KPIs; actionable vs vanity)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Put a number on the dashboard only when some value of it would make you do something different.*

> [!tldr] About this pattern
> A metric earns dashboard space only when some plausible value would change a decision; the display stays focused on numbers that move behavior, and the rest stop competing for attention. It sits above [[OPS-021 Leading and Lagging Indicators]], [[OPS-022 Cohort Analysis as Decision-Making]], [[OPS-023 Health Scores]], and [[OPS-024 Friction Audit]].

> [!warning] Admonition
> Don't fill the dashboard with numbers that feel like progress and change nothing. Spend your scarce attention on metrics no decision depends on, and the few numbers that would actually change a choice get lost in the crowd.

Dashboards accumulate the way clutter does, and nothing ever comes off, because removing a metric feels like admitting it never mattered. Someone asks for impressions, so impressions go up. A new channel launches, so its raw traffic goes up too. What grows is a wall of counters measuring activity the team was going to do anyway, and the team starts reporting the wall as if the wall were the work, so the dashboard looks comprehensive while most of it is decoration. Eric Ries named these vanity metrics in *The Lean Startup* (2011) and set them against actionable metrics, the ones that tie a number to a cause and a decision. Alistair Croll and Benjamin Yoskovitz built *Lean Analytics* (2013) on the same cut, with a rule this pattern takes its name from: a good metric changes the way you behave.

Attention is finite and a dashboard spends it. Every number on the screen asks the reader to look, interpret, and hold it in mind, and that budget is the same whether the number can change a decision or not. A board of forty metrics, thirty-five of which no action depends on, taxes the same attention that five decision-driving numbers would, and buries them. Dave Kellogg makes the underlying point about a single metric: CAC "by itself isn't meaningful unless you consider what you get for it." A number read outside the context of a decision is noise wearing the costume of rigor.

The cost is slow decisions and confident wrong ones. A team drowning in vanity metrics can watch its own numbers rise for a year, feel productive, and miss the one signal that would have told it the funnel was broken, because that signal sat three charts down from the follower count. A dashboard exists to keep the go-to-market engine from flying blind. A board packed with numbers that can't change a choice is a different kind of blindness: you're staring at instruments, and none of them are wired to the controls.

## Complications

- **Adding a metric feels responsible; removing one feels like an admission.** More measurement reads as more rigor, so numbers accrete and almost never get culled, and the board grows past the point where anyone acts on most of it.
- **Vanity metrics feel good.** Raw impressions, total signups, and follower counts mostly go up and to the right, so they flatter the team and get reported for the comfort they provide rather than the decisions they inform.
- **Attention is the scarce resource, and data is cheap.** Collecting a number is nearly free; watching it is not, and every counter on the board spends the same interpretive budget whether or not a decision hangs on it.
- **Numbers are only meaningful inside a decision.** As Kellogg notes about CAC, a figure read alone says little; the same value can be good or alarming depending on what you get for it and what you would do about it.
- **The instinct under pressure is to measure more.** When growth stalls, a team reaches for another chart, which adds to the crowd and lowers the odds that the decisive signal gets seen.
- **A metric that drives a decision usually stings.** The numbers worth watching are the ones that can tell you to stop, cut, or change, which is exactly why they're less pleasant to display than a counter that only rises.

## Recommendations

> [!check] Put a number on the dashboard only if you can name a plausible value of it that would change a decision, and cut every metric that fails the test, so the board holds the few numbers that drive choices and the team's attention lands on them.

Run the cull by these moves:

1. **Ask one question of every metric: what would we do differently if this moved?** If the honest answer is nothing, the number is vanity and it comes off the board, however good it feels. Ask it against a real threshold rather than a wish.
2. **Sort by whether a decision is attached rather than by size or novelty.** Total signups fails: signups can double while the business gets worse, and no specific value of raw signups tells you to reallocate spend or change the plan. Activation rate for a cohort passes: below some line you intervene on onboarding, above another you pour fuel on the channel. A plausible reading of the second one has a decision attached and a plausible reading of the first one does not.
3. **Walk the board metric by metric and delete every number that can't answer the question.** The result is small on purpose. Five numbers each wired to an intervention beat forty that mostly narrate activity, because the five get looked at and acted on while the forty get glanced past.
4. **Build the numbers that pass with the patterns below.** Pair each outcome with an early signal that would trigger a move in [[OPS-021 Leading and Lagging Indicators]]; read cohorts instead of blended averages so the number points at a specific action in [[OPS-022 Cohort Analysis as Decision-Making]]; predict churn early enough to intervene with [[OPS-023 Health Scores]]; and walk the buyer's actual path to find the snags worth fixing in [[OPS-024 Friction Audit]]. Each manufactures a number that passes the test. The unit-economics numbers answer to a claim one part up: [[MS-036 Unit Economics as Market Truth]] reads CAC, payback, and LTV as the market's verdict on your structure rather than as a marketing scorecard.
5. **Move the vanity metrics off the dashboard into a report nobody's attention has to defend.** Keep impressions and follower counts if you like; they can still be worth knowing for a diagnosis after the fact. Just keep them out of the small set of numbers you steer by, because steering is the dashboard's only job.

## Implications

Pass this test and your dashboard becomes a control panel rather than a scoreboard. Every number on it has an action on the other end, so a review meeting stops being a recitation of counters and turns into a sequence of decisions: this crossed its line, so intervene; that one didn't move, so hold. Hold the measurement patterns beneath this one to the same standard. [[OPS-021 Leading and Lagging Indicators]], [[OPS-022 Cohort Analysis as Decision-Making]], [[OPS-023 Health Scores]], and [[OPS-024 Friction Audit]] each exist to produce a number that would change a choice, and the vanity test keeps them honest, because a health score no one acts on is just another counter.

A good dashboard is uncomfortable, so expect the discomfort and keep it. The numbers that survive the cull are the ones that can deliver bad news and force an intervention, which makes the board less pleasant to present than a wall of rising counters. Guard against gaming too. Goodhart's law comes from a 1975 paper on UK monetary policy in which Charles Goodhart wrote that any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes. Once a metric drives a decision, people optimize the metric, sometimes at the expense of the thing it was a proxy for. Revisit the set rather than setting it once. Push that revisiting downstream. Feed what the numbers say back into strategy through [[OPS-004 Closing the Loop]], and prune the dashboard on a cadence so it doesn't silt back up to forty metrics, which is part of [[OPS-019 Quarterly Recalibration]].

## Related Patterns

- **Above:** *(none yet)* (Metrics That Change Behavior is the root of the Measurement chapter)
- **Below:** [[OPS-021 Leading and Lagging Indicators]] (pair each outcome with an early signal), [[OPS-022 Cohort Analysis as Decision-Making]] (read cohorts rather than averages), [[OPS-023 Health Scores]] (predict churn early enough to act), [[OPS-024 Friction Audit]] (walk the buyer's path for snags worth fixing)
- **Peers:** [[OPS-004 Closing the Loop]] (feed what the numbers say back into strategy), [[OPS-019 Quarterly Recalibration]] (prune and reset the dashboard on a cadence)

## Examples

**A team that cut forty metrics down to five (2023).** A growth team I worked with reported a dashboard of roughly forty numbers every Monday, most of them channel-level impressions and raw traffic counts. We ran the question against each one, what would we do differently if this moved, and deleted the ones with no answer. Thirty-five had none. We kept five, among them activation rate by weekly cohort and paid payback period, each with a threshold and a named intervention. The meeting shrank from a recitation to four or five actual decisions, and the team moved faster because it was finally looking at the numbers that told it to do something.

**A company that chased traffic while its funnel leaked (composite).** A company reports raw website traffic and total signups as its headline growth numbers, both rising nicely, and treats the rise as proof the motion works. Neither number could fail, so neither could warn. The activation and retention numbers that would have exposed a broken onboarding step sat far down the board, unwatched, and the team spent a year buying more traffic into a funnel that couldn't hold it. The vanity metrics masked the leak by making the quarter look healthy.

**A number that changed behavior, in a direction nobody chose (Wells Fargo, 1999 to 2017).** Wells Fargo's headline retail measure was its cross-sell ratio, products per household, and its published goal was eight; the bank's 1999 annual report was already describing the target as "going for gr-eight." The ratio started out as a fair proxy, since a household using eight products is genuinely worth more and harder to lose. Then the proxy became the target. On 8 September 2016 the Consumer Financial Protection Bureau fined the bank $100 million, with $35 million to the Comptroller of the Currency and $50 million to the City and County of Los Angeles, $185 million in all, over employees opening roughly 1.5 million deposit accounts and about 565,000 credit-card accounts customers had never authorized, in order to hit sales targets and earn bonuses. In January 2017 Wells Fargo told investors the cross-sell metric would not be reported going forward. The number passed this pattern's test with room to spare: plausible values of it changed decisions all the way down to the branch. That's also the price of passing. A metric wired to a decision is a metric people will move by whatever route is open, so the second question after "would this change a decision" is "what else would people do to move it."

**One metric that changed a decision and one that never did.** In an early-stage motion I ran, we watched two numbers side by side for months. The first was total newsletter subscribers, which climbed steadily and which I quietly loved; nothing we ever did depended on it, and no value of it would have changed the plan. The second was trial-to-paid conversion for each week's signup cohort, and when it dropped below a line we'd set, we stopped a channel and rebuilt the trial. Same board, two numbers, only one wired to a decision. Once I saw that plainly, the subscriber count came off the dashboard and went into a footnote where it belonged.
