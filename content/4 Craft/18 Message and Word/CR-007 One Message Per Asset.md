---
pattern: "One Message Per Asset"
aliases: ["One Message Per Asset"]
altitude: craft
status: draft
domains: [core]
larger: ["[[CR-001 Atomic Value Prop]]"]
smaller: []
source: "Net-new; built from public design guidance and dated product launches."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *A surface that argues three things is remembered for none of them.*

> [!tldr] About this pattern
> A cold reader leaves an asset carrying at most one claim, so each surface gets one idea and one action that can survive the encounter; the value proposition stays whole across surfaces and channels. It sits below [[CR-001 Atomic Value Prop]].

> [!warning] Admonition
> Don't let one page carry every argument you have. A surface with four claims and three buttons hands the reader nothing to hold, and they leave able to repeat none of it and unsure what you wanted.

You can watch this happen in a review meeting. A homepage draft goes up with one headline, and within twenty minutes it has acquired a second claim for the enterprise segment, a third for the developer audience, a band of logos, a security badge, and two competing buttons. Nobody in the room argued for a worse page. Each addition was defensible on its own, requested by someone who owns a real part of the business and who noticed, correctly, that their part was missing. The page that ships is the sum of those defensible requests, and it says nothing.

The cost lands on the reader, who is not in the room. A visitor arrives with a question of their own, gives the page a few seconds, and builds whatever mental model those seconds allow. When the page offers one claim, the model is thin and correct. When it offers five, the reader doesn't merge them into a richer picture. They abandon the attempt and fall back on the nearest familiar category, which is almost always the generic one you were trying to escape. A page that argues for a category-defining product and a cheap alternative and a developer tool and an enterprise platform gets filed as "some kind of software," and the filing outlasts the page.

The same arithmetic runs through every other surface. An email with three calls to action collects fewer clicks in total than the same email with one, because a reader who has to choose has been handed work at exactly the moment you wanted them to move. A slide carrying four bullets carries none of them into the next meeting. An ad naming two benefits buys half the memory for each. Attention isn't a budget you allocate across a page; it's a single narrow channel, and everything you put in it competes with everything else you put in it.

The obvious response makes the problem worse. Faced with a page that isn't converting, teams add. They add a proof point, a second headline, a comparison table, a demo request beside the free trial, a chat widget, a banner. Each addition is a small hedge against the possibility that the reader wanted something the page didn't offer. Together they guarantee the reader wanted something the page didn't offer, because the page no longer offers anything clearly. Coverage is what a team reaches for when it hasn't decided, and a reader experiences an undecided page as an untrustworthy one.

The deeper reason the addition reflex wins is that removal has no advocate. Every claim on a page has a person attached to it who will notice its absence and object. The claim that should come off has nobody arguing for its removal except the reader, who isn't present and who registers the objection by leaving. That asymmetry is structural and operates in every organization regardless of taste or discipline, which is why crowded assets are the default state and a single-message asset is always the result of somebody spending capital to keep it that way.

## Complications

- **Every stakeholder's claim is genuinely true.** The security badge matters, the enterprise proof matters, and the developer audience is real, so each request to add is defensible on its merits while the sum of them is indefensible.
- **Coverage feels like insurance and reads like indecision.** Naming five benefits protects against guessing the reader's need wrong, and it tells the reader at the same time that you don't know which one is yours.
- **One asset is cheaper to make than five.** A single page speaking to four segments costs a quarter of what four pages cost, and the saving is collected in production while the loss is paid in comprehension.
- **Removal has no internal advocate.** The person whose claim comes off the page sits in the building; the reader who benefits does not, so the argument in the room only ever has one side represented.
- **Saying one thing means publishing less than you know.** A team that has spent a year understanding its market holds more true and useful material than any single surface can carry, and this discipline asks them to withhold most of it.
- **The rule is easy to state and hard to hold under deadline.** A campaign with a number to hit will reach for the extra claim, because adding is fast while choosing takes a decision somebody has to own.

## Recommendations

> [!check] Hold every asset to one claim and one action, and test it by handing it cold to someone outside the company for a single read: if they can't say back what it claimed and what you wanted them to do, the asset is carrying more than one message.

The test is the whole mechanism, because the number of messages on a page is invisible from inside. A group that has argued about a page for three weeks reads its own intent into it, and can't tell whether the page communicates or merely reminds them what they meant. A stranger reading once has no such access, which makes them the only instrument that measures the thing you care about. Give them one pass at normal speed, take the asset away, and ask two questions: what does this company do for you, and what does the page want you to do next. Two clean answers means one message. Hesitation on either means the asset is split.

Three properties let an asset survive that test.

1. **The claim is one sentence, derived from the value prop rather than competing with it.** Every asset is a variation on the sentence [[CR-001 Atomic Value Prop]] owns, aimed at one audience at one moment. A second claim on the page becomes a second product in the reader's model.
2. **There's one action, and it's visually unambiguous.** A page can repeat its single action three times down the scroll; it cannot offer two different actions and expect either to be taken. Which action to choose belongs to [[CR-023 Call to Conversation, Not Conversion]]; the rule here is that the count is one.
3. **Everything else supports the claim rather than adding to it.** Proof, logos, screenshots and numbers earn their place by making the single claim more believable, which is the work [[CR-008 Specificity Signals Truth]] and [[CR-014 Social Proof Architecture]] govern. An element that introduces a new idea is a second message wearing the costume of support.

Where a claim genuinely has to reach four audiences, the answer is four assets rather than one crowded one. That costs more, and the cost is the price of being understood by any of them. [[CR-005 Persona Messaging]] owns how one claim gets recast per buyer without becoming four different claims.

## Implications

An organization holding this rule gets a cheaper argument rather than a harder one. The question in the review meeting turns from "what else should we say?" into "what is this page for?", and the second question has an answer a single person can own. Assets get shorter, which makes them faster to produce and easier to test, and testing starts to mean something, because a page with one variable produces a readable result while a page with six produces noise; [[CR-025 Experiment Design]] owns that mechanism.

The rule also surfaces disagreement early. A team that can't settle the one claim for a page usually hasn't settled its value prop, and the crowded page was hiding that. Better to find it in a homepage review than in a quarter of flat pipeline. The first move is to take your current homepage, hand it to someone who doesn't work in your industry, give them one read, then write down exactly what they say you do.

## Related Patterns

- **Above:** [[CR-001 Atomic Value Prop]] (the single idea every asset is a variation on)
- **Below:** *(none yet)*
- **Peers:** [[CR-008 Specificity Signals Truth]] (whether the one claim is believable), [[CR-005 Persona Messaging]] (the claim recast per buyer rather than stacked on one page), [[CR-023 Call to Conversation, Not Conversion]] (which single action to ask for), [[CR-018 Homepage Before-After-Why]] (the highest-traffic instance of this rule), [[GTM-011 Content as Lead Filter]] (an asset that argues three things filters for none of them)

## Examples

**GOV.UK published one thing per page as a design rule (2015).** Britain's Government Digital Service publishes its design decisions in the open, and on 3 July 2015 Tim Paul set out the "one thing per page" principle on the GDS design notes blog: start by splitting all your questions onto separate pages. The rationale isn't about aesthetics. Low-confidence users find single-question pages easier, the pages work on small screens, and they handle errors, branches, loops and saved progress better than a long combined form does. That last point carries the most weight. A page carrying one question can tell you precisely what went wrong and where; a page carrying nine can only tell you that something did. The organization applying the rule serves the entire adult population of a country, including the least confident users on the worst connections, which is the hardest audience available and the one that makes the discipline visible.

**Dropbox led with one claim and one action (2008).** Drew Houston's launch screencast argued exactly one thing: your files follow you everywhere, automatically, with no thought required. It said nothing about encryption, storage architecture, pricing tiers, or the sync engine's conflict resolution, all of which were real and all of which an audience of Digg and Hacker News readers would have followed. By Houston's own account of the launch, the beta waiting list stood near 5,000 before the video and near 75,000 the day after. The video's restraint is the instructive part rather than the number. A technical founder with a genuinely clever system chose to describe none of the cleverness and to show only the consequence.

**Apple sold the iPod on one consequence (23 October 2001).** The original iPod carried a 5GB, 1.8-inch hard drive in a 6.5-ounce case, a scroll wheel, and a FireWire port that filled the drive far faster than the USB of the day. Apple's own announcement led with none of it. It led with 1,000 songs in your pocket, and the specification sheet arrived afterward for anyone who wanted it. Every fact held back from that headline was true, impressive and hard-won, and each one would have cost the sentence its single meaning. The launch is worth studying because the suppressed material was strong, which is the condition under which this discipline is hardest to hold and matters most.
