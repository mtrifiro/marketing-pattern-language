---
pattern: "Pre-Product Problem Interviews"
aliases: ["Pre-Product Problem Interviews", "Evidence Before the Product Exists"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-010 ICP Definition]]"]
smaller: []
source: "Net-new (Source Review - The Four Steps to the Epiphany §6, 2026-08-05)"
created: 2026-08-05
modified: 2026-08-08
tags: [pattern]
---

> *Before you ship, the only instrument you have is a conversation, and most founders use it to pitch.*

> [!tldr] About this pattern
> Before a product exists, disciplined problem interviews are the only instrument for gathering evidence about the buyer; they have to produce something stronger than encouragement when signups, deployments, and product usage do not yet exist. It sits below [[MS-010 ICP Definition]].

> [!warning] Admonition
> Don't run pre-product customer conversations as early sales calls. A pitch buys you encouragement, encouragement reads as validation, and you'll build against a problem nobody confirmed because you never asked a question whose answer could have stopped you.

Almost every sensing instrument this book describes needs a product to already exist. Win-loss reviews need closed deals. Feedback loops need customers. An ICP is normally assembled from the people who signed up, the teams who put something into production, and the company domains behind them, all of which are byproducts of having shipped. A company that hasn't shipped has none of it, and the period before shipping is when the most expensive decisions get made: what to build, who it's for, and what the thing is worth.

What's available instead is a conversation with someone who has the problem. It's a weak instrument compared to usage data and it's the only one there is, so the whole question is whether you use it in a way that can return bad news.

Mostly it isn't used that way. The founder who arranges thirty conversations arrives at each one wanting to know whether the idea is good, and that desire shapes every question asked. The idea gets described. The other person, who is being generous with their time and has no reason to be unkind, says it sounds interesting and they'd probably use something like that. Thirty of those conversations produce a deck slide reading "validated with 30 customers" and no information at all. Rob Fitzpatrick built *The Mom Test* (2013) around exactly this arithmetic: the questions founders ask are ones that even people who love them can answer wrongly, because the questions are about a hypothetical future rather than about a life the person has already lived.

The specific defect is that the answers are predictions. "Would you use this?" and "how much would you pay?" and "is this a problem for you?" all ask someone to forecast their own behaviour in a situation they aren't in, and people are bad at that and also polite. Answers about the past behave differently, because they're checkable and because the person isn't guessing. What did you do the last time this happened. What did it cost you. What did you try. What are you using now, what does it cost, and what's wrong with it. Who else was in the room when you decided. A person who can't answer those questions concretely is telling you the problem isn't real for them, and that's the finding.

Steve Blank made this the first step of a company rather than a research exercise. Customer discovery is step one of the four in *The Four Steps to the Epiphany*, and his instruction for the first meetings is unambiguous: they exist to find out whether your assumptions about the customer's problem are correct, because if those assumptions are wrong it won't matter how good the product is. He tells founders not to try to convince anyone they have the problem, on the grounds that the customer holds the chequebook and should be convincing you. Read him precisely, though. Blank doesn't say build nothing until you've interviewed; he has product development running in parallel from the start, on the founder's initial vision, with the conversations testing whether that vision has a market. The stronger claim, that the asking comes before the building, belongs to Rob Fitzpatrick and to the founders who worked that way.

The cost of skipping this shows up late and reads as something else. A company that never tested the problem ships, sees weak adoption, diagnoses a marketing failure, and spends against a funnel that can't convert because the people in it don't have the problem badly enough to change what they do. The omission is close to universal. Victor Bennett and Aaron Chatterji surveyed 30,409 people across 2015, 2016 and 2017 and found that more than 80 percent of those who had considered starting a business had never sought out a stranger who knew their target market and discussed the idea with them.

## Complications

- **The people who answer your emails are the least representative buyers you have.** Early willingness to talk correlates with enthusiasm for novelty rather than with having the problem, and a schedule filled from your own network is filled with people predisposed to agree with you.
- **The interview has to be able to fail, and you're the person who'd have to admit it.** A conversation designed to be informative is designed to be capable of ending the project, which is a thing to build into the question list rather than to rely on willpower for in the moment.
- **Compliments are information about the conversation.** "That's really interesting" measures how the meeting is going. Nothing about it is a fact about the market, and it feels much better to collect than the facts do.
- **The person with the problem and the person with the budget are frequently different, and only one of them will meet you early.** The practitioner takes the call; the buyer doesn't know you exist yet. An account of the problem gathered entirely from users omits the constraint that decides whether anything gets bought.
- **Interviews establish that a problem exists and can't tell you how many people have it.** They're the wrong instrument for size, and a founder who has heard the same pain thirty times will feel certainty that the sample can't support.

## Recommendations

> [!check] Run the conversations before you build, and hold them to a rule that makes them falsifiable: ask what the person already did, already spent, and already worked around, and count only the answers about the past. An interview that produced no fact you could have been wrong about produced nothing, however encouraging it felt.

The scoreable version is a short list you should be able to complete from your notes for every conversation, without going back to ask. When did this last happen to them, with a date or a frequency. What did it cost, in money, hours, or a consequence they can name. What are they doing about it now, including the spreadsheet, the intern, and the workaround they're slightly embarrassed by. What have they already paid for, or tried and abandoned. Who else would have to agree before anything new got bought. Where you can't fill those in for most of your conversations, you've been pitching rather than interviewing, and the remedy is to stop describing what you're building until the last five minutes.

Set the disconfirming result before you start. Write down, in advance, what you'd have to hear to conclude the problem isn't worth a company, and how many conversations you'll run before deciding. Something like a majority describing the problem as an annoyance they've never spent anything on is a clear enough bar to be uncomfortable, which is the point of writing it down while you can still be honest about it. The interviews are not the exit gate for spending, which is [[GTM-004 Repeatable Sales Motion]] and its paid-order test. These decide something earlier and cheaper, which is whether to build the thing at all.

## Implications

Doing this first changes what the ICP in [[MS-010 ICP Definition]] is made of at the point where it matters most. Instead of a description drafted from conviction and revised later against usage, the first ICP is drawn from named people with a dated account of a problem, which makes it wrong in specific ways you can correct rather than vague in ways you can't. It also produces the raw material for [[MS-009 Buyer Archetypes]] and the first sketch of [[MS-012 Buying Committee]], because a founder who asked who else had to agree has heard the committee described before ever meeting it.

The tension it introduces is a real one about speed. Every conversation is a week not spent building, and the discipline cannot identify in advance which conversations would have changed your mind. Its value is a cheaper place to be wrong, and the argument rests on that comparison rather than on any promise that the interviews will be pleasant or conclusive.

## Related Patterns

- **Above:** [[MS-010 ICP Definition]] (the description these conversations produce the first draft of)
- **Below:** *(none yet)*
- **Peers / variants:** [[MS-009 Buyer Archetypes]] (the recurring types the interviews surface), [[MS-012 Buying Committee]] (the seats a good interview reveals before you meet them), [[MS-002 Market Type Sets the Playbook]] (whether to expect buyers who recognise the problem at all), [[GTM-003 Founder-Led Sales]] (what the founder does once there's a product), [[GTM-004 Repeatable Sales Motion]] (the later, harder gate that money rather than opinion has to clear), [[OPS-002 Win-Loss Discipline]] (the same discipline once deals exist to study)

## Examples

**Scott Cook and two phone books (1982 to 1983).** Before there was a product, a company, or a co-founder, Cook had what he called a market of one: his wife Signe, who hated doing the household bills. In an oral history recorded by the Computer History Museum on 22 July 2019 he describes what he did next. He went to the Palo Alto library, took the phone books for Palo Alto and for Winnetka, Illinois, and started calling people to ask what they actually did in their personal finances, how often they did it, and what they liked and disliked about it. He puts the number at about a hundred calls, and the finding was that his wife wasn't unusual: most people do the bare minimum because they don't enjoy the work and wish it were done. He recruited Tom Proulx at Stanford afterwards; Intuit was founded in 1983. There's a second beat that cuts harder than the first. Cook bought the market-leading personal finance product of the day, found it poor, and went and interviewed its buyers: 65 percent of people in the industry had bought such software and 4 percent were still using it. Those figures are his recollection in an oral history recorded thirty-seven years after the fact rather than an audited record, and the method stands regardless of the second decimal place.

**A randomized trial of the discipline itself (2020, replicated 2024).** Arnaldo Camuffo and colleagues put 116 Italian startups through a randomized controlled trial published in *Management Science* in 2020. Both arms received the same ten training sessions; the treated arm was additionally taught to state its beliefs as hypotheses and test them. The paper's own section on customer interviews is the part that matters here, because it records the difference in practice: control founders asked "Would you use our service?" and collected answers like "Yes, why not?! It seems a great idea," while treated founders asked when the person had last done the thing, whether they knew the provider, and how they had chosen. A larger replication across four trials and 759 firms, published in the *Strategic Management Journal* in 2024, found treated firms earned roughly €7,000 more than control firms, significant at p = .03. The same replication reports that the original paper's finding about pivoting didn't hold up, which is worth knowing before citing the 2020 study on its own.

**The Mom Test rule (Rob Fitzpatrick, 2013).** Fitzpatrick's device is a test you can apply to a question before you ask it: could someone who loves you and wants you to succeed answer this in a way that misleads you? "Do you think this is a good idea" fails the test, and so does "would you buy it." "What are you using now and what does it cost you" passes, because a person who wants to be kind still has to give you a real answer. The rule is useful mainly because it turns interview design into something you can check in advance rather than a skill you're supposed to acquire by doing it badly.
