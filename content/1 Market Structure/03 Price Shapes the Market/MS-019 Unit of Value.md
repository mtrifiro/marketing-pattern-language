---
pattern: "Unit of Value"
aliases: ["Unit of Value", "Value Metric"]
altitude: market-structure
status: draft
domains: [core]
larger: ["[[MS-018 Price Creates the Buyer]]"]
smaller: ["[[GTM-017 Usage-Based Pricing]]"]
source: "PDF pp. 21–40, 101–120 (Usage-Based Pricing; packaging: align metric to value)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Find the one thing the buyer counts as value, and meter your price on that; everything else is a proxy that drifts.*

> [!tldr] About this pattern
> The right value unit is the noun customers use for what they receive; when the bill grows on that dimension, what the customer pays stays aligned with their success. It sits below [[MS-018 Price Creates the Buyer]] and above [[GTM-017 Usage-Based Pricing]].

> [!warning] Admonition
> Don't price on the unit that's easiest to count. Charge for the seat because it's simple to meter, while the customer equates value with something else, and your revenue drifts away from the worth you deliver until the pricing quietly works against the product.

Per-seat pricing is the default for a reason: it's simple, it's predictable, procurement understands it, and a spreadsheet can forecast it. The trouble is that seats often have little to do with the value the product delivers. A data platform's worth lives in the queries run and the compute burned, rather than in how many people can log in. A messaging API's worth lives in the messages delivered, rather than the number of developers on the account. The divergence doesn't stay harmless.

Three things go wrong at once. Customers game the meter, sharing a single login, holding seats down, routing usage around the thing you charge for, because the meter measures something they can cheat without losing value. The upside caps itself, since a wildly successful customer who has built their whole operation on you pays the same as a dormant one with the same seat count. And expansion stops being automatic: growing the account requires a renegotiation, a new order form, a fresh approval, instead of revenue rising quietly as the customer succeeds. Worse, a mismatched unit taxes the exact behavior the company wants to encourage. A collaboration product wants more people using it, and per-seat pricing charges a penalty for every colleague invited, which is the opposite of the growth the product is designed to create.

The pricing literature calls this the value metric. Lincoln Murphy was using the phrase by December 2010, and Patrick Campbell's team at Price Intelligently formalized it from 2014 as the axis a company charges along. Their question is which meter earns the most. The question here is what the meter asserts, because the unit a company prices on is a claim about where value comes from, and a wrong claim compounds daily. (Which price band the unit lives in is set by [[MS-018 Price Creates the Buyer]]; how high the price on any unit can go is [[MS-020 Profitability Envelope]]; the pricing model built on the chosen unit is [[GTM-017 Usage-Based Pricing]].)

## Complications

- **Easy to count is rarely value-carrying.** The seat is simple to meter and legible to procurement, yet it usually fails to track the worth the customer receives.
- **A mismatched meter invites gaming and caps upside.** When the unit diverges from value, customers route around it and your revenue stops rising with their success.
- **Alignment trades predictability for fairness.** A value-aligned unit makes revenue grow automatically with usage, and it makes that revenue harder for both sides to forecast.
- **Procurement wants legibility.** Per-seat is a known quantity budgets can plan around, while consumption pricing asks a buyer to sign up for a bill they can't fully predict, and an unpredictable bill is the thing a procurement officer gets blamed for.
- **The unit must be visible to the buyer.** A value metric only works if the customer can watch it rise as they get more from the product; a meter they can't see or predict feels arbitrary and erodes trust.

## Recommendations

> [!check] Find the single unit the customer equates with the value they receive, meter your price on that unit, and stop charging for access to the product.

Run the test for a real value metric, the name Patrick Campbell's pricing research at Price Intelligently and ProfitWell made standard in subscription software: when the customer gets more out of the product, does the unit go up on its own? If using the product more, or succeeding with it more, drives the meter, you've found a value metric. If the unit can stay flat while the customer's value soars, or climb while their value doesn't, you've found a proxy that will drift, and the drift widens every quarter. Compute consumed, transactions processed, API calls made, gigabytes stored, workflows completed: each is a candidate. Screen the candidates against three tests:

1. **Point-to test.** Pick the unit the customer would point to if asked what they're really buying.
2. **Visibility test.** Pick the unit the customer can see and roughly predict, so fear of the bill doesn't block adoption.
3. **Instrumentation test.** Pick a unit you can actually meter, because a value metric you can't instrument reliably is a promise you can't keep.

Let the chosen unit determine the machine built on top of it. It sets the pricing model that aligns monetization with the moment value is realized ([[GTM-017 Usage-Based Pricing]]), so revenue and customer success rise together rather than being negotiated apart. It lives inside the band that [[MS-018 Price Creates the Buyer]] establishes, since the same unit priced for a developer and priced for an enterprise summons different buyers, and it runs up against the ceiling that [[MS-020 Profitability Envelope]] sets on what any unit can command. Choose the unit first, because everything downstream inherits it, and repricing onto a different unit later is one of the most painful moves a company can attempt.

Find the unit by talking to customers rather than filling a spreadsheet. Ask a handful of your best accounts what they'd point to if they had to explain, to their own boss, what they get from the product; the noun they reach for is usually the value metric hiding in plain sight. Beware the metric merely correlated with value: signups track value loosely, but a dormant signup is worthless, so signups drift. Resist metering on whatever is easiest for your billing system, because the billing system's convenience has nothing to do with the customer's sense of worth. Where a single pure unit genuinely doesn't fit, pair a small platform fee with a usage meter to combine the predictability procurement wants with the fairness the value demands, but keep the usage component riding the true value metric or the hybrid inherits the seat's drift. Treat the unit as a hypothesis about where value comes from, and test it against how customers actually describe their own success.

## Implications

A well-chosen unit makes growth automatic. Expansion stops being a renegotiation and becomes a readout of the customer's own success, which is the engine under land-and-expand and the reason usage-aligned companies show revenue rising inside accounts without a single new signature. Hand the Part II pricing patterns this foundation and feed it into the unit-economics picture in [[MS-036 Unit Economics as Market Truth]], since the unit decides how revenue scales against cost to serve.

Hold the tension rather than wish it away: a value-aligned unit trades the buyer's predictability for fairness, and buyers fear runaway bills more than they love fair ones. Pair the fairness with control, because a usage model without guardrails, spend caps, real-time visibility, honest estimates, will lose deals to a competitor's flat rate even when the flat rate is worse value. Budget for the instrumentation too: metering the unit reliably enough to bill on it is a real engineering commitment, and a company that bills on a number it can't defend invites disputes. The unit is the most consequential pricing decision you make, and the hardest to change once the market has learned it.

## Related Patterns

- **Above:** [[MS-018 Price Creates the Buyer]]
- **Below:** [[GTM-017 Usage-Based Pricing]] (the model that bills the chosen unit and rises with it)
- **Peers:** [[MS-020 Profitability Envelope]] (the ceiling on any unit's price and the margin band beneath it), [[MS-036 Unit Economics as Market Truth]] (how the unit scales revenue against cost), [[MS-021 Free Changes the Question]] (when the entry unit is priced at zero), [[10 Pricing and Packaging Systems]] (the billing machinery the chosen unit gets metered through)

## Examples

**Snowflake and the consumption meter (2020 S-1).** Snowflake charges for the resources a customer actually burns rather than for access to the product. Its S-1 of 24 August 2020 states the model as "a customer-centric, consumption-based business model, only charging customers for the resources they use," and spells out the meters: storage billed on average terabytes per month, compute billed on the type of resource and the duration of use, data transfer billed on terabytes moved. A customer who runs more analysis pays more, and one who runs less pays less, so the bill tracks the work the customer is getting done. The alignment is why accounts expand without a salesperson renegotiating, and the same filing reports that consumption for most customers accelerates from the beginning of their usage to the end of the contract term. The filing also states the cost of the alignment in its risk factors: because revenue follows consumption, Snowflake lacks "the visibility into the timing of revenue recognition that a typical subscription-based software company has." Fairness and the forecasting problem arrive together.

**Twilio and the message (2016 S-1).** Twilio charges per message and per call, the literal unit of the communication it delivers. A developer building on it can reason about the cost because it maps to something they already understand, and Twilio's revenue grows exactly as its customers' usage grows. Its S-1 puts numbers on that: usage-based fees were 79% of 2015 revenue, the dollar-based net expansion rate was 155% for 2015 and 167% for the first half of 2016, and the cohort of accounts acquired in 2012 grew from $3.3 million of revenue that year to $27.2 million in 2015 without anyone signing a new order form. Charging those same customers per developer seat would tax the teams building on the platform and leave most of the value it created uncaptured.

**The collaboration tool that taxed its own growth.** I worked with a company whose product got more valuable the more of a team used it, and which charged strictly per seat. Customers responded rationally by limiting who got a login, which throttled exactly the network effect the product depended on. We moved the meter to active workflows, a unit that rose as the team actually collaborated, and adoption inside accounts opened up because inviting a colleague no longer cost the buyer anything. The product hadn't changed; the meter had stopped fighting it.

**Rolls-Royce and the flying hour (1962 onward).** Selling an engine, then selling replacement parts and service to whoever asks, leaves the customer carrying the risk that the engine spends its life in a hangar. Rolls-Royce dates the arrangement to 1962 and its Viper engine on the de Havilland and Hawker Siddeley 125 business jet: complete engine and accessory replacement on a fixed cost per flying hour. An airline's value from an engine is hours in the air, so the hour is the unit, and the company's own account says the arrangement "aligned the interests of the manufacturer and operator, who only paid for engines that performed well." Rolls-Royce runs the descendant of that meter as TotalCare, still charged per flying hour, and describes the consequence the same way: it is rewarded only for engines that perform. The hour passes all three screens. An airline would point to hours flown as what it's buying; it can see and forecast those hours from its own schedule; and the engine counts them itself. Nothing about jet engines makes this a software idea.

**Nespresso and the pod (1986 onward).** Selling espresso machines, a one-time purchase judged on features, leaves the value of every later cup uncaptured. Nestlé licensed the machines to appliance partners and kept the pod, so the meter sits on the unit the customer equates with value, one espresso. A household that comes to love the product pays more without a renegotiation or a new decision, and the unit passes all three screens: the buyer would point to the cup, can see and predict the spend, and the pod counts itself. A value metric can wear grocery packaging.

