# 03 — Linear algebra in plain talk

Back → [Orchestration](../README.md)

---

## Small talk

ML is mostly **numbers in tables**. Linear algebra = how we name and move those tables.

You don't need to become a math professor. You need to not panic when someone says "dot product" or "matrix multiply."

---

## The cast

| Name | Picture | In code |
|------|---------|---------|
| **Scalar** | One number | `3.5` |
| **Vector** | List of numbers | `[1, 2, 3]` |
| **Matrix** | Table of numbers | 2D array |
| **Tensor** | Fancy n-dim array | images, batches |

Example: one image 224×224 RGB → tensor shape `(3, 224, 224)`.  
A batch of 32 images → `(32, 3, 224, 224)`.

---

## Dot product (why you care)

Two vectors → one number = "how aligned are they?"

```
a = [1, 2]
b = [3, 4]
dot = 1*3 + 2*4 = 11
```

**Embeddings** use this idea: similar meaning → vectors point similar ways → high similarity.

---

## Matrix × vector (the ML move)

A layer in a neural net is often:

```
output = W @ x + b
```

- `x` = your input vector  
- `W` = weights (matrix)  
- `b` = bias  

That's it. Deep learning = stack many of these + nonlinear glue.

---

## Tiny NumPy feel

```python
import numpy as np

x = np.array([1.0, 2.0, 3.0])
W = np.array([[0.1, 0.2, 0.3],
              [0.4, 0.5, 0.6]])  # 2x3
b = np.array([0.01, 0.02])

y = W @ x + b
print(y)  # shape (2,)
```

---

## Interview bite

> "A linear layer is a matrix multiply plus bias. Dot products measure similarity between vectors — that's how retrieval and attention feel under the hood."

---

## Checkpoint

- [ ] I know scalar / vector / matrix / tensor
- [ ] I can explain `@` (matmul) in one line
- [ ] I ran the NumPy snippet

Next → [04 — Probability & stats](./04-probability-stats.md)
