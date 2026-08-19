---
pattern: "Funnel Stages, Yours"
aliases: ["Funnel Stages, Yours", "Name the Funnel Honestly", "Qualification Framework", "Pipeline Hygiene"]
altitude: operations
status: draft
domains: [core]
larger: ["[[GTM-008 Demand Creation vs. Demand Capture]]", "[[GTM-004 Repeatable Sales Motion]]"]
smaller: ["[[OPS-006 CRM as Shared Memory]]", "[[OPS-009 Messaging Cadence]]", "[[OPS-007 Lead Scoring and Routing]]", "[[OPS-008 Nurture Architecture]]"]
source: "PDF pp. 121–140 (buyer journey / funnel stages); pp. 141–160 (CRM funnel-stage config, MQL/SQL definitions); pp. 161–180 (BANT vs MEDDIC vs SPICED; pipeline management, forecasting, conversion rates)"
created: 2026-08-01
modified: 2026-08-19
tags: [pattern]
---

> *Your stages follow the journey your buyer takes, and every boundary has an exit test a stranger can check without asking anyone how the deal feels.*

> [!tldr] About this pattern
> A funnel stage is a promise about the buyer's reality, kept honest by objective exits that sales and marketing share and by records that age with the deal. It sits below [[GTM-008 Demand Creation vs. Demand Capture]] and [[GTM-004 Repeatable Sales Motion]] and above [[OPS-006 CRM as Shared Memory]], [[OPS-009 Messaging Cadence]], [[OPS-007 Lead Scoring and Routing]], and [[OPS-008 Nurture Architecture]].

> [!warning] Admonition
> Don't accept the CRM's default funnel stages or a template from a blog and start reporting pipeline against them. You'll get numbers that look precise while they measure a generic buyer's journey that isn't happening in your deals.

The default stages arrive looking authoritative. Lead, MQL, SQL, Opportunity, Closed: the sequence is on every diagram, so you treat it as settled and pour your real deals into it. The labels carry no shared meaning. You never said what makes a lead an MQL, or what a rep must see before an SQL becomes an Opportunity, so each person fills the gap with a private definition. Marketing counts a form-fill as an MQL. Sales counts an MQL as a lead worth its time, a different and smaller set. The same word points at two populations, and every report you build on it is quietly wrong.

Left vague, those definitions make the funnel a fiction you still forecast against. A stage defined as "good demo" or "seems interested" moves on a rep's optimism, so pipeline swells whenever reps feel good and collapses when a quarter turns and no one knows why. You'll stare at conversion rates between stages that don't mean the same thing month to month, and when a number moves you won't know whether the market changed, the motion changed, or a rep recategorized a deal. A CRM configured before anyone understands the process encodes that confusion into the system of record.

A funnel built as a reporting artifact is still a model of the buyer. Borrowed stages describe an imagined average buyer who considers, then decides, in a tidy line. Your buyer might loop, might bring a committee, might sit dormant for two quarters and then move in a week. A funnel that mirrors the org chart measures the company's wishes and calls them pipeline.

Defining the stages once doesn't hold them either. A definition decays while deals sit inside it: a close date set for March is still March in May because moving it admits the deal stalled, amounts sit at the optimistic ceiling uncorrected, and dead deals stay open so the total looks healthy while a third of it is gone. The first sales boundary decays the same way, because every rep you hire brings a qualification habit from a former employer, so without one chosen method the team runs several at once.

## Complications

- **Defaults are free and honest stages are expensive.** The CRM ships with stages and the internet supplies templates, so adopting them costs nothing today, while defining your own means a hard conversation and a week of disagreement that a busy team would rather skip.
- **Sales and marketing optimize different things at the boundary.** Marketing is rewarded for volume of qualified leads and sales for the quality of what it works, so the two teams pull the MQL definition in opposite directions unless a shared, written rule pins it.
- **Optimism is faster than evidence.** A rep advancing a deal on a feeling moves it in a second; requiring an objective signal before the stage changes adds friction the rep feels immediately and the forecast benefits from later.
- **One funnel rarely fits every segment.** A self-serve buyer and an enterprise committee move through different stages at different speeds, so a single borrowed template forces two real journeys into one sequence that fits neither.
- **Stages are cheap to name and costly to rename.** Once pipeline history, comp plans, and board reports are built on a stage definition, changing it breaks the time series, so the pressure is to leave a bad definition in place rather than pay to fix it.
- **Rigor at the boundary costs speed at the boundary.** A heavy qualification method confirms who signs and how the decision gets made, and it buries a fast, low-price sale in ceremony; a light one disqualifies in minutes and misses the enterprise decision entirely.
- **Decay is continuous, so cleanup can't be an event.** Dates slip and deals die every week, so a quarterly scrub leaves the stages wrong most of the time, and a weekly pass spends selling hours on bookkeeping.

## Recommendations

> [!check] Define your funnel's stages to mirror your buyer's real journey, and give every stage an objective exit criterion that sales and marketing have agreed on in writing before you configure the CRM, so a deal advances on evidence rather than on optimism and the pipeline becomes forecastable and diagnosable.

Work it in order:

1. **Map the journey, then name the stages after it.** Walk the path a real buyer takes, from first awareness through consideration to decision, and let that path set the stage boundaries. The acronyms are borrowed: SiriusDecisions' Demand Waterfall, published in 2006, is where MQL, SAL and SQL entered the B2B vocabulary. Take the words if they help you, and write your own definitions underneath them. Create a stage only where the buyer genuinely changes state.

2. **Give each boundary an exit criterion that ignores how anyone feels.** Don't call a lead an MQL because it "seems interested"; require a written bar, a score above a set threshold plus an ICP match and a defined intent signal. Let scoring supply the mechanical part of that bar, which is [[OPS-007 Lead Scoring and Routing]]. Don't call a lead an SQL on a "good demo"; require that a rep has accepted it against a written standard. Don't mark an Opportunity because a deal "feels real"; require a specific, checkable fact, budget confirmed or an evaluation underway.

3. **Make sales and marketing agree, and write the agreement into the stage.** Treat the MQL definition as a treaty between the team that generates it and the team that works it, and get both to sign or trust neither number. Bind a service level to the boundary as part of the definition: an MQL is a lead that clears the bar and that sales calls within 24 hours, because a stage that promises delivery without a response commitment leaks leads when they're hottest. Keep the definitions in one shared record so both teams read the same truth, which is [[OPS-006 CRM as Shared Memory]].

4. **Pick one qualification method for the first sales boundary and make every rep run it.** Three cover most teams. BANT (Budget, Authority, Need, Timeline), developed at IBM, is four fast questions that separate a browser from a possible buyer, so reach for it where volume demands quick disqualification. MEDDIC (Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion), written at PTC in the 1990s for large enterprise deals, makes a rep confirm who signs and how the decision gets made before a deal counts. SPICED (Situation, Pain, Impact, Critical Event, Decision), which Jacco van der Kooij's Winning by Design built for recurring-revenue businesses, starts from the buyer's own situation and pain. Weigh the three against your deal size and cycle, then hold the choice, because the gain comes from every rep confirming the same thing at the same point. Make the method the boundary itself, so a hundred qualified deals are a hundred that cleared one bar, and let [[GTM-027 Product-Qualified Lead]] run the parallel test on product-usage signals.

5. **Groom the stages weekly and forecast off the groomed version.** Close a dead deal in the week it dies, move a close date the week the deal slips, and correct an amount to what the deal is worth. As the manager, inspect for a close date already in the past, a deal that hasn't moved in weeks, a late-stage deal with no completed gate. Then weight each stage by its own historical conversion rate, so the forecast tracks what deals at that stage have actually done. A dirty pipeline's conversion rates measure fiction.

Now test every stage: can an outsider confirm its exit signal without asking anyone how they feel? Where the answer is no, rewrite the criterion.

## Implications

Once your stages carry objective, agreed exit criteria, the pipeline turns from a picture into an instrument. Read the conversion rates between stages as like-for-like across months, so when MQL-to-SQL conversion drops you can chase a real cause, worse lead quality or a slipping response time, rather than a definitional wobble. Trust the forecast now, because a deal in a stage actually satisfies that stage's test. One shared method at the sales boundary also gives you something to coach against, so a deal review can name the miss in the team's own words: the rep never confirmed the decision process, or advanced a deal with no identified champion. Feed the stage-by-stage view into [[OPS-022 Cohort Analysis as Decision-Making]] to turn cohorts over time into decisions.

Then hold the discipline against its own tensions. Honest stages are less flattering: a strict MQL definition shrinks the count marketing gets to report and a strict Opportunity bar deflates a pipeline that vague stages had inflated, so expect the first quarter after the fix to look like a loss while the numbers finally tell the truth. Don't let segments break the model; when self-serve and enterprise motions need different criteria, run separate funnels. Revisit the qualification method when the motion changes, since a team that moved upmarket on BANT's four questions will keep qualifying shallow, and budget for the switch; what you're replacing is the shared language the whole team runs on. And renegotiate the treaty as the market moves, breaking the time series on purpose and with a note rather than letting reps quietly reinterpret the words.

## Related Patterns

- **Above:** [[GTM-008 Demand Creation vs. Demand Capture]] (the creation-or-capture call that sets what these stages are for), [[GTM-004 Repeatable Sales Motion]] (the documented motion whose stage gates this defines and keeps honest)
- **Below:** [[OPS-007 Lead Scoring and Routing]] (moves leads across the stages), [[OPS-008 Nurture Architecture]] (holds the leads a stage isn't ready to advance), [[OPS-009 Messaging Cadence]] (what each stage sends the buyer), [[OPS-006 CRM as Shared Memory]] (where the definitions live)
- **Peers:** [[OPS-018 Sales Enablement Architecture]] (delivers the qualification method to every rep), [[GTM-027 Product-Qualified Lead]] (the parallel test on product-usage signals), [[OPS-019 Quarterly Recalibration]] (re-tests the stage model), [[OPS-022 Cohort Analysis as Decision-Making]] (reads the stages over time)

## Examples

**MEDDIC at PTC (1996 onward).** Dick Dunkel and Jack Napoli built MEDDIC inside Parametric Technology Corporation in 1996, under sales leader John McMahon, while the company was scaling a field organization faster than it could train one. MEDDIC's own custodians credit the method with the run of enterprise growth PTC posted afterward, which is their claim rather than an independent finding; what's clearer is why it spread, since it forced reps to confirm the economic buyer and the decision process before a deal counted. Where each rep qualifies by instinct, a stage can't be summed. Standardizing on one method and disqualifying early meant every surviving deal cleared the same six checks.

**AWS runs two staged paths at once (both published on aws.amazon.com, checked August 2026).** One funnel template can't hold both a developer swiping a credit card and a Fortune 500 procurement committee. AWS builds segment-specific funnels. Its self-serve path opens an account on the free tier with no conversation, so usage is the qualifying signal. Its enterprise path runs the three named phases of the Migration Acceleration Program: Assess identifies capability gaps against the Cloud Adoption Framework's six dimensions, Mobilize closes them and builds the operational foundation, and only then does Migrate and Modernize run. Same company, two honest funnels, because the buyers take two different journeys.

**Clinical trials publish their stage definitions and their counts (CONSORT, 2010).** A trial fixes every boundary in writing before the first subject arrives, then publishes the number standing at each one. The CONSORT statement, revised in 2010 by Kenneth Schulz, Douglas Altman, and David Moher, requires a randomized trial to print a flow diagram giving how many people were assessed for eligibility, how many were excluded and on what grounds, how many were randomized, how many received the assigned treatment, and how many reached the analysis. Each gate carries a criterion set in advance, so a stranger can audit the drop between any two stages without asking anyone what they thought. Hundreds of journals now make the diagram a condition of publication, which is a stronger enforcement mechanism than a treaty between your marketing and sales leads and a decent picture of what such a treaty looks like when it holds.

**The MQL definition war, resolved by objective criteria.** On one team I worked with, marketing and sales fought for a quarter over the word MQL. Marketing reported hundreds a month; sales insisted almost none were real and worked its own parallel list. Both were right, because each had a private definition and neither wrote it down. We ended it by agreeing, in a document both leaders signed, that an MQL was a lead scoring 60 or above, matching the ICP, with a named intent action, and that sales would call every one within 24 hours. The count dropped hard and the arguing stopped, because one testable definition had replaced two feelings wearing the same name.
