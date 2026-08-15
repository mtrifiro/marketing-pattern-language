---
pattern: "Specificity Signals Truth"
aliases: ["Specificity Signals Truth"]
altitude: craft
status: draft
domains: [core]
larger: ["[[CR-001 Atomic Value Prop]]"]
smaller: []
source: "Net-new; built from Hopkins' Scientific Advertising, published operating data, and a dated regulatory case."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *A number a buyer can check reads as honest; a superlative nobody can check reads as noise.*

> [!tldr] About this pattern
> A checkable number carries credibility an adjective cannot buy; it gives a stranger a concrete test for the claim and leaves the writer's adjective out of the verdict. It sits below [[CR-001 Atomic Value Prop]].

> [!warning] Admonition
> Don't reach for a superlative when you could give a number. "Industry-leading performance" costs the reader nothing to disbelieve, and it's the exact sentence your competitor is also publishing this morning.

Open three competitors' homepages in three tabs and read only the headlines. They promise enterprise-grade security, industry-leading performance, effortless integration, and a platform that scales with your business. Swap the logos and nothing breaks. Each company spent real money arriving at language that describes all of them equally well, which means it distinguishes none of them and informs nobody. The words are unfalsifiable rather than false, and a reader treats an unfalsifiable claim the way they treat weather on the radio.

The reason a vague claim fails is that it costs nothing to make. A buyer knows, without articulating it, that any company can write "industry-leading" regardless of whether it leads anything, so the phrase carries no information about the company that wrote it. A specific claim works differently. "Our drives failed at 1.36 percent annualized last year" can be wrong, and being wrong about it is expensive, which is precisely why publishing it is evidence. The buyer is reading the willingness to be checked rather than the number itself, and that willingness is the signal.

The vagueness usually arrives through a defensible process rather than laziness. Legal removes the number because a number is a commitment. Product removes it because the figure varies by configuration and the honest answer is "it depends." Marketing removes it because the specific version wins one segment and loses another, while the vague version offends nobody. Everyone in that chain acted responsibly, and the sentence that survives has been sanded until there's nothing left to grip. A company can arrive at completely generic copy without a single person ever choosing to be generic.

The cost compounds in a way that's hard to see from inside. A vague claim teaches the reader that this page won't repay attention, so the next paragraph gets skimmed and the third gets skipped. A buyer who has read four unfalsifiable sentences has learned a rule about your writing and applies it to your genuinely strong material further down the page. The specific proof you did include arrives at a reader who has already stopped reading closely.

There's a second failure that looks like the cure. Precision applied to the wrong quantity buys nothing: a number the reader can't connect to their own situation is decoration in the costume of evidence. "Over 4,000 integrations" answers a question nobody asked and invites the reader to wonder which of the 4,000 is theirs. The useful specific is the one that resolves the doubt actually forming in the reader's head at that moment, which means specificity and placement are the same problem approached from two sides.

Claude Hopkins wrote the principle down in *Scientific Advertising* (1923), arguing that generalities roll off the reader while concrete facts stick, and that the advertiser who says "washed with live steam" beats the advertiser who says "pure." A century of copy has restated him, and every generation of marketing rediscovers the same finding, which suggests the pull toward the safe adjective is stronger than the argument against it.

## Complications

- **The specific claim can be wrong, and the vague one can't.** A number invites correction, a superlative can't be falsified, so the safer sentence for the company is the weaker one for the reader.
- **Legal, product and marketing each have a reason to sand it down.** A figure is a commitment, it varies by configuration, and the exact version fits one segment better than another; three responsible edits produce one meaningless sentence.
- **Numbers date, adjectives don't.** "Deploys in under four minutes" needs maintaining as the product changes, while "fast deployment" stays true forever and says nothing forever.
- **The reader can't check most claims, and behaves as though they might.** Almost nobody calls a reference or reruns a benchmark, yet the checkability itself is what's being read, so the effect survives the absence of checking.
- **Precision on the wrong quantity is still noise.** A number that doesn't touch the reader's actual doubt performs no better than the adjective it replaced and costs more to produce.
- **Specificity narrows the audience it fits.** A claim tuned to one configuration and one buyer excludes the readers it doesn't describe, which is a real loss traded for a real gain.

## Recommendations

> [!check] Replace every claim a competitor could publish verbatim with one that would be false if you didn't do the thing, and hold each asset to at least one detail a reader could independently check: a number, a named limit, a reproducible result, or a dated public record.

The test is the swap test, and it takes seconds. Put a competitor's name in place of yours in the sentence. If the sentence stays true, it was never about you and it can come out. "Enterprise-grade security" survives the swap. "SOC 2 Type II, audited annually since 2019, report available under NDA" does not.

What makes a detail do real work rather than decorate:

1. **It's falsifiable.** The claim is the kind of thing that could be shown to be wrong, and someone motivated could show it. That property is the whole mechanism; a claim nobody could refute carries no evidence of anything.
2. **It answers the doubt the reader is having.** The specific belongs where the objection fires, which is the placement problem [[CR-014 Social Proof Architecture]] owns. A precise number attached to the wrong question is a decoration.
3. **It survives contact with the unflattering case.** A company willing to publish where its product doesn't fit, its rate limit, its unsupported configuration, its slower path, buys credibility for the claims where it does fit. That's the same mechanism [[CR-028 Comparison Page]] runs on.
4. **Someone owns keeping it current.** A number is a maintenance obligation. A page carrying a two-year-old figure and no date is worse than one carrying an adjective, because now the reader has caught you.

The discipline scales down as well as up. Where you can't publish a number, publish a name, a date, a limit, or a mechanism: which auditor, which quarter, which configuration, what happens at the boundary. What you're producing is the impression of a company that expects to be checked, and that impression comes from the texture of the writing rather than from any one figure in it.

## Implications

A company that writes this way sounds different from its market before it has proved anything, because most of the market is writing sentences that survive the swap test. The effect compounds with [[CR-007 One Message Per Asset]]: one claim, made concretely, occupies the space four vague ones were fighting over.

The rule also reaches backward into operations. A team that commits to publishing checkable claims discovers which numbers it doesn't actually measure, and a marketing constraint turns into an instrumentation project. That's usually the more valuable half. The first move is to run the swap test across your homepage, counting the sentences that stay true with a competitor's name in them, then rewrite the three worst.

## Related Patterns

- **Above:** [[CR-001 Atomic Value Prop]] (the sentence this makes believable)
- **Below:** *(none yet)*
- **Peers:** [[CR-007 One Message Per Asset]] (how many claims a surface carries), [[CR-014 Social Proof Architecture]] (where the proof sits relative to the doubt), [[CR-028 Comparison Page]] (specificity applied to a rival, including where they win), [[CR-016 ROI Narrative]] (the number the buyer has to defend internally), [[CR-009 Jargon Budget]] (precision and insider vocabulary are different things), [[CR-003 Naming Things]] (why a concrete name reads as more credible than an abstract one)

## Examples

**Schlitz described what every brewer already did (1907).** Claude Hopkins toured the Schlitz brewery in Milwaukee and came back with the process: bottles washed with live steam, plate-glass rooms where the beer was cooled, wells driven thousands of feet for water. Then he printed it. The competitive fact is that nearly every large brewer of the era did the same things; Schlitz was the one that said so in detail, and Hopkins reported the brand moving from fifth place to a tie for first within about six months. Nothing about the product changed. The company simply stopped saying "pure" and started saying what "pure" consisted of, which converted a claim any brewer could make into a description only a brewer who had done the work would think to write.

**Backblaze publishes the failures (2013 onward).** The cloud backup company began collecting drive reliability data on 10 April 2013 and published its first public report that November, and it has released updated Drive Stats every quarter since, covering hundreds of thousands of drives. The reports name the manufacturer, the exact model number, the drive count, the drive-days, and the annualized failure rate, including the models that performed badly and the ones Backblaze stopped buying. A storage company publishing hardware failure rates is volunteering the least flattering number in its industry, quarter after quarter, under its own name. The data set is now cited by people evaluating drives rather than evaluating Backblaze, which is what a credibility asset looks like once it has compounded.

**Volkswagen shows the boundary (2015).** Specificity signals truth only where the specific thing is true, and a checkable false claim is punished far more severely than a vague one would have been. Volkswagen marketed diesel vehicles on precise, testable emissions performance, and on 18 September 2015 the US Environmental Protection Agency issued a notice of violation finding that the cars carried software designed to detect test conditions and reduce emissions controls outside them. Volkswagen later acknowledged that around 11 million vehicles worldwide contained the software. A company making vague environmental claims would have faced criticism; a company making precise ones that its own engineering contradicted faced regulators, criminal proceedings and multi-billion-dollar settlements. The asymmetry is the point of the pattern seen from the other side: the reason a checkable claim carries weight is that being caught is expensive, and a company that publishes numbers is accepting that exposure on purpose.
