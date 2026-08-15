---
pattern: "Power Law Accounts"
aliases: ["Power Law Accounts", "The Democracy Delusion"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-001 Designed Market, Not Found Market]]"]
smaller: ["[[MS-033 Spear Fishing]]", "[[GTM-016 Account-Based Everything]]"]
source: "PDF pp. 341–354 (Book Proposal essay, 'The Democracy Delusion', Jan 2026)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A few accounts decide whether you live; the rest is noise.*

> [!tldr] About this pattern
> In many enterprise markets, a few Kingmaker accounts carry most of the revenue and credibility, and one marquee logo can make precedent replace technology in every later conversation. It sits below [[MS-001 Designed Market, Not Found Market]] and above [[MS-033 Spear Fishing]] and [[GTM-016 Account-Based Everything]].

> [!warning] Admonition
> Don't spread your effort evenly across a long tail of small customers. Enterprise markets follow a power law, so weighting every account the same quietly bets the company on the wrong ones.

Silicon Valley has a fetish for the long tail. The Amazon model invites a spreadsheet with ten thousand customers at $50 a month, revenue diversified enough to look safe to investors, and a story about "democratizing access." In B2B technology, and especially in infrastructure, data, and enterprise software, that spreadsheet is a comfortable lie. The internet may be democratic; enterprise spending is feudal. Snowflake's 2020 S-1 shows the structure in public. Of 3,117 customers as of July 31, 2020, the 146 in the Fortune 500 produced about 26 percent of revenue for the preceding six months. Every company has its own version of that ratio, and the top of the list carries far more weight than its headcount. Both halves of that have a lineage. Chris Anderson made the case for the tail in *Wired* in October 2004 and in *The Long Tail* (2006), where cheap distribution turns a mass of niches into a market worth more than the hits. The concentration on the other side is older. Vilfredo Pareto documented a power-law regularity in income and wealth in *Cours d'économie politique* (1896–97), and Joseph Juran attached Pareto's name to the "vital few and trivial many" in his *Quality Control Handbook* (1951), then later wrote that he had pinned the wrong man's name to it. Anderson's tail is real where distribution costs almost nothing. The claim here is that B2B infrastructure is not that market, and that its tail is a cost center dressed as diversification.

Averages hide the structure, and ARPU reported across a monolithic customer base hides it completely. In the early and middle stages a company has a few Kingmakers and a long tail of Tourists. The Tourists sign up for the self-serve tier, churn steadily, and flood support with password resets, and they produce noise rather than validation. The Kingmakers are the Fortune 500s, the high-growth unicorns, the banks. They pay six or seven figures, demand SOC 2, and, treated well, don't churn. Lose a thousand Tourists and revenue dips while support costs fall. Lose one Kingmaker and you miss the quarter, the valuation takes a hit, and morale collapses. Viability lives in the weight of the logos rather than their count.

The concentration is reputational as much as financial. B2B buyers are herd animals, and no CIO wants to be first to bet their career on a startup, so they look for social proof at their own scale. One marquee account changes every later conversation, which stops being about technology and becomes about precedent: "the platform that powers X." A single Kingmaker logo tells the market the thing is production-ready at scale, and in raw marketing terms it's worth more than a thousand small accounts. A company built on the long tail stays a tool in the market's eyes; one with a power-law account running it in production becomes a platform. (Naming and pursuing those accounts is [[MS-033 Spear Fishing]]; deprioritizing the tail is [[MS-034 No Is the Most Profitable Word]]; the accounts live in the enterprise band of [[MS-018 Price Creates the Buyer]].)

## Complications

- **Spend is concentrated, so averages lie.** Enterprise revenue follows a power law, which means ARPU and user counts actively mislead about where the business is.
- **Weight beats count.** A few accounts carry both the revenue and the reference value; the long tail carries neither.
- **Diversification reads as safety and acts as distraction.** Spreading revenue looks prudent to investors, but during category design it splits a small team across incompatible masters.
- **You can't serve the whale and the minnow at once.** The compliance needs of a bank and the frictionless wants of a hobbyist can't both sit in one early product.
- **Big accounts pull toward custom work.** The pressure to say yes to a Kingmaker's one-off can turn a product company into a dev shop for a single client.

## Recommendations

> [!check] Identify the twenty to fifty accounts whose wins would make your success inevitable, and build the product, the pricing, and the narrative for them.

Once you accept the power law, change the whole go-to-market from trawling to spearing.

1. **Shift spend from awareness to intelligence.** Most teams are built to trawl: broad keywords, big trade shows, lead volume, MQLs, success measured by fish in the net. Do the opposite. You don't need a thousand leads; you need introductions to the CTOs of the Global 2000. Run an intimate dinner for ten CIOs instead of a generic webinar, send one customized package to one prospect instead of a mass email, and hire one heavy-hitter who already knows the buyers instead of five junior SDRs cold-calling. If only fifty companies in the world can make or break your year, refuse to spend on reaching the other fifty thousand ([[MS-033 Spear Fishing]], and account-based programs in Part II).
2. **Run support as sales.** In a long-tail model support is a cost center you automate and deflect; in a power-law model support is how accounts expand. Your biggest accounts grow because your solutions engineers helped them survive a traffic spike, rather than because a rep called them. Treat the renewal as a continuous campaign of technical success rather than a one-time contract event: over-invest, embed engineers in their channels, and treat them as partners rather than tickets. A churned Kingmaker is worse than lost revenue; it signals to a small, gossipy world of CIOs that you failed at scale.
3. **Beat the customization trap with the generalization maneuver.** When a bank offers a million dollars a year but needs a bespoke integration with a 1980s mainframe, don't say yes to everything and fork the codebase into "BankOS." Hear the requirement, find the root problem, and build a general-purpose capability (generic webhooks, a plugin architecture) that solves it for the Kingmaker and for the rest of the market at once. Power-law accounts are the anvil you forge the product on; they force scale, security, and complexity sooner than you'd choose, so survive the pressure without buckling into custom code and you come out enterprise-grade.
4. **Write the list down and let it govern spend.** Choosing the twenty to fifty is a discipline, so build an explicit tier-one selection matrix. Score candidate accounts on a few axes at once: the revenue they could plausibly bring, the reference value of their name, the fit between their acute problem and your real strengths, and their reachability through a warm path rather than a cold one. Rank a giant logo you can't win, or can only win by forking your product, below a slightly smaller one that will reference you and use you as built. Commit the list to writing and let it govern where the whole company spends: engineering prioritizes the security feature a tier-one prospect needs over the edge case a tourist filed, and marketing runs the dinner instead of the mass webinar. Revisit the list on a cadence, because accounts graduate onto it and fall off it as they grow, churn, or reveal themselves as customization traps.

Hold the line when a large but off-list deal wanders in with real money attached. Taking it feels like strength and is usually a distraction that drags the roadmap sideways. The list exists to make that refusal a policy the team already agreed to, rather than a fresh argument every time temptation walks through the door.

## Implications

Commit to the power law and everything downstream reshapes. Open [[MS-033 Spear Fishing]] for the named-account targeting it requires, then flow into the account-based programs and the support-as-sales motions of Part II. It sits inside [[MS-001 Designed Market, Not Found Market]] as a structural fact about who your designed market's buyers really are, and it's the extreme case of [[MS-010 ICP Definition]], where the profile collapses to an actual list of company names. Lean on [[MS-034 No Is the Most Profitable Word]], because serving the whales means deprioritizing, sometimes firing, the small accounts that would otherwise consume the team.

Accept the concentration risk as real and price it in. When sixty percent of revenue comes from three customers, investors are right that it's risky, and losing the big account might kill you. During category design, pay that risk as the price of focus; you can't build for the Department of Defense and the weekend hobbyist at the same time, so choose, and raise the stakes on purpose. The consolation is directional: capture the power law and the long tail eventually follows the precedent you set, while the reverse never happens. You can't aggregate enough minnows to act like a whale.

## Related Patterns

- **Above:** [[MS-001 Designed Market, Not Found Market]]
- **Below:** [[MS-033 Spear Fishing]], [[GTM-016 Account-Based Everything]]
- **Peers:** [[MS-010 ICP Definition]] (the ICP as a named list), [[MS-034 No Is the Most Profitable Word]] (deprioritizing the tail), [[MS-018 Price Creates the Buyer]] (whales in the enterprise band), [[MS-032 Beachhead Market]] (a few whales as the first ground you take)

## Examples

**Mesosphere pitching precedent.** When we were building Mesosphere, we needed revenue and a name-brand deployment at scale, because once a company everyone respects runs you in production, the conversation with every other Fortune 500 changes. We pitched precedent through the production deployment.

**The bank and the generalization maneuver.** I've sat on the founder's side of the customization trap more than once. A large financial institution offers real money for a feature that serves only them, and the whole company leans toward yes. A general capability, a plugin layer or a webhook system, lets the bank solve its problem and ships to everyone else too. The times a company I watched said yes to the one-off, it slowly became a service business wearing a product's clothes.

**Harrah's 26 percent.** Gary Loveman published the finding in *Harvard Business Review* in May 2003, while he was running Harrah's Entertainment: 26 percent of the company's customers produced 82 percent of its revenue. The industry had spent years courting a different group. Those 26 percent were middle-aged and older people with time and discretionary income who spent $100 to $500 a trip on slot machines, well below the high rollers the casinos comped and flew in. Harrah's rebuilt its marketing around them and away from everyone else. A casino floor is a long way from enterprise infrastructure and the distribution is the same, so measure your own ratio before you let an average describe you.

**Support as the renewal engine.** At Vapor IO and Salesforce, the lesson about big accounts was the same: earn the renewal continuously, through solutions engineers and support architects who help the account succeed under real load, rather than a rep showing up sixty days before the contract ends. Over-invest in a handful of accounts; it looks inefficient on a spreadsheet and is exactly right when those accounts are the business.
