---
pattern: "Documentation First"
aliases: ["Documentation First", "Docs Are the Product"]
altitude: operations
status: draft
domains: [core]
larger: ["[[GTM-010 Technical Content Marketing]]"]
smaller: []
source: "PDF pp. 241–260 (Documentation as a Product: Stripe, MongoDB, DigitalOcean, GitLab)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *For a technical buyer, the docs are where they meet the product, try it, and decide; build them that way.*

> [!tldr] About this pattern
> For a technical buyer, documentation is often the place where evaluation, first value, and continued success all happen; acquisition, activation, and retention unfold inside a product the company happens to call docs. It sits below [[GTM-010 Technical Content Marketing]].

> [!warning] Admonition
> Stop treating documentation as support overhead written after the product ships. Do that and the artifact a technical buyer uses to evaluate and adopt becomes the least-owned, least-resourced surface you have, and deals die quietly inside gaps nobody is measuring.

For most products, documentation is a reference manual: a place buyers consult after they've decided, to look up a parameter or a config flag. That assumption, carried over to a technical product, sets the staffing. Docs become a task assigned to whoever has spare time. No one owns them as a product or designs the path through them, and no one watches where readers give up. The best go-to-market surface in the company is the one nobody is running.

The cost arrives silently. This is the mechanism [[GTM-005 Permissionless First Contact]] describes: a stranger reaches value on their own, without a gate or a call, and the docs either carry them there or strand them. When the tutorial assumes context the reader doesn't have, when the quickstart's code doesn't run, when the answer to their actual question isn't there, the reader concludes the product is immature and leaves. They rarely tell anyone. What you see is a bounce rather than a lost deal, so the loss never enters the pipeline it would have to explain itself in.

The obvious responses treat the symptom. A support team answering the questions the docs should have answered scales the cost of the gap instead of closing it. More reference pages raise the page count without building the path a new user needs to reach first value. A technical writer with no authority to change the product's onboarding produces prose that describes a confusing experience accurately. None of the three touches the arrangement underneath, which is that nobody owns or funds the docs as the go-to-market surface the buyer already treats them as.

## Complications

- **The buyer evaluates inside the docs rather than in a meeting.** A technical product is judged by whether a stranger can make it work from the documentation, so the docs carry the sales experience a pitch carries elsewhere.
- **Docs read as a cost center, so they get funded like one.** Filed under support and graded on existence, documentation loses the budget, the ownership, and the design attention a go-to-market surface earns, even though it does go-to-market work.
- **Three jobs pull in different directions.** Acquisition wants pages that rank and answer a general question; activation wants a guided path to first value; retention wants depth and a way for users to contribute. One undesigned docs pile serves none of them well.
- **The failure is silent.** A reader who stalls in the docs leaves without a word, so the lost deal never shows up in the pipeline, and the team tuning the funnel never sees the surface where it actually leaks.
- **Depth demands the people who built the thing.** Documentation that survives a practitioner's scrutiny has to come from engineers who understand the edge cases, the same scarce people the product needs.
- **Docs decay against a moving product.** Every release can break a code sample or strand a page, so documentation that isn't owned and maintained rots into a liability that damages trust more than absent docs would.

## Recommendations

> [!check] Treat documentation as a primary go-to-market product from day one. Own it, design it, measure it, and resource it like a product, and build it to do three jobs at once: acquire readers in search, activate them to first value, and retain them as they succeed and contribute back.

Give docs a product owner and a strategy that blends three approaches, each aimed at a different job:

1. For activation, build interactive tutorials that teach by doing: runnable, in-browser, get-it-working-now experiences that carry a new user to first value without leaving the page. Stripe and React are the archetypes; their "learn by doing" docs let a stranger run real code before committing anything. Daniele Procida's documentation system (2017) draws the same line from the writer's side, sorting the learning-oriented tutorial apart from reference material, which only helps a reader who can already frame the question.
2. For acquisition, build an SEO-optimized knowledge base whose job is to be the definitive answer to the general problems your buyers search for, so the top of the funnel arrives through the docs themselves. MongoDB and DigitalOcean are the archetypes; their knowledge bases rank for problems a reader has whether or not they run the product yet.
3. For retention, treat docs as a community asset your users co-create, so coverage deepens with adoption and the people who contribute become the people who stay. GitLab and NumPy are the archetypes.

Measure the docs on the three jobs rather than on page count. Acquisition shows up as organic search entry and the docs ranking for real questions. Activation shows up as time-to-first-value and completion of the quickstart path. Retention shows up as returning users, contributions, and the docs holding up under a growing product. Apply a product's instrumentation to a marketing surface, and you turn docs from an artifact you hope is fine into one you can see working or failing. Because the depth has to survive a practitioner reading past the headline, draw the writing from the engineers who built the product, the same cost [[GTM-010 Technical Content Marketing]] refuses to cut for the teaching content one layer up.

This resolves the forces because it relocates documentation from support, where it's graded on existing, to go-to-market, where it's graded on doing a buyer's job. Own the docs and you design them for a path; measure them and you reveal where the path breaks; resource them and they stay current against the product. The silent losses become visible as activation drop-off you can fix, and the artifact the buyer already trusts most becomes the one you run most deliberately.

## Implications

Run docs as a product and you change what your go-to-market surface can do without a salesperson present. The acquisition job pulls in top-of-funnel readers who searched for a problem, which feeds the broader teaching motion of [[GTM-010 Technical Content Marketing]] and compounds the way [[OPS-012 Content as Capital Asset]] describes, since a knowledge-base page written once keeps ranking and answering for years. The activation job makes [[GTM-005 Permissionless First Contact]] real: a stranger reaches first value alone because the interactive tutorial carried them there. The retention job seeds the community that [[GTM-022 Developer Advocacy]] turns into peer endorsement, because users who succeeded in the docs and contributed back are the ones who vouch for the product to others. When the product exposes an API, the reference and guides become the surface the ecosystem builds against, the machinery [[GTM-023 Public API Flywheel]] runs on.

Docs-as-product competes for the exact engineers the product roadmap wants, and the return is slower and softer than a shipped feature, so hold the line under that pressure. A team on a short horizon will be tempted to let the docs lag the product, to grade them on existence again, or to hand them to writers without the authority to fix the onboarding they document. Each move reopens the silent-loss problem: the buyer still evaluates inside the docs, so a docs surface that decays quietly loses deals that never enter the pipeline to argue for the docs' budget. Keep documentation owned, instrumented, and staffed as the go-to-market product it already is in the buyer's experience.

## Related Patterns

- **Above:** [[GTM-010 Technical Content Marketing]] (teaching earns demand; this applies it to the docs the buyer lives in)
- **Below:** *(none yet)*
- **Peers:** [[OPS-012 Content as Capital Asset]] (why docs compound as an asset), [[GTM-023 Public API Flywheel]] (the API docs the ecosystem builds against), [[GTM-022 Developer Advocacy]] (the human peer function docs seed)

## Examples

**Stripe's docs as its defining go-to-market surface (2011–present).** Stripe built early adoption on documentation that developers cited as a reason to choose the product before any sales conversation. The docs pair precise explanations of hard payment problems with runnable, in-browser examples, so a developer reaches a working integration inside the documentation itself. In my own experience evaluating payment infrastructure, the Stripe docs were the evaluation; the decision was effectively made by the time the code ran, and no call preceded it. The docs are the activation surface, and "learn by doing" closes the developer before a rep ever calls. Stripe is the archetype for the activation job, and the product's reputation for developer experience is largely a reputation for its docs.

**MongoDB and DigitalOcean knowledge bases as acquisition engines (2012 onward).** DigitalOcean's community tutorials cover Linux administration, databases, and networking, and they rank for general problems a reader has whether or not they run anything on DigitalOcean, pulling large practitioner audiences in through search. MongoDB's documentation and university content do the same for data modeling and query questions. Each answers the question the buyer already has, so the top of the funnel arrives through the docs rather than through paid demand. Both are archetypes for the SEO-optimized knowledge base whose job is to be the definitive answer.

**GitLab's community-co-created documentation (2014 onward).** GitLab treats its documentation as a product with the same contribution workflow as its code, so users and staff co-create it through merge requests and coverage deepens as adoption grows. The people who use the docs improve them, and the ones who contribute become the ones who stay and bring others. GitLab, alongside NumPy, is the archetype for docs as a retention and community asset, where the documentation compounds with the community rather than decaying against the product.

