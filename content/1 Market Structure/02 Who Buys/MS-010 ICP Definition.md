---
pattern: "ICP Definition"
aliases: ["ICP Definition", "Ideal Customer Profile"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: ["[[MS-011 Negative ICP]]", "[[MS-012 Buying Committee]]", "[[MS-008 Pre-Product Problem Interviews]]"]
source: "PDF pp. 41–60 (Phase 1 prose guide, Ch. 3, Carving Out the ICP)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A narrow, evidence-based portrait of the one customer everything else is built to serve.*

> [!tldr] About this pattern
> A sharp Ideal Customer Profile is an aperture for the whole go-to-market. It joins the company that can buy to the person inside it who will. It sits below [[MS-001 Designed Market, Not Found Market]] and above [[MS-011 Negative ICP]], [[MS-012 Buying Committee]], and [[MS-008 Pre-Product Problem Interviews]].

> [!warning] Admonition
> Don't target everyone who could use the product. A profile that fits everyone fits no one, so budget and attention scatter across audiences that never convert while the product drifts toward pleasing all of them.

The instinct arrives with the first undirected traction: keep the target broad so the funnel stays wide. It feels prudent, and turning anyone away feels like waste. A broad target is a blurrier market at the same size. It weakens the product's pull on the people who already love it, because every roadmap call now tries to serve incompatible needs at once, and it smears the message, because copy written for everyone speaks to no one. Breadth feels safe from inside the company, and "anyone could use it" turns, in practice, into "nobody has to buy it."

The corrective is a tight description of the companies, and the people inside them, that fit the product best and are likeliest both to get value from it and to pay for it. The discipline it demands is unnatural, because it means naming, and then walking away from, customers a company could technically serve. That refusal is the whole of the difficulty. An ICP is easy to draft and hard to obey, and the accounts it excludes don't stop arriving with money in hand. Steve Blank's standing rule in *The Four Steps to the Epiphany* (2005) is that the facts you need aren't inside the building, and an ICP is the clearest case of it. Drafted from internal conviction, the document records who the team hopes will buy. Drafted from customer conversations, it records who does.

Founders skate past one more thing: in most B2B purchases the buyer isn't one person. The person who adopts the product and the organization that pays for it are often different, with different motives, and an ICP that names only one of them misfires. (Who you deliberately exclude is large enough to be its own pattern, [[MS-011 Negative ICP]]; the several roles inside a purchasing organization are owned by [[MS-012 Buying Committee]]; the recurring human types an ICP is drawn from are [[MS-009 Buyer Archetypes]].)

## Complications

- **Breadth against focus.** A wider target looks like a bigger market and weakens your pull on the buyers likeliest to pay; reach and focus fight each other.
- **Evidence against ambition.** Real usage points at a narrow segment, while fundraising pressure and founder optimism pull toward a broad, impressive-sounding one.
- **The cost of "no."** Specificity sharpens the product and the message, and it makes the customers you turn away visible and countable in a way the diffuse upside never is.
- **User isn't payer.** The person who adopts and advocates and the organization that signs are often different, so a single-axis ICP silently drops half the buying reality.
- **Hypotheses feel unsafe.** A precise ICP stated early can be proven wrong, which tempts teams to keep it vague; the vague version is just as wrong and much harder to correct.
- **Traction can mislead.** Early adopters may not resemble your durable customer, so raw signup counts can point the ICP the wrong way.
- **Value has to flow both ways.** The ideal customer both gets enough value to stay and pays enough to fund the business; a segment that loves you but won't pay stays an audience.

## Recommendations

> [!check] Define the ICP as narrowly as the evidence allows, on two axes at once, the company and the people inside it, and write it as a single falsifiable sentence.

The company axis (industry, size, stage, tech stack, compliance posture) establishes which organizations can buy and plausibly have the problem you solve. The people axis (the specific role that adopts the product and later argues for the purchase) establishes who actually will. Draw both from where real traction already clusters rather than where you wish it did.

Map a handful of exemplar users and reason outward from them:

1. **Find real intent.** Look at the users who emailed for a feature or a support contract, and ask what their companies look like.
2. **Weight serious use.** Look at who stood up a serious deployment instead of kicking the tires; one serious deployment tells you more about your ICP than ten thousand anonymous downloads.
3. **Ask directly.** Poll your own users ("which best describes your organization?"), and read the company domains behind your signups and your documentation traffic to see which real firms are evaluating you.
4. **Aim at the overlap.** Target the overlap of genuine usage, genuine business pain, and budget.

Those four steps all assume you already have users. Before a product exists none of them can run, and the first ICP has to be built from conversations instead: named people with a dated account of the problem, what it has cost them, and what they're doing about it now. [[MS-008 Pre-Product Problem Interviews]] holds that discipline, including the rule that stops the conversations turning into pitches. Write the same one-sentence hypothesis from that material, and expect to revise it harder than a usage-derived one once real signups start arriving.

From the two axes, write one sentence: "Our ICP is X kind of company, with Y kind of team, facing Z problem our product resolves." Keep it specific to the point of discomfort, because specificity lets you aim the whole go-to-market like a rifle. Treat the sentence as a hypothesis that sharpens as data arrives; start broad if you must and narrow over time, but start with a stated hypothesis rather than an evasion. Naming who you serve names who you refuse, and that discipline is large enough to be its own pattern ([[MS-011 Negative ICP]]). Where the user and the payer diverge, take the definition two-tier, naming the adopting role and the buying organization together, and don't ignore the internal [[MS-013 Champion, Not Contact]] without whom no bottom-up deal reaches a signature.

## Implications

A sharp ICP becomes the aperture the whole system focuses through. Let it decide which features come first (the ones your ideal customer needs, ahead of whatever a stray prospect asked for), whose language the messaging speaks, which inbound users earn a human, and, hand in hand, what you can charge, since price and ICP select each other ([[MS-018 Price Creates the Buyer]]). Open the patterns that add resolution beneath it: [[MS-011 Negative ICP]] (the accounts you exclude on purpose) and [[MS-012 Buying Committee]] (the several roles inside an ICP account that together say yes). Keep it beside [[MS-009 Buyer Archetypes]] (the persistent types the ICP draws from), [[MS-032 Beachhead Market]] (the first ICP segment you take completely), and, in markets ruled by a few whales, [[MS-016 Power Law Accounts]] (when the "profile" collapses to a named list).

The tension never fully resolves: a narrow ICP raises the standing fear of leaving money on the table, and every off-profile deal that closes anyway argues to widen it. Take some of those deals for cash or goodwill, but take them without letting them redraw the focus. Hold a narrow ICP against that pressure as a continual act of refusal, which is why [[MS-034 No Is the Most Profitable Word]] sits just downstream.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** [[MS-011 Negative ICP]], [[MS-012 Buying Committee]], [[MS-008 Pre-Product Problem Interviews]] (where the first ICP comes from when there's no usage to read)
- **Peers:** [[MS-009 Buyer Archetypes]] (the persistent types an ICP instantiates), [[MS-032 Beachhead Market]] (the first ICP you win outright), [[MS-013 Champion, Not Contact]] (the insider inside the ICP account), [[MS-016 Power Law Accounts]] (when the ICP is a named list), [[MS-018 Price Creates the Buyer]] (price and ICP select each other)

## Examples

**PostHog.** This is the cleanest case I know of specificity paying off. Instead of "product teams that want analytics," they sharpened the ICP to "ambitious, skilled product engineers working on high-craft products at high-growth, engineering-led startups (Series B to IPO, 15–500 employees)," with a revenue floor of $100,000 a month attached, and published the whole framework in January 2024. That's almost uncomfortably narrow, and that's the point. It let them aim the whole go-to-market like a rifle: building for high-performance engineering teams drew more of them, which sharpened the product and kept it ahead of generalist rivals. They deliberately didn't target less-technical or non-core teams like marketing, even though a product-analytics tool could serve them, because chasing that breadth would have thinned the appeal to the engineers at the core (see [[MS-011 Negative ICP]]).

**HashiCorp and Terraform.** Terraform shipped in July 2014 and spread among ops engineers at thousands of companies, and those are the users; HashiCorp's paying customers are the organizations that needed collaboration, governance, and security. The two tiers are countable. At the Terraform 1.0 release on 8 June 2021, HashiCorp reported more than 100 million downloads and more than 120,000 Terraform Cloud users against just over 1,200 enterprises paying for Terraform Enterprise. A one-line "our users are ops engineers" ICP would miss the buyer entirely. The workable definition is two-tier: "enterprise IT organizations (1,000+ employees, often regulated) with a platform team actively using Terraform, likely to pay for governance and security." It names the who, the what, and the why in one sentence, and it doesn't forget the champion inside the account.

**Enterprise Rent-A-Car's two-line profile.** Hertz and Avis built at airports for the business traveler. Jack Taylor's company, which entered rentals in 1962 with 17 cars, wrote a narrower profile: the driver whose car is in a body shop, reached through the insurance adjuster who authorizes the rental. That one sentence decided everything downstream. Branches went into neighborhoods instead of terminals, because that's where the body shops are, and the sales calls went to adjusters rather than travel managers. Enterprise held as much as half the US off-airport market through the 1990s, and in 1996 it passed Hertz to become the largest rental company in the country by fleet size and number of offices.

**The advisor's test.** When I work with founders, the fastest diagnostic is to ask them to describe their ideal customer in one sentence, then ask who they'd turn down. If the first answer takes a paragraph, or the second draws a blank, the ICP doesn't exist yet; there's only a wish that everyone will buy.

