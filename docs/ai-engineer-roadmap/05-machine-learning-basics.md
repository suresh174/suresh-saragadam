# 05 — Machine Learning Basics

**Checkpoint:** Explain train/validation/test split in 30 seconds. Tick when done.

---

## Small talk version

ML = show data, learn pattern, predict new data.

Three words to know:
- **Features** — inputs (email text)
- **Labels** — outputs (spam / not spam)
- **Loss** — how wrong the model is

Lower loss = better (during training).

---

## Train / Val / Test

| Set | Purpose |
|-----|---------|
| Train | Model learns here |
| Validation | Tune hyperparams, pick model |
| Test | Final score — touch once |

**Leakage** = test info sneaks into train → fake good scores → prod disaster.

---

## Overfitting vs underfitting

- **Overfit** — memorizes train, fails on new data (too complex)
- **Underfit** — too simple, can't learn pattern

Fix overfit: more data, regularization, simpler model, early stopping.

---

## Classic algorithms (know names)

| Algorithm | Use |
|-----------|-----|
| Linear regression | Numbers |
| Logistic regression | Binary class |
| Random forest | Tabular, robust |
| k-NN | Simple similarity |

LLMs replaced a lot of NLP classifiers. Tabular ML still huge in industry.

---

## Deep dive — supervised learning loop

```
1. Collect labeled data
2. Define loss function
3. Initialize model weights (random)
4. Forward pass → prediction
5. Compute loss
6. Backward pass → gradients
7. Update weights (optimizer step)
8. Repeat until val loss stops improving
```

Pretrained LLMs skip steps 1–8 for you on general language. Fine-tuning runs a shorter version on your labels.

---

## Interview bite

**Q: When not use an LLM?**  
**A:** Small labeled dataset, strict latency/cost, interpretability needed, or task is simple classification on tabular features — classical ML may win.

---

## Mini exercise

Name one problem for each: classification, regression, clustering. Which needs labels?
