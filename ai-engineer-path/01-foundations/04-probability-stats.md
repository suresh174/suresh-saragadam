# 04 — Probability & stats for ML

Back → [Orchestration](../README.md)

---

## Small talk

Models don't "know." They **guess with confidence shaped by data**.

Probability = language of that guessing.

---

## Words you'll hear

| Word | Friend meaning |
|------|----------------|
| **Probability** | Chance something happens (0 to 1) |
| **Distribution** | How values are spread |
| **Mean / median** | Center of the data |
| **Variance / std** | How spread out |
| **Prior / posterior** | What you believed before / after seeing evidence (Bayes vibe) |

---

## Why ML cares

1. **Labels are noisy** — people disagree, sensors fail  
2. **Softmax** outputs look like probabilities  
3. **Loss functions** often come from "maximize likelihood"  
4. **A/B tests** and eval need stats thinking  

---

## Confusion matrix friends (preview)

For spam vs not spam:

- **False positive**: said spam, but it wasn't (angry user)  
- **False negative**: said ok, but it was spam (inbox trash)

Which hurts more depends on the product. That's stats + product sense.

---

## Tiny example

Coin is fair? Flip 10 times, get 9 heads.

Possible stories:

- Weird luck (probability of weird luck is small but not zero)  
- Coin is biased  

ML does this constantly: "Given this data, which model story fits better?"

---

## Bayes in one breath (optional but cool)

```
Belief after data ∝ Belief before × How well data fits that belief
```

Spam filters historically used this vibe: given words in email, what's P(spam)?

---

## Interview bite

> "I treat model outputs as uncertain. I pick metrics based on the cost of false positives vs false negatives, not just accuracy."

---

## Checkpoint

- [ ] I can explain FP vs FN with a product example
- [ ] I know mean vs variance in one line each

Next → [05 — Gradients](./05-calculus-gradients.md)
