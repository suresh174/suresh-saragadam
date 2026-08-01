# 14 — Metrics that interviewers love

Back → [Orchestration](../README.md)

---

## Small talk

If you only say "accuracy," interviewers poke holes.  
Pick metrics that match the **cost of being wrong**.

---

## Classification cheat sheet

Imagine 100 emails, 10 are spam.

| Metric | Meaning |
|--------|---------|
| **Accuracy** | Overall % correct |
| **Precision** | Of predicted spam, how many really spam? |
| **Recall** | Of real spam, how many did we catch? |
| **F1** | Harmonic mean of precision & recall |
| **ROC-AUC** | Ranking quality across thresholds |

```
Precision = TP / (TP + FP)
Recall    = TP / (TP + FN)
```

- High precision: few false alarms  
- High recall: miss few real positives  

Cancer screening → want high recall.  
Show "are you sure delete?" → maybe precision matters more.

---

## Regression cheat sheet

| Metric | Feel |
|--------|------|
| **MAE** | Average absolute miss — human friendly |
| **MSE / RMSE** | Punishes big misses more |
| **R²** | How much variance explained (careful with misuse) |

---

## LLM / GenAI metrics (preview)

Exact match often fails. People use:

- Human rubrics  
- LLM-as-judge (careful)  
- Task metrics (did JSON parse? citation grounded?)  
- Latency & cost  

More in Phase 5 eval note.

---

## Interview drill

They ask: "Model is 99% accurate. Good?"  
You ask: "What's the base rate? What's FP vs FN cost?"

That answer sounds senior.

---

## Checkpoint

- [ ] I can define precision and recall without notes
- [ ] I know when accuracy is misleading

Next → [15 — sklearn lab](./15-sklearn-lab.md)
