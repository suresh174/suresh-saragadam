# 16 — Neural nets: the big idea

Back → [Orchestration](../README.md)

---

## Small talk

A neural net is a stack of **linear transforms + nonlinear squish**.

Each layer:

```
z = W x + b
h = activation(z)   # ReLU, GELU, etc.
```

Stack layers → can learn wild curves and patterns.

---

## Why activation?

Without nonlinearity, many layers collapse into **one** big linear map. Boring. Weak.

ReLU = `max(0, z)` — simple and common.

---

## Picture

```
input features
   → hidden layer
   → hidden layer
   → output (scores / probabilities)
```

Deep = many hidden layers. That's "deep learning."

---

## What gets learned?

The numbers in `W` and `b` (parameters).  
Start random → training nudges them using gradients → loss drops.

---

## Universal approx vibe

With enough width/depth + nonlinearity, nets can approximate lots of functions.  
"Can" ≠ "will with your tiny dataset and bad training." Engineering still matters.

---

## When to use DL vs classical

| Situation | Lean |
|-----------|------|
| Small tabular, strong features | Trees / linear |
| Images, audio, raw text | DL |
| Need interpretability | Often classical / linear |
| Tons of data + compute | DL shines |

---

## Interview bite

> "A neural network composes linear layers and nonlinear activations. Depth + nonlinearity lets it learn hierarchical features; training fits the weights via gradient descent."

---

## Checkpoint

- [ ] I can write `z = Wx+b` then activation
- [ ] I know why we need nonlinearity

Next → [17 — Backprop & loss](./17-backprop-loss.md)
