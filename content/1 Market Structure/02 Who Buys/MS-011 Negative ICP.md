---
pattern: "Negative ICP"
aliases: ["Negative ICP", "Negative Persona"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-010 ICP Definition]]"]
smaller: ["[[MS-034 No Is the Most Profitable Word]]"]
source: "PDF pp. 61–100 (Phase 1, §6.4 Defining and Embracing Negative Personas)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Write down who you refuse to serve, or your funnel will decide for you.*

> [!tldr] About this pattern
> A written negative ICP ends the recurring argument over attractive revenue that would consume the focus, roadmap, and service capacity reserved for the ideal customer. The team gets standing permission to refuse it. It sits below [[MS-010 ICP Definition]] and above [[MS-034 No Is the Most Profitable Word]].

> [!warning] Admonition
> Don't leave the anti-customer unwritten. Mismatched buyers arrive on their own, eat the attention meant for the right ones, and bend the product toward themselves one accepted deal at a time.

A defined ICP tells a team who to chase. It does nothing to stop the mismatched deals that arrive unbidden, and they always arrive: the hobbyist who'll never buy, the prospect whose one strange requirement would fork the roadmap, the account too small to support at the price you need. Each one looks like revenue in the moment, so someone says yes. The cost shows up later and in disguise. It shows up as a support queue full of password resets from users who pay nothing, as a sales team burning cycles on tire-kickers, as a roadmap slowly colonized by the loudest low-value voices because they ask for the most. None of that appears as a line item; it appears as "we're busy," which is why it goes unexamined for years.

The wrong customer drains real resources and competes for the same finite attention as the right one. Every hour an engineer spends on an edge case for a free user is an hour not spent on the security feature a real prospect needs. Every deal a rep nurtures outside the ICP is a deal they didn't nurture inside it. The damage is opportunity cost, and opportunity cost stays invisible until someone names the thing being refused.

One distinction sits underneath all of this: "not a customer" and "not valuable" are separate judgments. A free user who will never pay can still be an advocate who brings you three who will. What's at stake is where a company spends its scarce commercial attention. (Price is often the cleanest filter that does this before a human is involved, which is owned by [[MS-018 Price Creates the Buyer]]; the discipline of refusing mismatched revenue outright is [[MS-034 No Is the Most Profitable Word]].)

## Complications

- **Yes feels like progress.** Accepting a deal feels productive and refusing one feels like lost revenue, even when the yes costs more than it earns.
- **Attention is the scarce resource.** A mismatched customer consumes the same finite engineering, sales, and support attention as an ideal one, and often more.
- **The loud bend the roadmap.** Low-value users who ask for the most will drag the product toward themselves, and nothing in a normal week stops them.
- **Un-written rules drift to yes.** Without an explicit anti-profile, every rep and PM re-decides case by case, and the aggregate answer creeps toward accepting everyone.
- **Refusing isn't discarding.** Some non-buyers are genuinely valuable as advocates or community, so the rule has to separate "don't sell to" from "don't value."

## Recommendations

> [!check] Write the Negative ICP as explicit disqualification criteria and give the team standing permission to use them. The policy is live when a salesperson can disqualify a mismatched deal on the first call without seeking an exception.

Work it in this order:

1. **Name the profiles you won't serve, and write a short dossier for each,** the inverse of your one-sentence ICP: who they are, why they look tempting, and why they cost more than they pay. Write it with the specificity you'd give the ICP itself. Freddie is a solo open-source enthusiast; motivation is tinkering, budget is zero, and he'll file twenty issues before deciding your paid tier is a sellout. Do the same at the account level, naming the company whose compliance regime would consume your roadmap and the segment whose willingness to pay can't cover the cost to serve it.
2. **Encode the anti-profile as disqualification criteria in the CRM,** so a mismatched lead is marked and routed out early instead of nurtured for a quarter by a hopeful rep.
3. **Point paid acquisition away from the channels and keywords that reliably deliver the anti-customer,** even when they're cheap; a cheap lead that never converts is the most expensive kind.
4. **Give support a tiered response** that serves free and mismatched users from the documentation and the community rather than the priority queue.
5. **Write the humane handling next to each negative profile.** Mark which profiles are still worth keeping happy cheaply, the advocate and the future buyer who's too small today, and which are pure cost. The enthusiast who'll never pay may earn a warm free tier and an occasional shout-out, because their advocacy is real value even though their revenue never will be.

Treat the document as a thermostat on commercial attention: it regulates where attention flows rather than walling anyone off. Done well, the Negative ICP is what turns [[MS-034 No Is the Most Profitable Word]] from a hard, case-by-case fight into a policy everyone already agreed to. Wire it into the systems where deals actually flow rather than stating it in a deck, and watch your support costs fall and your win rate rise together, because both were being dragged down by the same mismatched accounts. Read one sign as proof it's working, uncomfortable and correct: your salespeople start disqualifying deals on the first call, and thank you for the permission to do it.

## Implications

A written Negative ICP protects the three things the anti-customer erodes: the roadmap, the support capacity, and the sales team's time. Turn disqualification into a rule rather than an argument, and the funnel speeds up because mismatches leave early. Feed the list into [[MS-034 No Is the Most Profitable Word]], and compose it with [[MS-016 Power Law Accounts]], where deprioritizing the long tail of small accounts is the explicit move. Keep it always inside [[MS-010 ICP Definition]], because the two are one decision seen from opposite sides.

Enforce the discipline against two ways it fails: calibration and drift. Draw the anti-profile too broadly and you starve the top of the funnel by refusing people who'd have converted; draw it too narrowly and it changes nothing. Markets move too, so the account that's too small to serve today may be exactly right in two years once it grows; a Negative ICP left un-revisited will eventually reject good customers out of habit. Revisit it on the same cadence as the ICP. Read one signal as the clearest sign the list is missing: a team that feels perpetually busy and strangely unproductive, its support queue and its roadmap both crowded with work no ideal customer ever asked for. Write the anti-customer down and turn that invisible drain into a decision someone can make on purpose; it's as much a tool for focus as the ICP it mirrors.

## Related Patterns

- **Above:** [[MS-010 ICP Definition]]
- **Below:** [[MS-034 No Is the Most Profitable Word]] (the enforcement arm: refusing the mismatched revenue this list names)
- **Peers:** [[MS-018 Price Creates the Buyer]] (price as the automatic filter), [[MS-016 Power Law Accounts]] (deprioritizing the long tail)

## Examples

**PostHog refusing the marketer.** A product-analytics tool fits marketing teams, so serving them looks like free upside. PostHog wrote marketers out anyway, deciding not to target "less technical or non-core teams," because serving them would have thinned the product's appeal to the engineers at the core. Its handbook states the rule in public and in writing: features should be usable by the marketing team, and PostHog won't build features specifically for them. The company published the profile and the reasoning in January 2024. The refusal was a decision about where to spend attention, and it's a large part of why the product stayed sharp.

**GEICO's whole business was a refusal.** An insurer can write anybody who applies, so every application looks like revenue. Leo and Lillian Goodwin chartered the Government Employees Insurance Company on 1 September 1936 with $25,000 of their own money and $75,000 from an investor, and sold to one group, federal employees and certain military ranks, whom they judged a better risk than the general driving public. The refusal was the product. A cleaner pool plus no agent commission meant a policy that cost $36 or $37 elsewhere could be written at $30 and still earn money. Year one produced 3,700 policies and twelve employees, and the Goodwins moved to Washington in 1937 because that's where the profile lived.

**The $49 tool's freelancers.** The analytics company I advised had, in effect, an unwritten Negative ICP it was violating every day; its $49 plan actively recruited the freelancers and tiny agencies who consumed the most support. Naming that segment as the anti-customer and removing the plan that attracted them did more for the business than any acquisition campaign. The price had been recruiting the very people the Negative ICP should have excluded, which is [[MS-018 Price Creates the Buyer]] running in reverse.

**The dossier that saved a roadmap.** One vocal free user files feature request after feature request, and engineering treats the queue as the roadmap. On one team I worked with, that user held engineering hostage. We wrote the user up as a named negative profile and circulated it, which gave the team permission to stop treating those requests as the roadmap. Nothing changed about the product except which requests counted, and velocity on the things paying customers wanted roughly doubled.

