---
pattern: "Developer Advocacy"
aliases: ["Developer Advocacy", "Send One of Their Own"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[GTM-023 Public API Flywheel]]", "[[GTM-021 Practitioner-First GTM]]"]
smaller: []
source: "PDF pp. 1–40 raw (Developer Advocacy / DevRel)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A skeptical practitioner audience trusts one of their own; hire one and let them speak.*

> [!tldr] About this pattern
> Developer advocacy carries a technical message through a practitioner the audience recognizes as one of its own; peer credibility gets a hearing that a company logo cannot. Its direct measures are audience trust and practitioner success, while pipeline remains downstream; it sits below [[GTM-023 Public API Flywheel]] and [[GTM-021 Practitioner-First GTM]].

> [!warning] Admonition
> Don't send anyone the audience can read as go-to-market. A developer or an SRE carries a trained reflex against selling; every ambassador you'd normally send trips it the moment they open their mouth, and the audience stops listening.

The people you most need to reach are the ones least reachable by your usual staff. A sales rep gets a polite deflection. A product marketer gets discounted before the second sentence. A founder whose appearance reads as a pitch meets the same skeptical filter. The credibility gap sits in who is allowed to speak, and no amount of better writing closes it.

The cost is the exact market you're trying to build. A practitioner-first product depends on individual practitioners trying the thing, succeeding with it, and telling their peers. None of that starts if the audience won't grant you a hearing. Adoption stalls at the first conversation, the product stays invisible inside the communities where its buyers live, and the reach you've built goes unused because no trusted voice carries anything through it.

The obvious responses each deepen the hole. A sales team trained to "speak developer" comes out fluent in the vocabulary and transparent in the intent, which the audience reads as a costume. Sponsorships and booth space put the logo in the room without putting a credible person in it. More marketing at higher volume raises the very signal the audience filters against. The disqualifying trait is the affiliation itself, so none of the people already on the payroll gets through.

## Complications

- **Peer credibility outranks any credential.** A skeptical audience extends trust to someone who has done the work and carries the community's scars, and withholds it from anyone it reads as an outsider selling in.
- **Affiliation with go-to-market is disqualifying on contact.** The audience's marketing detector fires on the role before the message even registers, so the same true statement lands differently from a salesperson than from a recognized engineer.
- **A credible advocate is scarce and hard to manufacture.** The role needs genuine hands-on depth plus the ability to teach and listen in public, a combination often found only by hiring from the community itself.
- **The advocate's incentives are visible to the audience.** Practitioners sense when the person in front of them is working a quota, and the peer relationship reclassifies as a sales call the moment they do.
- **Advocacy compounds slowly and reads as a cost center.** Standing accumulates over conferences, tutorials, and issue threads across months, while finance sees travel and salary with no attributable pipeline.
- **The value is diffuse and hard to attribute.** The work surfaces later as self-serve adoption and warm inbound that no dashboard traces to a specific talk.

## Recommendations

> [!check] Hire a credible practitioner, often from the community itself, and let them engage the technical audience peer-to-peer as a genuine member of it, measured on the audience's trust and success rather than on pipeline, so the person carrying your message is someone the audience already counts as one of their own.

Give the role its real job, which is helping practitioners succeed and earning standing while doing it. Put the advocate on all four pieces of that work:

1. **Travel to where the audience gathers and speak as a peer.** Go to the conferences the audience attends, such as KubeCon, and take the stage as one of them.
2. **Write tutorials the audience can use.** Show how to integrate the product with the other tools practitioners actually run, so the material earns its own place in their day.
3. **Triage the issues.** Work the GitHub issues so the community feels heard and unblocked.
4. **Act as the project's chief evangelist inside the rooms where reputation is set.** Carry the project's name where standing is decided.

Each activity is useful to a practitioner on its own terms, and usefulness is what buys the standing. The advocate helps developers get working on the surface you expose, the deep treatment of which belongs to [[GTM-023 Public API Flywheel]], and produces the teaching material whose substance and depth belong to [[GTM-010 Technical Content Marketing]]. Hold the peer relationship here; hand off the content and the API success.

Let peer credibility do what no pitch can, and don't reach for a pitch. The advocate runs a live demonstration of membership rather than a claim of it: when a recognized engineer answers a hard question at a conference, the audience watches someone with the same scars solve the same problems, and the trust that follows is trust in a person the community already respects. That standing gives you a legitimate voice inside conversations you could not otherwise enter, and it seeds the peer-to-peer vouching a practitioner-first market runs on. Treat this as the foundational infrastructure a [[GTM-021 Practitioner-First GTM]] requires; without it the posture has no one to embody it, and it's also the venue where [[GTM-010 Technical Content Marketing]] gets nurtured and grown.

Protect the function from the one move that kills it. Treating developer advocates as sales engineers for the pipeline destroys the function, and the company's credibility with it, faster than anything else you can do. Mary Thengvall's *The Business Value of Developer Relations* (Apress, 2018), the first book on the function, argues that its worth comes from the health of the technical community around a product, which needs measures of its own. Measure advocates on leads or quota and their incentives change, the audience senses it, and the peer relationship collapses back into the sales call it was built to avoid. So make the discipline structural: keep the advocate out of the pipeline reporting line, measure the role on community trust, adoption, and practitioner success, and accept that its value shows up diffusely and late. Run an advocate who is quietly a salesperson and you're worse off than with no advocate at all, because the audience will conclude you were disguising a pitch all along, and that conclusion travels.

## Implications

A working advocacy function turns your owned reach into something the audience will actually receive. It puts a trusted human voice on those properties, it makes [[GTM-010 Technical Content Marketing]] land because a credible person stands behind the teaching, and it feeds [[GTM-013 Authority Amplification]] by giving you recognized practitioners whose standing can be promoted further. Practitioners who succeed with an advocate's help become the peers who vouch for the product to their own communities, which is the self-sustaining adoption a practitioner-first motion is built to produce. Use the way in that was closed to you, and let the trust compound as the advocate's standing grows.

Enforce two disciplines against a role that is expensive, slow, and structurally easy to corrupt. Its value is diffuse and arrives late, its costs are immediate and legible, and the constant pressure to attach it to pipeline is exactly the pressure that would destroy it, so hold the line on incentives. Because the people who can do the job at all are scarce, and because anchoring your community standing in a single charismatic advocate creates a key-person risk that their departure would take the audience with them, spread advocacy across more than one credible person. Treat both as a permanent discipline rather than a setup step.

## Related Patterns

- **Above:** [[GTM-023 Public API Flywheel]] (the surface the advocate helps developers succeed on), [[GTM-021 Practitioner-First GTM]] (the posture that makes this function mandatory)
- **Below:** *(none yet)*
- **Peers / variants:** [[GTM-010 Technical Content Marketing]] (the teaching content advocates produce), [[GTM-013 Authority Amplification]] (promoting the internal experts' credibility)

## Examples

**Twilio's early developer relations (2008–2015).** The company sent engineers who could code live on stage to the meetups and conferences where developers gathered, and helped them ship working integrations. Twilio's advocates earned standing by being useful to practitioners, and that standing carried the company into a developer community that would have discounted a sales rep.

**Stripe's practitioner-led growth (2011–present).** Stripe put people in front of developers who spoke to them as peers, answered hard payments questions in public, and helped engineers succeed on the API first. The trust those advocates earned is what let the company's message travel through a skeptical audience at all.

**Vercel's developer-advocacy motion (2020–present) and hiring from the community.** Vercel has run an advocacy-driven motion since its early years, with recognized practitioners engaging the front-end community peer-to-peer through talks, tutorials, and open GitHub engagement. It points at the standard first hire too: bring on your most active community contributor as your first developer advocate, and convert someone the audience already trusts into the person who speaks for the company, so the credibility is inherited rather than manufactured.

