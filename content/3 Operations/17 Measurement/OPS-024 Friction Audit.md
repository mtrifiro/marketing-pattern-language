---
pattern: "Friction Audit"
aliases: ["Friction Audit"]
altitude: operations
status: draft
domains: [core]
larger: ["[[OPS-020 Metrics That Change Behavior]]"]
smaller: []
source: "Net-new; built from Nielsen's usability research and documented customer-observation programmes."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *Analytics tell you where they left; only walking it yourself tells you why.*

> [!tldr] About this pattern
> Analytics locate the point where buyers leave; a friction audit walks the same route as a stranger and supplies the felt explanation hidden behind that location. It sits below [[OPS-020 Metrics That Change Behavior]].

> [!warning] Admonition
> Don't diagnose a drop-off from the dashboard. The chart tells you which step lost people and says nothing about what happened there, and the fix a team invents without going and looking is usually aimed at the wrong thing.

A funnel report shows sixty percent of signups abandoning at the second step. The meeting that follows generates four theories: the form is too long, the value isn't clear, the page is slow, the email arrives too late. Each theory has an advocate, each is plausible, and the team picks one, usually the cheapest to act on, and ships a change. Sometimes the number moves. Nobody learns why, so the next drop-off produces the same meeting.

What the dashboard supplies is a location. What nobody in the room has is the experience of arriving at that step as someone who doesn't already know the answer. Everyone present has an account, an internal login, a bookmark that skips three pages, and a mental model of the product that makes the confusing screen legible. They are structurally incapable of feeling the friction they're discussing, and the longer they've worked there the more incapable they are.

The specific snags this practice finds are rarely the ones a team would have guessed. A verification email lands in spam for one common mail provider. A required field rejects a legitimate format without saying so. The password rule is stated after the password is rejected. A step works on desktop and traps the user on mobile. A support link opens a form that asks for an account number the user doesn't have yet. None of these show up as anything but a number on a chart, and none of them would be found by reasoning about the chart, because they're accidents rather than design decisions.

The reason this stays undone is that it feels unserious next to analysis. Sitting down with a fresh browser and a throwaway email address to sign up for your own product looks like a small, manual, unscalable thing to do in a week that also contains a dashboard build. It's also the only source of a certain class of finding, and its unscalability is overstated. Jakob Nielsen's long-standing argument, set out for Nielsen Norman Group readers in March 2000, is that a small number of observed users, about five, surfaces the large majority of usability problems, and that running many small tests beats one large one.

There's a second failure to guard against, which is auditing the path you designed rather than the path buyers take. Real buyers arrive from a search result to a page nobody considers part of onboarding, on a phone, mid-task, having already read two competitor comparisons. An audit that starts at the homepage and proceeds in the intended order tests a journey nobody makes.

## Complications

- **Everyone who could run the audit is disqualified by knowing the product.** Familiarity is exactly the thing that makes the snag invisible, and it can't be set aside by trying.
- **The dashboard locates and doesn't explain.** A drop-off number is genuinely useful for pointing, and it contains no information about cause, so a team that has one feels informed while being unable to act.
- **The findings are unglamorous.** A spam-filtered verification email and a badly worded validation error don't feel like strategic work, and they're frequently worth more than the redesign.
- **Manual walking doesn't scale, and the scalable alternatives answer a different question.** Session recordings and analytics cover everyone shallowly; walking it covers one path deeply, and neither substitutes for the other.
- **The real entry points aren't the designed ones.** Buyers arrive mid-journey from search, on phones, already partly informed, and an audit that follows the intended sequence misses that entirely.
- **Not all friction should go.** Some resistance qualifies buyers or protects the business, so the audit produces a list of candidates rather than a list of removals.

## Recommendations

> [!check] Walk the full buyer path as a stranger on a fixed schedule, at least quarterly, using a clean device, a new identity and no internal access, and treat the audit as failed if it produces no findings: a run that surfaces nothing means the walker knew too much rather than that the path is clean.

That last clause matters more than it looks. A friction audit returning a clean result is nearly always evidence about the auditor rather than about the funnel, and teams that don't state it in advance quietly conclude they're in good shape.

What makes a run produce real findings:

1. **A genuinely cold start.** New browser profile, new email address, no internal accounts, no bookmarks, and where possible a person who hasn't seen the product. Nielsen's point about five users is the licence to keep the sample small; the constraint that matters is that they're unfamiliar rather than numerous.
2. **Entry from where buyers actually enter.** Start at a search result, an ad, a shared link, a phone, the comparison page. The path from the homepage is one path among several and usually not the common one.
3. **Everything gets recorded as it's felt, including the small irritations.** Record the first hesitation along with the eventual failure. Hesitation is where the number will eventually move.
4. **Findings are triaged against intent before removal.** Some of what you find is deliberate qualification, which [[CR-022 Friction as Qualification]] owns. The audit's job is to make every piece of friction a choice rather than an accident.

Run it on a schedule rather than in response to a bad number, because the value is in catching the accidental snag before it shows up in a quarter's conversion rate.

## Implications

A standing audit changes what a drop-off conversation is. The team arrives with a described experience rather than four theories, and the fix is usually specific, cheap and unarguable. It also builds an institutional memory of where the path is fragile, which makes the next release's regressions easier to spot.

The practice has a second effect on the people who run it. An organization where senior people periodically sign up for their own product as strangers develops a different relationship with its own funnel, and the small humiliations of that exercise do more for prioritization than a dashboard review. The first move is to book ninety minutes this week, open a clean browser, start from a search result rather than your homepage, and write down every point at which you hesitate.

## Related Patterns

- **Above:** [[OPS-020 Metrics That Change Behavior]] (what numbers do to the behaviour they measure)
- **Below:** *(none yet)*
- **Peers:** [[GTM-007 Frictionless Onboarding]] (the path most audits examine), [[CR-024 Form as Filter]] (the single most common source of findings), [[CR-022 Friction as Qualification]] (the resistance you decide to keep), [[OPS-003 Feedback Before Scale]] (why observation precedes automation), [[OPS-002 Win-Loss Discipline]] (the same discipline applied after the deal rather than during the signup)

## Examples

**Intuit built observation into the job (Follow Me Home, 1989 onward).** Scott Cook's original practice was to wait in a shop until someone bought Intuit's software, then ask whether he could come to their home and watch them use it. The company formalized it as the Follow Me Home programme, reinstated in 1989 and extended over the years so that employees across the company go and observe customers in their own environment, typically for thirty to ninety minutes. The reasoning behind it is precisely the reasoning behind this pattern: customers can't reliably reconstruct their own confusion in an interview or a survey afterward, so the only way to learn what happened is to be there when it happens. The practice is now decades old, which suggests it survives contact with the operational pressure that usually kills this kind of work.

**Nielsen made the small sample defensible (2000).** Jakob Nielsen's argument, published for Nielsen Norman Group readers in March 2000 and grounded in earlier modelling with Thomas Landauer, is that observing about five users surfaces the large majority of usability problems in an interface, and that a series of small tests beats a single large one. The finding matters here because the most common objection to a friction audit is that it isn't statistically meaningful. It's a different instrument from the funnel report, aimed at finding specific defects rather than at estimating rates, and the small sample is what makes it cheap enough to run repeatedly.

**Airbnb's founders went and looked (2009).** In its early period the company's growth was flat in New York, and the founders travelled there to meet hosts in person, stay in the listings, and photograph the properties themselves. What they found was a specific, unglamorous defect that no dashboard would have named: the listing photographs were bad, so the listings didn't convert. The fix was manual and didn't scale, and it worked. The case is worth keeping because the finding was invisible in aggregate data and obvious within an hour of arriving, which is the characteristic signature of the class of problem this practice exists to catch.
