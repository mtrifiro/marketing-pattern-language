---
pattern: "Usage-Based Pricing"
aliases: ["Usage-Based Pricing", "Pay for What You Use", "Revenue Follows Usage", "The Account That Grows Itself"]
altitude: gtm-system
status: draft
domains: [core]
larger: ["[[MS-019 Unit of Value]]"]
smaller: []
source: "PDF pp. 1–40 raw (Usage-Based Pricing; NRR and system-of-record); pp. 101–120 (packaging); pp. 161–180 (retention)"
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Charge for what gets consumed, and a bill that starts at pennies grows only when the customer's success does.*

> [!tldr] About this pattern
> Usage-based pricing lets an invoice begin at pennies and rise with consumption, so revenue follows the customer's success and the product's continued place in daily work without reopening the contract. It sits below [[MS-019 Unit of Value]].

> [!warning] Admonition
> Never put a budget conversation directly in the path of adoption. Under a per-seat license, the user who finds value and wants a colleague on it has to stop and file a procurement request, so the product's spread stalls itself.

A developer tries your tool, gets real value, and wants to bring the rest of the team in. Under per-user licensing, inviting three teammates means adding three seats, and adding three seats means a purchase the developer can't make alone. The request goes to a manager, the manager asks for a business case, and the spread that should have taken an afternoon now waits on a budget cycle. The friction lands at the exact point where adoption was about to compound, and much of it never recovers.

Feature tiers leak at both ends for a related reason. A small customer who needs one capability that happens to sit in the top plan buys Enterprise to get it and overpays for everything else in it they'll never touch, while a customer running enormous volume through a flat tier pays the same monthly figure as a light user on it. One disconnection sits under every version of this. Your price has come loose from what the customer consumes and values: a seat count tracks headcount while value tracks usage, and a feature tier tracks the checkbox a buyer needs while value tracks how much of the product runs. When your meter measures neither, growth in real usage never shows up in the bill until a renewal renegotiates it by hand.

The same disconnection shows up as a number. Net revenue retention takes a cohort of customers from a year ago, ignores every new logo, and asks what that group pays today. Above 100 percent the base grows on its own and each new customer lands on a rising floor; below it, sales has to run faster every quarter to stand still. A per-seat account can triple its real use of the product while the bill sits still, because headcount never moved, and that static line item invites the churn review: a finance team watching flat spend and rising internal usage starts asking whether it could build the thing itself. Staffing account management to chase the gap works, and it's expensive; expansion then runs at the rate humans can run negotiations.

## Complications

- **Spread stops at the approval step.** A product that earns its way in through a single practitioner needs a first step one person can take alone. Any pricing event that summons a manager or a procurement officer at the moment of spread throttles the motion that was working.
- **Bill the volume a feature tier never counts.** Packaging features into tiers stays legible to a buyer, yet the tier a customer lands in is fixed by which capability they need while their volume goes uncounted. Small users overpay to reach one feature; heavy users underpay for the load they put through.
- **Predictability against value-alignment.** A flat subscription gives finance on both sides a clean number to forecast; a metered bill tracks value more honestly and leaves next quarter harder to predict. The same annual spend reads as safe as a fixed line item and as an uncontrolled cost as an open meter, and that fear stalls deals a flat price would have closed.
- **The meter is only as good as the instrumentation.** Billing per unit consumed requires accurate measurement of every unit. That measurement is an engineering cost, and any gap or error becomes a billing dispute a subscription never has to hold.
- **Consumption compounds only from a system-of-record position.** A product the customer's data lives inside keeps accruing use as their business grows; a product they can drain and leave plateaus the quarter they stop. The system-of-record position is what makes consumption compound.
- **The free entry and the paid meter are one instrument.** Consumption pricing pays off when a user can start at zero and ramp, which makes the free entry point and the paid meter one system; the free step is owned by [[GTM-006 Generous Free Tier]]. An allowance set without reference to the rate above it gives away the first climb the meter would have billed.

## Recommendations

> [!check] Meter the consumption of the core value unit and hold a position where that consumption accumulates, so a single user can start for pennies without a purchase, the invoice rises only as their usage and the value they receive rise, and revenue expands as a by-product of use with no contract to reopen.

Start from the value metric [[MS-019 Unit of Value]] has already named, bill it by the unit consumed rather than by the seat occupied, and forge three links:

1. **Count the work rather than the workers.** Let a developer adopt alone, invite the team, and grow usage tenfold without ever filing a request to add a colleague, because the meter counts the work and the number of people doing it never enters the bill.
2. **Move revenue and value together.** Earn more only when the customer consumes more, so consuming more is the customer getting more out of the product. Pick a dimension that grows when the customer wins, more data stored, more requests served, or more transactions run, and the arbitrary tier boundary dissolves: each account pays in proportion to what it draws.
3. **Hold a position where usage accumulates instead of resetting.** Metered pricing only compounds on a system of record. A product that ingests, stores, and manages large volumes of the customer's own data grows heavier every quarter, because the customer keeps adding to it and can't easily take it out, so the meter climbs on their growth while the stored data is also the reason they stay. The position itself belongs to [[MS-028 Data Gravity Lock-In]]; what you own here is the decision to put the meter on top of it.

Treat this as the monetization core of a product-led motion. Kyle Poyar tracked how fast the model spread while he was a partner at OpenView: the second edition of his *State of Usage-Based Pricing* report, published in February 2023, put three in five SaaS companies on some form of usage-based pricing, projected 61% of the general SaaS index by the end of that year, and found another 21% planning to test it. Whether to meter at all, against per-seat and take-rate alternatives, is settled by the metric [[MS-019 Unit of Value]] names and by the motion above it; this pattern is what that choice reaches for when value scales with consumption and a practitioner adopts first.

Check the durability link hardest, since it's the one teams skip. Put a meter on a product the customer can drain and abandon and you get variance without retention: the bill rises and falls with their whim, and a quiet quarter reads as churn. Put the same meter on a system of record and you get a floor that ratchets up, because the stored data the customer depends on is both the source of the usage and the reason they stay. Ask whether the customer's own success feeds the meter, and whether the thing feeding it is something they'd have to rip out to leave. Answer both before you trust a retention number.

## Implications

With consumption as your meter, stop treating expansion as an event and let it become a default. An account that uses the product more pays more without a single renewal conversation, so new logos land on a rising floor instead of refilling a draining one, and the account team's job shifts from winning renewals to catching the accounts whose usage is climbing fastest. Give [[GTM-029 Land and Expand]] an automatic engine instead of a sales-run one, and let a [[GTM-027 Product-Qualified Lead]] surface from real usage. Open the front door too: the free allowance is the same rate set to zero below a threshold, which is what lets a [[GTM-006 Generous Free Tier]] invite unlimited trial without unbounded loss.

Keep three tensions live. Measurement comes first, because revenue that rises without a conversation is only as sound as the instrumentation behind it; make the meter visible to the customer in real time, and close any drift between what it counts and what the customer believes they used before that gap becomes a dispute. Forecastability is the second, so wrap the raw meter in commitments, floors, or caps to give procurement a number it can approve. The durability trap is the third: don't read high retention as proof of a system-of-record position you don't actually hold, then watch the number collapse when a cheaper substitute lets the customer drain and leave. Measure net revenue retention on a cohort with new logos stripped out, and read it alongside CAC and payback, which is the discipline [[MS-036 Unit Economics as Market Truth]] holds. Re-examine the meter against whether it still counts the thing the customer values, a check owned upstream in [[MS-019 Unit of Value]].

## Related Patterns

- **Above:** [[MS-019 Unit of Value]] (names the metric the meter bills)
- **Below:** *(none yet)*
- **Peers / variants:** [[MS-028 Data Gravity Lock-In]] (the accumulating-data position that makes a meter compound), [[GTM-006 Generous Free Tier]] (the free entry point the meter makes affordable), [[GTM-027 Product-Qualified Lead]] (the signal real usage surfaces), [[GTM-029 Land and Expand]] (the growth loop a meter feeds automatically), [[MS-036 Unit Economics as Market Truth]] (where the retention a meter produces gets read as a verdict on the market's structure)

## Examples

**Snowflake's consumption credits and the retention that followed (public since its 2020 IPO).** Snowflake bills for compute and storage actually used, drawn down as credits, rather than for named users, and it separates the two so each scales on its own. Snowflake meters the value dimension a data warehouse delivers, which is work processed, so a team can run one query for a few cents and a full analytics workload for far more on the same account, with no seat to buy first. Because the customer's data lives in the system, consumption rises as their business generates more data and runs more queries, with no contract to reopen. Snowflake's S-1, filed in August 2020, disclosed net revenue retention of 158 percent, and the figure reached 168 percent by the close of its fiscal 2021 that January.

**Twilio's per-message and per-minute API metering (since 2008).** Twilio charges per SMS sent and per minute of voice carried through its API. A developer signs up, sends one message for a fraction of a cent, and builds from there, so revenue from the account climbs as their own product scales. Twilio puts no seat and no tier gate on the first call, so the product spreads through developers who adopt alone. Twilio's S-1 (filed May 2016) put its dollar-based net expansion rate at 155 percent for the year ended 31 December 2015, before it had a meaningful enterprise sales organization. Twilio redefined the metric in the first quarter of 2020 to cover all active customer accounts, so figures on either side aren't strictly comparable.

**Datadog's per-host and per-usage billing (public since its 2019 IPO filings).** Datadog meters monitored hosts, ingested logs, and other usage dimensions rather than selling flat seats, and it lands inside a team on one product. An engineer instruments a handful of hosts cheaply and watches the bill rise as the fleet grows. Datadog pairs the meter with committed-use contracts to give buyers a forecastable floor, the answer to the procurement-risk force this pattern names. Datadog reported dollar-based net revenue retention above 130 percent from 2019 into 2022, driven by existing customers consuming more. That figure belongs to a particular window: consumption retention across the sector came down after 2022 as customers tightened cloud spending, because a meter that rises with the customer's growth also falls with their restraint.
