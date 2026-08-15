---
pattern: "Form as Filter"
aliases: ["Form as Filter"]
altitude: craft
status: draft
domains: [core]
larger: ["[[CR-022 Friction as Qualification]]"]
smaller: []
source: "Net-new; built from public cases."
created: 2026-08-01
modified: 2026-08-08
tags: [pattern]
---

> *Every field is a toll booth, and some of them charge more than the lead is worth.*

> [!tldr] About this pattern
> Every form field is a toll with its own conversion price; the data it returns must repay the leads it drives away. Each field must also fit the visitor's trust at that point in the exchange. It sits below [[CR-022 Friction as Qualification]].

> [!warning] Admonition
> Don't treat a form field as free to add. Every field is a tax on completion that a share of qualified visitors refuse to pay, and the ones who quit are often the buyers you most wanted.

The form is where your funnel converts attention into a record. Someone read the page, clicked the button, and now sits in front of the boxes that stand between intent and the thing they came for. That moment is the most expensive real estate in the funnel, because it's the last gate before conversion and the one place where the visitor's motivation gets tested directly against the work you're asking of them. Each new box raises the toll. You'll rarely feel the cost, because the people who abandon leave no trace in the CRM; the lead simply never appears, and the field that repelled them looks innocent in the dashboard.

The pressure to add fields is constant and comes from every direction except the visitor's. Sales wants phone number and company size so reps can prioritize. Ops wants job title for routing. Finance wants budget so forecasting is cleaner. Each request is reasonable in isolation, and none of the requesters bear the conversion cost, so the form accretes fields the way a countertop accretes clutter: one defensible addition at a time until the surface is unusable. The demo form that started as email and name arrives, a year later, at eleven inputs, a dropdown for "how did you hear about us," and a checkbox nobody reads. Completion has quietly halved, and the number that would tell you so is invisible, because it lives in the people who left. Nothing in that process ever removes a field.

Each input imposes a different cost and returns a different value, which makes this a discipline more precise than a slogan about shorter forms. Luke Wroblewski's *Web Form Design: Filling in the Blanks* (2008) is the standard reference on this, and it treats a form as a path where every input adds work for the person walking it. Wroblewski writes for the designer, whose job is to make completion easy. The marketer has a second question sitting under that one, which of these people you can afford to lose, and that's the one this pattern answers. An email address is cheap to give and high in value; a phone number is expensive, because the visitor knows it invites a call they don't yet want. "Company size" is a two-second dropdown; "briefly describe your project" is an essay that stalls a warm lead at the finish line. A field that's optional but looks required stops people who would have finished. A field asking for information the visitor considers private, premature, or intrusive at this stage lowers completion and changes the emotional register of the whole exchange from "getting the thing I came for" to "being processed." Each field carries its own price.

A second, subtler failure hides inside the first. Because abandonment is invisible and completion is visible, you'll optimize toward the number you can see. Teams celebrate a form that produces "more qualified leads" after fields were added, without noticing that the added fields also thinned the top of the funnel and shifted the mix. Sometimes that trade is right; friction is a qualification tool, and [[CR-022 Friction as Qualification]] owns the case for using it on purpose. The problem is doing it by accident, letting fields pile on until the form filters by patience rather than by fit, and losing serious buyers who had less tolerance for bureaucracy than the tire-kickers who stuck around. An accidental filter is still a filter.

The evidence that fields carry real money is unusually concrete for a marketing question, because a form is cheap to test and the two best-documented cases both turn on the form itself rather than the copy around it: Expedia's optional "Company" box, and the federal student-aid form that low-income families couldn't finish without somebody sitting beside them. Neither cost showed up until someone went looking, and both were larger than any redesign on the table. The cost of a field is invisible by default and measurable on demand, so make yourself measure it.

## Complications

- **Data hunger versus completion.** Every internal team wants one more field, and each field they win costs conversions that show up on no one's dashboard, so the people asking never feel the price.
- **The invisible cost.** Abandoners leave no record; the form that repels your best buyers looks clean, because failure exits silently while success is counted.
- **Fields are priced unequally.** Email is cheap and valuable; phone number and free-text are expensive; an optional field that reads as required is a pure loss. Counting fields misses this.
- **Friction filters, but by the wrong axis if unmanaged.** A long form does screen out the uncommitted, which is sometimes the goal, but left to accrete it screens by tolerance for bureaucracy rather than by fit.
- **Now versus later.** Data you don't collect at the form you can often collect after the relationship starts, through enrichment or the first conversation, at zero conversion cost.
- **Rep convenience versus buyer patience.** Fields that make the sales handoff tidy are paid for by the buyer, who didn't agree to that trade.
- **The ask must match the trust.** The right form length depends on which rung of the ladder of asks the visitor has climbed; a form for a cold ebook and a form for a booked demo can't carry the same weight.

## Recommendations

> [!check] Treat every field as a purchase rather than a default, and make each one justify its conversion cost against the value of the data it returns; collect only what you must have to take the next step, and defer or infer the rest.

Run a per-field ledger rather than a form-length rule. For each input, ask two questions:

1. **What does it cost?** Measure the drop in completion when the field is present versus absent.
2. **What is it worth?** Measure whether the next step genuinely fails without it.

Keep the fields where value clears cost, and cut the rest. Email usually survives, because the follow-up truly needs it. Phone number usually fails at the top of the funnel, because the value is "a rep might call sooner" and the cost is a visitor who doesn't want a call yet and leaves. Free-text description almost always fails, because it asks the visitor to do your discovery work before they've committed.

Two moves make the ledger cheaper to satisfy. Defer: information you can gather during the first conversation or after signup doesn't belong on the form gating that conversation, and the rerouted question costs nothing once the relationship exists. Infer: a corporate email domain already tells you the company, and enrichment services fill in size, industry, and title from that domain alone, so don't charge a toll for data your systems can look up.

Track the size of the form to the rung the visitor has reached on the ladder of graduated asks, because the acceptable price of friction rises with intent. A cold visitor trading their email for a checklist will pay one field, maybe two. A visitor asking to book a demo has already declared high intent and will tolerate more, and here a longer form does honest qualifying work rather than accidental attrition. This is the field-level expression of [[CR-022 Friction as Qualification]]: use the ledger to add friction where intent justifies it and strip it everywhere else, so the form filters by fit instead of by fatigue.

## Implications

Govern a form by its ledger and it produces a cleaner trade than a form governed by internal requests. Completion recovers, the lead mix reflects the deliberate rung of the ask rather than the accidental sum of everyone's data wishes, and the sales handoff improves because the fields that remain are the ones that actually predict fit. The discipline also disarms the internal fight: when a team asks for a field, answer with a question rather than a shrug, what will this cost in completion and can we get it later, which most requests fail.

This feeds the rest of the conversion cluster. It gives [[CR-022 Friction as Qualification]] its instrument, since you can't tune total friction without pricing its parts, and it keeps the weight of the form matched to the rung of trust behind the click. It also sets up the measurement work: because field cost is estimable only by test, run your form ledger through the disciplined experiments [[CR-025 Experiment Design]] governs, one of the highest-return things a team can do.

The new tension is a standing negotiation rather than a solved problem. Marketing wants the form short to maximize volume; sales wants it long to pre-qualify; both are partly right, and the ledger doesn't end the argument so much as make it honest by putting a price on every field. Assign someone to own that price and defend it against the constant, reasonable pressure to add just one more box. That ownership is the ongoing cost of keeping the form a filter you designed rather than one that designed itself.

## Related Patterns

- **Above:** [[CR-022 Friction as Qualification]]
- **Below:** *(none yet)*
- **Peers:** [[CR-025 Experiment Design]] (the only honest way to price a field is to test it)

## Examples

**Expedia and the twelve-million-dollar field.** An optional "Company" field on a checkout form can quietly break the sale. Expedia's own analytics team found it, digging through bookings that failed after the customer had already clicked buy; Joe Megibow, then the company's vice president of global analytics and optimization, described the work publicly in 2010, and Jared Spool retold it until it became the standard illustration. The checkout form asked for the traveler's name, then "Company" (optional), then the billing address. A large share of customers read "Company" as the field where their bank card's associated name went, typed their bank's name, and then entered the bank's address as the billing address; the charge failed and the booking never completed. Expedia removed that single optional field, one input that returned almost no useful data, and recovered roughly twelve million dollars a year in profit. The field looked free. It was one of the most expensive things on the page, and its cost stayed invisible until someone went looking for it in the transactions that didn't happen.

**HubSpot on which fields cost the most (published by October 2010).** Dan Zarrella analyzed more than 40,000 HubSpot customers' landing pages and published the field-level result: pages asking for age, for a telephone number, or for a street address converted worse than pages that didn't, and street-level location cost more than city or state. It's evidence that fields are priced unequally rather than counted, so the edit that pays is deleting the specific field a visitor reads as intrusive. HubSpot published the ranking rather than a controlled field-count curve, so treat "shorter forms convert better" as a rule of thumb and the per-field cost as the thing you actually test. It turns the internal request from "can we add this" into "is this worth the completion it will cost," the only question the ledger asks.

**The FAFSA and the price of paperwork (H&R Block experiment, 2012).** Eric Bettinger, Bridget Terry Long, Philip Oreopoulos and Lisa Sanbonmatsu ran a randomized experiment inside H&R Block offices, where tax preparers offered some low-income families immediate help filling in the federal student-aid form and gave others only personalized information about the aid they qualified for. Help with the form made high school seniors 25 to 30 percent more likely to enroll in college. Information without help moved nothing measurable (*Quarterly Journal of Economics*, 127(3), 2012). The paperwork was the barrier, and the price of it was a year of somebody's education. Nothing about that arithmetic is specific to software or to a web form.

**Basecamp's signup (checked August 2026).** A signup that interrogates a first-time visitor filters for people willing to fill out paperwork instead of people who want the product. Basecamp defers the whole commercial ask, and its pricing page answers the credit-card question flatly: "We don't require a credit card on the Free account, or for any of the free trials." No payment field gates the first experience of the product. The company treats the signup as an on-ramp rather than an interrogation, and gathers what it needs about a customer through use rather than through boxes. It's the deferral move applied as a matter of principle: don't collect at the form what the relationship will hand you for free once it exists. What's left is a front door sized to the trust a first-time visitor actually has, which is very little.

This sits alongside the case [[CR-022 Friction as Qualification]] makes for Basecamp's price as a filter, and the two agree once you sort the friction by kind. The friction Basecamp keeps is commercial and the friction it removes is clerical. The trial runs thirty days on the per-user plan and sixty on Pro Unlimited with no card up front, and at the end of it the published price applies to everyone, with no negotiation and no quote. The qualifying question gets asked once, in money, at the moment the visitor has enough experience of the product to answer it honestly. Making a stranger answer it in advance, in form fields, asks for the same commitment before you've given them any reason to make it.
