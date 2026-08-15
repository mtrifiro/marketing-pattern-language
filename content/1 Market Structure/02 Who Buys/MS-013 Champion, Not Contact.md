---
pattern: "Champion, Not Contact"
aliases: ["Champion, Not Contact", "Champion Enablement"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-012 Buying Committee]]"]
smaller: []
source: "PDF pp. 61–80 (Phase 1, §6.2 Converting the Developer to a Champion)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *One insider who'll spend their own credibility for you beats a hundred friendly names in your CRM.*

> [!tldr] About this pattern
> A champion is the insider willing to spend personal credibility in rooms the vendor cannot enter; proof and usable language let that credibility advance the purchase after a friendly contact's goodwill runs out. It sits below [[MS-012 Buying Committee]].

> [!warning] Admonition
> Don't file a friendly contact as a champion. A contact who likes you won't fight for you at the hard moments, and mistaking the first for the second is why deals with impressive "engagement" quietly die.

A CRM fills up with contacts: people who took the meeting, downloaded the white paper, nodded through the demo, said generous things on a call. None of that moves a [[MS-012 Buying Committee]]. What moves a committee is one person on the inside who wants you to win badly enough to argue for you when you're not there, spend their own political capital doing it, and attach their reputation to the outcome. Miller and Heiman named that person the Coach in *Strategic Selling* (1985), and MEDDIC, built inside Parametric Technology in the 1990s, made the Champion one of the six things a rep has to establish before a deal counts as qualified. Neither framework tells you how to tell a champion from a friendly contact in week two, which is most of the work. That person is rare, and the difference shows up only at the hard moments: when security raises an objection, when procurement stalls, when a competing priority appears. The friendly contact goes quiet. The champion picks up the argument.

The confusion hides the real state of a deal. Meeting counts and warm sentiment read as progress, so a deal with no internal advocate and no path to a signature looks like one that's advancing. Everyone is "engaged" and nobody is fighting. Deals in that condition end in no-decision, the most common and least legible way B2B deals end, and one that teaches the vendor less than losing to a competitor would.

Seniority pulls the wrong way here. The most senior contact is the one a vendor wants to court, and the person most motivated to champion the product is usually whoever's daily work it most improves, who often can't sign anything. The champion and the economic buyer are frequently different people, and the distance between them is part of what the champion has to cross.

## Complications

- **The room excludes you.** The committee decides without the vendor present, so an inside advocate is the only way your case gets made when it counts.
- **The credibility on the line is theirs.** The moment they endorse an outside tool, their reputation rides on it, and a claim that doesn't survive their manager's questions costs them more than it costs you.
- **Motivation and authority rarely coincide.** The person who most wants you to win is often the user, who can't sign, while the person who signs may not care yet.
- **You can't appoint a champion.** You can create the conditions and supply the tools, but the decision to spend political capital is theirs, and it can't be bought.
- **One champion is a single point of failure.** If your only advocate changes jobs, the deal usually leaves with them.

## Recommendations

> [!check] Equip the insider with the most to gain to carry the case into rooms you can't enter. Count them as a champion only after they take a small costly action unprompted: forwarding a page, introducing another seat, or bringing internal intelligence.

Work it in this order:

1. **Identify the person whose day your product genuinely improves and who has standing with the committee,** and treat enabling them as the core of the sale rather than a nicety.
2. **Hand them a champion enablement kit:** the internal one-pager and short deck they can forward without rewriting, the ROI math they can hand upward, and an honest free-versus-paid comparison so they can tell their boss "we need these specific capabilities, and they're in the paid tier."
3. **Keep the kit honest.** Their credibility is on the line the instant they vouch for you, so one oversold claim that collapses in front of their manager ends the championship and poisons the account. Speak to them plainly, peer to peer, about what the product does and doesn't do; the trust that buys is worth more than any feature you'd have exaggerated.
4. **Close the authority gap.** Because the champion usually can't sign, help them reach the [[MS-012 Buying Committee]], and when the argument is a six-figure one, engage at the executive level yourself to give the champion cover rather than leaving them to carry it alone.
5. **Never rest the whole deal on one person.** Cultivate a second advocate on a different seat, so a single departure doesn't take the deal with it. The champion is the mechanism, and a mechanism with one moving part breaks.

Tell a champion from a contact by behavior under cost rather than warmth in a meeting. A contact says nice things while you're in the room; a champion does work when you're not. Watch for the tells: they forward your one-pager without being asked, they bring you intelligence about the other seats ("legal will care about data residency, get ahead of it"), they pull you into internal conversations, and they spend a little of their own standing to do it. Weigh those signals above any stated intent, and instrument for them rather than for sentiment. When you find someone showing them, invest disproportionately: give them the material that makes them look smart to their boss, rehearse the internal pitch with them, and remove every reason their manager might say no before the meeting where they'll ask. Keep testing the relationship with small asks, an introduction, a quote, a reference call; a champion who won't take a small risk for you now won't take the large one when the deal is on the line. The friendly contact fails these tests quietly, so run them in week two rather than at the finish line.

## Implications

A real champion turns a committee sale from something you push uphill into something an insider pulls through. It's what makes bottom-up motions convert at all, and it feeds the sales-enablement systems of Part II, which exist largely to manufacture and equip champions at scale. It sits inside [[MS-012 Buying Committee]] and beside [[MS-014 Practitioner and Purchaser Are Different People]], since the champion is usually the practitioner reaching toward the purchaser.

Enforce one discipline against capture: a champion's interests and yours aren't identical. They want what helps them, which may not generalize across the market, so a vendor who does everything a single champion asks ends up building for one account instead of the many. Enable the champion generously; let their specific requests inform what you build without dictating it. Turning one account's demand into a general capability is the same move [[MS-016 Power Law Accounts]] calls the generalization maneuver. Cultivate champions deliberately and they become the cheapest and most durable pipeline you own, because a satisfied champion in one account tends to become the reference that opens the next. The way this goes wrong is a quiet tax: a company that collects friendly contacts and files them as champions keeps forecasting deals no one inside is fighting for, and keeps losing them to no-decision without ever learning why. Read the difference months before the close, in whether anyone on the inside is spending their own credibility on your behalf, and forecast the truth once you learn to watch for it.

In bottom-up software, the champion is often a developer who has already adopted the free tool and wants the team to standardize on it, rather than a buyer at all. They need a crisp internal case, honest limits, and the specific paid-tier justification their manager will ask for. Left to improvise, even an enthusiastic developer usually loses to the incumbent's inertia.

## Related Patterns

- **Above:** [[MS-012 Buying Committee]]
- **Below:** *(none yet)*
- **Peers:** [[MS-014 Practitioner and Purchaser Are Different People]] (the champion is usually the user reaching the payer), [[MS-010 ICP Definition]] (champions cluster inside the right accounts), [[MS-016 Power Law Accounts]] (protecting the roadmap from a single powerful champion)

## Examples

**The gap that built trust.** On a deal where a staff engineer was becoming our champion, they asked whether the product handled a specific failover case. It didn't, yet. We could have fudged the capability to keep a forming champion happy. Instead we said plainly that it didn't, told them when it would, and gave them a workaround in the meantime. That honesty is exactly why they went to bat for us a month later when a rival oversold the same capability and got caught. Their credibility was intact because we'd protected it, and they spent it on us.

**The champion outside software.** An outsider supplied the method and an insider carried it. Johns Hopkins and the Michigan Health and Hospital Association held no authority over any hospital when they launched the Keystone ICU project in October 2003. What they had was a five-item checklist for inserting central lines: hand hygiene, full-barrier precautions, chlorhexidine on the skin, avoid the femoral site, pull the lines nobody needs. Each participating unit ran the work through its own improvement team, and each hospital's chief executive partnered with that team, which is the authority gap closed from the inside. Peter Pronovost's group reported the result in the *New England Journal of Medicine* in December 2006: across 103 ICUs, the median rate of catheter-related bloodstream infection fell from 2.7 per 1,000 catheter-days at baseline to zero within three months, and stayed there through 18 months of follow-up. Nobody from Hopkins was in the room when any of it happened.

**The champion who left.** I've also watched the way this breaks. A company had one superb champion inside a marquee account and rested the entire relationship on them. When that person moved to another firm, the deal unwound within two quarters, because no second advocate existed and the new occupant of the seat had no attachment to us.
