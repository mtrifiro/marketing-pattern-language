---
pattern: "Experiment Design"
aliases: ["Experiment Design"]
altitude: craft
status: draft
domains: [core]
larger: []
smaller: ["[[CR-026 A-B Testing Ethics]]"]
source: "Net-new; built from public cases."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A test that can't change what you ship is a survey with better production values.*

> [!tldr] About this pattern
> An experiment earns its cost by forcing a decision. The team writes the choice, metric, predicted direction, and ship-or-kill rule before results arrive; advance commitment blocks the team's preferred reinterpretation afterward. It sits above [[CR-026 A-B Testing Ethics]].

> [!warning] Admonition
> Never launch an experiment without a stated question. Run one without it and you'll produce a dashboard nobody acts on: whatever number comes back, you'll argue about what it means and ship what you were going to ship anyway.

You've sat in this growth review. Someone put a green button against a blue one, or a five-field form against a three-field form, and the results are on the screen. Variant B is ahead by 6%. The room nods. Then a skeptic asks whether 6% is real or noise, and nobody knows, because no one decided in advance how big a difference would count, how long the test needed to run, or what you'd actually do if B lost. The conversation drifts into interpretation. The loudest opinion wins, dressed up in a chart. The test changed nothing except the confidence with which the pre-existing plan got shipped.

The defect is that the experiment was never wired to an action. A decision-producing test starts from a fork in the road: you're choosing between two onboarding flows, or two pricing displays, or keeping the current page versus replacing it. The test exists to tell you which branch to take. A data-producing test starts from curiosity, "let's see if a different headline does better." Curiosity generates dashboards. Dashboards accumulate. Six months later you've run two hundred experiments and can't name three decisions any of them drove.

The waste compounds in three directions. First, underpowered tests: a page with 4,000 visitors a week cannot reliably detect a 3% lift in a reasonable window, so you call a winner on random fluctuation and ship noise. Ronny Kohavi, who ran experimentation at Microsoft and Amazon, has shown that most proposed changes move the target metric by less than a couple of percent, and that teams routinely stop tests the moment the line crosses in their favor, a practice ("peeking") that manufactures false positives at rates far above the 5% the statistics promise. Second, metric drift: a test optimizes clicks on the button while signups, the thing that pays rent, hold flat or fall, because nobody named which number was allowed to decide. Third, the retrofitted narrative: with no pre-committed rule, every result becomes a Rorschach blot, and you read your own priors into it.

Amateur experimentation looks busy: lots of tests, a tool subscription, a slide of "wins" at the quarterly. Disciplined experimentation runs quieter and produces fewer conclusions, each one carrying real weight. One sentence separates them, and it gets written before the data exists: "If the result is X, we will do Y." Without it the experiment is theater, missing what Christopher Alexander would recognize as a pattern: a recurring problem, real forces in tension, and an invariant arrangement that resolves them.

## Complications

- **Curiosity pulls toward breadth; decisions demand depth.** It's cheap to spin up another A/B test and satisfying to watch the counter climb, but a portfolio of shallow tests answers no real question, while one well-powered test on a genuine fork can redirect the roadmap.
- **Speed fights significance.** The business wants an answer this sprint; the math wants enough samples to separate signal from noise. Calling it early feels decisive and is usually wrong.
- **The convenient metric is rarely the deciding one.** Clicks, opens, and time-on-page are easy to move and easy to measure; revenue, retention, and qualified pipeline are what the decision actually turns on, and they move slower and messier.
- **A single winning number hides collateral damage.** A variant can lift the primary metric while quietly harming trust, load time, or downstream conversion, so a test with no guardrails can ship a local win that's a global loss.
- **Precommitment constrains the very flexibility that makes people feel smart.** Writing the decision rule in advance removes the room to reinterpret later, which is exactly the room where motivated reasoning lives.
- **Traffic sets a hard ceiling on what you can learn.** Low-volume sites cannot power tests for small effects, and pretending otherwise turns experimentation into superstition.

## Recommendations

> [!check] Before you launch, write down the decision the test will settle, one hypothesis, the single metric allowed to decide it, the guardrails that can veto a win, and the ship-or-kill rule, then power the test to detect the smallest effect that would change your action, and refuse to read the result until it's done.

Sign a short contract with the future before you launch. It has five clauses, and the order matters.

1. **Name the decision, in plain language.** "We will replace the current signup page only if a new one meaningfully lifts email captures."
2. **State one hypothesis with a single direction.** "A single-benefit page with a soft ask will capture more emails than the current feature-grid page." Don't test a shopping list of variables.
3. **Choose one primary metric, tied to the decision.** This is the overall evaluation criterion, the number the whole test lives or dies by; don't pick it for convenience.
4. **Add guardrail metrics that can overrule a primary win.** Page-load time, unsubscribe rate, downstream paid conversion, so a variant that games the headline number but poisons the funnel gets caught.
5. **Set the sample size and duration in advance,** sized to the smallest lift that would actually make you switch. If you wouldn't act on less than a 10% gain, don't build a test that strains to detect 2%.

Write the decision rule before the data. This is the clause teams skip and the one that does the work. "If the new page lifts captures by 10% or more at 95% confidence with no guardrail regression, we ship it and retire the old one; otherwise we keep the current page and stop touching it." Written this way, the result can't be argued with, because the argument already happened, in the open, before anyone had a stake in the outcome. This is the same logic that [[OPS-020 Metrics That Change Behavior]] applies to reporting: a number no decision depends on is a number to stop collecting.

Hold this discipline across media and eras; it doesn't depend on A/B tools at all, only on the honesty of tying a test to a choice. A direct-mail team splitting a list in 1985 obeyed the same contract as a growth team splitting traffic in 2025: state the fork, pick the deciding number, size the sample, precommit the action. One thing corrodes the practice every time. Don't launch to "see what happens" and then narrate the wreckage.

## Implications

Design experiments this way and you'll run fewer of them and trust each one more. Your output stops being a slide of wins and becomes a small stack of settled decisions: this page, this flow, this price display, chosen and closed. That trust is what lets you change your mind, because a pre-committed rule binds the skeptic and the champion equally.

Feed this straight into the conversion-craft patterns. When [[CR-024 Form as Filter]] weighs whether a field costs more leads than it qualifies, settle it with an honest experiment; when [[CR-022 Friction as Qualification]] tunes the ask and the rung it sits on, govern the test with the same contract. Lean on [[CR-010 Message Testing]] for the language side: claims earn their place through structured contact with buyers, and Experiment Design supplies the structure. Then open its own smaller pattern, [[CR-026 A-B Testing Ethics]], because the power to test on live buyers is the power to manipulate them, and a test that treats people as instruments rather than participants can win the metric and lose the relationship.

Enforce one discipline where rigor meets traffic. Precommitment and power analysis are right, and most companies don't have the volume to satisfy them on most questions. Peep Laja, who founded CXL and built its ResearchXL model for conversion research, tells practitioners to ignore a significance report until each variation has collected at least 350 conversions, and points out that most young companies never see the monthly traffic an experiment would need to survive scrutiny. A team can run a hundred tests in a year, finish at the conversion rate it started with, and have gathered mostly false positives and false negatives. So decide, before running anything, whether this test can produce a decision at all. When it can't, stop pretending statistics will rescue a judgment call, and make the call. [[CR-010 Message Testing]] works the other side of that line, using 37signals' January 2009 Highrise headline test as proof that only a live test settles what a room can't, and the two claims agree once you sort surfaces by volume: the pages carrying enough traffic to decide something get tested, and everything else gets judgment, sales-call evidence, and the buyer's own words.

## Related Patterns

- **Above:** *(none yet)*
- **Below:** [[CR-026 A-B Testing Ethics]] (what you may test on a live buyer, and what corrodes trust)
- **Peers:** [[CR-010 Message Testing]] (claims earn their place through structured contact), [[OPS-020 Metrics That Change Behavior]] (Part III: if no decision changes, stop measuring it), [[CR-024 Form as Filter]] and [[CR-022 Friction as Qualification]] (conversion choices an experiment settles)

## Examples

**Obama for America, 2008: name the decision before the data.** Dan Siroker, who later co-founded Optimizely, ran the campaign's web testing with a single decision on the table: which splash page turns the most visitors into email subscribers, the list that fed both volunteering and donations. They didn't test at random. They fixed one primary metric (signup rate) and tested two things against it: the media at the top (several photos, a black-and-white family image, and video clips) and the button copy ("Sign Up," "Learn More," "Join Us Now," "Sign Up Now"). The video variants, which the team expected to win, lost badly. The combination that won paired the black-and-white family photo with a "Learn More" button, lifting the signup rate from a baseline of 8.26% to 11.6%, a 40.6% improvement. Because the metric and the decision were fixed in advance, the surprising result was actionable rather than debatable: they shipped it. Siroker's later estimate, from the campaign's own conversion and donation math, put the additional signups near 2.8 million and the additional money raised around $60 million. The test worked as a decision engine because the fork ("which splash do we run") and the deciding number ("signups") existed before the data did.

**Microsoft Bing, 2012: let guardrails make a win trustworthy.** An engineer proposed a small change to how paid-ad headlines rendered, folding the first line of ad text up into the title to make headlines longer. The idea sat in the backlog for months, rated low priority, because on its face it looked cosmetic. When it finally ran as a controlled experiment, revenue rose about 12%, on the order of $100 million a year in the US market, one of the largest single wins in Bing's history. The result was decision-grade rather than a fluke because Kohavi's team ran user-experience guardrails by default, so alongside the revenue metric the experiment watched whether people got worse results, whether the page slowed, whether sessions degraded. The revenue jumped and the guardrails stayed flat, so the win was real rather than a case of squeezing users for short-term clicks. A test with a single number and no guardrails would have been suspect at that magnitude. Pre-define the guardrails and you can act on the surprise.

**Basecamp, 2014–2015: what an untested change costs.** In February 2014 Basecamp (formerly 37signals) relaunched its marketing site and, among other changes, took the signup form off the homepage. Nobody ran the new site against the old one. Signups fell and stayed down, and because the team's attention had moved to other projects (it ran a third as many A/B tests in 2014 as the year before) the loss went unattributed for roughly eighteen months. In July 2015 the team finally tested putting the form back, and signups rose 16%, which Jason Fried said was worth millions of dollars a year at Basecamp's scale. He published the whole account on Signal v. Noise as "How we lost (and found) millions by not A/B testing," and drew the conclusion himself: a test of the new site against the old one in February 2014 would likely have caught the drop within a couple of weeks. What would have saved the eighteen months is the cheapest clause in the contract above, naming the decision ("do we ship the redesign?") and the deciding number ("signups") before the redesign went live.

