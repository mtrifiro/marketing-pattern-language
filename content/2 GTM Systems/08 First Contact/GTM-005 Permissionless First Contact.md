---
pattern: "Permissionless First Contact"
aliases: ["Permissionless First Contact"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[GTM-021 Practitioner-First GTM]]"]
smaller: ["[[GTM-006 Generous Free Tier]]", "[[GTM-007 Frictionless Onboarding]]"]
source: "PDF pp. 21–40 (PLG cluster, raw extraction); pp. 241–260 (Phase 4 activation module)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Let a stranger reach value before anyone says yes.*

> [!tldr] About this pattern
> Permissionless first contact lets a stranger reach useful value before anyone on either side has to approve the encounter. That access rule belongs in the primary motion itself. It sits below [[GTM-021 Practitioner-First GTM]] and above [[GTM-006 Generous Free Tier]] and [[GTM-007 Frictionless Onboarding]].

> [!warning] Admonition
> Don't gate first contact with a form, a demo request, or a credit-card field. The practitioners most likely to champion your product won't ask permission to try it, and every gate you place selects against exactly them.

Technical evaluators discount claims they can't verify by hand. They're skeptical of marketing claims and of sales-led processes, and they want to run the thing themselves; demo-gated access and thirty-day trials create commitment friction and miss every user who isn't ready to buy on the day they show up. The wider data agrees. Gartner's 2019 study of B2B buying found that purchasing groups spend about 17% of the journey meeting with suppliers at all; split among competing finalists, any single vendor's salespeople get 5% or 6% of the buyer's attention. The evaluation happens away from you, in your docs and in your product, or it happens in a competitor's.

Each gate is defensible on its own. The registration form gives marketing someone to follow up with. The demo request lets sales steer the first impression. The credit-card field filters out tourists. Stacked together, they define who may enter: a visitor willing to declare purchase intent to a vendor before knowing whether the product works. Practitioners rarely qualify. They close the tab, try the alternative that let them in, and the funnel fills with the people who tolerate meetings.

A smaller gate is still a gate. A shorter form still announces that surveillance precedes value. A "free trial" behind a credit card still demands financial commitment from someone who hasn't seen the product work. A self-serve demo booking still routes first contact through a salesperson's calendar, and the fourteen-day clock on a trial turns evaluation into a scheduling problem for people who wanted to poke at the product on a slow afternoon. In every variant, a human, a form, or a countdown still stands between curiosity and evidence.

A second permission isn't yours to grant at all. Even with your door wide open, a product that needs a server, a budget line, or an IT ticket asks the visitor to spend internal political capital before seeing any value. A staff engineer can't requisition infrastructure to satisfy curiosity; a designer can't open a procurement cycle to test a hunch. Where first contact requires the organization's consent, most curiosity dies at a door you never see.

## Complications

- Software value must be experienced before it's believed; claims a visitor can't verify by hand get discounted toward zero.
- Marketing wants identity and intent data at the door, and every added field sheds the most skeptical visitors first.
- Serving anonymous users costs real money in infrastructure and support, and finance will push to qualify people before you spend on them.
- The person who can try the product alone rarely controls budget, and the person who controls budget rarely tries products alone.
- Security and legal teams on both sides prefer contact that runs through contracts and controlled channels, and open access reads to them as exposure.
- A door generous enough to matter can be generous enough to cannibalize revenue, and where that line falls is [[GTM-006 Generous Free Tier]]'s question.

## Recommendations

> [!check] Build first contact so that a stranger who has asked no one's permission, yours or their employer's, can reach one real unit of value in a single sitting using only what you've published. Count the human approvals standing between an anonymous arrival and that first value, and drive the count to zero.

Work both sides of the count:

1. **Zero approvals on your side.** Make the essentials public and self-serve: pricing on the site instead of behind a call, documentation in the open instead of behind a form, credentials issued by the product instead of granted by a rep. Define the unit of value concretely for your product: a test charge that clears, a query that returns, a page that deploys. Then treat the anonymous path to that unit as a product surface, staffed and maintained like one, because for your most skeptical prospects it is the product's first impression and the only demo they'll accept.
2. **Zero approvals on their side.** Make the product fit inside one person's existing authority. Keep entry free, since any price triggers the budget conversation; how much stays free is [[GTM-006 Generous Free Tier]]'s question. Run the product where the visitor already has power, in a browser or in user space, since anything that needs a server or a security review means a ticket and a wait. And make it useful to one person working alone, since value that appears only at team scale forces the visitor to recruit colleagues before seeing anything. A managed entry point makes the same point operationally: it collapses time-to-value from weeks to minutes by absorbing the setup a stranger would otherwise need permission to perform.

Keep the gate small if you must, but keep it permissionless. MongoDB's Atlas M0 free cluster is 512 MB of storage, a sliver of a real workload, yet it satisfies the invariant because no human approves it; the stranger acts and the product responds. What breaks the invariant is any step where a person must say yes: a sales-scheduled demo, a "contact us" pricing page, an approval queue for API keys. Cut those. Speed matters too, and a permissionless path that takes a week is its own problem to fix, but hand both the clock and the path's design to [[GTM-007 Frictionless Onboarding]]. Hold the door here.

## Implications

Once strangers can reach value alone, expect the top of the funnel to change character. You trade a thin stream of declared leads for a wide pool of anonymous usage, and that trade rearranges the rest of the system. Shift qualification from what visitors claim on forms to what they do in the product. Start sales conversations later and land them warmer, grounded in observed usage instead of cold outreach. Treat documentation and the product itself as your primary marketing surfaces, which is why [[GTM-021 Practitioner-First GTM]] funds them as investments rather than costs.

Expect this pattern to create the problems its smaller patterns exist to solve. You now know little about who's arriving, so make learning about them without rebuilding the gates a discipline of its own. The free path costs money finance will question every planning cycle; defend it. And someone must still decide when commercial contact begins, because permissionless first contact only defers the sales conversation. From here, set the economics of the open door with [[GTM-006 Generous Free Tier]], then clear the path behind it with [[GTM-007 Frictionless Onboarding]], which puts a number on the journey and turns first value into a routine worth paying for.

Start with an audit. Open a private browser window, arrive at your own site as a stranger, and try to reach one unit of value without typing your name. Count the approvals you hit. Each one marks the spot where a would-be champion turns around.

## Related Patterns

- **Above:** [[GTM-021 Practitioner-First GTM]]
- **Below:** [[GTM-006 Generous Free Tier]], [[GTM-007 Frictionless Onboarding]]
- **Peers / variants:** *(none yet)*

## Examples

**Stripe (2011).** Before Stripe, accepting cards online meant a merchant-account application and days of underwriting before a line of code could run. At its public launch in September 2011, Stripe put a runnable sample at the top of its documentation. A developer could paste roughly seven lines of code, use test keys issued the moment they signed up, and watch a test charge clear in the same sitting, with pricing (2.9% plus 30¢) published on the site. "Seven lines" became the company's origin story because it named the gate count, and the count was zero.

**Atlassian (2002–2015).** Atlassian sold Jira from 2002 through an online store at published prices, with no field sales force, so a team lead could put a starter license on a company card without opening a procurement cycle. By its December 2015 IPO filing, the company had passed $300 million in annual revenue with sales and marketing running at roughly a fifth of revenue, while comparable enterprise-software companies commonly spent half or more. That gap is what a decade of zero-approval first contact compounds into.

**Slack (2013–2014).** Slack's preview release in August 2013 drew 8,000 team signups in its first 24 hours, on a product any team member could activate with a work email address. The free tier stored a limited message history but demanded no purchase order and no IT involvement, so Slack routinely entered companies through a single team that simply started using it; the sales conversation, when it came, addressed a customer already dependent on the product. On 31 October 2014, the day Slack announced a $120 million round at a $1.12 billion valuation, it reported 268,000 daily active users and 73,000 paid seats. Most of the people opening Slack every day sat on a free tier no purchasing department had ever signed off on.

**Figma (2016–2022).** Figma opened its browser-based design editor to the public in 2016. A design shared as a URL opened for anyone holding the link, so a reviewer could comment without installing software or filing an IT request, and the free tier let individual designers adopt it inside companies standardized on Adobe tools. Adoption spread person to person along those links until, in September 2022, Adobe agreed to acquire Figma for $20 billion (a deal the companies abandoned in December 2023 under regulatory pressure).

