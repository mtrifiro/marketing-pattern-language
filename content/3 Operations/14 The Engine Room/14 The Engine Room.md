---
type: chapter-introduction
altitude: operations
status: active
created: 2026-08-01
modified: 2026-08-08
tags: [chapter, operations]
---

# The Engine Room

A demand operation needs common definitions and one memory before its parts can cooperate. This chapter settles what each stage means and where customer history lives. It then defines how a signal becomes a timely response. Tools enter after those decisions because each tool has to support a named job in the system.

Two orders apply. The conceptual order begins with stage definitions: the record exists to hold those states and transitions. The installation order puts a shared record in place early so every response system can write to the same account history. Define the model first; configure its common memory before adding the surrounding machinery.

## From Stage Definition to Data Layer

| Pattern | Use in the sequence |
|---|---|
| [[OPS-005 Funnel Stages, Yours]] | Give every stage an observable entry and exit criterion agreed by the teams that hand work across it. |
| [[OPS-006 CRM as Shared Memory]] | Store customer interactions against one account record and make handoff commitments visible. |
| [[OPS-007 Lead Scoring and Routing]] | Use fit and intent to set a threshold that routes qualifying demand to a named owner within a stated window. |
| [[OPS-008 Nurture Architecture]] | Hold demand that hasn't reached the next stage and let behavior determine when it advances. |
| [[OPS-009 Messaging Cadence]] | Keep the central claim stable while controlling how often each audience hears it. |
| [[OPS-010 Minimum Viable Martech Stack]] | Add a tool only when a required job remains uncovered and the tool can write back to the shared system. |
| [[OPS-011 Data Warehouse Decisions]] | Add a joined analytical layer when questions connecting product use to account revenue exceed what the CRM can answer. |

The table gives a practical installation path. The containment logic runs in the other direction: the record and tools are smaller parts inside the stage model they implement. Keeping both orders visible removes the false choice between defining the system and installing its base.

## The Two Data Layers

[[OPS-005 Funnel Stages, Yours]] owns the state definitions. [[OPS-007 Lead Scoring and Routing]] decides which evidence advances a person or account and who receives it. [[OPS-008 Nurture Architecture]] governs what happens while the evidence remains below that threshold. [[OPS-009 Messaging Cadence]] controls the timing of the message across those states.

[[OPS-006 CRM as Shared Memory]] is the operational account record. [[OPS-011 Data Warehouse Decisions]] joins the sources needed for analysis when product use and financial history sit outside that record. The CRM supports coordinated action; the warehouse supports questions that require data across systems.

[[OPS-010 Minimum Viable Martech Stack]] owns the rule for adding or removing tools. It doesn't replace the shared record or the warehouse decision. It keeps each purchase tied to a job the system can name.

## Handoff to Content Operations

[[15 Content Operations]] inherits defined stages and a common memory. It can maintain a stage-aware catalog at a sustainable publishing pace. The engine supplies demand state; the content system supplies the assets that help a buyer move.
