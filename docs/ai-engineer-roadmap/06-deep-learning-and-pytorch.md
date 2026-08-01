# 06 — Deep Learning & PyTorch

**Checkpoint:** Run a 3-line PyTorch tensor op OR explain what a neuron does. Tick when done.

---

## Small talk version

Deep learning = many layers of simple math stacked.

**Neuron:** `output = activation(weights · inputs + bias)`  
**Network:** neurons wired in layers  
**Training:** adjust weights to reduce loss

PyTorch = the toolbox everyone uses (with TensorFlow/JAX as cousins).

---

## Tensors in 30 seconds

```python
import torch

x = torch.tensor([1.0, 2.0, 3.0])
y = x * 2 + 1
print(y)  # tensor([3., 5., 7.])
```

N-dimensional arrays. GPU moves them fast.

---

## Tiny network sketch

```python
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(10, 64),   # 10 inputs → 64 hidden
    nn.ReLU(),
    nn.Linear(64, 2),    # 64 → 2 classes
)
```

`Linear` = matrix multiply + bias. `ReLU` = max(0, x).

---

## Training loop (pattern)

```python
for epoch in range(10):
    pred = model(X_train)
    loss = loss_fn(pred, y_train)
    loss.backward()      # gradients
    optimizer.step()     # update weights
    optimizer.zero_grad()
```

You won't write this for GPT-4. You'll write it for **custom heads** or fine-tune scripts.

---

## Deep dive — what transformers added

Old NLP: CNNs/RNNs on words.  
Transformers: **self-attention** — every token looks at every other token in one parallel pass.

```
Input tokens → Embedding + Positional encoding
            → Stack of Transformer blocks (attention + FFN)
            → Linear head → next token probabilities
```

**Pretrain:** predict next token on internet text (billions of params).  
**Inference:** sample tokens one by one (or spec decode for speed).

As AI engineer you **call** this stack via API. As ML engineer you **train** it.

---

## Interview bite

**Q: What is a forward pass?**  
**A:** Input flows through layers to produce output. Backward pass computes gradients for training. At inference you usually only forward pass.

---

## Mini exercise

Install PyTorch (`pip install torch`), create two random tensors shape `(3, 4)`, multiply with `@`. Print shape of result.
