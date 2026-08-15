---
pattern: "Free Changes the Question"
aliases: ["Free Changes the Question"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-018 Price Creates the Buyer]]"]
smaller: ["[[GTM-006 Generous Free Tier]]", "[[GTM-019 Gating Line]]"]
source: "Net-new (root of the COSS dialect; free tier / open-core material)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Free doesn't lower the price of the sale; it replaces the buying question with an adoption question, and that rewires everything.*

> [!tldr] About this pattern
> Free rewires the route into a market: it lands the practitioner first, turns lead-and-close into adopt-and-upgrade, moves the hard problem to conversion, and creates the free-to-paid line and the non-converter as new design problems. It sits below [[MS-018 Price Creates the Buyer]] and above [[GTM-006 Generous Free Tier]] and [[GTM-019 Gating Line]].

> [!warning] Admonition
> Don't ship a free tier expecting a bigger version of your old funnel. The swap from "should I purchase this?" to "should I try this?" changes who decides, when they decide, and what you must do to earn any revenue from them.

The instinct is arithmetic: free gets more people in the door, and then you sell them. What free actually moves is the first decision. In a paid-only world the opening question summons a budget, an approval, and usually a [[MS-012 Buying Committee]]. A genuinely free tier reduces that opening question to one a single [[MS-014 Practitioner and Purchaser Are Different People]] answers alone, in a minute, without asking anyone. A different person decides, at a different moment, under different physics, and the price is zero only at the door. Chris Anderson made the economic case for zero in *Free* (2009), where falling digital marginal costs turn giving the product away into a business model rather than a promotion. That argument settles whether a company can afford to charge nothing. What it leaves open, and what this pattern takes up, is who walks through the door once the price is zero, and which decision they're actually making.

Everything downstream shifts to match. The motion turns bottom-up, because the person who adopts is the user rather than the payer. The funnel turns from lead, demo, and close into adopt, activate, and upgrade, so the metrics that predict revenue change from pipeline coverage to activation and conversion rates. The economics move too: acquisition gets cheap because the product recruits its own users, but you now carry the cost of serving a large population that pays nothing, and the hard problem relocates from getting attention to converting usage into revenue. A company that ships free expecting a bigger version of its old funnel ends up running a business it hasn't staffed for.

Free also creates two problems that don't exist in a paid-only world. The first is the gating line: what belongs in free and what belongs behind the paywall, a boundary that determines whether anyone adopts and whether anyone ever upgrades. The second is the population of users who adopt happily forever and never pay, the prosumer trap, which is a [[MS-011 Negative ICP]] operating at scale and can quietly bury you in support and infrastructure cost. (Which price band the free tier anchors is set by [[MS-018 Price Creates the Buyer]]; the tier's design is [[GTM-006 Generous Free Tier]]; the boundary itself is [[GTM-019 Gating Line]].)

## Complications

- **The hard part moves; it doesn't vanish.** Free removes the purchase decision and adds a conversion problem, so the difficulty relocates from acquisition to monetization, and the team you hired to close deals is now staffed for the wrong half of the funnel.
- **Free changes which buyer you meet first.** The user adopts before the payer is ever involved, which turns the motion bottom-up and postpones the revenue conversation.
- **The product becomes both channel and cost center.** A free tier markets the product for you and obliges you to serve people who pay nothing, so distribution and cost rise together.
- **The gating line is a permanent tension.** Too generous and no one upgrades; too stingy and no one adopts; the boundary has to be tuned continuously and is never simply solved.
- **Free anchors the market toward zero.** A free tier trains buyers that the category costs nothing, which can cap willingness to pay for everyone, including you.

## Recommendations

> [!check] Use free only when an unaided experience reaches the core value and the paid boundary appears as usage scales. The motion fails if adoption can't reach value alone or successful users encounter no reason to upgrade.

Commit to free only if the free experience will drive adoption that converts. That imposes several moves at once:

1. **Make the free tier deliver real, standalone value**, or no one adopts and the whole mechanism never starts.
2. **Leave a genuine reason to upgrade**, or everyone adopts and no one pays. That boundary is the [[GTM-019 Gating Line]], and misplacing it is the most common way free fails, generous enough to be loved and useless as a business, or gated so tightly that adoption never reaches the threshold where conversion begins.
3. **Build the bottom-up motion deliberately**, because free lands the [[MS-014 Practitioner and Purchaser Are Different People]] first: frictionless onboarding, a fast path to first value, and a designed crossing to the purchaser once usage justifies a paid conversation.
4. **Instrument the product** so you can tell a real prospect from the prosumer trap, watching usage depth and the density of corporate email domains to separate the free users worth pursuing from the [[MS-011 Negative ICP]] at scale who never will be.
5. **Treat the free experience as distribution**, because free makes the product itself the channel, so its quality is a marketing decision as much as a product one (the reach this buys is worked out in [[11 Channels and Ecosystem]]).

This is the root of the commercial open-source dialect, where the open-source core is the free tier and the paid product is the enterprise layer built beside it. Read the dialect's patterns, the generous free tier, the open-core boundary, the community as channel, as instances of this one structural move, inheriting its rewards and its traps. Answer the question paid-only companies never face: how does a free user become a paying one, and who does the converting. In a healthy free motion the product does most of the work, so surface the paid capability at the moment a user reaches the edge of the free tier, and let the upgrade feel like relief rather than a sales ambush. Feed a small sales team the signals that a free account is ready, deepening usage, more colleagues joining, corporate domains appearing, so it acts on product-qualified leads instead of chasing thousands of users who'll never convert. And decide whether to go free at all with the same deliberation. Choose free where adoption is the bottleneck and the product proves its value quickly to a single user; refuse it where value appears only after expensive onboarding, where the buyer would never adopt bottom-up, or where the category's anchor is already healthy and free would merely teach the market to expect zero.

## Implications

Decide on free deliberately and you reshape the company. It rewires the motion toward product-led growth, the funnel toward usage and upgrade, the ideal customer into a two-tier definition of user and payer, and the economics toward cheap acquisition and hard-won conversion. It opens [[GTM-006 Generous Free Tier]] and [[GTM-019 Gating Line]] in Part II, roots the entire open-source dialect, and feeds the activation and product-qualified-lead machinery a free motion depends on.

Respect that free is nearly a one-way door. Once a market has learned that something is free, charging for it later is enormously difficult, so the decision commits you in a way a normal price doesn't. Free also anchors the category toward zero, which suppresses willingness to pay for every player in it and narrows the band in [[MS-020 Profitability Envelope]], and the prosumer trap can grow faster than the paying base and drown the unit economics. Free is powerful because it changes the question, and dangerous for the same reason, so make it a deliberate structural bet rather than reaching for it as a growth tactic.

In commercial open-source companies the free tier is the open-source core, and it changes the question exactly as the pattern describes. A developer adopts freely, the project spreads through its community, and monetization comes later from the enterprise layer that larger organizations need. PostHog's public handbook puts distribution ahead of selling on the same logic: a product good enough to generate word-of-mouth growth recruits its own users, so the company's hard work is conversion.

## Related Patterns

- **Above:** [[MS-018 Price Creates the Buyer]]
- **Below:** [[GTM-006 Generous Free Tier]], [[GTM-019 Gating Line]]
- **Peers:** [[MS-014 Practitioner and Purchaser Are Different People]] (free lands the user first), [[MS-011 Negative ICP]] (the prosumer trap at scale), [[MS-020 Profitability Envelope]] (free's downward pull on the category anchor and the band), [[11 Channels and Ecosystem]] (the product as its own distribution)

## Examples

**Dropbox and Slack, adoption before purchase (2018 and 2019).** Both made the first decision an adoption rather than a purchase. A single person could start using the product, get real value alone or with a few colleagues, and only later, once usage had spread, did the question of paying, and of who would pay, arise. Both filings show how lopsided the two populations are. Dropbox's February 2018 S-1 counted 500 million registered users against 11 million paying subscribers as of 31 December 2017, a conversion rate of about 2 percent. Slack's April 2019 S-1 counted more than 500,000 organizations on the free plan against 88,000 paid customers as of 31 January 2019, with daily active users above 10 million. The free tier let each product enter one desk at a time, well ahead of any enterprise contract.

**Michelin gave the guide away for two decades (1900 to 1920).** The giveaway manufactured demand for the thing Michelin sold. Michelin printed 35,000 copies of its first guide in 1900 and handed them to French motorists at no charge, listing the hotels and mechanics that made a long drive possible. Driving wore out tires, and Michelin sold tires. When André Michelin found copies propping up a workbench in a tire shop, the company put a price on the 1920 edition: seven francs. The free guide built the habit, and the price came only after the habit existed.

**The prosumer trap sprung.** Free recruits a population that adores the product and will never pay for it. The analytics company I advised elsewhere had, in effect, priced its entry so low it behaved like free, and it filled with freelancers who consumed support and never converted.
