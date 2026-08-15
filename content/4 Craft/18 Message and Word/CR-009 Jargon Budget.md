---
pattern: "Jargon Budget"
aliases: ["Jargon Budget"]
altitude: craft
status: draft
domains: [core]
larger: ["[[CR-001 Atomic Value Prop]]"]
smaller: []
source: "Net-new; built from public cases."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Every specialist word is a withdrawal from an account the reader can overdraw; spend it where it buys precision or belonging, and nowhere else.*

> [!tldr] About this pattern
> Every specialist term withdraws from a finite reader account. The available budget depends on the audience and asset depth, and each withdrawal has to buy precision or belonging before attention runs out. It sits below [[CR-001 Atomic Value Prop]].

> [!warning] Admonition
> Don't spend specialist terms as if they were free. A page filled with correct words nobody counted ends up accurate and unread by the one buyer it was written for.

Your own engineer, writing for a buyer, knows exactly what "idempotent," "control plane," and "reconciliation loop" mean, each one is the right word, so all three go on the page. Your buyer, a VP two steps removed from the code, hits the first unfamiliar term and does one of two things: stops reading, or keeps reading while quietly deciding this vendor can't talk to people like her. Either way the sale is over before your value proposition arrives. The words were accurate. The account was overdrawn.

You will forget what it's like not to know. Steven Pinker calls this the curse of knowledge in *The Sense of Style* (2014): once you understand something, you can't reconstruct the state of not understanding it, so you write for the version of the reader who already agrees with you. Chip and Dan Heath make the same point in *Made to Stick* (2007) with the "tapper and listener" study, where tappers who drummed a song's rhythm wildly overestimated how many listeners could name the tune. Tapping out "eBPF-based observability for Kubernetes workloads," you hear a symphony; your buyer hears knocking. The jargon that feels like signal to the writer is noise to the reader who hasn't earned it. Ann Handley gives the working correction in *Everybody Writes* (2014). She treats jargon as the enemy of clarity and tells writers to reread a draft from the reader's seat, asking what that person came to learn and where they'd stumble. Her test for any specialist term is whether it would survive being explained to someone outside the room where it was coined.

The overcorrection fails too. A page aimed at practitioners with the specialist vocabulary stripped out sounds like a tourist wrote it. A security buyer who reads "we keep the bad guys out" where "we enforce least-privilege access" belongs concludes you don't actually work in security. Used once, in front of the right reader, the right term is a credential; it proves membership in the tribe faster than any claim about years of experience. Jargon carries information (the precise thing a plain phrase can't say) and it carries identity (I am one of you). Both are worth paying for. The mistake is paying without a budget.

Each asset sets its own budget. A homepage that has to greet a CFO, a practitioner, and a journalist in the same three seconds affords maybe one specialist term before it starts shedding readers. A reference doc read by engineers who chose to be there affords dozens, because those readers arrive fluent and would resent having the terms translated for them. Same company, same product, two assets, two different accounts. A company that runs one budget for everything ships the API doc's vocabulary on the homepage, and the homepage's baby talk in the docs.

The most expensive category is the jargon that spends the budget and buys nothing, the undifferentiated buzzword every competitor also uses. When "platform," "solution," "enterprise-grade," and "industry-leading" appear on your page and on all four competitors' pages, the words no longer distinguish, inform, or signal belonging. They only consume attention. That's full price for a term that returns zero, paid while a reader was deciding whether to keep going.

## Complications

- **Precision versus access.** A term of art carries an exact meaning no plain phrase captures, but only for readers who already hold the definition; every reader who doesn't stalls.
- **Belonging versus exclusion.** The tribe's vocabulary proves you're a member and builds instant credibility with insiders, while it shuts out everyone at the edge who hasn't been initiated.
- **The curse of knowledge.** You understand the product, so you can't feel the reader who doesn't, and your natural draft always overspends without ever sounding overspent to you.
- **Depth versus reach.** A deep technical asset needs more specialist terms to stay credible to experts; a broad-reach asset needs fewer to survive first contact with a mixed audience, and most assets are asked to do both.
- **Signal decay.** A term that once distinguished you erodes into wallpaper once competitors adopt it, so today's precise word is tomorrow's dead buzzword.
- **Speed versus editing.** Jargon is the fast draft, what you reach for first; rationing it is slow, deliberate work that gets cut when the deadline is close.

## Recommendations

> [!check] Set an explicit jargon budget for every asset according to its audience and depth. A specialist term survives only if it buys needed precision or audience membership; a term that buys neither is cut.

Set the budget before you write, from two questions: who reads this, and how deep does it go. Give a homepage for a mixed buying committee a budget of one or two specialist terms, chosen because they do positioning work no plain word can. Give a practitioner tutorial a generous budget, because its readers are fluent and precision is the whole point. Treat the budget as a ceiling you feel rather than a word count you enforce mechanically, and let it force a choice about which few terms are worth the reader's effort.

Then run each specialist term through one test. Ask what the term buys, and act on the answer:

1. **It names a real thing precisely and the reader already knows the word.** Keep it. That's precision, paid for.
2. **The reader doesn't know it but is exactly the insider who'll respect you for using it.** Keep it, and define it in-line the first time if the asset can afford the sentence.
3. **It's a category buzzword every competitor also uses.** Cut it and say the concrete thing instead; hand off to [[CR-008 Specificity Signals Truth]], because the specific detail almost always outperforms the abstract term it replaces.
4. **It's there to make you sound sophisticated.** Cut it without mercy. That's the withdrawal that empties the account for nothing.

The test holds across every medium, because it turns on the reader's attention and trust, which no channel's format changes. A term of art is a small demand: understand this, or feel excluded by it. Some readers happily pay, because the word saves them time or confirms you're one of them; others can't pay, and every unpayable term is a reader lost. Before you write a word, decide how much you can ask of the specific person on the other end, and refuse to ask for more.

## Implications

Set the budget and you can finally match an asset's language to its reader, which is what makes [[CR-005 Persona Messaging]] executable at the level of individual words rather than whole messages. Once you've cut the buzzword, reach for [[CR-008 Specificity Signals Truth]] to fill the space with a concrete detail; the two disciplines pull the same direction. Guard [[CR-001 Atomic Value Prop]] the same way, because the one idea an asset exists to land can't survive being buried under ten terms of art competing for the same attention. And enforce [[CR-007 One Message Per Asset]] alongside it: a small jargon budget and a single message are the same refusal, so don't make the reader carry more than one hard thing at a time.

The budget is a judgment call, and you can get it wrong in both directions. Set it too low and you condescend to experts who wanted the real vocabulary; set it too high and you lose the buyer who was your actual target. Re-audit it as the market shifts, because a term that was precise and distinguishing this year becomes a dead category word next year once everyone adopts it. Hold the budget to this asset, this audience, this month. Balance the account fresh every time, and let no asset inherit another's ledger.

## Related Patterns

- **Above:** [[CR-001 Atomic Value Prop]] (the single idea a term of art should sharpen rather than smother)
- **Below:** *(none yet)*
- **Peers:** [[CR-008 Specificity Signals Truth]] (cut the buzzword, then earn the space back with a concrete detail), [[CR-007 One Message Per Asset]] (one message and a small jargon budget are the same refusal: don't make the reader carry two hard things)

## Examples

**Basecamp keeps the homepage account near zero (2016–2018).** When 37signals relaunched as Basecamp and shipped Basecamp 3 in 2016, the homepage said things like "Basecamp is the way to organize projects, internal communications, and client work." The page avoided the standard platform and solution vocabulary. Jason Fried and David Heinemeier Hansson had spent years arguing, in *Rework* (2010) and *It Doesn't Have to Be Crazy at Work* (2018), that business jargon is a way to hide, and the marketing practiced what the books preached. Basecamp's buyer is a small-business owner or team lead who isn't a software specialist, so the affordable budget really is close to zero, and Basecamp spent it that way on purpose. The plainness reads as confidence, a deliberate choice from a team that can obviously write technically when the audience calls for it.

**Stripe runs two budgets for two assets (2011 onward).** Stripe's homepage has long led with a nearly jargon-free line about payments infrastructure for the internet, aimed at a founder or executive who wants the outcome rather than the vocabulary. Click one level into the API docs and the budget expands enormously: "idempotency keys," "webhooks," "payment intents," "SetupIntents" appear without apology, because the reader who reached the docs is a developer who chose to be there and would be insulted by translation. Same company, same product, two assets, two accounts, each sized to its reader. Stripe never makes the homepage reader learn the docs' vocabulary, and never makes the docs reader wait through the homepage's plain talk; its reputation for developer-grade clarity comes partly from getting that split right.

**The homepage I made worse before I made it better (2018).** I once helped rewrite an infrastructure company's homepage. The first draft the team loved read, roughly, "cloud-native, AI-driven orchestration platform for hybrid workloads at enterprise scale." Every word was defensible to the engineers who wrote it. In a hallway test with three target buyers, not one could tell me what the company did; two used the word "generic." We were paying full price for six specialist terms and buying nothing, because every competitor's homepage said the same six words. We cut it to one plain sentence about running the same application in any datacenter, kept exactly one term of art the buyer actually used, and moved the rest of the vocabulary onto a technical page where the audience could afford it. Time to "I get it" in the next round of buyer tests dropped from never to a few seconds. The product stayed the same while we set a budget the homepage could afford and stopped overdrawing it.
