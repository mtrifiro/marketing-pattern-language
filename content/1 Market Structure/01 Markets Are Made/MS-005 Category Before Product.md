---
pattern: "Category Before Product"
aliases: ["Category Before Product", "The Better Mousetrap Fallacy"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-004 Narrative Precedes Demand]]", "[[MS-001 Designed Market, Not Found Market]]"]
smaller: ["[[MS-023 Category Creation]]", "[[MS-024 Category Entry Point]]"]
source: "PDF pp. 341–354 (Book Proposal essay, 'The Better Mousetrap Fallacy', Jan 2026)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---
> *Build the shelf before you sell the book.*

> [!tldr] About this pattern
> A buyer files a product onto a mental shelf before examining a feature, and that shelf decides the budget, signer, and price attached to it. It sits below [[MS-004 Narrative Precedes Demand]] and [[MS-001 Designed Market, Not Found Market]]; [[MS-023 Category Creation]] and [[MS-024 Category Entry Point]] carry the choice into market teaching and buyer triggers.

> [!warning] Admonition
> Don't confuse product-market fit with category-market fit. An unstable or nonexistent category strangles even a great product: the buyer files you under Miscellaneous, where the budget is small and the CFO cuts you first.

A strong team demos something brilliant: faster, self-healing, cheap to run. After forty-five minutes of architecture and benchmarks, a buyer asks the only question that matters: "What is it?" If the answer takes a paragraph ("a distributed data-processing engine with real-time characteristics that also handles batch, sort of a stateless database"), the deal dies right there. The product is fine and the missing category is fatal. This is how technical startups die, silently, while the team keeps optimizing the wrong fit.

A CIO meets new technology and immediately tries to file it: is this a CRM, a SIEM, an ERP, something else? The category is the folder and the product is the document inside it. Al Ries and Jack Trout made this a law in *The 22 Immutable Laws of Marketing* (1993): a company that can't be first in a category should set up a new category it can be first in. Their law is about what a buyer remembers. The folder decides more than memory, because before anyone evaluates a single feature it has already settled which budget pays, which title signs, and what a fair price is. When a category is undefined or keeps shifting, the buyer has nowhere to file you, and you default into the folder labeled "Miscellaneous."

Miscellaneous is an expensive folder to sit in. Budgets there are small and fragile, pulled from experimental "innovation" money instead of recurring operating spend. Sales cycles stretch because nobody knows who's allowed to buy "miscellaneous" things, so you stay in pilot purgatory. Churn is high because when the CFO cuts spending, an undefined tool is first to go. Miscellaneous is where startups die.

The price problem has the same root. You can't anchor price to a category that doesn't exist. We pay $5 for coffee without hesitation but balk at a $2 app because "coffee" has a stable price anchor built by decades of conditioning. In an undefined category the market can't decide whether you're worth $50k or $500k, and that gap is the difference between a business and a hobby. (The work of naming a new category belongs to [[MS-023 Category Creation]]; the frame in which a buyer first encounters it is [[MS-024 Category Entry Point]]; the map of neighboring options is [[MS-025 Competitive Geography]].)

## Complications

- **The miser brain files you regardless.** A buyer wants to minimize effort, so they will slot you into some existing category whether it fits or not. The filing happens with or without your participation, and the default folder is "Miscellaneous."
- **Anchor against ceiling.** An existing category gives you an instant price anchor and a known buyer, but it caps you at that category's maximum. A new category has no ceiling and no floor, because the market cannot price what it cannot name.
- **Legibility to the enterprise.** Analysts, budget lines, and org charts all organize by category; without one, the Fortune 500 cannot buy you, because there's no shelf to point the CFO toward.
- **Slow work against shipping pressure.** Stabilizing a category takes patient evangelism: vocabulary, metrics, a manifesto. Meanwhile, the company rewards shipping code, and the incentive that's easiest to satisfy is the one that gets satisfied.
- **Early adopters hide the problem.** Visionaries buy interesting technology regardless of category, and their early wins mask category instability until you reach the mainstream and the wall stops you.
- **Ambiguity reads as risk.** A buyer who cannot categorize you cannot defend you inside their organization, so an undefined category turns into a longer, more consultative, higher-friction sale. The symptoms surface in the sales cycle while the cause sits upstream of it.

## Recommendations

> [!check] Name a stable category before you release the product. You have two moves; choose one deliberately.

**Move 1: Piggyback.** Anchor to a large, existing category and carve a niche inside it. This is the safer play. "An AI-driven text-generation engine" is nebulous; "a CRM for freelancers" anchors the buyer instantly because they already know what a CRM costs, roughly what to budget, and who owns it. You inherit the parent category's stability and spend your scarcity on the niche rather than on teaching the market a new kind of thing. Do this when the parent category is mature and your real innovation is the segment.

**Move 2: Create.** Build the product together with its category. This carries higher risk and higher reward because the work includes the shared language and buying structure around the product. Do three things: (1) Standardize the vocabulary so the market has words to use when they talk about the space. (2) Define the metrics of success, because if you don't set the yardstick, incumbents will measure you by theirs and you lose. (3) Evangelize the problem, because a stable category rests on a problem everyone recognizes ("data gravity" is a problem; "container orchestration" is a solution). The analysts are your allies here rather than your audience. Pitch them the category rather than the product, because once an analyst publishes a market guide naming the space, a CIO can tell the CFO "we need budget for this; our competitors already have it," and the budget line appears from nothing. Either move delivers the same result: a shelf the buyer can point to. A better mousetrap without a shelf is still Miscellaneous.

## Implications

A stable category manufactures budget from nothing and shortens sales cycles because the buyer now knows which folder to ask funding for and who has authority to sign. What opens next depends on your move: if you piggybacked, build specificity into [[MS-024 Category Entry Point]] to differentiate within the shelf. If you chose to create, do the work spelled out in [[MS-023 Category Creation]] to stabilize and name the space; [[MS-024 Category Entry Point]] then becomes the frame in which you introduce that new category to the world.

Know this wall: Visionaries and early adopters buy interesting technology regardless of category. The early majority buys solutions to known problems in established categories. An unstable category is the exact wall you hit crossing between those two groups (the sequencing is owned by [[MS-017 Adoption Curve Ownership]]). When you stall there, another feature release or landing-page redesign will not save you. The only fix is the slow work of category evangelism: the unglamorous, hard-to-measure work of making the folder firm. 

## Related Patterns

- **Above:** [[MS-004 Narrative Precedes Demand]], [[MS-001 Designed Market, Not Found Market]]
- **Below:** [[MS-023 Category Creation]], [[MS-024 Category Entry Point]]
- **Peers:** [[MS-022 Positioning as Contrast]] (how you differ *within* the shelf), [[MS-025 Competitive Geography]] (the map of shelves and substitutes), [[MS-017 Adoption Curve Ownership]] (why category stability precedes the mainstream)

## Examples

**Segway and the missing shelf.** Dean Kamen unveiled the Segway on 3 December 2001 as a machine that would reorganize cities. Buyers couldn't say what it was: a vehicle, a scooter, a toy, medical equipment. State legislatures ended up writing a legal class for it, the electric personal assistive mobility device, so that somebody could rule on where it was allowed to go (New Hampshire in 2002, Connecticut in 2003). The sales tell you what the confusion cost. When the Consumer Product Safety Commission announced a recall on 14 September 2006, it covered every unit ever sold, and there were 23,500 of them, at $4,000 to $5,500 each, over four and a half years.

**Red Bull building the shelf.** Dietrich Mateschitz launched Red Bull in Austria on 1 April 1987 into a category that didn't exist; the market had soft drinks. The work that followed was vocabulary rather than product: what an energy drink is for, when you drink one, what it should cost. The shelf Red Bull built now holds every competitor. The company's 2023 figures put it at 12.138 billion cans sold in a single year against turnover of €10.554 billion.

**Salesforce piggybacking on CRM.** In 1999 Salesforce asked nobody to learn a new category; sales leaders already knew what CRM was, what Siebel charged for it, and who owned the budget. What Salesforce renamed was the delivery model, with the word "software" crossed out in its logo and a staged protest outside Siebel's user conference in San Francisco on 22 February 2000. The familiar shelf carried the price anchor and the buyer with it, so the argument narrowed to installation. Revenue went from $51 million in the year ending 31 January 2003 to $176 million two years later across 13,900 customers, and the June 2004 IPO raised $110 million.
