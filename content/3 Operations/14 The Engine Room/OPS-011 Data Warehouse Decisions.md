---
pattern: "Data Warehouse Decisions"
aliases: ["Data Warehouse Decisions"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-006 CRM as Shared Memory]]"]
smaller: []
source: "Net-new; built from published data-platform accounts at Airbnb, Walmart and Progressive."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *The grain you store today is the finest question you'll be able to ask next year.*

> [!tldr] About this pattern
> The grain stored today is the finest question the company can answer later, because that choice sets the ceiling on every analytical definition, metric, cohort, and historical comparison built above it. It sits below [[OPS-006 CRM as Shared Memory]].

> [!warning] Admonition
> Don't let each team define its own version of a core number. Two dashboards reporting different revenue for the same month don't start a debate about the data; they end the practice of using data to decide anything.

Every company reaches a meeting where two people present different numbers for the same thing. Marketing's active-customer count doesn't match finance's, and both are defensible, because one counts accounts and the other counts billing entities, and neither definition was ever written down. The hour gets spent reconciling rather than deciding. What makes this corrosive is not the wasted hour; it's what people learn from it. After the third such meeting, participants stop bringing data to arguments, because bringing data means spending the meeting defending its provenance. The organization reverts to deciding by seniority, and the analytics investment continues to be funded.

The second version of the problem shows up later and costs more. A team asks a new question, something reasonable like whether customers who used a particular feature in their first week renew at a different rate, and discovers the data can't answer it. The data was collected and aggregated on the way in. Somebody, reasonably, stored weekly totals rather than individual events, because weekly totals were what the dashboard needed and storing everything looked wasteful. The aggregate can't be un-summed. The question is unanswerable until a year of new collection at a finer grain accumulates, which means the answer arrives a year after the decision needed it.

Grain decisions are made early, quietly, by whoever builds the first pipeline, and they're made against the requirements visible at that moment. Nobody frames them as strategy. They're framed as engineering pragmatism, and they're irreversible in one direction: you can always aggregate detailed data later, and you can never disaggregate summarized data at all. That asymmetry is the whole reason this deserves a decision rather than a default.

The obvious response, keeping everything at maximum detail forever, has real costs beyond storage. Fine-grained personal data carries retention obligations and privacy exposure that grow with the volume and the age of what's held. Query cost and complexity rise. And a store with everything in it and no agreed definitions on top is a different presentation of the same argument, since two analysts can compute contradictory numbers from identical raw events if nobody has settled what the metric means.

That's the part teams miss. The reconciliation problem and the grain problem look like one problem and are two. Storing fine-grained events fixes what you can ask. It does nothing about whether two people asking the same question get the same answer, which requires the definition to live in one place that every tool reads from.

## Complications

- **Aggregation is irreversible in the direction you'll want.** Detail can always be summarized later and summaries can never be expanded, so the cheap early choice forecloses questions silently.
- **The grain gets set by whoever builds the first pipeline.** It's decided as an engineering convenience against today's dashboard, long before anyone frames it as a decision about the company's future questions.
- **Keeping everything carries privacy and retention exposure.** Fine-grained personal data is a growing obligation as well as a growing asset, and the two grow together.
- **Raw detail doesn't produce agreement.** Two analysts can compute different answers from identical events when the definition of the metric lives in their queries rather than in one shared place.
- **Definitions have to hold still to be comparable, and businesses change.** A metric redefined mid-year breaks the trend it existed to show, and a metric never redefined eventually measures something the company no longer does.
- **The cost lands now and the benefit lands later.** Building the store and settling the definitions is expensive this quarter against questions nobody has asked yet, which makes it perpetually deferrable.

## Recommendations

> [!check] Store the finest grain you can defend on privacy and cost grounds, and define every metric exactly once in a place all tools read from; the test is that the same metric name gives the same number in a dashboard, an experiment readout and an ad-hoc query, and that a new question about individual behaviour can be answered from data you already hold.

Two decisions, taken separately and often confused. The grain decision is about what you keep, and it should be made pessimistically, since the questions you'll want in two years aren't visible now and the only hedge is detail. The definition decision is about what a number means, and it should be made once and centrally, because the cost of the reconciliation meeting is paid by everyone.

Three properties make the store usable rather than merely large:

1. **Event-level where behaviour matters.** Keep individual events with their timestamps and identifiers for anything about how customers behave, since cohort, retention and experiment questions all need to slice by things nobody has thought of yet ([[OPS-022 Cohort Analysis as Decision-Making]] runs on this).
2. **One definition, consumed everywhere.** A metric is specified once, and every dashboard, experiment and query resolves that name through the same definition. Any tool computing its own version reintroduces the reconciliation problem the store was built to end.
3. **A written retention position.** What you keep, at what grain, for how long, and why, decided deliberately rather than as an accident of what nobody deleted.

The store then feeds rather than replaces the relationship record. What a person needs to know about an account belongs in the system [[OPS-006 CRM as Shared Memory]] owns; what the company needs to analyse across accounts belongs here.

## Implications

A settled store changes the character of internal argument. Debates move from whose number is right to what the number means, which is the argument worth having. It also unblocks the patterns downstream: product-qualified signals, cohort reads and experiment results all assume a store that can answer questions at the grain of an individual and a moment.

The deferred version of this cost is the one to watch. Every quarter the decision is postponed, another quarter of data accumulates at the wrong grain, and the eventual fix carries a mandatory waiting period equal to however much history the new question needs. The first move is to pick the three questions you most wish you could answer about customer behaviour and check whether the data you're currently keeping could answer them; the ones it can't are your grain specification.

## Related Patterns

- **Above:** [[OPS-006 CRM as Shared Memory]] (the operational record this analytical store sits beside)
- **Below:** *(none yet)*
- **Peers:** [[OPS-022 Cohort Analysis as Decision-Making]] (the reads this grain makes possible), [[OPS-020 Metrics That Change Behavior]] (what happens once a number becomes a target), [[OPS-010 Minimum Viable Martech Stack]] (why fewer tools means fewer competing copies), [[GTM-028 Sales-Assisted Conversion]] (the telemetry that reaches a rep from here), [[OPS-021 Leading and Lagging Indicators]] (the definitions this store has to hold still)

## Examples

**Airbnb built one definition and made every tool read it (Minerva).** Airbnb's data team rebuilt its warehouse around certified, normalized core tables, then put a metric platform called Minerva on top so that a metric is defined once and consumed everywhere: dashboards, the experimentation framework, anomaly detection, machine-learning features, and ad-hoc analysis in R and Python all resolve the same name through the same definition. Robert Chang and colleagues documented the design on the Airbnb engineering blog from 2021, and by 2020 the platform was recognized internally as the single source of truth for metrics. The instructive part is that Airbnb already had a warehouse and plenty of data. What it lacked was agreement, and the fix was a definitional layer rather than more storage.

**Walmart chose store-item grain and opened it to suppliers (1991).** Retail Link gave Walmart's suppliers access to point-of-sale data at the level of the individual item in the individual store. That grain decision is what made the arrangement valuable: a supplier can see which specific product moved in which specific location, which supports replenishment, assortment and promotion decisions that a regional weekly total could never inform. Had Walmart stored sales summarized by region and month, the same system would have been a reporting convenience rather than a supply chain. The choice of grain is what determined the class of question the data could serve, and it was made decades before most of those questions were asked.

**Progressive kept driving data fine enough to price on (2004 onward).** Progressive launched usage-based auto insurance commercially in 2004 with TripSense, using a plug-in diagnostics device, introduced a wireless telematics device in 2008, and launched Snapshot in 2011. The company reports having collected more than 14 billion miles of driving data since 2008. An insurer that had stored annual mileage totals per policy would have a tidy, cheap dataset and no product, because pricing on behaviour requires knowing how someone drives rather than how far. The grain, individual trips with their braking, timing and duration, is the thing that made a different pricing model possible, and no amount of later analysis could have recovered it from summaries.
