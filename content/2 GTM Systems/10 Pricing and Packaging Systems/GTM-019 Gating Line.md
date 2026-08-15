---
pattern: "Gating Line"
aliases: ["Gating Line", "Where the Wall Goes"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[MS-021 Free Changes the Question]]", "[[GTM-006 Generous Free Tier]]", "[[GTM-018 Good-Better-Best]]"]
smaller: ["[[GTM-030 Freemium-to-Enterprise]]"]
source: "PDF pp. 101–120 (Feature Gating and Usage Limits that Drive Conversion)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Put the wall at the point where the user has felt the value and their own growth is pushing them past it; keep it clear of the user still trying to get hooked.*

> [!tldr] About this pattern
> A gating line waits until the user has felt the core value, then lets the user's own growth create the reason to cross into a paid tier. It sits below [[MS-021 Free Changes the Question]], [[GTM-006 Generous Free Tier]], and [[GTM-018 Good-Better-Best]] and above [[GTM-030 Freemium-to-Enterprise]].

> [!warning] Admonition
> Never draw your gates by copying a competitor's tier chart or by protecting whatever was expensive to build. Both land the wall in front of the value a new user needs to get hooked, or so far past it that nobody upgrades.

The two ways of misplacing a gate look nothing alike from inside the company. A gate set too early makes the funnel look like an activation problem: sign-ups arrive, poke at a crippled product, hit a wall before the payoff, and leave, and your dashboards read as a top-of-funnel or onboarding miss when the real fault is a paywall standing between the user and the moment the product was supposed to prove itself. A gate set too late leaves the numbers healthy in every way except revenue: a large, active, happy base of people who got everything they needed for free and have no growing reason to upgrade, which finance is right to question every planning cycle.

The deeper trap is gating the wrong kind of feature. Dave Kellogg's rule sorts them: monetization features can carry a gate and engagement features can't. The features that pull a user into daily use, the ones that build stickiness and network effects, are the ones a higher tier shouldn't hold, because gating them starves the adoption the whole model depends on. A team optimizing for short-term monetization gates the sticky integration or the collaboration invite because they look valuable, and caps the engagement that would have driven far more revenue through usage growth. The value a user needs to get hooked and the value a user pays to keep growing are two different sets of features, and a chart drawn from a competitor's page or from build cost doesn't separate them.

## Complications

- **The user has to reach real value before any wall, or the wall just filters them out.** A product's worth is felt in use; a gate standing in front of that first payoff blocks the proof and the user leaves before they want to pay.
- **A gate placed past the point of full satisfaction never fires.** If the free or lower tier already meets the customer's real need, their success never pushes them into the limit, and the base grows without converting.
- **Engagement features and monetization features pull in opposite directions.** Kellogg's rule holds: gating a feature that increases stickiness for all users starves adoption, while gating a power-user or nice-to-have feature charges the serious customer without scaring off the casual one.
- **A usage limit and a feature gate trigger differently.** A capacity threshold (records, seats, minutes, runs) fires automatically as the customer's own growth pushes past it; a missing feature fires only when the user reaches for something they don't have.
- **The line has to segment casual from serious without punishing either.** Reserving too much for the top churns casual users before they hook; reserving too little leaves serious, large customers paying what hobbyists pay.
- **Every gate is legible to the buyer.** A limit that reads as arbitrary breeds resentment and workarounds (shared logins, splitting accounts); a limit that tracks the customer's own growth reads as fair.

## Recommendations

> [!check] Draw each gate at the point where the user has already felt the product's core value and their own growth is the thing pushing them into the wall, gate the power-user and large-customer features while leaving the engagement and network features open, and let usage limits sit at the threshold real success crosses so the upgrade fires as a by-product of the customer winning.

Separate the two jobs a gate can do before you place it:

1. **Leave the engagement features open.** The integrations that embed the product in a daily workflow, the collaboration invite that pulls a second and third user in, the connections that make the product worth more as more people use it: keep these open to everyone. In a usage-based or bottom-up model, get the largest possible base hooked on them and monetize the growth they produce rather than tolling the on-ramp.
2. **Gate the power features.** Advanced analytics, API access, single sign-on, audit logs, administrative control: reserve these for higher tiers, because they charge the serious customer for depth without raising the price of getting started, and casual users rarely miss them.

Run the line between the must-haves everyone needs to get hooked and the power features only the committed reach for.

Set usage limits at the threshold the customer's real growth crosses, rather than at the point the free plan gets uncomfortable to give away. A cap of a thousand records, a fixed history window, a monthly run quota, or a meeting-length limit works as an upsell trigger only when a genuinely successful use of the product pushes past it; then the upgrade prompt fires at the exact moment the customer is winning and wants to keep going. The feeling you're designing for is "I love this, and now I need to upgrade to keep growing," which is a very different feeling from "I've hit a wall someone put here to charge me." Set a limit below the point of value and it fires while the user is still evaluating and reads as a shakedown. Set it far above real usage and it never fires. Put the threshold just past the point where value is obvious and just before the point where the customer would have been satisfied forever. Both halves of the gate are yours to place, the dimension you meter and the number you set on it, and a company can pick the dimension correctly and still leave the limit in the wrong place for years.

Hold two rules while you place every gate: track the scaling of the user's own success, and never gate engagement. Where [[GTM-006 Generous Free Tier]] decided how much value to give away and to which buyer, here you decide the precise features and thresholds that hold the line, and you do it inside the tier structure of [[GTM-018 Good-Better-Best]] rather than as a standalone paywall. Before you ship a gate, run it against three tests, and move it if it fails any: the user reaches real value before meeting it, the feature or limit is one their growth actually drives them into, and gating it does not starve the engagement the base runs on.

## Implications

A well-placed gating line turns the free and lower tiers into a base of users who have felt the value and are growing toward the wall, the raw material the upgrade ramp needs. Open the multi-step path from there and hand it downstream: carrying a single hooked user or team from that first paid gate through to a negotiated enterprise contract with the reserved power features (SSO, audit, API, administration) is the job of [[GTM-030 Freemium-to-Enterprise]]. Because the limits fire on the customer's own growth, let expansion become something the product does automatically rather than something a salesperson has to reopen, which is the behavior a consumption meter is built to collect, developed in [[GTM-017 Usage-Based Pricing]].

Don't expect the line to hold still. A boundary drawn correctly at launch drifts as the product grows new features, as the market moves upmarket, and as usage patterns shift what counts as normal versus power use; a feature that was a fair power-user gate can become a must-have everyone needs, and keeping it gated then starts starving adoption. Manage the same tension [[GTM-006 Generous Free Tier]] carries: every feature you move below the line widens adoption and narrows revenue, and every feature you move above it does the reverse, so revisit the placement as a live tradeoff rather than a wall poured once. Hold one rule fixed through every revision: whatever moves, keep the engagement and network features open.

## Related Patterns

- **Above:** [[MS-021 Free Changes the Question]] (why zero rewires the buying question), [[GTM-006 Generous Free Tier]] (how much to give away and to whom), [[GTM-018 Good-Better-Best]] (the tier structure the gates sit inside)
- **Below:** [[GTM-030 Freemium-to-Enterprise]] (the ramp from the first paid gate to an enterprise deal)
- **Peers / variants:** [[GTM-017 Usage-Based Pricing]] (the model whose limits double as gates), [[GTM-027 Product-Qualified Lead]] (reading a user pressing against a gate as a buying signal)

## Examples

**Zoom's 40-minute cap (2013 onward).** Zoom's free plan runs full-featured video meetings and limits meeting length to 40 minutes; the cap applied only to group meetings until 2022, when Zoom extended it to one-to-one calls as well. The gate sits past the point of felt value: a first-time host runs a real meeting, the product proves itself, and the wall appears only when the meeting is going well enough to run long. The limit is a usage threshold that fires on success, so it converts hosts who have already relied on the tool rather than filtering out people still deciding whether it works. The engagement features stay open to everyone: video quality, screen sharing, the join experience.

**HubSpot's CRM tiers (structure as of 2026).** HubSpot gives away the CRM itself, with contact records, deal pipelines and basic reporting on the free plan, then reserves the depth: custom reporting and forecasting climb to Professional, and single sign-on, audit logs and advanced permissions sit at Enterprise. The free contact record is the must-have that gets a team hooked and stays open; the power features that large, serious customers reach for sit above the line. Salesforce and Pipedrive draw the same shape, and it's worth reading all three pricing pages side by side, because the boundary each one chose is a legible statement about which users it wants adopting alone and which it wants a rep to meet. This segments casual users from serious ones and charges for depth without raising the price of getting started, which is the placement pattern prescribed here.

**Slack and Notion leaving collaboration open, then metering growth.** Both products kept the network-effect features, the channels, the shared workspace, the invites and integrations that embed the product in daily work, open on the free tier, following Kellogg's rule that engagement features should be broadly available. They drew the paid line at usage that grows with a team's own success: Slack's searchable message-history window, Notion's member and block limits. The gate fired as teams grew and their accumulated work made the cap bite, monetizing the growth the open engagement features had produced rather than tolling the adoption itself. Both companies still had to re-cut the number afterward. In September 2022 Slack replaced its 10,000-message history cap with a 90-day window, turning a limit a small team could take years to reach into one that fires within a quarter. The gated dimension had been right from the start, and the threshold on it sat too far out to fire on a normal team's growth.

