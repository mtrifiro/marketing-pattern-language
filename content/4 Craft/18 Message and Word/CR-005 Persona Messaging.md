---
pattern: "Persona Messaging"
aliases: ["Persona Messaging"]
altitude: craft
status: draft
domains: [core]
larger: ["[[MS-009 Buyer Archetypes]]", "[[CR-001 Atomic Value Prop]]"]
smaller: []
source: "Net-new; built from public product lines that address several buyer types at once."
created: 2026-08-03
modified: 2026-08-08
tags: [pattern]
---

> *Same claim, different first sentence: change what you lead with per buyer, and change nothing about what's true.*

> [!tldr] About this pattern
> Persona messaging gives each recurring buyer type a version that feels written for them while one product truth stays fixed. The lead consequence, vocabulary, and proof are the only permitted changes; [[MS-009 Buyer Archetypes]] supplies the recurring types, and [[CR-001 Atomic Value Prop]] supplies the fixed claim.

> [!warning] Admonition
> Don't hand every buyer the same paragraph and don't write each one a different promise. The first bores the practitioner and frightens the executive; the second means your company is quietly selling four products it can only build one of.

A single message aimed at a buying group lands on people with incompatible fears. The engineer evaluating a database wants to know what happens under load, whether the failure behaviour is documented, and whether they can try it without a conversation. The VP who signs wants to know what it costs over three years, who else at their scale is running it, and what happens to their career if it breaks. Give them one paragraph and it's tuned for neither: too abstract for the engineer to trust, too technical for the executive to act on.

The reflex fix is to write separate messages, and the reflex fix has its own failure. Given permission to speak to each audience, a marketing team drifts, because each audience rewards a slightly different promise and nobody is comparing the versions side by side. Six months later the developer page promises a tool you can run yourself in an afternoon, the enterprise page promises a managed platform with a dedicated team, and the pricing page belongs to neither. Each version is optimized for its reader and the set describes a company that doesn't exist. When a developer gets promoted, or an executive forwards the enterprise page to their engineer, the contradiction surfaces inside the account you were closest to winning.

What makes this hard is that the drift feels like responsiveness. Every divergence starts as a legitimate observation that this audience cares about something the other doesn't. The observation is correct. The error is in what gets changed in response: teams change the promise when they should only be changing which consequence of the promise they lead with.

The distinction is sharper than it sounds. A product either does one thing or it doesn't. What varies by buyer is which downstream effect of that thing matters, what words describe it without translation, and which evidence the reader accepts. A latency improvement is the same fact for both readers. To the engineer it's a number and a benchmark methodology; to the executive it's a churn figure or a support-ticket volume. Same fact, different consequence, different proof. Nothing about the product claim moved.

Companies that get this wrong in the other direction are easier to spot and just as costly. A single message written for the signer talks about outcomes and transformation to an audience of practitioners who read that vocabulary as evasion, and who are frequently the people who decide whether the evaluation happens at all ([[MS-014 Practitioner and Purchaser Are Different People]] owns why those two are separate people with separate powers). The message never reaches the buyer it was written for, because the practitioner filtered it out first.

## Complications

- **Each audience rewards a different promise, and rewarding is how drift starts.** Every divergence begins as a correct observation about what this reader cares about, so nothing in the feedback tells you when you've crossed from emphasis into a new claim.
- **Nobody reads the variants side by side.** The developer page and the enterprise page are written by different people at different times for different reviews, and the inconsistency is visible only from outside the company.
- **Buyers move between personas.** A practitioner gets promoted, an executive forwards a page to an engineer, and the two versions you never expected to meet arrive in the same inbox.
- **Variants multiply production and maintenance cost linearly.** Four personas means four sets of copy to update every time the product changes, and the fourth is always the one that goes stale.
- **The vocabulary that earns trust with one reader loses it with another.** Precision reads as credibility to the practitioner and as noise to the executive; outcome language reads as clarity to the executive and as evasion to the practitioner.
- **Too many personas dissolves the discipline.** Past a handful, the set stops distinguishing anything and becomes a way of avoiding the choice about who the company is actually for.

## Recommendations

> [!check] Vary only three things per persona, the lead consequence, the vocabulary and the proof, and hold the underlying claim word-for-word identical across every version; if two variants make promises a single product can't both satisfy, you've written two positions rather than one message for two readers.

The test is to lay the variants beside each other and underline the claim in each. The underlined sentences should be the same sentence. Everything above and around them can differ. When the underlined sentences differ, you've found a position problem wearing the costume of a copy problem, and it goes back to [[CR-002 Positioning Statement]] rather than to an editor.

What actually changes between versions:

1. **The lead consequence.** Which downstream effect of the same capability comes first, chosen for what the reader is accountable for. The practitioner leads on the effect they'll feel this week; the signer leads on the effect they'll defend at the next budget review.
2. **The vocabulary.** The same fact stated in the words that reader uses unaided, which is the allowance [[CR-009 Jargon Budget]] governs. Technical precision for the person who'd notice its absence, plain terms for the person who'd read it as noise.
3. **The proof.** A benchmark, a source repository or a documented limit for one reader; a named comparable customer, a contract term or an audit certificate for the other, all drawn from the same set [[CR-004 Message Pillars and Proof Points]] assembled and held to the checkability test [[CR-008 Specificity Signals Truth]] applies.

Keep the count to the archetypes [[MS-009 Buyer Archetypes]] actually identified, usually three or four. Each variant gets its own surface rather than its own paragraph on a shared page, which is how this pattern and [[CR-007 One Message Per Asset]] resolve together.

## Implications

Done properly this makes the buying committee cheaper to serve. The champion inside an account can forward the version written for their boss without having to translate, which is most of what a champion spends their effort on ([[MS-013 Champion, Not Contact]] owns that mechanism), and the two versions reinforce each other when they meet instead of contradicting.

It also gives you an early warning system for positioning drift. A quarterly read of all variants side by side surfaces divergence while it's still copy; left alone the same divergence eventually shows up as two product roadmaps. The first move is to print your developer-facing and executive-facing pages, underline the core claim in each, and check whether you underlined the same sentence.

## Related Patterns

- **Above:** [[MS-009 Buyer Archetypes]] (which recurring types the market produces), [[CR-001 Atomic Value Prop]] (the sentence being recast)
- **Below:** *(none yet)*
- **Peers:** [[CR-004 Message Pillars and Proof Points]] (the claims and evidence each variant reorders), [[CR-007 One Message Per Asset]] (why each persona gets a surface rather than a paragraph), [[CR-009 Jargon Budget]] (the vocabulary allowance per reader), [[MS-014 Practitioner and Purchaser Are Different People]] (why the user and the payer need different leads), [[MS-012 Buying Committee]] (the several seats a deal has to satisfy), [[CR-002 Positioning Statement]] (where a variant that changed the claim goes back to)

## Examples

**Red Hat translated one subscription for technical and executive readers (2018).** A Red Hat account published on 9 November 2018 gave a technical reader access to supported software versions and current developer tools. It gave an enterprise buyer a ten-year product lifecycle and certified compatibility across a multivendor environment. Both readers were evaluating Red Hat Enterprise Linux. Each version supported the same claim: an organization can run RHEL as a supported production system.

**QuickBooks separated the bookkeeping job by buyer (2024–2026).** Intuit introduced QuickBooks Solopreneur on 21 February 2024 for one-person businesses. Its product account leads with transaction categorization and tax readiness. QuickBooks Online Accountant addresses a firm managing client books; Intuit's help page, updated 3 August 2026, says one firm profile supports up to 2,000 clients. The products cover the same bookkeeping work. Each page begins with the responsibility its reader carries.

**Adobe recast Creative Cloud by accountability (2024–2025).** Adobe's September 2025 guidance lets an individual move into an equivalent Creative Cloud for teams plan. The team account leads with Admin Console license management and pooled storage under company control. Adobe's December 2024 enterprise guidance leads with organization-owned identities and single sign-on. The applications can persist through the change. Shared assets matter to the team; identity control matters to the enterprise administrator.
