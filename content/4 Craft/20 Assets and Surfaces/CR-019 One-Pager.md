---
pattern: "One-Pager"
aliases: ["One-Pager"]
altitude: craft
status: draft
domains: [core]
larger: []
smaller: []
source: "Net-new; built from public cases."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *If it doesn't fit on one page, you haven't decided what you're arguing yet.*

> [!tldr] About this pattern
> A one-pager treats the physical page as a hard budget. It forces an entire product argument into one claim a stranger can read in two minutes and forward without a presenter. It draws its claim from [[CR-001 Atomic Value Prop]], its limit from [[CR-007 One Message Per Asset]], and its order from [[CR-017 Visual Hierarchy]].

> [!warning] Admonition
> Never treat a one-pager as a layout job, taking everything the deck says and shrinking it to fit. A team that never decided on one argument keeps all of them, and the reader finds nothing to carry into the next room.

Buying rarely puts the person you pitched in the chair that signs. Your champion sits in a room you'll never enter, and someone across the table asks, "So what does this thing actually do, and why this vendor?" What answers that question is one artifact the champion can forward, drop into a procurement thread, or slide across a desk, one that makes your case as well as you would have made it live. A shrunk-down deck makes no case at all. It arrives as a wall of six-point type, four competing headlines, a feature grid, three logos, and a diagram nobody can parse, and the reader's eye slides off it. Your champion's credibility takes the hit, and the deal stalls in a room you can't reach.

The defect sits upstream of design, in a decision nobody made. A one-pager that fails almost always fails the same way: it tries to say everything, so it says nothing that lands. The team couldn't agree on the single claim, so they kept all of them. Sales wanted the enterprise message, product wanted the roadmap, the founder wanted the vision, marketing wanted the customer logos, and every faction got a corner of the page. The reader spends the two minutes they'll give you scanning for the one reason to care and doesn't find it, because nobody chose it.

The committee document announces itself by its symptoms. It's dense to the margins, because whitespace felt like wasted real estate, so the text runs 90% coverage and the eye has no entry point. It leads with the company rather than the buyer's problem, so the first thing the reader meets is your name rather than their pain. It uses the same abstract phrases the homepage uses ("the unified platform for modern teams") that could belong to a hundred vendors. It carries no single number, no dated proof, nothing a skeptic can check. And it offers three or four calls to action, which is the same as offering none. Behind every symptom sits the same cause: the argument was never reduced to one.

The constraint does real work whenever a team is forced through it. A founder asked to explain the company talks for twenty minutes. The same founder given one page watches it reject the second-best claim, then the third, until only the one holding the argument up survives. Amazon institutionalized this. Before a team builds a product, it writes the future press release on a single page, the "working backwards" PR that describes the finished thing to a customer who doesn't care about the internals. If the benefit can't be made compelling in that space, the thinking isn't done, and the build waits. There the page is the instrument that forces the decision rather than a record of one already made.

It fails a second way too, as a brochure that disappears. Buyers have seen ten thousand pieces of glossy collateral, and a page of adjectives with a stock photo gets the two seconds it earns and then the recycling bin. Without a real argument (a specific problem, a specific claim, a checkable proof, one next step) the page is decoration, and decoration doesn't move a deal through a room you're not in.

## Complications

- **Compression against completeness.** The buyer's team has many concerns and each stakeholder wants theirs answered, yet the page holds one argument; every concern added subtracts from the one that matters.
- **Self-contained against present.** The salesperson wants to be there to explain and fill gaps; the page has to work when no one is there to explain anything, which means it can assume no context and needs no narrator.
- **Density against legibility.** Blank space feels like wasted budget, so the pull is to fill the sheet; but a full sheet has no entry point for the eye, and a reader who can't find where to start reads nothing (this is why the page leans on [[CR-017 Visual Hierarchy]]).
- **Speed against subtraction.** A one-pager looks cheap to produce and gets assigned as a quick task, but doing it well is slow, because the work is deciding what to cut, and cutting is the expensive part.
- **Specific against safe.** A checkable number or a named customer invites scrutiny, so the timid instinct is to stay vague; vagueness is exactly what makes the page ignorable, since concrete detail is what a skeptic trusts (owned by [[CR-008 Specificity Signals Truth]]).
- **One ask against many.** Every stakeholder wants their own next step on the page (book a demo, read the paper, start a trial); more than one call to action splits the reader's intent and none of them gets taken.

## Recommendations

> [!check] Compress the entire argument to a single page a stranger can read in two minutes and act on without you present, and reach it by deciding the one claim the page makes and cutting everything that doesn't support it.

Subtract under a fixed frame. Start from the single idea the product rests on, the [[CR-001 Atomic Value Prop]], and treat it as the page's spine; every element earns its place only by advancing that one claim, and anything that merely could be true about the company comes off. Because the sheet can carry [[CR-007 One Message Per Asset]], do the hard work before any layout: choose the argument, then defend that choice against every faction that wants a corner. Then lay the page out in the order a skeptical reader moves, which survives across media and decades:

1. **The problem they feel,** stated in their words.
2. **The claim,** stated as one sentence.
3. **The proof,** stated as something checkable.
4. **One next step.**

Let [[CR-017 Visual Hierarchy]] enforce that order visually, so the eye meets the problem first and the ask last without the reader deciding to read in that sequence.

Make the page survive contact with the world on two properties. Keep it self-contained, because people you never briefed will read it: no insider shorthand, no dependence on a prior conversation, no reference to slide 14. Keep it checkable, because a page with no specific proof is a page of adjectives, and adjectives don't move a procurement committee; one dated result, one named customer, or one concrete number does more than a paragraph of superlatives. Then run the behavioral test: hand it to someone outside the company, give them two minutes, and ask what the product does, why this vendor, and what they'd do next. If they answer all three, ship it. If they can't, cut more, or go back and choose the claim you never chose.

Don't fill in a template. The order (problem, claim, proof, ask) is the invariant; the words and design are yours. Hold the same discipline across a printed leave-behind, a PDF forwarded in an email, and a single web section: one page, one argument, self-contained, checkable, one ask.

## Implications

Hand the champion an instrument that travels into rooms you can't enter and makes your case at full strength, which shortens the gap between the meeting you were in and the decision you weren't. Treat it as the source of truth for everything downstream: let a page built for one traffic source inherit its problem-claim-proof-ask spine, expand each block into a section for the sales deck, and let the [[CR-029 Battle Card]] borrow its compression discipline for a different job. Use the exercise as the fastest audit of whether the underlying [[CR-001 Atomic Value Prop]] is actually decided; if you can't write the page, the positioning work isn't finished, and that's useful to learn early and cheaply.

Enforce the single-argument line against the pressure the page creates. One page forecloses nuance, and there will be real qualifications, edge cases, and secondary benefits that don't fit and shouldn't. Expect a standing pull to add "just one more" proof point or stakeholder message, and refuse it, because every addition erodes the clarity that made the page work. Pay that ongoing cost; it's the same subtraction discipline [[CR-007 One Message Per Asset]] governs across every other surface.

## Related Patterns

- **Above:** *(none yet)*
- **Below:** *(none yet)*
- **Peers:** [[CR-001 Atomic Value Prop]] (the single claim the page is built around), [[CR-007 One Message Per Asset]] (the page can hold only one), [[CR-017 Visual Hierarchy]] (orders what the eye meets first, second, third), [[CR-008 Specificity Signals Truth]] (the checkable proof that keeps the page from being a brochure), [[CR-029 Battle Card]] (the competitive cousin of the one-pager)

## Examples

**Patagonia, "Don't Buy This Jacket," The New York Times, November 25, 2011.** Patagonia ran one argument that cut against its own immediate sales interest on Black Friday. Above the fold sat a single image, the R2 fleece jacket, and one headline: "Don't Buy This Jacket." The body named the R2's environmental cost: 135 liters of water to make one jacket, enough to meet the daily needs of 45 people, nearly 20 pounds of carbon dioxide on its journey to the Reno warehouse, roughly 24 times the finished garment's weight, and two-thirds of that weight left behind as waste along the way. The page carried one image, one claim, one set of checkable figures, and one request to buy less and buy things that last. Patagonia gave every element of the page to the environmental-cost claim, including the space a retailer would usually spend on promotion.

**Amazon's one-page press release (the "working backwards" PR/FAQ).** Amazon's internal method requires a team to write a product's future press release on a single page before the product is built, for a customer who cares only about the benefit. Werner Vogels, Amazon's CTO, described the process on his blog in November 2006. The team writes the press release first, then a document answering the twenty questions a customer would most likely ask, and iterates over both until every line is clear. Ian McAllister, then a general manager at Amazon, laid out the same method publicly in more operational detail a few years later. A weak product argument stops the build while the decision is still cheap to change. The one-page document makes the team choose that argument before it commits engineering resources.

**A field one-pager at Mesosphere (2016).** I handed champions a twenty-slide deck and trusted them to re-explain it. Our early sales conversations kept losing the second room. The pitch landed with the technical champion, who then had to re-explain container orchestration to a VP of infrastructure who'd never heard of us, usually badly. We built a one-page leave-behind and argued over the single claim for two weeks. The platform did a dozen things, and the page could argue for one. We chose the argument that mattered to the person signing (run your data-center infrastructure the way the biggest web companies run theirs, from one control plane), stated the problem in the buyer's words, backed the claim with one named production reference and one hard utilization number, and gave a single next step. It leaned on [[CR-017 Visual Hierarchy]] so the VP met their own problem first and our name last. We didn't measure the change as a click-through rate. Champions stopped forwarding our twenty-slide deck and started forwarding the page, and the second meeting got easier to book.
