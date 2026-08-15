---
pattern: "ROI Narrative"
aliases: ["ROI Narrative"]
altitude: craft
status: draft
domains: [core]
larger: ["[[CR-011 Buyer's Journey Narrative]]"]
smaller: []
source: "Manuscript: …pages-101-120.md (value prop: ROI/TCO/payback). Quarry, then update."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *A buyer trusts a number they helped compute and discounts one you brought on a slide.*

> [!tldr] About this pattern
> An ROI narrative turns the buyer's own inputs into return, total cost, and payback. The result becomes a line item the finance team can defend, with a clock attached. It sits below [[CR-011 Buyer's Journey Narrative]].

> [!warning] Admonition
> Don't ship the average return you computed. To the person signing it's a claim about someone else's company, and it dies in the finance review your champion carried it into.

Late-stage B2B deals run on the same slide: "Customers see 200% ROI in the first year." It's a confident number, and it moves nobody. The champion nods, the deck advances, and the person signing has no way to connect that 200% to their own labor costs, their own headcount, their own budget cycle. A claim about someone else's company carries the credibility of a stranger's success story, which is to say almost none.

The problem shows up in three recognizable forms. The first is the unearned headline: a big percentage with no arithmetic behind it, so the buyer can't see how you got there and assumes you inflated it. The larger the number, the less it's believed, because a sophisticated buyer knows a 500% claim usually means the vendor picked the best case and rounded up. A headline nobody can decompose is a headline nobody credits. The second is the license-only pitch, where the value proposition compares your subscription fee to the benefit and quietly ignores everything else the buyer has to spend: implementation, integration, training, the internal project team, the change management. A buyer who has bought software before knows the sticker is a fraction of what they'll actually pay, so a pitch that ignores the rest reads as naive or dishonest. The third is the timeless return: an ROI figure with no clock on it. Finance asks whether an investment pays back and when, because a return that arrives in year one and a return that arrives in year four are different risk profiles even at the same magnitude. A figure with no date attached leaves that question open.

Underneath all three sits the same thing: the buyer never authored the math. Your champion walks into the CFO's office with your slide and gets asked a question they can't answer: "Where did these numbers come from?" If the answer is "the vendor's website," the business case collapses and the champion looks credulous for having believed it. What survives that room is an ROI stated in the customer's terms, using their labor costs and their revenue figures, so the projection reads as their business case rather than your pitch.

The best enterprise vendors already spend money on this problem. Salesforce, Slack, and dozens of others commission third-party Total Economic Impact studies from Forrester precisely because they know a buyer will discount a vendor-authored number and credit an independently modeled one. They build ROI calculators that ask the buyer to enter their own team size and their own hourly rates, because a figure the buyer typed the inputs to is a figure the buyer will defend. In both cases the vendor gives up authorship of the number, which was the only thing making it credible.

An ROI narrative also needs a baseline, and in a genuinely new market the buyer doesn't have one. Steve Blank's argument in *The Four Steps to the Epiphany* (2005) is that where customers couldn't do the thing at all before, there's no current spend to divide into, no incumbent cost to subtract, and no line item the saving comes out of, so the early sale runs on whether the buyer believes your account of the future. Build the ROI case where the buyer already spends money on the problem. Where they don't, an ROI slide invites a comparison that makes your product look like a cost with nothing on the other side.

## Complications

- **Magnitude fights credibility.** A bigger ROI claim is more impressive and less believed; past a threshold, every additional point of promised return subtracts trust.
- **Generic is fast, specific is fundable.** A stock number ships in every deck with no work, while a buyer-specific model takes discovery and effort, and only the specific one survives a finance review.
- **License price fights total cost.** The subscription fee is the easy number to compare against; the honest comparison includes implementation, training, and internal labor, and it always shrinks your headline return.
- **Return fights payback.** A large lifetime return and a fast payback pull in different directions, and finance weighs risk through payback timing, so a modest return that lands this fiscal year can beat a huge one that lands in year three.
- **Vendor math fights buyer math.** You can compute the model faster and cleaner than the buyer can, yet a number the buyer helped compute is worth more to the buyer than a more accurate number you computed alone.
- **Simplicity fights completeness.** A clean one-line payback claim is memorable while a full three-year model with net present value is defensible, and the champion needs the first to open the door and the second to close it.

## Recommendations

> [!check] Build the return, the total cost of ownership, and the payback period from the buyer's own numbers, and tell the result as a before-and-after story of their profit-and-loss statement, measured against the payback threshold their finance team already uses.

Win on authorship rather than arithmetic. The math is ordinary: return is quantified benefit minus total cost, over total cost; payback is the point where cumulative benefit crosses cumulative cost. What makes the narrative work is whose inputs feed it. So run these moves:

1. **Feed the model with the buyer's own inputs.** Start from a number the buyer stated in discovery, their team's hours on the task you eliminate, their error rate, their current tooling spend, and compute forward, so every figure traces back to something the buyer said out loud. When the champion carries that model to finance, they defend their own operation re-costed, from figures the company itself supplied.
2. **Name the total cost honestly.** The credibility you spend admitting implementation and training buys back more than it costs. A buyer who watches you account for the $20K onboarding and the internal project time will trust the $600K benefit you claim on the other side of the ledger.
3. **Cost the status quo, which is rarely zero.** Set the return against what the buyer already spends: the manual process has a headcount, the incumbent tool has downtime, doing nothing has a carrying cost. Compare two total costs of ownership, yours and the buyer's current path, and show the gap.
4. **Put a clock on it.** State the payback period in the buyer's fiscal terms, because a budget owner thinks in "does this pay back inside the year I'm approving." A payback under their internal hurdle turns the decision from a bet into a formality.
5. **Arm the champion for both rooms.** Reserve the full three-year model with net present value for the finance conversation, and give the champion a single defensible line for the hallway: "pays for itself in nine months on your own numbers," a line that travels because the buyer helped build it.

This is [[CR-013 Data-Driven Storytelling]] pointed at one specific balance sheet, and its credibility comes from the same source as [[CR-008 Specificity Signals Truth]]: the reader can check it. Before you present, run the test: trace every figure in the model back to something the buyer told you, and cut any number you can't source to them.

## Implications

A buyer-authored ROI narrative gives the champion the one asset internal selling requires: a business case the CFO can't dismiss as vendor spin, because its inputs are the company's own. Use it to close the [[CR-011 Buyer's Journey Narrative]] by converting the story into a fundable line item, and point it straight at objection handling, since a "too expensive" objection is really a "the return isn't clear" objection, and a specific payback figure answers it. Don't let the finished model disappear at signature; hand it to the people who track delivery, and read the payback you sold against the payback you deliver, cohort by cohort ([[OPS-022 Cohort Analysis as Decision-Making]]). A promise the delivered numbers keep missing is [[MS-036 Unit Economics as Market Truth]] reporting that the gap is structural.

Now hold the discipline the new tension demands, because it's uncomfortable: the more honest your total-cost accounting, the smaller your headline number gets. A vendor willing to ignore implementation cost can always claim a bigger return than one who counts it. Hold the honest number anyway. It pays off over time, when the deals you win on a defensible model retain and expand while the ones won on inflated math churn at renewal, having never hit the return the buyer was promised. Tell the ROI narrative that survives contact with the customer's actual results, which is usually the more modest one.

## Related Patterns

- **Above:** [[CR-011 Buyer's Journey Narrative]]
- **Below:** *(none yet)*
- **Peers:** [[CR-013 Data-Driven Storytelling]] (how evidence becomes narrative; the ROI narrative is that discipline aimed at one balance sheet), [[OPS-022 Cohort Analysis as Decision-Making]] (Part III; where the promised payback gets read against the delivered one), [[MS-036 Unit Economics as Market Truth]] (Part I; the verdict when delivered returns keep missing the promise)

## Examples

**Slack's Forrester TEI (2020).** Slack could have asserted its own value. Instead it commissioned Forrester to build a Total Economic Impact study for a composite organization assembled from customer interviews and a survey of Slack users. The published figure for technical teams was a 338% three-year ROI on a net present value of $5.33 million, with the deployment paying for itself in under six months, and the study itemized where the return came from and what the organization spent to get it, including onboarding and the internal cost of adoption. The craft is in who authored the number and how it's decomposed: a third party, working from named inputs, showing its arithmetic. A Slack seller no longer had to say "trust us"; they handed the buyer a model the buyer could re-run with their own team size. The 338% is memorable, and the payback line is what a budget owner repeats, because a return that lands inside two quarters removes the risk that makes finance hesitate.

**Mesosphere, re-costing "build versus buy."** We compared our license to zero at first, since the open-source pieces a buyer could assemble themselves were free. We lost every time to "we'll just build it." So we stopped leading with our license and re-cost the buyer's alternative in the buyer's own numbers. How many senior engineers they'd assign, at their fully loaded salary, for how many quarters, plus the opportunity cost of those engineers not shipping product. We'd walk in and say, in effect, "you told us you'd staff this with four platform engineers for a year; that's roughly $1M of salary before it runs in production, and our total cost of ownership over three years is lower than your first year of build." The number was theirs, reflected back. Comparing two total costs of ownership rather than a price to a benefit is what turned the conversation, and it's the same lesson [[MS-018 Price Creates the Buyer]] carries at the pricing altitude.

**The Empire State Building's retrofit, costed off the building's own meters (2009).** Tony Malkin opened the building's own energy data to Rocky Mountain Institute, Johnson Controls, Jones Lang LaSalle and the Clinton Climate Initiative, and let them build the model out of it. The plan announced in April 2009 promised a 38% cut in energy use and $4.4 million a year, put the incremental payback at about three years, and named what the owner had to spend to get there, inside a capital program of more than $500 million. Every input came from the building's own consumption data, so the owner could carry the arithmetic to his own board without a vendor standing behind it. Then the delivered numbers arrived: Rocky Mountain Institute reported in 2012 that measured savings in the first year after the core retrofit beat the guarantee by 5%. The promise and its audit both ran on the buyer's own numbers, and there's no software anywhere in the case.

**The ROI calculator that asked the right question.** A late-stage analytics vendor I advised had a slide claiming "typical customers see 250% ROI," and it converted nothing. We replaced the slide with a short calculator that asked three things the buyer already knew, their analyst headcount, their average hourly cost, and the hours a week those analysts spent on manual reporting. The tool did no magic; it multiplied the buyer's own inputs, showed the hours reclaimed and their dollar value, then set that against the subscription plus a stated onboarding cost. Buyers who ran it arrived at their own return, usually lower than the old 250% claim and far more believed, and they arrived carrying a number they'd typed the inputs to. Close rates in the finance stage improved because the champion walked into the CFO's office with the company's own math. The weaker, buyer-authored number outsold the stronger, vendor-authored one.
