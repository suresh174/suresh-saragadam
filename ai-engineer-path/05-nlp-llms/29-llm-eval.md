# 29 — Eval for LLMs (don't ship vibes)

Back → [Orchestration](../README.md)

---

## Small talk

"It felt good in the chat box" is not a release bar.

You need a **repeatable eval set** and scores you can compare when prompts/models change.

---

## Build a golden set

50–200 real questions (more later) with:

- Ideal answer or rubric  
- Allowed sources / docs  
- Tags (billing, tech, edge-case)  

Include nasty cases: empty retrieval, conflicting docs, injection attempts.

---

## Metric menu

| Type | Example |
|------|---------|
| Automatic exact | JSON valid? key present? |
| Overlap | BLEU/ROUGE (weak alone for chat) |
| Groundedness | Claim supported by retrieved chunk? |
| Retrieval | Hit@k, MRR |
| Judge model | Second LLM scores with rubric |
| Human | Spot checks weekly |
| Ops | Latency p95, cost / request, tool error rate |

---

## Online vs offline

- **Offline**: run suite on every prompt change (CI)  
- **Online**: thumbs, escalation rate, CSAT  

Both. Offline catches regressions before users do.

---

## Experiment discipline

Change **one** thing at a time (prompt OR model OR chunk size).  
Log version IDs. Keep a leaderboard markdown/CSV.

---

## Interview bite

> "I maintain a golden eval set with rubrics, measure groundedness and task success, and gate deploys on offline scores plus latency/cost budgets."

---

## Checkpoint

- [ ] I sketched 10 eval questions for a pretend product
- [ ] I know offline eval ≠ vibe check

Next → [30 — Notebook to API](../06-mlops/30-notebook-to-api.md)
