# 13 — Overfitting, bias, variance

Back → [Orchestration](../README.md)

---

## Small talk

**Overfitting** = model memorized the homework, failed the exam.  
Train score sky high. Test score sad.

**Underfitting** = model too simple. Bad on train *and* test.

---

## Bias–variance (friend version)

| | High bias | High variance |
|---|-----------|---------------|
| Feel | Underfits | Overfits |
| Cause | Too simple | Too complex / tiny data |
| Train error | High | Low |
| Test error | High | High |

You want the sweet middle.

---

## How you fight overfitting

1. More data (best drug when possible)  
2. Simpler model  
3. Regularization (penalty on big weights)  
4. Dropout (DL)  
5. Early stopping  
6. Cross-validation to tune fairly  
7. Data augmentation (images/text)

---

## Learning curves (mental picture)

- Train ↑ and val ↑ together → maybe underfit, try richer model  
- Train ↑↑ but val flat/down → overfit  

---

## Tiny example

Student memorizes exact quiz questions → fails reworded quiz.  
That's overfit.  
Student learns ideas → handles new wording. Generalizes.

---

## Interview bite

> "Overfitting means low train error, high generalization error. I use held-out validation, regularization, and simpler baselines before adding complexity."

---

## Checkpoint

- [ ] I can spot overfit from train vs val scores
- [ ] I listed 3 ways to reduce overfitting

Next → [14 — Metrics](./14-metrics.md)
