---
pattern: "Lead Scoring and Routing"
aliases: ["Lead Scoring and Routing", "Rank Then Route"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-005 Funnel Stages, Yours]]"]
smaller: []
source: "PDF pp. 121–140 (Implementing Lead Scoring: Fit, Intent, Engagement; routing & SLA)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A ranked list works itself; an unranked one works whoever shouts loudest. Score the leads by who's ready, then hand each one to the right person before the readiness fades.*

> [!tldr] About this pattern
> Lead scoring gives scarce sales capacity a ranked queue, and routing gets each qualified opportunity to the right owner inside a response window that preserves readiness. It sits below [[OPS-005 Funnel Stages, Yours]].

> [!warning] Admonition
> Don't hand a rep a hundred names and forty hours with no ranking. The rep will work them in arrival order, the accounts most likely to buy will sit unworked in the pile, and the week will burn on tire-kickers.

Success at the top of the funnel creates the problem at the bottom. Building demand, per [[GTM-008 Demand Creation vs. Demand Capture]], earns you volume, and volume without order is close to worthless to a team whose capacity is fixed. Most of the names in that pile will never buy. Some downloaded a template and forgot you exist. A few are ready to sign this quarter and are quietly evaluating three competitors right now. In one undifferentiated queue, the ready buyer waits behind fifty people who filled out the same form for entirely different reasons.

The cost lands twice. Your sales team spends its scarce hours on low-probability conversations, so cost-per-opportunity climbs even as lead count rises, and leadership sees a full funnel that isn't converting. Meanwhile the leads that would have converted go cold in the queue. One constraint sits under all of this: with limited sales capacity, deciding who to contact first is the whole game. If you can't answer "who first," you're running a lottery, and the prize is scattered at random across a hundred names.

The obvious responses each fail in a different direction. Telling reps to "just work harder" adds no hours. A team that passes every lead to sales the moment it arrives buries the real buyers under noise and teaches reps to ignore the flow. Tightening the intake so fewer leads count trades a full pile for a quiet one, dropping real buyers whose interest showed up as a pattern of small actions rather than one loud request. None of these separate the buyer from the browser, because none of them rank.

## Complications

- **Sales capacity is fixed and small.** A rep can hold only so many real conversations a day, so the operative question is which qualified lead to call first; the arithmetic forces a ranking whether or not the team builds one on purpose.
- **Leads look alike at intake and differ enormously in value.** Two people fill out the same form; one runs procurement at a perfect-fit account and one is a student doing research. A single "is a lead / isn't a lead" flag can't tell them apart, and only combining who someone is with what they've done separates the two.
- **Intent decays on a clock.** A prospect who requested a demo this morning is a different asset three days later. Readiness is perishable, so both the score and the handoff have to respect recency; a model that treats a three-month-old signal like today's sends reps to accounts that have already chosen someone else.
- **Too many weak signals poison the ranking.** A point awarded for every minor click floats the browsers to the top, rebuilding the noisy list the score was meant to replace. A model earns its usefulness through restraint, weighting the few behaviors that actually precede a sale and ignoring the many that only show a pulse.
- **A perfect score with slow routing wastes the signal.** Ranking tells you who's hot; it does nothing if the hot lead sits in a queue for two days before anyone calls. Speed of delivery is as decisive as accuracy of the score, because the value the score identified is the same value that's evaporating while the lead waits.
- **Weights are guesses until conversion data corrects them.** The first version of any model is a hypothesis about what predicts a sale, and hypotheses are wrong in specific ways that only outcome data reveals; a model no one revises slowly drifts away from the company's real buyers.

## Recommendations

> [!check] Score every lead by combining fit, intent, and engagement into a single number that ranks it by likelihood and value to convert, set a threshold that names the point where a human acts now, route each lead past that line to the right owner inside a hard response window, and revise the weights against real conversion data so the ranking keeps reflecting what actually predicts a sale.

Work it in order:

1. **Score fit, intent, and engagement together.** Fit is how well the lead matches the ideal customer profile; intent is the in-market behavior that shows buying is underway; engagement is how actively the person interacts with you. Marketo's *The Definitive Guide to Lead Scoring* builds its model from the same three inputs, grading a lead on its fit with the business, where it sits in the buying cycle, and the interest it has shown. Score a good-profile contact who downloaded one paper months ago and went silent as moderate, and make it wait. Score a lead high on all three as hot, and jump it up the queue. Read the number as a rank rather than a label; its only job is to put the person most worth a call at the top of a list your capacity-limited team works top-down. Set the threshold where the rank turns into an instruction, and pick an actual number: draw the marketing-qualified line at 60, say, meaning ideal-customer fit plus demonstrated intent. Above it, a human acts; below it, the lead stays in nurture until its score climbs. Score product behavior on the same axes rather than in a second model beside this one, and take the definition of what counts as a user reaching value from [[GTM-027 Product-Qualified Lead]].

2. **Route as fast as the signal is perishable.** Never let a score identify a hot lead and then let it sit; you'll have spent effort proving a value you then let decay. Make the routing rule mechanical and immediate: when a lead crosses the threshold, have the CRM auto-assign it to the right SDR or queue and start a clock, and codify that clock as a service-level agreement, for example call a new MQL within twenty-four hours, or within minutes for the hottest tier. A hot lead cools fast, and every hour between the raised hand and the answered call is conversion draining away. James Oldroyd's 2007 lead-response study put numbers on exactly that decay. Hand the human conversation that follows, the actual working of the hot lead, to [[GTM-028 Sales-Assisted Conversion]]; your job ends at delivering the right lead to the right owner before it goes cold. Don't discard the leads below the line; route them to [[OPS-008 Nurture Architecture]] to stay warm until their behavior earns a crossing score.

3. **Earn the weights from data and keep revising.** Start with assumptions, then analyze which factors actually correlate with conversion, and let predictive or machine-learning scoring do that correlation at scale once you have enough history. Treat the first model as a guess dressed as a formula and let the conversion record turn it into a measurement. Heed two warnings. Count too many weak signals and you produce an MQL list as noisy and useless as no scoring at all, so prune toward the few predictive behaviors rather than piling on intuition. And pair a great score with slow routing and you waste the signal, so treat the SLA as half of what makes the model worth building. The question of how sales confirms a routed lead is genuinely qualified sits upstream in [[OPS-005 Funnel Stages, Yours]], which picks the one qualification method every rep runs at that boundary.

Now run the whole loop once and check it: does a threshold-crossing lead reach a named owner inside the SLA window, and does a lost deal feed back as a weight correction? Where either fails, fix the routing or the review cadence before you trust the score.

## Implications

A working score-and-route system changes what a sales day looks like. Get reps off the pile and starting at the top of a ranked list, spending their fixed hours on the accounts most likely to convert, with the highest-scoring leads reaching them inside the SLA window while the interest is still live. Use the threshold as the one shared object marketing and sales argue about with data instead of anecdote, since both sides can see why a given lead did or didn't cross the line, and feed every won or lost deal back as a correction to the weights. Cost-per-opportunity falls because you stopped spending capacity at random.

Then hold the tensions open, because they don't close on their own. A score is a model, and models drift as segments change and get gamed when reps comp on them, so weights tuned on last year's buyers can misread this year's; keep pruning them. The recency problem never fully resolves, because a signal's value fades on a clock the model can only estimate. And the SLA is only as real as its enforcement: leave a twenty-four-hour promise unmeasured and it decays into a suggestion, and the routing speed that made the score valuable quietly disappears. Keep someone pruning the model against conversion data and holding the response clock to account, or the system stops being honest.

Working leads in arrival order gives a strong-fit account carrying one stale download the same attention as a hot, all-three-axes lead. A model that scores each lead on the three axes, with the qualified line at 60 meaning ideal-customer fit plus demonstrated intent, works the highest-scoring leads first. The moderate lead waits in nurture; the hot one leaps to the top; the score, rather than arrival order or the loudest form-fill, sets the day's calls. The pile becomes a list that works itself.

## Related Patterns

- **Above:** [[OPS-005 Funnel Stages, Yours]] (the stages this pattern moves leads across, and the exit criteria it feeds)
- **Below:** *(none yet)*
- **Peers:** [[OPS-008 Nurture Architecture]] (where below-threshold leads go to stay warm), [[GTM-028 Sales-Assisted Conversion]] (the human response that works the routed hot lead), [[GTM-027 Product-Qualified Lead]] (what counts as a product signal worth scoring)

## Examples

**Cutting MQL response time to minutes lifts conversion (documented lead-response research, 2007–2011).** In my own operating experience the most reliable conversion lever was answering the phone faster, ahead of any improvement to the score. A threshold-crossing lead can sit for a day before anyone dials. Routing that auto-assigns the lead and dials it within minutes closes that gap. The finding behind that is well documented: the Lead Response Management study by James Oldroyd (2007, later work with InsideSales) found the odds of qualifying a web lead dropped by orders of magnitude when the first call slipped from five minutes to thirty, and James Oldroyd, Kristina McElheran, and David Elkington tested 2,241 US companies with live web leads for Harvard Business Review's March 2011 "The Short Life of Online Sales Leads," finding that firms making contact within an hour were nearly seven times likelier to qualify the lead than those that waited an hour longer, and more than sixty times likelier than those that waited a day or more. Companies that made the change converted materially more of the same leads. The score picked the hot lead; the clock kept it hot.

**Triage ranks the queue and then puts a clock on it (Canadian Triage and Acuity Scale, 1999).** An emergency department can't work arrivals in the order they arrive, so it scores every arrival and attaches a clock to the score. Canada's national emergency-department scale, published as implementation guidelines in 1999, sorts each patient into five levels by how fast their condition is likely to deteriorate and how much care the case will take, then pairs every level with a target time to physician: level 1 immediately, level 2 within fifteen minutes, level 3 within thirty. The guidelines also name the share of cases that has to hit each target, 98 percent at level 1 and 95 percent at level 2, so the promise is measurable instead of aspirational. Two features carry straight over. The score combines who the patient is with what's happening to them right now, which is fit plus intent. And a target without its percentage is worthless, which is why an unmeasured twenty-four-hour response promise decays into a suggestion. Canadian emergency physicians have since argued the 1999 percentages are unreachable in a crowded department and proposed median and ninetieth-percentile benchmarks instead, which is the argument every sales team eventually has about its own service level.

**A scoring vendor published its own numbers (Fliptop, 2015).** Instead of hand-setting point values from a guess about what predicts a sale, a model can fit the weights to a company's own won-and-lost record. Brendan Duncan and Charles Elkan presented two such models at ACM SIGKDD in August 2015. The patent Duncan filed for the predictive-scoring vendor Fliptop on 16 March 2015 claims a 137 percent lift in conversion rate for one SaaS customer. The customer is unnamed and the vendor graded its own work, which is as far as the published record goes: Marketo, HubSpot, and Salesforce's Einstein all ship predictive scoring, and none publishes a checkable outcome. The model ranks new leads against that record and routes the top ones into the SLA-governed queue.
