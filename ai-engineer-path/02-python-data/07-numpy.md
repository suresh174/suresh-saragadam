# 07 — NumPy: arrays = the language of ML

Back → [Orchestration](../README.md)

---

## Small talk

In ML, almost everything becomes an **array**.  
NumPy is the classic toolkit. PyTorch tensors feel similar.

---

## Why not plain Python lists?

Lists are slow for big number crunching.  
NumPy talks to fast C under the hood + does vectorized ops.

```python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([10, 20, 30])
print(a + b)      # [11 22 33]  — element-wise
print(a * 2)      # [2 4 6]
print(a.mean())   # 2.0
```

---

## Shape is everything

```python
X = np.zeros((100, 4))  # 100 rows, 4 features
print(X.shape)          # (100, 4)
```

Always ask: *"What shape is this?"* before debugging.

---

## Useful moves

```python
# reshape
v = np.arange(6)          # [0 1 2 3 4 5]
m = v.reshape(2, 3)       # 2x3

# indexing
print(m[0, 1])            # row0 col1 → 1
print(m[:, 0])            # first column

# boolean mask
print(v[v > 2])           # [3 4 5]

# matmul
W = np.random.randn(3, 2)
x = np.random.randn(2)
y = W @ x                 # shape (3,)
```

---

## Broadcasting (short version)

NumPy stretches smaller arrays to match bigger ones when shapes play nice.

```python
m = np.ones((2, 3))
m = m + 10   # 10 stretches to all cells
```

Weird bugs often = shape mismatch. Print shapes.

---

## Interview bite

> "I think in shapes. Features are columns, samples are rows. Vectorized NumPy beats Python loops for numeric work."

---

## Checkpoint

- [ ] I created an array and printed `.shape`
- [ ] I did a matmul with `@`

Next → [08 — Pandas](./08-pandas.md)
