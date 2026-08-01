# 10 — Supervised vs Unsupervised

Back → [Orchestration](../README.md)

---

## Small talk

Two big families in classical ML.

| | Supervised | Unsupervised |
|---|------------|--------------|
| Labels? | Yes — teacher gives answers | No labels |
| Goal | Predict target | Find structure |
| Examples | Price, spam, churn | Clusters, anomalies |

---

## Supervised — "here's X, here's y"

```
emails + spam/not spam → learn to label new emails
houses + prices → learn to price new houses
```

Subflavors:

- **Regression** → y is a number  
- **Classification** → y is a category  

---

## Unsupervised — "here's X, good luck"

```
customers with behavior features → find natural groups
server metrics → spot weird days
```

Common tools: K-Means, PCA, anomaly detectors.

---

## Semi / self / reinforcement (names only for now)

- **Semi-supervised**: few labels, lots of unlabeled  
- **Self-supervised**: make labels from the data itself (LLMs do this — predict next token)  
- **RL**: learn from rewards (game wins, thumbs up)

---

## Product question that picks the family

> Do we have trusted labels for the thing we want to predict?

Yes → supervised.  
No → unsupervised or LLM-with-eval or active labeling plan.

---

## Checkpoint

- [ ] I can sort a problem into supervised vs unsupervised
- [ ] I know regression ≠ classification

Next → [11 — Regression](./11-regression.md)
