---
pattern: "Buyer's Journey Narrative"
aliases: ["Buyer's Journey Narrative"]
altitude: craft
status: draft
domains: [core]
larger: []
smaller: ["[[CR-012 Teach the Buyer to Buy]]", "[[CR-013 Data-Driven Storytelling]]", "[[CR-016 ROI Narrative]]", "[[CR-014 Social Proof Architecture]]"]
source: "Manuscript: …pages-121-140.md (buyer journey). Quarry, then update."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Nobody wakes up wanting your product; they wake up with a problem they can't yet name, and your job is to tell them the rest of the story in order.*

> [!tldr] About this pattern
> A buyer's journey narrative turns many assets into one ordered story. Each piece answers the question at its stage and advances the buyer to the next. It sits above [[CR-012 Teach the Buyer to Buy]], [[CR-013 Data-Driven Storytelling]], [[CR-016 ROI Narrative]], and [[CR-014 Social Proof Architecture]].

> [!warning] Admonition
> Don't assemble a stack of disconnected assets and call it a campaign. Every asset lands on a person at a particular stage of readiness, and the case study that closes a deal in month three gets ignored in week one.

A buyer never experiences the pile of assets a marketing team sees (a blog post here, a webinar there, a case study, a demo); they experience a sequence, and pieces that don't tell one continuous story in the order the buyer travels arrive on someone who can't yet use them.

An unmanaged funnel does this to a real person. Someone realizes their sales forecasts keep missing, so they search "why is my sales forecast always wrong." They land on a page that opens with "The #1 AI Forecasting Platform, Book a Demo." That's the last chapter of a book whose first chapter they haven't read. They don't yet believe the problem is solvable, they can't yet name the category, and they've never met you. The pitch is aimed three stages ahead of where they're standing. They bounce, and the team concludes the ad "didn't convert," when the story was told out of order.

The stages are well documented and nobody's original idea. Most demand teams run the same three: Awareness (the buyer names a problem), Consideration (the buyer explores approaches), Decision (the buyer validates and buys). The lineage runs back to the AIDA sequence that Elias St. Elmo Lewis sketched for advertisers around 1898, reached its modern B2B form through the SiriusDecisions demand waterfall in 2006, and became the default vocabulary through HubSpot's inbound framework after that. Dave Kellogg frames the same movement as carrying a person from "I have a problem" to "I trust this can solve it" to "I'm ready." The stages aren't the insight; every practitioner knows them. Most teams use them as a reporting taxonomy for the dashboard, and few treat them as the plot of a story somebody is responsible for writing.

Amateur work shows up in two forms. The first is the pitch-too-early problem above: leading every asset with the product, so the top of the funnel reads like the bottom. The second is subtler and more common. The pieces are individually fine (the awareness blog is genuinely useful, the case study is well made, the ROI page is honest) but nothing connects them. The blog never points forward to the guide, the guide never sets up the case study, the case study never leads into the demo. Each asset restarts the relationship from zero. Your buyer has to reassemble the argument alone, and most won't. What looks like a "leaky funnel" in the analytics is usually a story with no throughline, and the assets take the blame for it.

The order matters, and the evidence is behavioral. A buyer in the awareness stage is asking "is this problem even worth solving, and how do others solve it?" A page that answers with "our product is the best" has answered a question they haven't reached yet; savvy B2B readers detect the thinly veiled brochure and leave. The same person, three weeks later in the consideration stage, is asking "which approach is right and can I trust these people?" and now wants exactly the proof that arrived too soon. The asset stayed the same and the buyer's readiness moved.

## Complications

- **The buyer's question changes at every stage; your product story stays the same.** What they need in awareness ("you have a real, solvable problem") contradicts what closes them in decision ("here's the proof and the price"), so no single message serves the whole arc.
- **Continuity versus modularity.** Each asset has to stand alone (people enter mid-story from search, referral, or an ad) yet hand off to the next piece.
- **Education versus urgency.** Teaching a buyer patiently through the early arc builds trust; the pipeline goals and the quarter want them rushed to the demo. A buyer pushed too hard stops believing the story, and one taught too slowly stalls in the pipeline anyway.
- **The map versus the territory.** The clean three-stage funnel is a model; real buyers loop, skip, stall, and re-enter, often with a committee at different stages at once.
- **Author versus aggregate.** A story needs one owner holding the throughline; demand-gen machinery rewards many people each optimizing their own asset in isolation, which produces a pile of assets with no plot running through them.
- **The buyer is the protagonist.** The arc only works if the buyer sees their own transformation in it, and the constant pull is to cast the vendor as the hero.

## Recommendations

> [!check] Author the whole buyer's journey as one continuous narrative, cast the buyer as the protagonist, and make each asset answer the exact question the buyer is asking at that stage while setting up the next question, so the pieces read as chapters instead of a pile.

Treat the arc as a plot with the buyer as the hero, the casting Donald Miller argues for in *Building a StoryBrand* (2017), where the customer is the hero and the company is the guide who hands them a plan. Miller applies that to a single page of copy; the harder version is holding the casting across months and a dozen assets a buyer meets out of order. Write backward from the commitment you want. Commitment sits at the end, and it turns believable only if the state just before it (trust in a specific vendor) was earned, which was only possible if the state before that (belief that the problem is solvable and worth solving) was established first. Work each stage as a question the buyer is asking and a next question you're trying to make them ask:

1. **The unaware buyer asks "is anything wrong?"** Get them asking "how do others fix this?"
2. **The problem-aware buyer asks "which approach?"** Get them asking "can I trust these particular people?"
3. **The vendor-aware buyer asks "is this the right, safe decision?"** Get them asking "how do I get this approved?"

Write each asset for the current question, and end it by opening the next one. That forward pull is what turns pieces into chapters.

Hand each stretch of the arc to a pattern nested inside this one, and keep only the throughline that connects them. Early in the arc, most buyers have never bought a thing like this, so teach the buying process itself; that stretch is [[CR-012 Teach the Buyer to Buy]]. Through the middle, build the spine from your own original evidence, because numbers a buyer can't get anywhere else carry the argument across stages; that's [[CR-013 Data-Driven Storytelling]], which also supplies the single-customer study that shows one account's transformation concretely. Place each piece of proof beside the doubt it answers, the work [[CR-014 Social Proof Architecture]] does. Near commitment, close with the buyer's own economics told as a story of payback and risk, which is [[CR-016 ROI Narrative]]. Then deliver the chapters on the surfaces you already run: a scheduled email sequence gives you the rhythm that walks a buyer from one chapter to the next over weeks, and a live session earns its place when one hour has to compress several stages at once.

Keep the narrative honest with two rules. Write each asset to stand alone and to point forward, because entry is non-linear (a buyer can arrive at chapter four from a search result) and a good chapter still makes sense while leaving a hook. And speak the truth for the specific buyer at each stage: the arc a CFO travels differs from the one an engineer travels, so lean on [[CR-005 Persona Messaging]] and draw the objections you preempt from [[CR-006 Objection-Handling Narratives]]. The arc is the skeleton; put the persona and the proof on it as muscle.

## Implications

An authored journey turns a collection of marketing surfaces into a machine with a direction. Give the demand engine of [[14 The Engine Room]] a script to run, and give every send a reason instead of a calendar slot to fill. Map your pieces to stages and the gaps in the plot appear as blank chapters, usually the handoff between education and proof; fill those gaps first. Set the sequence for the patterns nested under this one, so [[CR-012 Teach the Buyer to Buy]], [[CR-013 Data-Driven Storytelling]], [[CR-014 Social Proof Architecture]], and [[CR-016 ROI Narrative]] each know which stretch of story they own.

Now enforce the discipline against the buyer who won't read the story in order. Real buying committees loop and stall; a champion may be at decision while their CFO is still at awareness, so deliver the linear narrative as a branching one, with entry points at every chapter and a way to re-tell an earlier chapter to a stakeholder who just arrived. The arc is a promise: if the story you told in awareness (the problem, the stakes, the transformation) doesn't match what the product delivers, the journey ends in churn rather than commitment. Author the narrative well, and don't author it dishonestly, because doing it well raises the cost of the lie.

## Related Patterns

- **Above:** *(none yet)*
- **Below:** [[CR-012 Teach the Buyer to Buy]] (the early stretch: teach the buying process), [[CR-013 Data-Driven Storytelling]] (the middle spine: original evidence, including the single-customer study), [[CR-016 ROI Narrative]] (the closing chapter: the buyer's own economics), [[CR-014 Social Proof Architecture]] (proof placed where the doubt fires)
- **Peers:** [[CR-005 Persona Messaging]] (each buyer travels a different arc), [[14 The Engine Room]] (Part III; the machine that runs the story)

## Examples

**Impossible Foods walked a skeptic from "fake meat" to the meat aisle (2016–2020).** Impossible Foods refused to pitch a plant-based burger cold to a buyer who had never wanted one, and authored the arc instead. The awareness chapter was scientific, the story that meat tastes like meat because of one molecule, heme, and that Impossible had learned to make it from plants; it answered "is there a real problem here" (the environmental cost of cattle) and "is this solvable" without asking anyone to buy. The consideration chapter was proof by taste: the burger launched inside chef David Chang's Momofuku Nishi in New York in 2016, so the first evidence a buyer got was a respected chef serving it rather than an ad claiming it. The decision chapter met the buyer where they already shopped and ate: the Impossible Whopper at Burger King in 2019, then grocery shelves in 2019 and 2020. Each stage answered the question the buyer was actually asking (what is this, does it taste right, can I get it easily) and set up the next. The concrete lab-and-taste-test proof belongs to [[CR-008 Specificity Signals Truth]]; what to copy here is the ordering, a category built by telling a hostile buyer the chapters in sequence instead of leading with "buy our patty."

**Nike Run Club turns a non-runner into a committed one (2006–present).** Nike delivers the journey through a product. It began with Nike+iPod in 2006 and became the Nike Run Club app, and the plot runs in order: the awareness chapter says "if you have a body, you're an athlete," lowering the entry barrier so a non-runner can cast themselves as the protagonist. The consideration chapter is the first guided run, a coached beginner session that proves "I can actually do this." The commitment chapter is the streak, the milestones, and the shared achievements that convert a curious downloader into someone who identifies as a runner and buys the shoes to match. Nike avoids handing a beginner a marathon plan on day one, and authors the transformation as a sequence, so the emotional arc from "I'm not an athlete" to "I am" carries a person from unaware to committed one earned step at a time.

**Selling a category nobody had a budget for (Vapor IO, edge computing, 2017–2019).** At Vapor IO we faced the hardest version of this: the buyer didn't know the category existed, so there was no "consideration" stage to compete in yet. Leading with the product would have meant talking to an empty room. We wrote the arc backward from commitment. The early chapters were pure education about the problem, why latency and data gravity would force compute out of the central cloud toward the edge, delivered as talks and research rather than sales decks, which is the [[CR-012 Teach the Buyer to Buy]] stretch doing its work. Only once a buyer accepted that the problem was real and coming did the middle chapters introduce approaches and proof, and only then did the closing chapter make it about their deployment and their economics. When you skip the early chapters and open with the demo, the buyer is simply early in a story you forgot to tell.

