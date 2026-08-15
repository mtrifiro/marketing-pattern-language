---
pattern: "Freemium-to-Enterprise"
aliases: ["Freemium-to-Enterprise", "The Free Base Is the Pipeline"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[GTM-006 Generous Free Tier]]", "[[GTM-019 Gating Line]]", "[[GTM-029 Land and Expand]]", "[[GTM-002 PLG-SLG Hybrid]]", "[[GTM-027 Product-Qualified Lead]]"]
smaller: []
source: "PDF pp. 1–40 raw (Freemium-to-Enterprise; Sales-Assisted); pp. 121–140 (hybrid land-and-expand)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *The people who already use you for free are the pipeline; the enterprise sale is for everything the company needs that they never asked for.*

> [!tldr] About this pattern
> Freemium-to-enterprise treats scattered free users inside one company as a live footprint. Champions and usage data establish adoption; governance, security, and consolidation turn it into a company purchase. It sits below [[GTM-006 Generous Free Tier]], [[GTM-019 Gating Line]], [[GTM-029 Land and Expand]], [[GTM-002 PLG-SLG Hybrid]], and [[GTM-027 Product-Qualified Lead]].

> [!warning] Admonition
> Don't leave your own installed footprint uncollected, and don't sell the enterprise a contract before that footprint exists. When hundreds of a company's employees already run your product for free, the largest money on the table is the money you never ask for.

The free base looks like a cost. When you look at thousands of individual users on the free tier, none of them paying, you'll read it as a conversion problem: how do we turn free users into paid users, one seat at a time? That framing misses where the real revenue sits. Inside a single large customer there may be four hundred employees using the product across a dozen teams, each on their own free or cheap plan, and the account as a whole is running the tool as unofficial infrastructure. The company is getting the value. Nobody is buying it at the level the value is being consumed.

The individual user and the enterprise want different things, and a motion that only sells to the individual never reaches what the enterprise will pay for. A designer on a free plan wants the canvas to work. The company that employs four hundred designers wants control over who has access, an audit trail of what left the building, a way to turn off an account when someone leaves, one invoice instead of four hundred expense reports, and a signed assurance that you meet the company's security bar. None of that is a feature the free user requested. All of it is what an economic buyer will sign a seven-figure contract to get. Upgrading individuals one at a time fishes in the shallow end of your own account.

The opposite mistake costs you more quietly. A sales team told there's an enterprise contract to be won will call the CIO cold, pitching governance and consolidation for a product almost nobody at the company uses yet. There's no footprint to point at, no champion who will take the meeting, no usage data to prove the value is real. The pitch lands as one more vendor asking for budget, and it dies. Both ends of this cost you. A free base with no enterprise offer to graduate into leaves the biggest revenue uncollected, and pushing the enterprise motion before real internal adoption fails for want of anything to convert.

## Complications

- **The value is consumed at the account level, but the free tier bills at the individual level.** Hundreds of employees can run a product as shadow infrastructure while you collect nothing, because the pricing unit and the consumption unit are different sizes.
- **The individual and the enterprise buy different things.** The user wants the product to work; the company wants control, security, an audit trail, and one bill. A motion that sells only to the user forfeits the contract the company will actually pay for.
- **Existing adoption is your cheapest and most credible asset.** Internal champions already love the product, and their usage is measured proof of value and scale that no cold pitch can match.
- **Free usage proves one of the two things you need, and the deal turns on the other.** A large free footprint establishes that the value is real and that people reach it without being sold to, which is genuinely hard evidence and is why this pattern works at all. It establishes nothing about whether a budget exists, who controls it, or whether the purchase can survive security review and procurement. Steve Blank's position in *The Four Steps to the Epiphany* (2005) is the opposite pole, that giveaways don't demonstrate anyone will buy and only an order at close to list price does; both readings are right about different halves. Adoption validates the value; a paid order at a price you'd quote publicly validates the buyer, the budget and the path. A footprint counted as a purchase path leaves the deal resting on evidence nobody tested. ([[GTM-004 Repeatable Sales Motion]] carries the paid-order gate itself.)
- **Timing runs both ways.** Converting late leaves the account consuming value for free indefinitely; running the enterprise motion before the footprint exists gives the sale nothing to point at, and it collapses.
- **Governance is a reason to consolidate.** Security, compliance, and admin control give the company a positive reason to pull scattered individual usage into one governed account, which is where you finally price to the value.
- **The signal lives at the account level.** A single power user means little; many activated users concentrated in one company domain is what says an account is ready, and reading the wrong signal wastes an expensive sales motion.

## Recommendations

> [!check] Treat the installed free footprint inside a target company as the pipeline, and run an enterprise motion that consolidates that scattered individual usage into one governed account. Sell the company what it needs on top of the adoption that already happened, admin controls, single sign-on, security and compliance, audit logs, and centralized billing, and use the existing usage as both the wedge that opens the door and the evidence that proves the value to the economic buyer.

Run the ramp in this order:

1. **Instrument the product to see the footprint first.** The hybrid motion is a two-move sequence: instrument the product so you can watch adoption concentrate, then run a sales motion that converts and consolidates what the instrumentation reveals. Build the instrumentation before anything else.
2. **Wait for the account signal, then hand off.** Read at the account level, many activated users in one company domain, which [[GTM-027 Product-Qualified Lead]] owns. Ignore a scatter of unrelated free users; four hundred of them at the same email domain is the signal. When it fires, hand off from self-serve to sales, the job of [[GTM-002 PLG-SLG Hybrid]].
3. **Sell up the org chart.** Don't try to upgrade individuals. Address the person who owns risk and budget for the whole company, and sell the governance layer the free users never asked for and the company can't live without at scale. Let the usage data write the pitch: four hundred of your people already depend on this, here's exactly who and how much, and here's how you bring it under one contract with the access control, audit trail, security posture, and single invoice your job requires.
4. **Consolidate the scattered usage into one administered account.** Make consolidation the deliverable and governance the reason the company agrees to it. Work the existing adoption twice over: as the wedge, because the champions who already love the product will vouch for it and take the meeting, and as the evidence, because the usage numbers prove both that the value is real and that the scale is already there.

Guard both boundaries. Build a generous free tier with no enterprise offer above it and the footprint accumulates while the revenue stays uncollected; make sure there's a contract to graduate the account into. Run the enterprise motion before real internal adoption and the sale fails for want of a footprint; let the free base grow until the account signal fires, then convert. Hold the order: adoption first, evidence second, contract third.

## Implications

Once you convert the free base into governed accounts, treat the free tier differently. It stops being a lead-generation cost and becomes the top of a pipeline whose largest deals close at the account level, which is why [[GTM-006 Generous Free Tier]] and [[GTM-019 Gating Line]] sit above this pattern: tune the generosity of the free entry point and the placement of the free-to-paid boundary to seed enterprise footprints rather than only to convert individual seats. Connect this motion to the broader land-then-grow arc of [[GTM-029 Land and Expand]], and treat the free footprint as an unusually cheap, self-planting land.

Enforce one discipline after the account is signed: a governed account is only the beginning of the enterprise relationship. Once you consolidate an account under one contract, do the ordinary enterprise work of renewal, expansion into more of the company, and the account management a top-down relationship demands, which is where an [[GTM-016 Account-Based Everything]] motion takes over from the product-led entry. Watch the standing risk that the free base and the enterprise contract drift apart: usage keeps spreading through the free tier in parts of the company the contract doesn't cover, or a signed account lets its seats lapse while shadow free usage continues elsewhere. Keep the footprint and the contract in sync; that's the recurring maintenance cost of running this motion.

## Related Patterns

- **Above:** [[GTM-006 Generous Free Tier]] (the free entry point that plants the users), [[GTM-019 Gating Line]] (the free-to-paid boundary), [[GTM-029 Land and Expand]] (the land-then-grow motion this specializes), [[GTM-002 PLG-SLG Hybrid]] (the product-signal-triggered handoff to sales), [[GTM-027 Product-Qualified Lead]] (the account-level signal that flags a ready account)
- **Below:** *(none yet)*
- **Peers / variants:** [[GTM-016 Account-Based Everything]] (the top-down motion that runs the account once it is consolidated)

## Examples

**Slack's free and Pro teams consolidated into Enterprise Grid (2017).** A single large employer holds dozens of disconnected free and Pro Slack workspaces, each spun up bottom-up by individual teams, and nobody prices to the whole. Slack shipped Enterprise Grid on 31 January 2017 as the graduation contract, pulling those scattered workspaces into one administered organization with centralized security, compliance controls, and a single billing relationship, and named Capital One, PayPal and IBM among the first customers to take it.

**Figma converting individual and team free adoption into org-wide enterprise licenses.** Designers adopt Figma for free and pull in collaborators, so a target account holds hundreds of active users well before any contract exists, and chasing individual upgrades leaves the account underpriced. Figma converts that footprint into org-wide agreements sold on centralized administration, single sign-on, and design-system governance. Adobe put figures on the result when it announced its intent to acquire Figma on 15 September 2022: total annual recurring revenue passing $400 million exiting that year, about $200 million of net new ARR added during it, gross margin near 90 percent, and net dollar retention above 150 percent. Retention that far above 100 percent is what an account bought once and then grown looks like in the accounts.

**GitHub, Notion, and Zoom converting bottom-up adoption into enterprise agreements (2011 to 2022).** Each planted a large free or individual footprint inside companies before selling up: GitHub through developers on free and personal repositories, Notion through individual and small-team workspaces, Zoom through free personal meeting accounts. In each case the sale adds what the company needs on top of adoption that already happened, single sign-on and SAML, admin controls, security and compliance review, audit logs, and centralized billing, and consolidates scattered usage into one governed account rather than converting users one seat at a time. GitHub put a price on that on 1 November 2011, announcing GitHub Enterprise at $5,000 per twenty users a year for a self-hosted install with corporate authentication and system backups. Notion added a Business plan carrying SAML single sign-on on 7 December 2022 and kept granular admin roles and the audit log for Enterprise. Zoom counted the motion in its 2019 registration statement: for the fiscal year ended 31 January 2019, 55 percent of the 344 customers contributing more than $100,000 of revenue had started with at least one free host before subscribing.

**Amazon Business sells a company the governance over purchasing its employees were already doing (launched 2015).** Employees buy supplies on personal accounts and file expense reports, so the company's money already moves through your store with no agreement covering any of it, and chasing individual shoppers is beside the point. Amazon sells the organization what no individual shopper ever asked for. Amazon Business, launched in the United States in 2015, gives a company multi-user accounts, approval workflows, spend visibility and anomaly monitoring on top of the same catalog. Amazon said in August 2025 that it now serves more than eight million organizations, drives over $35 billion in annualized gross sales, and counts 97 of the Fortune 100 as customers. Adoption came first and the contract came second, in a retail business with no free tier, no seats and no product to instrument. What this pattern closes is the gap between how value gets consumed and how it gets billed, and that gap opens wherever the two units are different sizes.

