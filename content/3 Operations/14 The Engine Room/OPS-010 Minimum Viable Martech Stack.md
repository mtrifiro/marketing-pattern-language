---
pattern: "Minimum Viable Martech Stack"
aliases: ["Minimum Viable Martech Stack"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-006 CRM as Shared Memory]]"]
smaller: []
source: "Net-new; built from Brinker's annual vendor census, Gartner's CMO Spend Survey, and P&G's disclosed consolidation."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *Four jobs need covering; every tool beyond the fourth has to prove a job nobody else is doing.*

> [!tldr] About this pattern
> A minimum viable martech stack covers four connected jobs: recording, automating, enriching, and measuring. Every additional tool must prove that one of those jobs remains uncovered. It sits below [[OPS-006 CRM as Shared Memory]].

> [!warning] Admonition
> Don't buy a tool to fix a process nobody owns. The software arrives, the process stays unowned, and you've added an integration, a login, a renewal and a second copy of your customer data.

Ask a marketing team to list its tools and the count surprises the person answering. They name the obvious six, then remember the scheduler, the form builder, the landing page tool that predates the current website, two analytics products that disagree, the enrichment vendor whose contract renews automatically, the chat widget nobody has configured since the person who installed it left, and a webinar platform used twice a year. Nobody chose this. It accumulated, one defensible purchase at a time.

The accumulation is fed by genuine supply. Scott Brinker has counted marketing technology products annually since 2011, when his first chart held about 150. By 2024 the count was 14,106, up 27.8 percent in a single year, and by 2026 it had reached 15,505 with growth flattening to under one percent. There is a product for any job a marketer can describe, which means the answer to any operational complaint is always available for purchase, and purchasing feels like progress in a way that redesigning a process does not.

What the accumulation buys is measurable, and it isn't capability. Gartner's CMO Spend Survey asked marketing leaders how much of their stack's capability they actually use, and the figure fell from 58 percent in 2020 to 42 percent in 2022 and 33 percent in 2023, based on a survey of 405 marketing leaders. Companies were spending roughly a quarter of the marketing budget on technology while using a third of what they'd bought. The gap isn't a training problem. Two thirds of the capability sits behind integration work nobody scheduled, data that never got mapped, and a process nobody owns.

Each additional tool also carries a cost that doesn't appear on its invoice. It needs an integration, and the integration needs maintaining when either side changes. It holds a copy of customer data, so now there are two answers to who a contact is and which one is current. It has an administrator, and when that person leaves it has none. It has a renewal that arrives whether or not anyone used it. The marginal tool is cheap and the marginal integration is not, which is why stacks get expensive in ways procurement doesn't catch.

The obvious response is a consolidation project, and consolidation projects usually fail in a specific way. A team maps the tools, picks a suite, migrates, and finds within eighteen months that the same accumulation has restarted, because nothing changed about the mechanism that caused it. The tools were the symptom. What produced them was a standing willingness to answer process problems with purchases, and consolidating without changing that answer buys a temporary reduction in count.

## Complications

- **A tool is faster to buy than a process is to fix.** Purchasing produces a visible result this quarter, and redesigning an operating routine produces an argument, so the incentive points at the tool every time.
- **Every tool was justified when it was bought.** There's no obviously wrong purchase to point at in the audit, which makes the accumulation hard to argue against case by case.
- **The marginal tool is cheap; the marginal integration isn't.** License cost is visible and comparable, while integration maintenance, data reconciliation and administration are diffuse and land on people who didn't approve the purchase.
- **Every tool holds its own copy of the customer.** More systems means more answers to who a contact is, and the reconciliation work grows faster than the tool count.
- **Underuse is invisible from inside.** Nobody reports the capability they aren't using, so a stack at a third of its capability looks the same on a dashboard as one being used fully.
- **Removing a tool has an owner who objects.** Whoever depends on it is present and specific; the person who'd benefit from the simplification is diffuse and usually theoretical.

## Recommendations

> [!check] Cover four jobs, record, automate, enrich and measure, with the smallest set of tools that integrates cleanly, and admit a new tool only when someone can name the uncovered job, the owner who'll run it, and the tool it replaces; if nothing is being retired, the job probably isn't uncovered.

The four-job frame is what makes the count arguable. Most stacks contain several tools claiming the same job, and the overlap is invisible until someone writes the jobs down and maps products onto them. Two products under one job means either one is redundant or the job was defined too coarsely, and both answers are useful.

Three tests keep the set honest:

1. **Every tool names its job and its owner.** A tool with no named owner is already unmaintained, whatever its renewal date says. This is where the audit usually finds its first three cancellations.
2. **Data flows into the record rather than around it.** Every tool either writes to or reads from the system [[OPS-006 CRM as Shared Memory]] owns, and anything that maintains a private customer list outside it is creating a second version of the truth.
3. **Adding is coupled to removing.** Couple each addition to an explicit removal decision; the relationship can be looser than one-for-one. A team that can never name what the new tool makes unnecessary is buying to avoid a process decision.

Run the review on a fixed schedule rather than when the budget is challenged, because a consolidation done under cost pressure optimizes for licence savings and leaves the accumulating mechanism intact.

## Implications

A small stack is faster to change, which matters more than its cost. When positioning shifts or a motion changes, a team running six integrated tools can follow within a quarter; one running thirty spends that quarter on migration. The constraint also protects the record, since fewer systems means fewer competing copies of the customer.

Expect the exercise to surface unowned processes rather than surplus software. The tool bought to fix lead routing is usually still installed because nobody ever decided who routes leads, and the useful output of the audit is that list of decisions rather than the cancellations. The first move is to list every tool with its annual cost, its job and its named owner; the rows where the owner column is empty are your starting set.

## Related Patterns

- **Above:** [[OPS-006 CRM as Shared Memory]] (the record at the centre of the set)
- **Below:** *(none yet)*
- **Peers:** [[OPS-011 Data Warehouse Decisions]] (the analytical store beside the operational record), [[OPS-007 Lead Scoring and Routing]] (a job frequently bought rather than owned), [[OPS-020 Metrics That Change Behavior]] (why more measurement tools don't produce better decisions), [[OPS-016 Generalists Then Specialists]] (the staffing question the same accumulation logic applies to)

## Examples

**The supply side explains the accumulation (2011 to 2026).** Scott Brinker's annual census of marketing technology products began in 2011 with about 150 products on a single chart. It reached 14,106 in 2024, a 27.8 percent rise in one year, and 15,505 by 2026, at which point annual growth had fallen below one percent. A hundredfold expansion in fifteen years means that for any operational complaint a marketer can articulate, a product exists that claims to solve it, and can be bought this afternoon on a credit card without procurement involvement. The accumulation in any individual company isn't a discipline failure so much as the predictable result of that supply meeting a standing preference for purchasable answers.

**Gartner measured what the accumulation delivers.** Gartner's CMO Spend Survey asks marketing leaders what proportion of their martech stack's capability they actually use. The figure was 58 percent in 2020, 42 percent in 2022, and 33 percent in 2023, the last drawn from 405 marketing leaders surveyed in May and June of that year. Over the same period technology took roughly a quarter of the marketing budget. A third of the capability, at a quarter of the budget, is the arithmetic this pattern exists to interrupt, and the trend direction matters more than any single year's number: utilization fell while spend held, which is what accumulation without retirement looks like from the finance side.

**Procter & Gamble cut the count deliberately (2017 to 2018).** P&G's marketing organization ran a consolidation under Marc Pritchard that reduced the number of agencies it worked with by 60 percent, which the company reported as $750 million saved in agency and production costs plus more than $400 million of improved cash flow. In 2018 it announced a further halving, from roughly 6,000 agencies toward 3,000, targeting another $400 million. Agencies aren't software, and the mechanism is the same one: a large organization accumulated suppliers one defensible decision at a time until the coordination cost exceeded the value of the variety, and the correction had to be made deliberately from the top because no individual relationship was indefensible on its own terms.
