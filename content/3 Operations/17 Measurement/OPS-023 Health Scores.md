---
pattern: "Health Scores"
aliases: ["Health Scores"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-020 Metrics That Change Behavior]]"]
smaller: []
source: "Net-new; built from credit scoring, clinical early warning scores, and the customer success literature."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *A composite score is a prediction; if nobody checks it against what happened, it's a mood with a number attached.*

> [!tldr] About this pattern
> A health score is a prediction assembled from usage, adoption, support, and relationship signals, and calibration against realized renewal, churn, and expansion decides whether that prediction deserves trust. It sits below [[OPS-020 Metrics That Change Behavior]].

> [!warning] Admonition
> Don't ship a health score you've never checked against renewals. An uncalibrated composite tells you how a team feels about its accounts, dressed as a prediction, and it will be wrong in the direction everyone hopes.

The first version of an account health score is nearly always built the same way. Someone picks five or six signals that sound relevant, logins, feature adoption, support ticket volume, time since last executive contact, invoice status, assigns each a weight chosen by discussion, sums them, and colours the result red, amber or green. It ships that week, it looks credible on a dashboard, and nobody involved could say what the number predicts, because it was never tested against anything.

The weights are the tell. They came from a meeting rather than from data, which means the score encodes what the team believes drives retention. Sometimes that belief is right. When it's wrong, the score is confidently wrong, and confidently wrong is worse than absent: a green account that churns costs more than an unscored account that churns, because the green account got no attention and the team had a reason not to look.

The second thing that goes wrong is subtler and takes longer to see. Health scores get built from the signals that are easy to collect rather than the signals that predict. Login counts are available in every system; whether the customer's original business problem got solved is available nowhere. So the score drifts toward measuring engagement, and engagement and value come apart in both directions. A customer who logs in daily because the product is confusing scores well. A customer who set it up once, got exactly what they wanted, and never returns scores badly, and is delighted.

Then there's the pressure the score creates once it becomes a target. Give a customer success team a number they're accountable for, and behaviour changes to move the number. Contacts get logged to reset the recency clock, a quick call improves the relationship signal, and the score improves while nothing about the account's real trajectory changes. This is the general problem [[OPS-020 Metrics That Change Behavior]] owns, and account health is a particularly exposed case, because most of the inputs are things the internal team can influence directly without involving the customer at all.

The response most teams reach for, adding more signals, doesn't fix any of this. A score with fifteen inputs is harder to game in any single direction and also harder to interpret, harder to calibrate, and more likely to contain two inputs measuring the same underlying thing twice. Complexity buys the appearance of rigour and postpones the question of whether the thing predicts.

## Complications

- **The weights come from opinion and nothing forces them to be revisited.** A score assembled in a workshop encodes the team's theory of retention, and it can stay in production for years without anyone testing whether the theory held.
- **Easy signals aren't predictive signals.** Logins and ticket counts are available everywhere; whether the customer got what they came for usually isn't instrumented at all, so the score drifts toward what's collectable.
- **Engagement and value diverge in both directions.** Heavy use can mean confusion and light use can mean the job is done, and a score built on activity can't tell those apart.
- **Most inputs are influenceable by the team being measured.** A recency clock resets on a logged call, which makes the score movable without the account changing.
- **A green account gets no attention, so the error is self-concealing.** A wrong score misleads and withdraws the scrutiny that would have caught it.
- **Calibration needs churn to learn from.** The accounts that teach you what the score should weigh are the ones you lost, and there's a natural reluctance to study them closely.

## Recommendations

> [!check] Calibrate the score against realized outcomes at least quarterly, and hold it to a stated hit rate: accounts scored red should churn or contract at a materially higher rate than accounts scored green, and if the two populations behave the same way, the score is decoration and the weights need rebuilding from the outcome data rather than from discussion.

That test is the whole discipline, and it's the step teams skip for years. Take the accounts scored at each level ninety days ago, look at what actually happened to them, and compare. A score that fails to separate outcomes isn't measuring anything at all.

What separates a calibrated instrument from a coloured average:

1. **Weights are derived from outcomes rather than from discussion.** Start with the accounts you lost and the accounts that expanded, and find which signals actually differed between them. The first honest pass usually kills two or three inputs somebody was attached to.
2. **Inputs the team can move alone are treated with suspicion.** Anything a CSM can change without the customer doing something is a candidate for gaming, and it belongs in the score only if it survives calibration on its own merits.
3. **The score predicts a stated event on a stated horizon.** "Health" isn't an outcome. Renewal at the next term, contraction, or expansion within two quarters are outcomes, and a score aimed at one of them can be checked.
4. **A drop triggers a person rather than a report.** The value of a leading indicator is the intervention window it buys, and a score that only appears in a monthly review has spent that window; [[GTM-032 Customer Success as Growth Engine]] owns who responds.

Keep the input count small enough that a human can read a red account and know why it's red. A score nobody can interpret produces a queue rather than an action.

## Implications

A calibrated score converts customer success from a reactive function into a scheduled one, which is the precondition for treating the installed base as a growth source rather than a support cost. It also produces a byproduct worth more than the score in the first year: the calibration exercise tells you which signals actually predict retention in your business, and that's a finding about the product rather than about the dashboard.

Expect the first calibration to be uncomfortable. Most scores, tested for the first time, separate outcomes far more weakly than their users assume, and some separate them backwards. The first move is to pull the accounts you scored green ninety days ago and count how many have since churned or contracted; that number is your actual starting position.

## Related Patterns

- **Above:** [[OPS-020 Metrics That Change Behavior]] (what happens to any number that becomes a target)
- **Below:** *(none yet)*
- **Peers:** [[GTM-032 Customer Success as Growth Engine]] (the function that acts on the score), [[GTM-033 Expansion Before Acquisition]] (the retention arithmetic it protects), [[GTM-007 Frictionless Onboarding]] (the early habit it reads), [[OPS-022 Cohort Analysis as Decision-Making]] (the outcome data calibration runs on), [[OPS-021 Leading and Lagging Indicators]] (why a predictive score is worth more than an accurate report)

## Examples

**Credit scoring made calibration the product (FICO, 1989).** Fair, Isaac and Company introduced a general-purpose credit bureau score in 1989, and the reason it became infrastructure is that it was continuously validated against realized defaults rather than against expert judgement about who looks creditworthy. The weights are empirical, the score predicts a stated event over a stated horizon, and its performance is measurable after the fact. An account health score aspires to be the same instrument for renewal, and almost none of them are held to the same standard. The comparison is useful mainly for what it exposes: a credit score that had never been checked against default rates would not be a weaker credit score, it would be an unusable one, and most health scores are in exactly that condition.

**Clinical early warning scores show a calibrated composite in use (2012 and 2017).** The Royal College of Physicians published the National Early Warning Score in 2012 and updated it as NEWS2 in December 2017. It aggregates six routinely recorded physiological measurements into a single number that flags patients deteriorating toward a serious event, and it has been validated against outcomes in published studies and adopted across the NHS, with more than 122,000 staff completing competency training in its use. Two design choices transfer directly. The inputs are things already recorded in the course of ordinary work rather than a separate data-collection burden, and the score is deliberately simple enough that the person reading it can see which parameter drove it.

**Customer success brought the practice into software (2016).** Nick Mehta, Dan Steinman and Lincoln Murphy's *Customer Success* set out the discipline that made account health scoring standard practice in subscription businesses, alongside the argument that the installed base is where subscription revenue actually lives. The category grew quickly, and the scores mostly arrived before the calibration did: a generation of scores shipped with weights set by workshop and colour-coded dashboards adopted enterprise-wide, in businesses that could have tested them against their own renewal history from the first quarter. The gap between how fast the practice spread and how slowly calibration followed is the reason this needs to be a pattern rather than a tooling choice.
