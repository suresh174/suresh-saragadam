# 04 — Math You Actually Need

**Checkpoint:** Compute dot product of two 3D vectors by hand or in NumPy. Tick when done.

---

## Small talk version

You won't derive backprop on paper. You need:

- **Vectors** — embeddings are long lists of numbers
- **Dot product** — measures similarity
- **Softmax** — turns scores into probabilities (attention)
- **Gradient** — "which direction improves the loss" (training intuition)

That's 80% of interview math for AI engineers.

---

## Vectors = lists with meaning

```python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Dot product — related to similarity
dot = np.dot(a, b)  # 1*4 + 2*5 + 3*6 = 32
```

Embeddings: `["cat", "dog"]` might be vectors in 1536 dimensions. Similar words → similar direction.

---

## Cosine similarity (the one RAG uses)

```python
def cosine(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
```

Score near **1** = very similar. Near **0** = unrelated.

---

## Softmax — intuition

Input: raw scores `[2, 1, 0.1]`  
Output: probabilities that sum to 1 → `[0.66, 0.24, 0.10]`

LLMs use this at every token to pick the next word.

---

## Deep dive — why dot product shows up everywhere

**Attention:** Query dot Key → how much to focus on each token.  
**Embeddings:** Query doc dot stored vectors → retrieval ranking.  
**Loss:** Compare predicted vs true distribution.

One operation. Many names. Learn the intuition once.

### Matrix multiply (one line)

`Y = X @ W` — batch of vectors times weight matrix. GPUs are built for this. Transformers are stacks of these + softmax.

You don't implement it. You know **it's linear algebra at scale**.

---

## Interview bite

**Q: How does semantic search work mathematically?**  
**A:** Embed query and documents into vectors. Rank documents by cosine similarity (or dot product on normalized vectors). Return top-k.

---

## Mini exercise

```python
query = np.array([0.1, 0.9, 0.0])
docs = [
    np.array([0.2, 0.8, 0.1]),
    np.array([0.9, 0.1, 0.0]),
]
# Which doc matches query? Print index with highest cosine.
```
