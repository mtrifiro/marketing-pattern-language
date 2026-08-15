---
pattern: "Trusted Neutral"
aliases: ["Trusted Neutral", "The Convener"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-027 Economic Moat]]"]
smaller: []
source: "PDF pp. 301–340 (LF Strategic Patterns: neutral, trusted convener)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Win by being the one party everyone can safely join; neutrality is a position a competitor cannot take without destroying it.*

> [!tldr] About this pattern
> A trusted neutral becomes indispensable infrastructure because mutually suspicious players can all rely on it; the absence of partisan incentives creates an advantage rivals cannot copy quickly. It sits below [[MS-027 Economic Moat]].

> [!warning] Admonition
> Don't expect a partisan player to supply the common ground a suspicious market needs. The moment an interested party tries to be the shared platform, the others refuse to depend on a rival, and the ground stays contested and inefficient.

Some markets require their players to cooperate and compete at the same time: cloud providers who need a common orchestration layer, enterprises who want a technology no single vendor controls, buyers and sellers who need a marketplace neither side owns, contributors who will build on shared infrastructure only if no competitor can capture it. Each of them needs a piece of common ground, a standard, a platform, a convening body, a neutral venue. And each of them will refuse to let a rival own it, because depending on a competitor's platform hands that competitor an advantage, data, and the power to change the rules. So the common ground goes unbuilt, or gets built badly by a partisan player and quietly distrusted, and the whole market pays the tax of fragmentation. No feature set closes that gap.

Trust here is structural. You can build the technically best shared platform and still fail to become the shared platform, because the barrier is trust more than capability, and that trust depends on your having no incentive to tilt the field. Enterprise adoption of foundational technology, in particular, often turns on neutrality more than on any feature, because a large buyer standardizing on infrastructure is making a long bet that the ground won't be pulled out from under them by a vendor's commercial interest. The players converge on the party that credibly cannot betray them, and a party that could betray them, however good, is disqualified.

Nadia Eghbal's *Working in Public* (2020) shows how few hands that common ground usually sits in. Reading open-source code as public infrastructure, she cites a study of GitHub projects finding that in more than 85 percent of them, under 5 percent of the developers accounted for 95 percent of the code and the conversation around it, and she argues that the scarce resource keeping shared infrastructure alive is the attention of a small set of maintainers. Ground the whole market depends on is held by a handful of people, which is why the question of who holds the trademarks, the governance, and the merge rights decides whether that ground is safe to build on. The neutrality has to be structural because the hands are so few.

The position has an unusual property: once earned, it is nearly impossible for a competitor to attack, because attacking it means becoming partisan, which is the one thing that forfeits it. The general moat this instantiates is [[MS-027 Economic Moat]]; the market-design act that creates the need for a convener is [[MS-001 Designed Market, Not Found Market]]; the distribution the position earns is taken up in [[11 Channels and Ecosystem]].

## Complications

- **Rivals need common ground and won't cede it to each other.** Competing participants require shared infrastructure yet refuse to depend on a competitor's platform.
- **Trust here is structural rather than earned by features.** The best partisan platform still fails to convene, because the players require a provider with no incentive to tilt the field.
- **Neutrality is self-protecting.** A competitor can't take the position without becoming partisan, which destroys its value.
- **Neutrality constrains monetization.** The impartiality that makes the position valuable forbids the obvious ways to extract value from it.
- **A single betrayal is fatal.** Neutrality takes years to build and one self-interested move to lose.

## Recommendations

> [!check] Make neutrality structurally credible and monetize beside the neutral role. The position passes only when betraying the ecosystem is expensive because governance or asset ownership prevents a unilateral tilt.

Do not rely on a promise of neutrality; it's worth little against the incentive to break it. Put the neutrality beyond your own reach, then convene, then earn:

1. **Transfer the core assets, trademarks, and governance to a foundation or independent body.** Make your own betrayal structurally impossible rather than merely unlikely.
2. **Publish binding guarantees of openness and durability, and give participants real governance.** Ensure no single party, including you, can tilt the field. These moves are costly precisely because they're credible, and their cost is what makes the neutrality believed.
3. **Convene.** Become the venue where the suspicious players collaborate, standardize, and transact, and let the whole ecosystem's activity flow through the ground you hold. That flow is distribution no competitor can match, because the participants market the platform by depending on it.
4. **Monetize from adjacent to the neutral role.** Sell commercial services, support, certification, hosting, and enterprise tooling to participants who value the ecosystem the neutrality created, and keep the core impartial.

Hold the separation as your governing discipline. The instant you use the neutral ground to advantage your own commercial arm, the trust that made the ground valuable begins to drain, and the players start looking for a venue that cannot betray them. Test the position honestly: ask how expensive it would be for you to betray the ecosystem, and if the answer is "cheap," you don't yet hold the moat. If you're a for-profit company that wants the position without a foundation to hold it, buy the trust with visible, costly self-restraint: open governance, published commitments, a track record of decisions that favored the ecosystem over your own short-term gain, and a willingness to be audited on all of it. Give away the power to tilt the field, and hold what that restraint buys you.

## Implications

Hold a credibly neutral position and you become indispensable infrastructure, occupy a moat no partisan rival can attack, and turn the entire ecosystem into distribution and proof. Aim for it as the endgame of a successful [[MS-023 Category Creation]], where the company that named a space becomes the neutral steward of it, and let the ecosystem do the selling, the mechanism worked out in [[11 Channels and Ecosystem]]. It sits inside [[MS-027 Economic Moat]] as its most structurally self-protecting form.

Enforce the restraint the position demands. Neutrality and monetization sit in permanent friction, and the position is brittle in one specific way: it survives on reputation, and a single self-interested act, a governance capture, a quiet tilt toward the commercial arm, can collapse in months what took years to build. Accept that you give up the fastest paths to revenue, since the obvious ways to extract value are the ones that forfeit the role. Hold the position through the restraint most competitors won't accept, and revisit the guarantees as you grow so the neutrality stays structural rather than merely asserted.

## Related Patterns

- **Above:** [[MS-027 Economic Moat]]
- **Below:** *(none by design; the moat is the position itself)*
- **Peers:** [[MS-023 Category Creation]] (neutrality as the endgame of a created category), [[MS-001 Designed Market, Not Found Market]] (designing a market around a convening role), [[MS-028 Data Gravity Lock-In]] (the alternative moat when control rather than neutrality is the position), [[11 Channels and Ecosystem]] (the convening position turned into distribution)

## Examples

**Kubernetes got a home nobody owned (July 2015).** On 21 July 2015, the day Kubernetes reached 1.0, Google contributed it as the seed project of the new Cloud Native Computing Foundation under the Linux Foundation, with a technical oversight committee and founding members that included Cisco, Goldman Sachs, IBM, Red Hat, and VMware. Companies that would never have built on a Google platform built on the foundation's. CNCF's annual survey for 2021, published in February 2022, found 96 percent of its 3,829 respondents using or evaluating Kubernetes.

**The banks built rails none of them owned (1970).** Bank of America had licensed BankAmericard to other banks since 1966, and every licensee was a competitor of the owner. In 1970, Bank of America gave up control and the issuing banks formed National BankAmericard Inc., a Delaware non-stock corporation the members owned jointly, with Dee Hock running it. It took the name Visa in 1977. No member could tilt the rules against another, which is what made the rails usable at all. Visa reported net revenue of $35.9 billion for the fiscal year ended 30 September 2024.

**UL sells the test and gives away the standard (1894, 2024).** William Henry Merrill founded the Underwriters' Electrical Bureau in 1894, paid by insurers who needed to know whether wiring would burn a building down, and its successor still doesn't make what it tests. The standards sit in a nonprofit, UL Standards & Engagement, which has published nearly 1,700 standards and guidance documents. The commercial arm, UL Solutions, went public on 16 April 2024 at $28 a share; the nonprofit sold 19.4 percent of it for $1.03 billion net and kept the rest. Testing earns the revenue while the standard stays where no manufacturer can bend it.

