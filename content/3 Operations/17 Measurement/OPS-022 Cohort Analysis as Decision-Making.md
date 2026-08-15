---
pattern: "Cohort Analysis as Decision-Making"
aliases: ["Cohort Analysis as Decision-Making", "Cohorts Over Averages"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-020 Metrics That Change Behavior]]"]
smaller: []
source: "PDF pp. 161–180 (metrics); pp. 141–160 (usage data / cohorts)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A blended average is the sound of two trends canceling out; a cohort is either one, heard on its own.*

> [!tldr] About this pattern
> A blended average can hide two opposing trends, while cohorts let each group be heard at the same point in its lifecycle and show whether newer customers behave better or worse at the same age. It sits below [[OPS-020 Metrics That Change Behavior]].

> [!warning] Admonition
> Don't watch retention, expansion, and payback as company-wide averages. Read them blended and a cohort that's quietly retaining worse than the ones before it stays invisible for months while you keep spending against a motion that's already decaying.

The average is the most natural number to report. It blends everyone who ever bought into one figure, which is a retention curve that belongs to no actual customer. A company adding customers every month is running many small experiments in parallel: the batch that joined in January met one onboarding, one price, and one product, and the batch that joined in June met different versions of all three. When the June batch retains worse than the January one, the average barely twitches, because the large, healthy older cohorts still dominate the arithmetic. The decay is real and already happening, and the number that would show it has been diluted into silence.

You pay the cost in the lag between when a problem starts and when an average finally admits it. By the time a blended retention line bends far enough to alarm anyone, the poorly retaining cohorts have grown from a small share of the base into a large one, and you've acquired several more of them at full cost on top. You spent the whole interval reading a flat line as health. Worse, the average destroys causation along with the trend. It can't answer the questions that decide where your next dollar goes: did the customers from the new channel retain, did the cohort after the price change expand, did the onboarding rebuild help the people who saw it. Each of those is a question about a specific group over time, and an average has already stirred every group together.

Watching the aggregate more closely doesn't help, because the flaw sits in the number rather than in anyone's vigilance. A blended average of divergent groups is decision-poor by construction: it reports the weighted middle of trends moving in opposite directions, and the middle is the one value that says nothing about either one. Alistair Croll and Benjamin Yoskovitz make the case in *Lean Analytics* (2013): a cohort compares like to like, so it separates what changed in your product from what changed on the calendar.

## Complications

- **Averages are legible; cohorts take work.** One retention number fits on a slide and needs no explanation, while a cohort table asks the reader to hold a dozen curves at once, so reporting drifts toward the aggregate even though the aggregate is the number most likely to mislead.
- **A blend of divergent groups reports a middle that describes nobody.** When newer cohorts decay and older ones hold, the average lands between them, moving slowly and staying calm, which reads as stability at the exact moment the trend has turned.
- **Decay hides inside a large healthy base.** Early cohorts that retain well keep the blended figure up for months, so a young, sick cohort stays mathematically invisible until it has grown large enough to drag the whole average down, by which point it's expensive.
- **Causal questions are cohort-shaped.** Whether a channel, a price change, or an onboarding rebuild worked is always a question about one group tracked over time, and an average has already destroyed the grouping that would answer it.
- **Cohorts multiply the numbers to watch.** Splitting one retention curve into join-month, channel, segment, and plan produces a wall of series, and you can drown in slices that never change a decision, which is the discipline [[OPS-020 Metrics That Change Behavior]] exists to enforce.
- **Cohorts depend on the plumbing beneath them.** Grouping every customer by join date and channel and following each over months requires the event history and joins that [[OPS-011 Data Warehouse Decisions]] sets up; without that architecture, the analysis is manual and stale.

## Recommendations

> [!check] Read customer behavior by cohort rather than in aggregate, grouping customers by when they joined and by what distinguishes them (channel, segment, plan), and tracking each group across its own life, so the average never gets to hide whether the customers you are adding now behave better or worse than the ones you added before.

Investors run this read before they write the check. Jonathan Hsu's "Diligence at Social Capital" series works through growth accounting and cohort-based lifetime value as the standard way to see whether a company's newer cohorts behave better or worse than its older ones. Averages are decision-poor because they blend divergent groups; cohorts are decision-rich because they isolate the group whose behavior answers the question in front of you.

1. **Build the cohort table before the blended chart, and let the table govern.** Take retention, expansion, and payback, and instead of one company-wide line, produce one row per cohort read down its months since joining. A cohort reveals what a snapshot cannot, because a snapshot mixes a customer's join date with the calendar while a cohort holds the group fixed and lets only elapsed time vary. Read down the join-date rows: if each newer cohort's month-three retention sits below the last, the motion is decaying whatever the blended line says; if each newer cohort holds or climbs, it's improving even through a flat aggregate.
2. **Cut the cohort along whatever the pending decision runs on.** When the question is a channel, group by acquisition source and compare the channels' retention curves against their acquisition cost; a channel that fills the top of the funnel cheaply and then churns is one only a cohort read exposes. When the question is a change you made, let the change define the boundary: the cohort before a price move against the cohort after, the cohort that saw old onboarding against the one that saw the rebuild. Because a cohort holds everything else roughly constant and varies the one thing you changed, it attributes a shift in behavior to a cause, which an average never can.
3. **Carry the same resolution into the economics.** Read CAC payback and lifetime value by cohort rather than blended, so the verdict that [[MS-036 Unit Economics as Market Truth]] draws from those numbers holds the same time-and-group resolution as the behavior.
4. **When a cohort drops, locate the drop and stop there.** A cohort read is a detector, and its output is a question: this June batch, this channel, this post-change group is losing people at month two, so walk that group's actual path and find the friction. Hand that walk to [[OPS-024 Friction Audit]]; don't explain a bad cohort from the table alone and guess at the cause. Let the cohort point precisely and the audit answer.

## Implications

Read by cohort and you stop discovering decay in arrears. The lag between a motion turning sour and a number admitting it collapses, because the newest cohort shows the newest reality on its own curve instead of waiting to outweigh the healthy base. Your decisions sharpen in the same motion: the channel comparison retires the source that churns, the before-and-after cohort settles whether a price change helped or hurt, the onboarding cohort shows whether the rebuild reached the people it was built for. The measurement layer of Part III inherits a resolution it lacked, and the numbers that reach a decision, the ones [[OPS-020 Metrics That Change Behavior]] fights to keep, arrive already split by the group that makes them actionable.

Cohorts breed as easily as they clarify. Every dimension (join month, channel, segment, plan) multiplies the series on the wall, and you can spend your whole analysis budget slicing curves that never change a decision, which is the aggregate's legibility problem returning in a more sophisticated costume. Enforce the discipline: cut only the cohort a pending decision runs on and leave the rest uncomputed until a question calls for them. Respect the dependency too. Cohort analysis at any speed rests on the event history and joins of [[OPS-011 Data Warehouse Decisions]]; without that plumbing you'll rebuild cohorts by hand each month, and the analysis will arrive too late to change anything, which is the very thing it was meant to cure.

## Related Patterns

- **Above:** [[OPS-020 Metrics That Change Behavior]] (the discipline that a metric must change a decision; cohorts are how a retention or payback number earns that standing)
- **Below:** *(none yet)*
- **Peers:** [[MS-036 Unit Economics as Market Truth]] (the CAC payback and LTV verdict, read split by cohort rather than blended), [[OPS-024 Friction Audit]] (walk the path of a cohort that drops to find why)

## Examples

**A SaaS company that found decay hidden in a flat average (2022).** A subscription business I worked with reported a blended monthly retention that had sat near flat for three quarters, which the team read as stable. Splitting the base by join month told a different story, because each of the last five cohorts had retained a little worse at month three than the one before it, and the flat aggregate was the large, healthy 2021 cohorts propping up progressively sicker new ones. The decline traced to an onboarding flow that had grown longer as features were added, so new users stalled before reaching first value. We rebuilt activation around a single early win, and the next two join-month cohorts retained above the ones that preceded the fix, visible in the cohort table months before it would have surfaced in the blend.

**A team that cut a channel by comparing retention cohorts (composite).** A growth team was allocating budget across acquisition channels on blended cost per acquisition, and one paid source looked among the cheapest. Grouping customers by acquisition channel and reading each channel's retention curve reversed the picture, because the cheap channel's customers churned by month two at roughly twice the rate of the others, so its true cost per retained customer was the highest in the mix. The blended CAC had hidden this by averaging the channel's cheap-but-churning buyers into everyone else. The team moved the spend to the channels whose cohorts held, and net retained additions rose without a larger acquisition budget.

**Six worse vintages in a row, hidden by rising prices (subprime mortgages, 2001 to 2007).** Lenders and rating agencies did track subprime performance, and the pooled delinquency numbers looked tolerable through 2006, because house-price appreciation was curing bad loans before they could default: a borrower in trouble refinanced or sold into a higher price. Yuliya Demyanyk and Otto Van Hemert took loan-level data and grouped it by origination year, adjusting each vintage for borrower characteristics, loan terms, and macroeconomic conditions so the years could be compared like for like. Publishing in the *Review of Financial Studies* in 2011, they found that "the quality of loans deteriorated for six consecutive years before the crisis and that securitizers were, to some extent, aware of it," and that "problems could have been detected long before the crisis, but they were masked by high house price appreciation between 2003 and 2005." That is this pattern's claim, in a market that priced hundreds of billions of dollars of securities off the aggregate. Each new cohort was worse than the one before it, the decline was legible in vintage data years ahead of the collapse, and the blended figure stayed calm because a large, appreciating base carried the sick new groups. The cure was available and nearly free: group by origination month, hold everything else constant, and read down.

**Reading a pricing change through before-and-after cohorts (2019).** After a pricing change at one company, our blended expansion revenue barely moved, and the debate over whether the change had worked ran on opinion. I split customers into the cohort that had signed under the old pricing and the cohort that signed under the new, and tracked expansion down each cohort's months. The new-pricing cohort expanded meaningfully faster, because the change had lowered the entry point and left more room to grow into higher tiers; the flat blend was the large old-pricing base diluting a real improvement in the newer group. The cohort read settled the argument the average had left open, and we kept the new pricing in place.

