---
pattern: "Buyers Come in Clusters"
aliases: ["Buyers Come in Clusters"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: []
source: "Net-new (Moore's bowling-alley model; vision doc)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Buyers travel in tight groups that watch each other before any of them moves.*

> [!tldr] About this pattern
> Buyers move in tight, self-similar groups whose members trust one another's adoption. Concentrated effort creates density inside one cluster and peer references that pre-sell the rest of the market. It sits below [[MS-001 Designed Market, Not Found Market]].

> [!warning] Admonition
> Don't build a go-to-market aimed at individual buyers. Buyers move in self-similar, watchful clusters where the second sale rides on the first, so effort scattered across unrelated prospects pays full price for every deal.

Buyers inside a segment aren't strangers to each other. They read the same forums, attend the same conferences, follow the same people, and hire from each other's teams. They don't evaluate a new vendor in isolation; they wait to see who like them has already committed, because a peer who has run the thing in production is worth more than any claim a vendor makes. In a young market especially, no buyer wants to be the first of their kind to bet on you. A reference from inside the cluster carries more weight than a demo, a benchmark, or a discount.

That changes the arithmetic of a sale. Effort scattered across unrelated buyers starts every deal from zero trust, because nothing won last quarter means anything to this prospect; the social proof that would make the next deal cheaper never accumulates, acquisition cost stays flat forever, and the flywheel never starts. Effort concentrated inside one group runs the other way, each win lowering the price of the next win in the same group, until prospects arrive pre-sold by their peers before a rep ever calls. The cluster is where momentum compounds or fails to.

The edges are hard, and that's the part teams forget. A reference that's gold inside one cluster can be worthless in an unrelated one: a fintech CISO doesn't care that three gaming studios love you. A handful of names from one tight cluster outsells a wall of scattered ones. (Which cluster you commit to first is [[MS-032 Beachhead Market]]; naming the accounts inside it is [[MS-033 Spear Fishing]]; the recurring types within a cluster are [[MS-009 Buyer Archetypes]].)

## Complications

- **Peers outweigh pitches.** Buyers imitate people like them more than they respond to vendors, so a same-cluster reference beats anything you can say.
- **Scattered effort doesn't compound.** Wins spread across unrelated buyers never lower the cost of the next deal, so the funnel never gets cheaper.
- **Inside is cheap, outside is dear.** A tight cluster shares vocabulary and channels, so once you're in, word travels for free; from outside, every deal is full price.
- **References don't travel across edges.** The proof that closes deals inside one cluster means nothing in an unrelated one, so each new cluster you enter starts you over.
- **Commitment feels like exclusion.** Picking one cluster means ignoring buyers outside it for now, which always looks like leaving money on the table.

## Recommendations

> [!check] Pick one tight, referenceable cluster, win it densely enough that members cite each other, then use that proof to enter the cluster next door.

Choose a cluster whose members actually talk to each other and resemble each other along the axes that matter: the same role, the same industry, the same technical stack, the same acute problem. Win enough of it that a prospect inside the group hears "three companies just like us already run this in production," because that sentence, spoken peer to peer, is what you're really manufacturing. Then move to the adjacent cluster that already trusts the first one, and let each conquered group tip over the next. Geoffrey Moore called this the bowling alley in *Crossing the Chasm* (1991): the head pin is your beachhead, and momentum travels down the lane through clusters that reference each other.

Compose the move with the rest of the buyer patterns. Targeting named accounts inside a chosen cluster is [[MS-033 Spear Fishing]]; when a cluster turns out to be a few enormous accounts rather than many similar ones, it becomes [[MS-016 Power Law Accounts]]; and crossing from the enthusiast cluster to the pragmatist cluster is the hard seam owned by [[MS-017 Adoption Curve Ownership]]. Hold the same discipline in all of them: density before breadth, because a market you half-win everywhere is a market you own nowhere.

Choosing the first cluster well is most of the work, so apply explicit criteria rather than instinct. Screen every candidate cluster on four tests:

1. **Reachable.** They gather somewhere you can show up.
2. **Referenceable.** They'll admit publicly that they use you.
3. **Hurting.** The problem is acute enough to move budget now.
4. **Winnable.** You can plausibly take a majority instead of a token share; a cluster you can only ever get ten percent of is the wrong cluster, because ten percent never produces the peer pressure that does your selling.

Then treat the references as a product you're manufacturing rather than a byproduct you hope for. Ask for the case study while the win is fresh, script the peer introduction, and make it easy for a happy customer to tell their counterpart at the next firm. Run a deliberate referral motion inside each cluster, so that by the time you step into the adjacent one you arrive holding names the new prospects already trust. Watch for premature widening. The quarter after a first cluster starts working, you'll be tempted to declare victory and spray effort across three new segments at once, which restarts every relationship from zero trust and dissolves the density you just built. Resist it. Slack's own history is both the caution and the proof: it grew by letting one won team become the reference for the next, and it slowed whenever it tried to be everywhere at once.

## Implications

Working by cluster gives the whole go-to-market a form. Open [[MS-032 Beachhead Market]] next, the deliberate choice of the first cluster, and [[MS-033 Spear Fishing]], the account-level targeting inside it, then flow downstream into account-based programs in Part II. Keep it beside [[MS-017 Adoption Curve Ownership]], since clusters are how you cross the chasm one referenceable segment at a time, and beside [[MS-016 Power Law Accounts]], the special case where the cluster is a short list of giants.

Enforce one discipline against the pull of a won cluster, which can capture you. Its needs pull hard on the roadmap, and the adjacent cluster you want next may want something subtly different, so generalize what you built for the first group without breaking it for them. Win a cluster too specifically and you've built a product for one room; win it too loosely and you never earned the references in the first place. Managing that widening is the bridge from a niche into a platform. Hold the habit that separates the companies that compound from the ones that stall: finish the cluster you're in before you open the next, every time. The math punishes the other choice, because effort spread thin buys neither the references that close the current cluster nor the density that would open the adjacent one, and a company can spend years collecting logos without ever generating momentum.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** *(none yet in Part I; extends into account-based programs in Part II)*
- **Peers:** [[MS-032 Beachhead Market]] (the first cluster, chosen), [[MS-033 Spear Fishing]] (named accounts inside a cluster), [[MS-009 Buyer Archetypes]] (the recurring types within one), [[MS-017 Adoption Curve Ownership]] (crossing between clusters), [[MS-016 Power Law Accounts]] (the cluster as a short list of whales)

## Examples

**Slack, team by team then industry by industry.** Slack's early spread ran through clusters. One team adopted it, other teams in the same company watched and copied, and then similar companies followed the ones they already admired. IBM is the documented case: Slack arrived there in 2014 with 68 engineers on the free version, reached 165,000 users on Enterprise Grid by 2019, and went to all 350,000 employees in February 2020. A peer team saying it had stopped drowning in email mattered more than any marketing. Momentum ran along lines of who watched whom.

**A vertical wedge I worked on.** A data-infrastructure company I advised kept chasing "any team with big data," and every deal restarted from scratch. We stopped and picked one cluster, ad-tech firms of a certain size, who all knew each other, poached each other's engineers, and spoke at the same three conferences. Six wins in that cluster produced a reference list that closed the seventh and eighth almost on their own, and only then did we step sideways into the adjacent gaming-analytics cluster, carrying the ad-tech names as proof.

**PostHog and the startup cluster.** PostHog's early customers were engineering-led startups that live in the same few communities and read the same threads. Winning that cluster densely meant new prospects arrived already having heard, from a peer they trusted, that it worked. When PostHog published its ICP framework in January 2024, one of the reasons it gave for the profile working was that customers of that kind influence earlier-stage startups by word of mouth. The cluster did the selling the moment the density crossed a threshold.

**Solar panels and the neighbor effect.** Bryan Bollinger and Kenneth Gillingham tracked residential solar installations across California and published the result in *Marketing Science* in 2012: at the average number of owner-occupied homes in a zip code, one additional installation raises the probability that another household there adopts by 0.78 percentage points. Those households are responding to panels on a roof they drive past, and the authors drew the commercial conclusion themselves: the effect tells marketers how to build referrals and cut acquisition cost. This holds wherever buyers can see each other's decisions, and a roof is about as visible as a product surface gets.

