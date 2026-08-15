---
pattern: "Market Segmentation"
aliases: ["Market Segmentation"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: ["[[MS-032 Beachhead Market]]"]
source: "PDF pp. 41–60 (segmenting the market to define your target)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Divide the market by how groups actually buy, then engage each on its own terms.*

> [!tldr] About this pattern
> Useful segmentation divides a designed market along the axis that predicts different buying behavior, gives each group its own reason to buy and distinct motion, and turns the first segment into a deliberate choice. It sits below [[MS-001 Designed Market, Not Found Market]] and above [[MS-032 Beachhead Market]].

> [!warning] Admonition
> Don't market to "the market" as if it were one homogeneous audience, sending one message at one price through one motion. Distinct groups buy for different reasons, and treating them as one dilutes the message to no one and the focus to nowhere.

The monolith fails for the same reason a single [[MS-009 Buyer Archetypes]] fails: a message written for the average of a mixed audience persuades none of them, and a price set for everyone is wrong for each. The subtler danger is one this language has already warned about. Bad segmentation falls into the market-finder's trap that [[MS-001 Designed Market, Not Found Market]] describes: slicing a population by convenient axes, firmographic, geography, vertical, and accepting the buckets the market already hands you, which yields an impressive spreadsheet and no strategy. That kind of segmentation describes the world as it is and mistakes the description for a plan.

Two failures show up. On one side, no segmentation at all: a company treats the market as undifferentiated and can't answer whom it serves first, at what price, with what message. On the other, segmentation by the wrong axis: a company slices the market a dozen ways by demographics that don't predict how anyone buys, so nothing in it can inform a single decision. A segmentation earns its keep only when its groups behave differently. Segments that look different but buy the same are noise; segments that look similar but buy differently are the ones that matter, and a demographic cut usually misses exactly those.

Segmentation is a tool for focusing within a market you're designing. It's powerful in that role and dangerous as a substitute for the design itself. (The prior act of choosing what market to build is [[MS-001 Designed Market, Not Found Market]]; the recurring buyer types a good segmentation often tracks are [[MS-009 Buyer Archetypes]]; the first segment you commit to is the [[MS-032 Beachhead Market]].)

## Complications

- **One message is efficient and fits no one.** A single message, price, and motion is cheap to run and lands poorly with every group, because it was written for an average nobody is.
- **Easy axes rarely predict behavior.** Firmographic and demographic cuts are simple to make and often fail to separate buyers who actually behave differently, so a tidy segmentation can be strategically useless.
- **Segmentation can masquerade as strategy.** A market sliced by convenient axes yields a satisfying deck that accepts the incumbent's buckets and dodges the harder work of designing a market.
- **More segments cost focus.** Each additional segment adds tailoring and overhead, and past a small number you're back to treating everyone as unique.
- **Choosing a segment means refusing others.** Deciding which group to serve first requires declining the rest for now, which feels like forfeiting reach, and for a while that's exactly what it is.

## Recommendations

> [!check] Segment the market by an axis that predicts different buying behavior and keep only groups that change a decision. Collapse any two groups that would receive the same message, price, and primary motion.

Segment by need, use case, willingness to pay, and buying process ahead of demographics, because you want groups that behave differently and behavior is what you can build a strategy around. The argument is old. Wendell R. Smith named market segmentation in "Product Differentiation and Market Segmentation as Alternative Marketing Strategies" (*Journal of Marketing*, July 1956), and Daniel Yankelovich's "New Criteria for Market Segmentation" (*Harvard Business Review*, March 1964) showed that what people value and how they use a product predict purchases better than age, income, or address do. What's changed for a B2B market is the axis that pays: how a company buys, bottom-up or top-down, tells you more than what the company is. A database bought for transactional systems and a database bought for analytics are two segments even inside one industry, because the buyers evaluate, use, and pay for them differently; two companies of the same size and vertical sit in different segments when one buys bottom-up and the other top-down. Once you've drawn the groups by behavior, put the segmentation to work:

1. **Pick the beachhead.** Choose the [[MS-032 Beachhead Market]] to win first.
2. **Price each segment.** Set a different price where the buyers value the product differently ([[MS-018 Price Creates the Buyer]]).
3. **Sequence the adoption curve.** Order the segments as stages of [[MS-017 Adoption Curve Ownership]] over time.
4. **Tailor the contrast.** Frame the [[MS-022 Positioning as Contrast]] against each group's real alternatives.

Hold two disciplines while you do it. Keep the segment count small, because a segmentation with twenty groups admits you haven't actually decided, and it fragments effort back toward chaos. And heed the caution from [[MS-001 Designed Market, Not Found Market]]: a segmentation is a way to focus within a market you're engineering, and the moment it starts accepting the market's existing buckets as given, it has stopped being a tool of design and become a spreadsheet that describes the world instead of shaping it. Run the test that separates a useful segmentation from a decorative one: does it change what you do. If two segments would get the same message, the same price, and the same motion, collapse them into one; they're one segment wearing two labels. Split only where the groups demand genuinely different messages, prices, or motions.

## Implications

A behavior-based segmentation makes every downstream focus decision possible. Use it as the precondition for choosing a [[MS-032 Beachhead Market]], for pricing by segment, for sequencing the adoption curve, and for positioning against each group's real alternatives, and hand the Part II demand engine a set of targets that behave predictably rather than an undifferentiated mass. It sits inside [[MS-001 Designed Market, Not Found Market]] as one of the primary tools you use to decide where to act first.

Enforce the discipline this pattern keeps returning to: segmentation can inform the design of a market or quietly replace it, and the same activity does both depending on whether you accept the given buckets or draw new ones in service of a strategy. Segments drift as the market moves, so maintain the map; and resist the pull toward ever-finer slicing, because a segmentation that fragments your effort is worse than a coarse one that concentrates it. The value is in the choosing, so kill any segmentation that never leads to a choice. Look hardest for the segments a demographic view can't see, defined by a shared situation or a shared way of buying rather than a shared profile: the teams in acute pain versus the ones merely curious, the buyers who purchase bottom-up versus top-down, the users for whom the product is mission-critical versus a convenience. Cutting along the axis that predicts those differences is harder than sorting by company size, and it's the only cut that earns the name strategy.

A single database product served two segments a firmographic view would have merged: teams running it as the transactional backbone of an application, and teams running it for analytics. They evaluated on different criteria, tolerated different kinds of downtime, and paid on different logic. Treating them as one market produces messaging that splits the difference and wins neither. Naming them as two segments gives each a distinct contrast and price.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** [[MS-032 Beachhead Market]]
- **Peers:** [[MS-009 Buyer Archetypes]] (the recurring types a behavioral segmentation often tracks), [[MS-017 Adoption Curve Ownership]] (segments as stages of adoption over time), [[MS-018 Price Creates the Buyer]] (pricing each segment on its own terms), [[MS-022 Positioning as Contrast]] (a tailored contrast per segment)

## Examples

**Segmenting by behavior beat segmenting by size.** A company I advised had carefully sliced its market by employee count, small, mid, enterprise, and found the cut predicted almost nothing about who bought. The demographic segmentation was tidy and strategically useless. We re-cut the market by buying behavior, the teams who adopted bottom-up and championed the tool internally versus the ones who required a top-down executive sale. The groups finally behaved differently, wanted different things, and needed different motions, and the behavioral cut changed the whole go-to-market.

**Nintendo Wii and the family room (2006–2009).** Nintendo segmented the console market by play behavior ahead of age or gamer intensity. Its 2006 annual report described Wii as a console whose controller let the whole family play, and a 2009 investor briefing tied Wii and DS to expansion of the active gaming population. The useful segment was behavioral: the people the incumbent console race, fixed on graphics and hardcore players, treated as peripheral. Nintendo's own hardware sales data measures how much larger that segment was than the one the company had been serving. Life-to-date units as of 31 March 2026 stand at 101.63 million for Wii, against 21.74 million for the GameCube that came before it and 13.56 million for the Wii U that came after. Same company, same brand, and close to five times the volume on the console that found the behavior. A cut made for the behavior others ignore reveals a market they can't see.
