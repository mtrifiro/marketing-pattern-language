---
pattern: "Buyer Archetypes"
aliases: ["Buyer Archetypes"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: ["[[CR-005 Persona Messaging]]"]
source: "PDF pp. 61–100 (Phase 1–2, buyer personas vs ICP)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *The market keeps sending the same few kinds of people; learn them once and you'll recognize them everywhere.*

> [!tldr] About this pattern
> The same three to five buyer types keep returning after tools, titles, and vocabulary change; durable motivations and constraints keep the model useful across ICPs, buying committees, and adoption stages. It sits below [[MS-001 Designed Market, Not Found Market]] and above [[CR-005 Persona Messaging]].

> [!warning] Admonition
> Don't treat your audience as one undifferentiated market or as a pile of unique individuals. Buyers arrive as a small set of recurring types with different fears, and a company that ignores that can't say anything that lands.

Two habits hide the regularity of who arrives. A team that treats the audience as one market writes for the average, which no actual person is; the copy over-explains to the expert and under-explains to the novice, and lands with neither. A team that treats every buyer as unique can't scale past the deal in front of it, because nothing learned in one deal transfers to the next. Between those two habits sits the thing they both miss. The developer who wants to try the product before talking to a salesperson shows up whether you sell databases or observability. The economic buyer who has to justify the spend to a boss shows up in every deal above a few thousand dollars. The operator who's been burned by a slick demo before, and reads every claim with narrowed eyes, is a permanent fixture of technical markets. Those three turn up across companies, decades, and product categories.

What makes a type durable is motivation and constraint rather than demographic. Motivation is what the buyer is reaching for and what they fear while reaching. The engineer wants to know whether the thing works before anyone watches them ask; the manager wants a decision that survives a review. Constraint is what sits between that want and the purchase: no signing authority, a security review they don't control, a boss who has to be convinced, a budget cycle that closed last month. Motivation on its own predicts little, because most of a market wants the same handful of things. The constraint is what makes a type recognizable, since it decides which route to a purchase is open at all, and two people reaching for the same outcome under different constraints behave like different buyers the whole way through.

Job title is a proxy that fails often enough to be dangerous: two people with "Director of Engineering" on the badge can be opposite archetypes, one a builder who wants control and one a manager who wants a throat to choke. Titles drift as well, and at different rates in different places, so the same words mean one thing in a forty-person startup and another in a bank of four thousand. Firmographics run into the same trouble one level up, sorting companies into groups whose members turn out to buy in unrelated ways.

Underneath the title sits something that persists across markets and across years while the tools and vocabulary on the surface keep changing. The buyer who has to justify a spend to someone above them was doing that long before software was sold by subscription and will be doing it after. The engineer who wants to try it alone first wanted the same thing back when the trial arrived on a disc. That's why a set of archetypes keeps its value for years while a segmentation built on titles has to be rebuilt every time the org charts move.

The word "audience" blurs three ideas. An archetype is a durable type. A persona is a named, fleshed-out instance of one ("Freddie, the solo open-source enthusiast who'll never pay"), and personas are a craft move that belongs to Part IV. Alan Cooper introduced the persona to interaction design in *The Inmates Are Running the Asylum* (1999), drawing on abstract user representations marketing had used for years, so that a design team would have one concrete person to build for. A persona is invented for specificity. An archetype is observed because it keeps recurring, and the recurrence is what makes it a fact about market structure. The [[MS-010 ICP Definition]] is the account a company chooses to serve. Archetypes are the people who populate that account and recur across the whole market.

## Complications

- **Average fits no one.** A single message aimed at "the market" writes to a statistical average that no real buyer matches, so it persuades nobody.
- **Unique doesn't scale.** Treating every buyer as one of a kind means nothing you learn in one deal carries to the next, and marketing never compounds.
- **Title misleads.** The org chart looks like the unit of targeting, but two people with the same title can want opposite things.
- **The easy unit decays fastest.** Titles and jargon sit on the surface where anyone can sort on them, while the motivation underneath is neither visible nor countable, so the most convenient way to slice an audience is the one that stops describing it soonest.
- **The lover and the signer differ.** The archetype who adopts the product and the archetype who pays for it often have opposite fears, which is why one message can't carry a whole deal (see [[MS-012 Buying Committee]] and [[MS-014 Practitioner and Purchaser Are Different People]]).

## Recommendations

> [!check] Name three to five recurring archetypes defined by motivation and constraint. Two candidates count as separate only when they would receive different opening sentences; identical openings collapse them into one.

Derive the archetypes from real evidence rather than imagination. Work in order:

1. **Gather the language.** Pull from interviews with buyers who converted, the wording in won and lost deals, and the questions that recur in your community. An archetype you can't quote is one you invented; discard it.
2. **Name three to five.** Keep the set small on purpose, because a dozen archetypes is just "everyone is unique" wearing a costume, and it collapses back into paralysis.
3. **Write each one down.** For every archetype, record what they want, what they fear, and what they have to justify to someone else.
4. **Point every asset at a named archetype.** Let each page, sequence, and play speak to one type instead of to "the market." Reuse the archetype for years; refresh the [[CR-005 Persona Messaging]] per campaign, which is the Part IV craft that sits inside this pattern.

Then use the archetypes across the other buyer patterns. Inside a single deal they appear as the roles of the [[MS-012 Buying Committee]]: the economic buyer, the technical buyer, and the end user are three different archetypes with three different fears. Across time they appear along the [[MS-017 Adoption Curve Ownership]]: the innovator who buys on possibility and the pragmatist who buys on proof are different archetypes you meet in different years. Name them once and reuse that vocabulary everywhere downstream.

Hold two disciplines to keep archetypes from decaying into astrology. Derive them from language rather than imagination: the exact words buyers use in calls, support tickets, and lost-deal notes are your raw material. And hold the set to a working few, because every archetype you add multiplies the landing pages, the sequences, and the sales plays someone has to maintain. Apply one blunt test: a real archetype is a person for whom you'd write a different opening sentence, so if two candidates would get the same first line, collapse them into one. The payoff is reuse. A company that has named three archetypes cleanly can brief a new writer, a new rep, or a new campaign in an afternoon, because the hard thinking about who the market contains is already done and written down. Skip the work and you re-derive your audience in every planning cycle, argue about tone in every review, and ship copy aimed at an average nobody matches. PostHog's public writing reads the way it does because one archetype, the ambitious product engineer, sits behind every sentence, and nobody there has to ask who this is for before they start. Keep the record current and it protects you when the market shifts, because you can see which archetype is changing rather than discovering a year late that your whole audience moved.

## Implications

With archetypes named, messaging stops guessing. Open [[CR-005 Persona Messaging]] in Part IV next, the craft of shaping the same truth to each archetype's forces. Feed the set into [[MS-012 Buying Committee]], where the archetypes reappear as roles in one purchase, and into [[MS-014 Practitioner and Purchaser Are Different People]], the sharpest and most expensive archetype split. Keep it beside [[MS-010 ICP Definition]], since you choose an ICP by selecting archetypes, and [[MS-015 Buyers Come in Clusters]], since archetypes travel in referenceable groups you can win one at a time.

Enforce one discipline against drift. Archetypes move slowly, which tempts teams to treat them as fixed forever, and a set that fit three years ago can quietly stop describing the people now showing up. Re-derive them on a cadence, from fresh deals, or the vocabulary that once sharpened your messaging will start to blur it. A named archetype set is cheap to keep current and expensive to lack, so write it down; it will outlive any single campaign, writer, or hire, and the companies with the clearest voice are usually the ones that did this unglamorous work first.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** [[CR-005 Persona Messaging]]
- **Peers:** [[MS-010 ICP Definition]] (you pick an ICP by selecting archetypes), [[MS-012 Buying Committee]] (archetypes as roles in one deal), [[MS-014 Practitioner and Purchaser Are Different People]] (the load the sharpest split puts on a message), [[MS-015 Buyers Come in Clusters]] (archetypes arrive in groups)

## Examples

**PostHog's archetype.** PostHog describes its buyer by motivation. When it sharpened its ICP to "ambitious, skilled product engineers at high-growth, engineering-led startups," it named an archetype rather than a title, and its handbook put numbers around the company that archetype works at: Series B to IPO, 15 to 500 employees, more than $100,000 a month in revenue. PostHog published the exercise and the reasoning behind it in January 2024. That engineer builds fast, decides with data, and distrusts anything that looks like enterprise sales theater. Everything from the docs to the pricing page speaks to that one archetype's forces, which is why it reads as written by a peer rather than at a prospect.

**The message aimed at the wrong archetype.** I've watched a company with genuine enterprise value stall because every asset spoke to the economic buyer ("cut total cost of ownership by 30%") while the archetype who actually started every deal was the hands-on engineer, who wanted to know whether the thing worked and whether they could try it without a call. The economic message was true and irrelevant to the person at the door. Reordering the site to speak first to the practitioner archetype, with the ROI language saved for the page the champion forwards upward, changed the pipeline more than any spend increase would have.

**Slack's recurring type.** One type recurred across organizations, and Slack rode it. The archetype was the team lead worn down by internal email, who adopts a tool to fix their own team's day and only later becomes the internal advocate. That type recurred company after company, which is what let one message travel across thousands of otherwise unrelated organizations: by 31 October 2014, less than nine months after its public launch, Slack had 268,000 daily active users and 73,000 paid seats.

**Home Depot's two archetypes.** Two people buy the same sheet of plywood at Home Depot, and the job in front of each one defines the type. The homeowner is doing one project and needs to be told how; the contractor is doing a job this week and needs volume, credit, and delivery to a site. Each one is a motivation with a constraint attached. Home Depot told investors in November 2023 that Pro customers are about half its business, and in March 2024 it said it would open four distribution centers built specifically for Pro orders. The plywood never changed. Everything around it, the credit terms, the delivery, the language on the sign, is written to one archetype or the other.

