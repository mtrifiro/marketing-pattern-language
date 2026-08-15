---
pattern: "Pricing Page Transparency"
aliases: ["Pricing Page Transparency"]
altitude: craft
status: draft
domains: [core]
larger: ["[[MS-018 Price Creates the Buyer]]"]
smaller: []
source: "Net-new; built from public cases."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *The price you refuse to show is still the loudest line on the page.*

> [!tldr] About this pattern
> Price visibility speaks before the product does. Publishing or withholding the number signals the procurement path, access, and negotiating posture the buyer should expect; the decision also reveals the company's confidence in the sale. It sits below [[MS-018 Price Creates the Buyer]].

> [!warning] Admonition
> Don't treat the pricing page as either a spreadsheet to publish or a gate to hide behind. Showing or hiding the price is itself a message, and one that contradicts the buyer you designed for repels the customer you wanted.

Most B2B pricing pages run on one of two reflexes, neither of them a decision. The first reflex publishes everything: three columns, a feature matrix, a checkmark grid, a number under each tier, because "transparency is good" and a competitor did it. The second reflex hides everything behind "Contact Sales" or "Request a Quote," because a demo captures a lead and a published number lets the buyer compare you before you've had a chance to sell. Neither reflex asks what the choice signals to the person reading it.

The number, or its absence, is the most-read line on the page. A buyer who arrives has already decided they might want the thing; now they're deciding whether they belong here, and the price answers that faster than any headline. A $29-a-month plan tells a developer with a company credit card that this is for her and she can start today. When the page says "Contact Sales," that same developer closes the tab, because the wall tells her this is bought by committees over quarters, priced past what she can approve, and slow. She may be wrong about the actual number. The signal already did its work.

The mismatch runs in both directions, and both are expensive. A hidden price on a self-serve product leaks your own funnel: buyers ready to swipe a card get routed into a sales queue they don't want, and most leave for a competitor who simply showed the number. A small public sticker on a genuinely enterprise product reads as a toy, because the buyer with the real budget expects to negotiate and expects the price to reflect a serious commitment. The downstream logic, how the number selects the buyer, belongs to [[MS-018 Price Creates the Buyer]]. The craft problem sits one layer up: even with the right price, the *visibility* of that price sends a signal, and the signal can be right or wrong independent of the number.

Hiding carries a second cost that publishers underrate. Opacity reads as evasion unless you make it read as exclusivity. When a buyer can't see a price, the default assumption is "if I have to ask, I can't afford it, and whatever I'm quoted, someone else got a better deal." That suspicion, that the price is negotiable, inflated, and different for every logo, corrodes trust before the first call. Some companies want exactly that filter and use it well. A company that backs into it without deciding has still told every visitor the price is a moving target.

The amateur page never asked who it's talking to. It publishes a number because publishing feels honest, or hides one because hiding feels strategic, and either way the page and the buyer stay strangers to each other. Most pricing pages are that page.

## Complications

- **Speed versus capture.** A published price lets a ready buyer self-qualify and act in one session; a hidden price captures a lead and forces a conversation, at the cost of the buyers who won't tolerate the friction.
- **Trust versus room to discriminate.** Showing the number builds trust and reads as confidence, but it anchors you publicly and forecloses charging different buyers different amounts; hiding it preserves negotiating room while inviting the suspicion that the price is arbitrary.
- **Comparability cuts both ways.** A visible price lets a buyer compare you directly, which speeds the confident buyer and commoditizes you against a cheaper one; opacity blocks the comparison and the self-serve sale together.
- **The signal must match the buyer.** A "Contact Sales" wall on a credit-card product and a small sticker on an enterprise platform both contradict the procurement path the price was built for. Either mismatch sends the buyer you designed for to someone else (the selection logic is [[MS-018 Price Creates the Buyer]]).
- **Convention sets the reader's expectation.** Where every rival publishes, hiding reads as evasive; where everyone hides, publishing reads as bold.
- **A single flat number signals confidence but can't segment.** One published price for everyone is the strongest possible statement of "we know exactly who we are" and the weakest possible tool for capturing a wide range of willingness to pay.

## Recommendations

> [!check] Publish the price of every tier a buyer can purchase through self-service; conceal only a genuinely negotiated tier and give that tier a floor or range. The page passes when price visibility matches the buyer's procurement path.

Set the page by the buyer, in three moves:

1. **Reveal the number when you want the buyer to qualify herself and decide without a human in the loop.** A published price is a claim of confidence and an offer of access; it says "you belong here, here's what it costs, start when you're ready."
2. **Conceal the number only when the purchase is genuinely negotiated and high-touch,** where the real price depends on scale, seats, or usage you can't know from a web visit. Then make the opacity honest so it reads as bespoke: say why there's no single number (usage-based, seat-based, custom scope) and give a floor or a range so the buyer can self-select before spending a call. "Plans start at $2,500 a month" filters and orients at once; a blank "Contact Sales" only filters, and filters the wrong people out along with the right ones.
3. **Handle hybrids by publishing what a buyer can adopt alone and routing only the negotiated tier to sales.** Show three self-serve prices and mark the fourth "Contact Us," and you tell the buyer exactly where the money is and where the relationship turns human. Never show the small tiers and hide ones a self-serve buyer could have bought, because then the wall signals nothing true about the purchase and just traps the funnel.

Hold the invariant: the price's visibility is a message about who you are and who you're for, read before it's parsed as a cost. Revealing signals confidence, access, speed, and comparability. Concealing signals exclusivity, negotiation, expense, and friction. Every one of those signals is legitimate for some buyer, so refuse the default (publish because it's tidy, hide because it captures a lead) and choose the signal that agrees with the buyer the price already selected. When the two agree, the page confirms what the visitor suspected and moves her forward. When they fight, the page argues with its own product, and the buyer believes the price over the pitch every time.

## Implications

A page whose transparency matches its buyer feeds the rest of the competitive-craft chapter cleanly. Use it to set up the [[CR-028 Comparison Page]], because a visible price is one of the honest facts a buyer will weigh against a rival, and let pricing itself become a [[CR-027 Differentiation Axis]] when radical openness, or deliberate bespoke opacity, is the ground you've chosen to compete on. Rest it on [[MS-018 Price Creates the Buyer]] for the number underneath: get the price wrong and no amount of transparency craft will save the page.

Enforce the discipline that transparency is a door that only swings one way. Publish the number and you've anchored yourself in the buyer's mind and in your competitors' decks, surrendered most of your room to charge different buyers differently, and made every future change visible to everyone at once. Publishing buys trust and speed at the price of flexibility. Hiding buys flexibility and negotiating room at the price of trust and self-serve reach. No setting gives you all four, so make the choice against a specific buyer rather than against a general preference for candor.

## Related Patterns

- **Above:** [[MS-018 Price Creates the Buyer]] (the number itself selects the buyer; this pattern governs what its *visibility* signals)
- **Below:** *(none yet)*
- **Peers:** [[CR-027 Differentiation Axis]] (how open or bespoke you price can be the axis you compete on), [[CR-028 Comparison Page]] (a visible price is a fact the buyer weighs against rivals)

## Examples

**Basecamp's published price as an argument (October 2022).** When Basecamp reset its pricing in October 2022, it put two plans on the page and no phone number: $15 per user per month for teams that want to pay by the head, and Basecamp Pro Unlimited at a flat $299 a month billed annually ($349 month to month) for unlimited users. The same repricing retired the free plan. Two rows is still a small matrix by enterprise-software standards, and the flat plan is the one carrying the argument. On annual billing the two plans cost the same at about twenty users, and past that the unlimited number stops climbing while the per-seat one keeps going. A buyer learns in one glance what she'll pay at any size, finds no "call us for enterprise," and sees no tier she'll be upsold out of, which is exactly the anti-enterprise-theater stance Basecamp has sold in its writing for years. The transparency carries the product's whole claim about how software companies should treat customers. Against rivals whose pricing pages hide the real number behind sales calls and per-seat multiplication, Basecamp's page reads as confidence, and the confidence is the pitch. Basecamp could capture more revenue from big accounts with a hidden enterprise tier; it decided that publishing every number it charges is worth more than the money it forgoes.

**Stripe publishing the exact per-transaction price (checked August 2026).** Stripe's US pricing page leads with a precise, universal number: 2.9% plus 30 cents per successful online charge on a domestic card, with 2.7% plus 5 cents for the same card in person. For a developer evaluating a payments API, that single visible line does what a sales team can't; it collapses the entire "how much will this cost" question into a fact she can put in a spreadsheet before she's talked to anyone. The signal matches the buyer perfectly. Stripe was built for a developer who wants to integrate today, and a developer who has to request a quote to learn the transaction fee picks the competitor who just printed it. Publishing the rate also signals that Stripe isn't cutting private deals on the standard product, which builds the trust a developer needs before she routes real money through your servers. The negotiated pricing still exists, and the same page routes businesses with large payments volume or unusual models to sales, but only after the public number has already earned the buyer's confidence.

**Everlane printing its own costs beside the price (2011 onward).** The price is usually the only number a buyer is allowed to see. Everlane, launched in 2011, publishes the cost behind each garment next to what it charges, broken into materials, hardware, labor, duties and transport, and sets its own price against what a conventional retailer would want for the same item. Its own words on the practice, which it calls Radical Transparency, are that it reveals the true costs behind every product, from materials to labor to transportation, then offers them without the traditional retail markup; the page shows a T-shirt at $30 against $55 at traditional retail. The published breakdown does the arguing. A buyer who can check the arithmetic reads the number as a fact rather than a position, and the industry's habit of hiding its markup becomes the thing Everlane competes against, which is pricing transparency used as the differentiation axis in a category with no software in it at all.

**Pricing pages can expose the calculation before they expose the final bill (checked 8 August 2026).** Snowflake states that its model is consumption-based. Its pricing page links to a service-consumption table and calculates storage from average monthly use. The total still depends on the customer's compute and storage. HubSpot's Marketing Hub page prints starting prices alongside a sales contact: Professional displayed $800 a month with an annual commitment and required $3,000 onboarding; Enterprise displayed $3,600 a month and required $7,000 onboarding. Both pages expose a buyer-computable unit. Snowflake leaves workload volume open, while HubSpot fixes the starting floor and routes the remaining scope to sales. "Contact Sales" hides less when the page has already named what drives the number.
