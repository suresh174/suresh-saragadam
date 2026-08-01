# 09 — Data thinking (train / val / test)

Back → [Orchestration](../README.md)

---

## Small talk

The #1 beginner trap: **test on the same data you trained on**.  
Model looks genius. Production: clown show.

---

## Three buckets

| Split | Job |
|-------|-----|
| **Train** | Learn patterns |
| **Validation** | Tune knobs (lr, depth, prompts…) |
| **Test** | Final honest exam — touch once near the end |

Classic: 70 / 15 / 15 or 80 / 10 / 10. Not sacred — just be consistent.

```python
from sklearn.model_selection import train_test_split

X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)
X_val, X_test, y_val, y_test = train_test_split(
    X_temp, y_temp, test_size=0.5, random_state=42, stratify=y
)
```

`stratify=y` keeps class ratios similar across splits. Nice for classification.

---

## Leakage (the silent killer)

**Data leakage** = train saw info it shouldn't have at prediction time.

Examples:

- Using "future" columns (paid_at date to predict will_pay)  
- Scaling using mean of **all** data including test  
- Same user in train and test for personalized stuff (sometimes wrong)

Fix mindset: *"At prediction time in the real world, do I have this field?"*

---

## For LLMs / RAG too

Same energy:

- Don't eval your RAG on docs you secretly stuffed into the prompt by accident  
- Keep a held-out question set  
- Version your eval set like gold  

---

## Interview bite

> "I split data first, fit preprocessors on train only, and watch for leakage. Val tunes; test reports."

---

## Checkpoint

- [ ] I can explain why test ≠ train
- [ ] I know one leakage example

Next → [10 — Supervised vs Unsupervised](../03-classical-ml/10-supervised-unsupervised.md)
