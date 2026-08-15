---
pattern: "Marketplace Presence"
aliases: ["Marketplace Presence", "Buy It the Way They Already Buy"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[GTM-024 Partner Force Multipliers]]", "[[GTM-023 Public API Flywheel]]"]
smaller: []
source: "PDF pp. 121–140 (indirect channels; marketplaces; technology alliances)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Don't expect the listing to win the deal; use it to clear the procurement friction that stalls a deal you've already won.*

> [!tldr] About this pattern
> A marketplace listing clears procurement friction around a deal already won by reusing an approved vendor, committed spend, and existing billing path; the approval path shortens without asking the listing to create demand. It sits below [[GTM-024 Partner Force Multipliers]] and [[GTM-023 Public API Flywheel]].

> [!warning] Admonition
> Don't answer a stalled deal by selling harder. A qualified buyer with the budget still can't buy while a net-new vendor purchase triggers procurement, a security review, a legal redline, and a new payment relationship, which together run for months.

The friction sits after the decision, which is what makes it easy to miss. You do the selling, the champion is convinced, the technical evaluation passes, and then the deal enters a second gauntlet that has nothing to do with whether the product is good. Procurement asks whether you're an approved vendor. Security asks for a questionnaire and a SOC 2 report. Legal wants to redline your master agreement. Finance has to set you up as a new payee. Each step is reasonable on its own; together they add weeks or quarters to a purchase the buyer already wants to make, which is exactly when a competitor with an easier path slips in. That window stays open for as long as the gauntlet runs.

The gap here is between a direct sale and an indirect route to market. In a direct sale, the buyer onboards you as a vendor from scratch. For a large enterprise, onboarding a new vendor is genuinely expensive: it consumes legal hours, security-review capacity, and a slot in a procurement queue that many other requests are also waiting in. That cost lands on a deal you've already won, so it reads as lost revenue rather than a marketing problem, and teams underinvest in fixing it. So the cost gets absorbed deal by deal.

The obvious response is to sell harder or throw more sales engineering at the security review. That treats the symptom. The buyer's reluctance is about the overhead of adding one more vendor to a system built to resist new vendors. A better pitch doesn't shorten the procurement queue, and a faster security questionnaire doesn't change the fact that you're a stranger to the buyer's finance department. What shortens the queue is a different buying path.

## Complications

- **Buyers already trust a buying relationship you don't have.** A large customer holds an existing contract, an approved-vendor list, and a payment relationship with a cloud provider or platform. That trust is real and transferable, and the operator owns it.
- **Committed spend wants to be burned down.** A customer with a multi-year cloud commitment is under pressure to consume it, and a purchase that counts against that commitment is easier to approve than one that needs new budget.
- **Approved-vendor status shortcuts security and legal.** When the marketplace has vetted you, or the buyer's procurement team accepts the marketplace's standard terms, the questionnaire and the redline shrink or disappear.
- **The marketplace takes a cut and can commoditize you.** The listing isn't free. The operator charges a fee on each transaction, and your product sits on a shelf beside competitors, which pushes buyers toward comparison and price.
- **A marketplace moves money and makes no demand.** The listing is a rail for the transaction, and a buyer who doesn't already know they need you won't discover you by browsing.
- **Large deals still need a human.** For complex, high-value purchases the marketplace handles the paperwork while a field motion handles the persuasion, the custom terms, and the negotiation, so the rail removes the procurement cost and leaves the cost of the salesperson untouched.

## Recommendations

> [!check] Use the marketplace as a transaction rail through procurement relationships the buyer already holds. Before listing, name the committed-spend pool, the approval or standard-terms shortcut, and the source of demand; a missing answer means the rail isn't ready.

Work the move in order:

1. **Pick the surface by where the money and the trust already sit.** If your buyers run on AWS, Azure, or Google Cloud and hold committed spend there, list on the cloud marketplaces so they buy your software and draw it down against that commitment, turning a budget fight into a line item. Tackle's *State of Cloud Marketplaces 2022* found 48 percent of buyers naming that drawdown as their number-one reason for purchasing through a marketplace. If they live inside a platform like Salesforce or Atlassian, list in that platform's app store, where their admins already install and pay for tools.
2. **Capture the three parts that matter.** A marketplace combines four things the buyer usually assembles separately: discovery, an approval path, a contract path, and billing. The value concentrates in the last three, so design the listing to deliver the approval path, the contract path, and the billing, and don't count on discovery.
3. **Price for the fee, and know which of the two regimes you're in.** The two families charge on completely different scales, and as of 2026 the gap is roughly ten to one. The cloud marketplaces are cheap. AWS Marketplace charges a 3% seller fee on public SaaS offers, falling to 2% on private offers between $1 million and $10 million of contract value, 1.5% at $10 million and above, and 1.5% on renewals; Microsoft's marketplace charges 3%, halved on qualifying renewals; Google Cloud Marketplace runs the same 3%, 2%, 1.5% ladder. All three came down from 20%, Microsoft announcing its cut in July 2021. AWS still charges 20% on machine images and containers, so the 3% is a SaaS rate rather than a marketplace rate. The platform app stores are an order of magnitude dearer: Apple takes 30%, or 15% for developers earning under $1 million a year; Google Play takes 15% on the first $1 million of annual earnings and 30% above it; Salesforce takes 15% on AppExchange listings and 25% on OEM arrangements; Atlassian takes 16% to 25% depending on the framework; Shopify takes nothing until a developer has earned $1 million and 15% after. At 3% the rail costs less than the procurement cycle it removes and the decision is easy. At 30% the listing has to justify itself against your gross margin, and reserving it for deals where the shortcut is worth that much is the whole of the discipline.
4. **Differentiate before the shelf does it for you.** Because the listing sits beside competitors, carry the narrative in from the demand you built upstream; the shelf will not do that work.
5. **Extend the rail through a technology alliance where it fits.** Partner with a larger company so their marketplace or their salesforce routes deals into their installed base, and their procurement relationship becomes your route in. That broader partner channel belongs to [[GTM-024 Partner Force Multipliers]], and the API-shaped product that makes you listable at all belongs to [[GTM-023 Public API Flywheel]]; this pattern claims only the procurement rail.

Run the field motion alongside the transaction for anything large. The marketplace closes the paperwork; a salesperson still closes the deal, negotiates the custom terms, and works the private offer. For large or complex purchases a direct field motion runs in parallel with the marketplace transaction, and that motion is the field end of the continuum [[GTM-001 Single Primary Motion]] owns. Route the signed deal through the marketplace as the billing and approval instrument, and keep the human on the persuasion.

Before you list, run the test: name the buyer's committed-spend commitment, name the approved-vendor or standard-terms shortcut you'll inherit, and name where the demand comes from. If you can't name all three, build the missing one before you count on the listing.

## Implications

A marketplace listing changes where deals get stuck. The procurement, security, and legal gauntlet that used to add quarters shrinks to a checkout that draws on relationships the buyer already maintains, and committed-spend burndown turns "find new budget" into "consume budget we've already committed." Deals that would have died in vendor onboarding now close, and the sales cycle shortens at its slowest stage. Accept the trade you take on with it: a distribution surface you don't own, where the operator sets the terms, takes a cut, and can change the rules.

Enforce the discipline that the marketplace is a procurement and billing rail rather than a demand engine, because the standing temptation is to treat a listing as a growth strategy. It isn't one on its own. Create the demand upstream and point it at the listing, or the shelf stays quiet beside competitors who are also listed there. The fee erodes margin and the side-by-side placement invites price comparison, so list without a differentiated narrative and you commoditize yourself by your own hand. Build the demand elsewhere, use the marketplace for the transaction, and keep the field motion running on the deals large enough to justify a human.

## Related Patterns

- **Above:** [[GTM-024 Partner Force Multipliers]] (partnering as the broad channel this specializes), [[GTM-023 Public API Flywheel]] (the ecosystem that produces a listable offering)
- **Below:** *(none yet)*
- **Peers / variants:** [[GTM-001 Single Primary Motion]] (the field end of the motion continuum, which closes large marketplace deals)

## Examples

**The cloud marketplaces as burndown rails (AWS 2012, Azure 2014, GCP 2017).** Listing on the AWS, Azure, or Google Cloud marketplace lets the buyer purchase the software and have the spend count against a committed cloud contract. A customer with a multi-year AWS commitment buys a listed product, draws it down against that commitment, and skips the fresh vendor cycle, which is why enterprise buyers often ask a vendor to list rather than sell direct. The volume is large enough to measure from outside now. Omdia put enterprise software sales through the hyperscaler marketplaces at $30 billion in 2024 and forecast $163 billion by 2030, and named the growth of upfront multi-year cloud commitments, close to $470 billion of them across AWS, Azure and Google Cloud, as what drives it. Individual sellers reach that scale too: CrowdStrike announced on 26 February 2025 that it had passed $1 billion in AWS Marketplace sales between 1 January and 31 December 2024, the first cloud-native security vendor to do it inside a calendar year. None of those figures separate demand the marketplace created from demand created elsewhere and closed there.

**Snowflake and Datadog through the cloud marketplaces (Datadog from 16 November 2016; Snowflake's 2025 volume).** Making the product purchasable through the major cloud marketplaces applies the spend to the buyer's cloud commitment while the direct sales organization keeps working the deal. Datadog was one of the twenty-one sellers AWS named when it opened SaaS subscriptions on its marketplace on 16 November 2016, so the listing route has been available for a decade. Snowflake said on 3 December 2025 that it had passed $2 billion of sales in AWS Marketplace inside the 2025 calendar year, with its transaction growth doubling year over year. Both companies run large field teams alongside their listings, which is the pattern in practice: the salesforce works the deal, the marketplace handles the contract and billing, and committed-spend burndown is the reason an enterprise routes the purchase through the listing.

**The Salesforce AppExchange (2005) and the Atlassian and Shopify app stores.** The AppExchange lets a Salesforce customer install and pay for a third-party app through their existing Salesforce relationship, inheriting an approval and billing path the admin already uses; the Atlassian Marketplace and the Shopify App Store work the same way. Here the buyer isn't burning down a spend commitment, yet they are buying through a vendor they've already onboarded, which collapses the same net-new-purchase friction. Atlassian said in July 2024 that its Marketplace had passed $4 billion in lifetime sales that January, across more than 1,800 partners and 5,700 apps, so the rail carries real volume even as each app still has to generate its own demand.

**The GSA Multiple Award Schedule is the same rail with no software in it (fiscal 2024 sales above $51.5 billion).** A company that wins a place on the United States General Services Administration's Multiple Award Schedule has already negotiated prices and terms the government accepts, so a federal contracting officer can order against that contract instead of running a new procurement. GSA reported schedule sales above $51.5 billion in fiscal 2024. Demand arrives separately. An officer who doesn't know your company exists won't find you by browsing, and GSA said in March 2025 that it would let contracts failing to meet sales thresholds expire, which tells you how many vendors got listed and then waited. Office furniture, lab equipment and janitorial services ride this rail beside the software, on the same three parts that matter: cleared vendor status, standard terms, and a payment path the buyer already uses.

