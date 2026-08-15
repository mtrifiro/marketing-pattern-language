---
pattern: "Buying Committee"
aliases: ["Buying Committee"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-010 ICP Definition]]"]
smaller: ["[[MS-013 Champion, Not Contact]]", "[[MS-014 Practitioner and Purchaser Are Different People]]"]
source: "PDF pp. 81–100 (Phase 1–2, buyer personas: decision-makers vs users)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Every seat at the table can say no, and each is afraid of something different.*

> [!tldr] About this pattern
> A serious purchase is decided by a set of seats with different fears and authority; every seat can refuse, one can sign, and one may be hostile by construction. It sits below [[MS-010 ICP Definition]] and above [[MS-013 Champion, Not Contact]] and [[MS-014 Practitioner and Purchaser Are Different People]].

> [!warning] Admonition
> Don't build the case for the person who returns your calls. The seats you haven't met hold vetoes too, and a deal with one enthusiastic contact and no coverage of the rest is a deal you can't forecast.

A serious B2B decision runs through several people who share the choice and don't share a motive. Robert Miller and Stephen Heiman named the seats in *Strategic Selling* (1985) and called them buying influences: an economic buyer, a technical buyer, a user buyer, and a coach on the inside. What's changed since is that the committee has grown and the veto has spread, because procurement, legal, and security each hold a stop the original four didn't account for. The economic buyer signs, and cares about business outcome and risk and whether this spend is defensible to their own boss. The technical buyer evaluates, can't say yes but can absolutely say no, and cares about fit, security, and whether it breaks anything they own. The end user actually touches the thing, and cares about one question: does this make my day better or worse. As the deal grows, more seats appear at the table, procurement to squeeze the price, legal to redline the contract, security to run the review. Every one of them holds a veto, and only one of them holds the pen.

Sell to one seat and you lose at another. [[MS-014 Practitioner and Purchaser Are Different People]] works the user-and-payer version of that trade in full. The general case is worse, because a deal dies at whichever seat went unattended and there are always more seats than anyone counted. The founder who closed the first few deals by delighting a single engineer meets this the first time a deal freezes at "this looks great, we just need to run it past security." Nobody had been given the security seat, so nobody noticed it was empty.

Steve Blank's map in *The Four Steps to the Epiphany* (2005) adds a seat the others leave out. Alongside end users, influencers, recommenders, the economic buyer and the decision-maker, he lists the saboteur: the person whose headcount, budget or standing your product threatens, who's wedded to the status quo and works against the deal without ever appearing on your call list. Blank opens on the warning: "You won't be looking for them, but they will see you coming." So a committee map made only of people you might persuade is missing the one person with a motive to stop you.

The seats also repel each other's messages. The ROI deck that reassures the CFO bores the engineer into distrust, and the architecture deep-dive that wins the engineer loses the CFO inside a minute. One message can't carry the whole committee, and a message pitched at the average of all of them persuades none. Which seats show up at all is set by [[MS-018 Price Creates the Buyer]], and each of them recurs across your market as one of the [[MS-009 Buyer Archetypes]].

## Complications

- **Many vetoes, one signature.** Every seat can kill the deal and only one can approve it, and they're different people with different fears.
- **The seats are graded on different things.** Each one answers to a different boss and gets measured on a different number, so a change that helps one of them lands as a cost on someone else's ledger.
- **Size multiplies veto points.** Bigger deals summon more seats (procurement, legal, security), so they get slower and more fragile as they grow.
- **A message for one seat repels another.** Proof tuned to the CFO alienates the engineer and back again, so you can't win the committee with a single pitch.
- **Someone at the table wants you to lose.** A better argument doesn't move a seat that's defending something your product takes away, and that seat has every reason to stay invisible until the decision is made.
- **You're absent for the decision.** The committee deliberates without you, and the version of your argument that gets made in that room is whatever someone else remembered of it.

## Recommendations

> [!check] Count the seats that can say no, and score the deal on how many of them you've actually met. The hardest seat is the test: where the person most likely to refuse won't take a meeting, the account isn't qualified, whatever your friendliest contact says.

Work it in this order:

1. **Name the seats this deal actually has,** which [[MS-018 Price Creates the Buyer]] mostly determines: a small deal is one or two people, a large one is an economic buyer plus a technical evaluator plus an end user plus the procurement, legal, and security gatekeepers that scale with the contract.
2. **Then ask who loses if you win.** The seat whose budget, headcount or standing your product displaces belongs on the map with the others, and it's the one seat you map so you can route around it instead of pitching it. Nobody volunteers that name, so ask a friendly seat for it directly.
3. **Prepare the proof each seat needs rather than the proof you enjoy giving:** business outcome and risk mitigation for the economic buyer, architectural fit and a clean security posture for the technical buyer, and a visible improvement to daily work for the user.
4. **Hand the deliberation you'll miss to someone who'll be in it.** Finding and equipping that person is the whole job of [[MS-013 Champion, Not Contact]].

Two of those seats, the one that uses the product and the one that pays for it, diverge far enough that [[MS-014 Practitioner and Purchaser Are Different People]] handles them on its own.

Then run one blunt exercise on the deal in front of you. List every person who can say no, mark the one who can say yes, and write next to each the question that would make them say it. Now look at the blanks. They're almost always security and procurement, the two seats a product-loving founder never thinks to invite, plus the saboteur, who won't appear on any list you build from your own call log.

Use the same list to disqualify. Blank's account of selling E.piphany is that momentum from the groups who liked the company was what carried his team past objections from the groups who didn't, and that shortcutting the order more often than not lost the sale. Run that forward and the hardest seat becomes your qualification gate. Where you can't get the person most likely to refuse into a conversation early, stop spending on the account and work the ones where you can.

Fill each blank with a specific artifact before you need it: a security questionnaire answered in advance, an ROI model the economic buyer can forward, an architecture note the technical buyer can vet, a short business case your advocate can paste into an email. Building these after a seat asks for them is a quarter of delay you chose. Then forecast on how much of the committee you've covered, because the warmth of your friendliest contact only measures how easy that person was to reach.

## Implications

The committee map is the input to the two patterns that follow it. [[MS-013 Champion, Not Contact]] takes the seat you enable, and [[MS-014 Practitioner and Purchaser Are Different People]] takes the two seats that pull hardest against each other. Both assume you already know who's at the table.

Enforce one discipline against the cost, because serving every seat well makes the sale slower and more expensive. Each seat you add is another meeting and another chance to stall, which is why committee-shaped deals push a company toward field-sales economics and away from self-serve. Don't wish the committee smaller. Price and staff for the one you have.

## Related Patterns

- **Above:** [[MS-010 ICP Definition]]
- **Below:** [[MS-013 Champion, Not Contact]], [[MS-014 Practitioner and Purchaser Are Different People]]
- **Peers:** [[MS-018 Price Creates the Buyer]] (the price sets the committee's size), [[MS-009 Buyer Archetypes]] (each seat is an archetype), [[MS-016 Power Law Accounts]] (the committee's most extreme form, in the largest accounts)

## Examples

**A deal that died at security.** I watched an infrastructure company win an engineering team so completely that its logo went on an internal wiki as "the standard." We read that as a sold committee. A single unanswered questionnaire about data residency then froze the deal for a quarter, because nobody had prepared the security seat. The product hadn't changed and the user still loved it. The seat we'd left empty was the one holding the decision, and building its proof on day one is what eventually closed the deal.

**The committee Salesforce had to staff for.** Salesforce announced its Merrill Lynch deployment on 27 February 2007 at 25,000 users. CRM Buyer reported the same day that typical on-demand deployments ran 5,000 to 10,000 seats, and that Dell's and Cisco's had occasionally reached 15,000. No line manager signs at that size. A deal like it convenes an economic buyer, procurement and security at once, each running a separate review on its own clock, and Salesforce had to field solutions engineers for the technical seat and executives for the economic one to answer them in parallel. The seat count tells you what the sale will cost to staff before you start it.

**The gates behind Terraform's free adoption.** HashiCorp's Terraform arrived through ops engineers, who could install it without asking anyone. Converting that adoption into a contract meant clearing seats the engineer didn't control: IT leadership for the budget, then security and compliance review. At the Terraform 1.0 release on 8 June 2021, HashiCorp reported that Terraform Cloud and Terraform Enterprise together were in use at more than 15 percent of the Fortune 500, and that more than 1,200 enterprises were on Terraform Enterprise. Terraform Cloud has carried a free tier since 2019, so the first number counts companies anywhere in that crossing and the second counts the ones who finished it. The install crossed one seat. The contract crossed the rest.

**The committee a capital purchase convenes.** The vendor's own account names who has to say yes. Intuitive Surgical sells the da Vinci surgical system into hospitals, and its 2024 Form 10-K tells investors why the deals take so long. Intuitive's systems, it says, "are major capital items and their purchase generally requires the approval of senior management of hospitals, their parent organizations, purchasing groups, and/or government bodies," and some sales run through competitive bidding or public tender. The surgeon who wants the robot appears nowhere in that sentence, and no purchase happens without one. Intuitive staffs for every seat, and the installed base stood at 9,902 da Vinci systems at the end of 2024. A software vendor describes the same structure in softer words. A medical-device filing has to name it.

