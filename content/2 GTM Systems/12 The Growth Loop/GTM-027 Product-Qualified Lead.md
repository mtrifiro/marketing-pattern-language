---
pattern: "Product-Qualified Lead"
aliases: ["Product-Qualified Lead", "PQL", "Product-Qualified Account", "PQA", "The Lead Is an Event", "PQL Scoring"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[GTM-026 Growth Loop]]"]
smaller: ["[[GTM-028 Sales-Assisted Conversion]]", "[[GTM-030 Freemium-to-Enterprise]]"]
source: "PDF pp. 1–40 raw (PQL/PQA, account on fire, Sales-Assisted triggers); pp. 121–140 (scoring inputs); pp. 241–260 (PQL→PQA, PQA model, zero-party data)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A form-fill says someone downloaded a PDF; a product-qualified lead says someone already got value and hit the wall. Chase the second one.*

> [!tldr] About this pattern
> Product-qualified leads use observed behavior: one user reaching value fires a signal, several such users inside one company create a stronger commercial event, and account identity and threshold quality become part of qualification. It sits below [[GTM-026 Growth Loop]] and above [[GTM-028 Sales-Assisted Conversion]] and [[GTM-030 Freemium-to-Enterprise]].

> [!warning] Admonition
> Don't qualify leads by marketing form-fills. Run a product-led motion on funnel-era scoring and your reps drown in people who downloaded a whitepaper and never used the product, while the users who reached value inside it go unnoticed.

The mismatch is structural. Your product-led motion generates its real signal inside the product, where users sign up, try features, and reach value, but your qualification system was built for a funnel that measured intent by form submissions. So you keep scoring leads on whitepaper downloads and webinar registrations, feeding sales a list of people whose only demonstrated interest was trading an email for a PDF. Your reps work the list, get blocked because these "leads" have never run the product, and mark them unqualified.

The cost is a broken bridge between your product and your revenue. You have hundreds of users who reached the moment of value, hit a limit, and are ready for a conversation, and you can't see any of them, because the signal that matters, product behavior, isn't in your lead system at all. Meanwhile marketing hits its lead target, sales works its pipeline, and the numbers look active while the buying signal goes to waste. The error is treating a lead as a person on a list rather than a behavior in your product; what you can act on is behavior, colleagues invited, pricing viewed three times, an enterprise gate hit, and none of that reaches a form.

The same blindness runs one level up. A single activated user rarely holds the authority to close an enterprise purchase, because a B2B deal pulls in legal, procurement, finance, and an executive sponsor who never touched the free tier. So a rep works dev1@acme.com, finds no budget and no signing power, tags that user unqualified, and moves on, while dev2, dev3, and a whole team from acme.com are live in the product at the same moment. One row at a time, each looks like a junior person poking around; added up, they're an account on fire, a company where the product has already spread across a team and the only missing piece is a conversation with whoever owns the budget. A lead defined by form submission misses behavior at both levels, so you keep chasing downloads while the hand-raisers inside your product go ignored. Tomasz Tunguz published the earliest definition of the product-qualified lead in January 2013, keyed to in-product usage triggers instead of form fills, and described it then as a term already circulating among the SaaS companies he worked with. That definition works one user at a time. The addition here is the second level, where several qualified users inside one company roll up into an account signal that outranks any of them alone.

## Complications

- **The buying signal lives in the product, and the form never sees it.** In a product-led motion, the strongest evidence of intent is behavior, reaching value and bumping into a limit, which a form-fill can't capture.
- **A lead is a behavior in the product, captured as an event.** The thing worth acting on is a behavior at a specific moment, and a static list of contacts misses that the signal fires when the user is ready.
- **Volume forces a filter.** A self-serve product produces far too many users to sell to individually, so qualification has to separate the few with real intent from the flood of tire-kickers; ordering what survives is [[OPS-007 Lead Scoring and Routing]]'s job.
- **The signal decays.** A user who just hit a paywall is ready now; two weeks later they've moved on, and a weekly report finds them after the moment passed.
- **The individual signal has a ceiling the aggregate clears.** One activated user often lacks the authority to buy, while several colleagues across teams carry collective weight no lone seat does, and their shared usage is stickier: once the product becomes team infrastructure, the switching cost belongs to the organization, the pull [[GTM-030 Freemium-to-Enterprise]] converts into a contract.
- **Aggregation needs identity resolution, and can still lie.** Grouping users into an account means mapping emails and workspaces to a corporate domain and matching it to an ideal-customer profile, a data commitment per-user qualification doesn't require. Even then, five logins from one domain might be one consultant across five client sandboxes, and a head count that reads breadth without depth turns that consultant into a buying committee.
- **Reading behavior requires instrumentation.** Defining leads by product behavior works only if the product captures the events and pipes them where sales can act, an engineering commitment well beyond a marketing setting.

## Recommendations

> [!check] Define a product-qualified lead as a concrete in-product behavior with a number attached, then aggregate qualifying users by company. No person or account is qualified until its written trigger fires.

Qualify on behavior and act on the moment:

1. **Define the trigger.** Count a user as a product-qualified lead when they reach the product's value and show intent, and write the trigger as a concrete behavior with a number attached instead of a category.
2. **Respond in context.** When the event fires, offer help with the exact thing the user is doing, routed to someone armed with that user's usage instead of a general queue. [[GTM-028 Sales-Assisted Conversion]] develops that response; this pattern owns the qualification.
3. **Build the signal machinery.** Capture the events that matter, value realization, feature adoption, pricing views, gate hits, into a single source of truth, and pipe them into the systems where sales works.
4. **Group the events by corporate domain.** Roll the per-user value events up to the company behind them and match that company against your ideal-customer profile, so you're aggregating organizations worth selling to. Fire the account signal on breadth across seats and teams plus depth of real usage, and set a defensible threshold: five or more users from one ICP-matched domain going active at once. Hold the pattern rather than the exact count.
5. **Match the responder to the level.** Give an individual product-qualified lead a human's attention, a contextual in-app offer; give a product-qualified account an account executive's, because that deal spans departments and needs someone who can assemble the buying group.
6. **Rank what survives the filter.** Where a binary trigger is too crude, combine usage signals with firmographic fit to find the specific hand-raiser instead of treating every active user as a lead. Take the machinery from [[OPS-007 Lead Scoring and Routing]], which owns it: the fit, intent and engagement axes, the threshold where a ranking becomes an instruction, and the refitting of weights against conversion history.
7. **Comp for conversion.** Pay the humans who act on these signals for converting them rather than for total contract value, so the motion optimizes for paying customers over the biggest logo.

A product score means something a marketing score can't. A marketing score reads what someone said they wanted: a form filled, an email opened, a webinar attended. A product score reads what they did with the thing: features adopted, value milestones crossed, gates hit, seats invited. The first is a claim about the future, and people overstate those; the second is a record of the past. So weight a single completed value milestone above any quantity of engagement. Run the same weights over the account as well as the person, so several activated users inside one company outrank any of them alone; a marketing score has no equivalent move, because one person's form-fill tells you nothing about the person at the next desk.

Fix the vocabulary before you build on it, because the field doesn't agree with itself. This book uses **product-qualified lead for the person** who reached value, and **product-qualified account for the company** several such people turn out to work at. Other practitioners run the pair the other way, treating the account as the qualified unit and reserving "lead" for the decision-maker inside it, and you'll meet both usages in the same week. The distinction that matters is between a person and an organization, and the order of escalation runs from the first to the second whichever labels you hang on them. Pick one convention, write it down, and make your instrumentation and your CRM agree with it, because a team running two definitions will route the same signal two ways and argue about the results for a quarter.

## Implications

Qualifying on product behavior at both levels opens the rest of the growth-loop machinery. Trigger the human response with [[GTM-028 Sales-Assisted Conversion]]; hand a hot account to [[GTM-030 Freemium-to-Enterprise]] when the deal is a free footprint waiting to be governed; order the signals through [[OPS-007 Lead Scoring and Routing]] so the strongest get the scarce attention first. Use the signal as the routing mechanism inside the [[GTM-026 Growth Loop]], the event that moves a user from self-serve adoption toward expansion, and let it sharpen [[GTM-016 Account-Based Everything]] once product and revenue read the same account record. Run it well and you stop being lead-rich and account-poor, and collective adoption becomes the named-account pipeline [[GTM-029 Land and Expand]] grows.

Discipline the definition and the identity data, because both degrade quietly. Let too many behaviors count as qualifying and the list becomes as useless as the MQL list it replaced. Group by a shared domain across a consumer-email footprint and the aggregate scatters into noise. Set the account threshold too low and a training cohort looks like a buying committee, too high and the moment cools before the alert fires. A hot account also needs an account executive assigned this week instead of next quarter, a coordination cost the individual signal doesn't carry. And trust your signals only as far as your instrumentation earns them; where the data is thin, a product-qualified lead is a guess dressed as a metric.

## Related Patterns

- **Above:** [[GTM-026 Growth Loop]] (the circuit the signal routes users through)
- **Below:** [[GTM-028 Sales-Assisted Conversion]] (the human response the signal earns), [[GTM-030 Freemium-to-Enterprise]] (converting a qualified free footprint into a contract)
- **Peers / variants:** [[OPS-007 Lead Scoring and Routing]] (the scoring machinery this borrows), [[GTM-016 Account-Based Everything]] (the company aimed at named accounts), [[GTM-029 Land and Expand]] (the expansion a qualified account opens), [[GTM-007 Frictionless Onboarding]] (the activation that precedes qualification)

## Examples

**The pricing-page and feature-gate triggers.** A lead can be an event your product catches. Tomasz Tunguz published the earliest definition of the product-qualified lead on 15 January 2013, keying it to pre-set usage triggers rather than to who filled in a form and illustrating it with an Expensify user who uploads ten receipts and invites a colleague; OpenView's product-led growth writing carried the term into general use. A pricing page viewed three times in two days, an enterprise gate such as single sign-on, an account crossing a size threshold: any of those is a moment of demonstrated intent a form-fill would miss, and each should fire a contextual, helpful response rather than a cold pitch.

**Common Room's domain rollup, and the community signals it reads (launched 31 March 2021).** Common Room reads what people do with the product and around it, and it reads a team instead of a seat. Forbes reported Common Room's launch on 31 March 2021 with $52 million raised and Confluent, Figma, and Notion already using it. Notion's own template gallery and ambassador program throw off exactly the activity a rollup like this collects, and a template duplicated or an ambassador's tutorial shared is engagement no form-fill records. Common Room resolves that scattered community and product activity to the company behind it, matches the company against an ideal-customer profile, and alerts sales in real time when the account goes active, watching GitHub and community forums alongside the product. A threshold sits on top of that rollup: five or more users from one domain active at once, or several people from one company raising a serious question such as high availability. The trigger fires an account-level motion a single activated user never sets off.

**Slack, Figma, and Notion expanding by team adoption (2016–2023).** Waiting for the collective buy-ready moment means selling the whole team. Each of these products spread inside a company before any contract existed: one designer opened a Figma file, colleagues joined, and soon a whole design org worked in it. The buy-ready moment was collective every time, once enough colleagues had adopted that the usage was shared infrastructure, the account-on-fire pattern a per-user view can't assemble.

**Otis qualifies service and modernization sales from the equipment's own telemetry (portfolio as of 31 December 2024).** The machine raises its own hand. Otis's Form 10-K describes Otis ONE, a cloud service that monitors equipment health and performance in real time and sends predictive information to technicians and customers, and its service sales personnel sell maintenance and modernization contracts into a portfolio of about 2.4 million units worldwide. An elevator reporting a degrading component is the industrial version of a user hitting a gate: an event timed by the equipment rather than by a campaign calendar, which a person can act on holding that unit's own history.

The same filing names the boundary. Otis counts about 1.0 million connected units, warranty period included, against that much larger maintenance portfolio. Qualification by observed behavior reaches the instrumented part of your base and stops there, in a lift shaft or in a product, and for everything past that line you're back to asking the buyer what they intend to do.

