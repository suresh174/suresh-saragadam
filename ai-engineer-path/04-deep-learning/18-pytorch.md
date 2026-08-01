# 18 — PyTorch starter

Back → [Orchestration](../README.md)

---

## Small talk

PyTorch = popular DL framework. Feels like NumPy + GPU + autograd.

---

## Tensors

```python
import torch

x = torch.tensor([[1.0, 2.0], [3.0, 4.0]])
print(x.shape)
y = x * 2
```

Move to GPU if you have one:

```python
device = "cuda" if torch.cuda.is_available() else "cpu"
x = x.to(device)
```

---

## Tiny net

```python
import torch.nn as nn

class MLP(nn.Module):
    def __init__(self, in_dim, hidden, out_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, hidden),
            nn.ReLU(),
            nn.Linear(hidden, out_dim),
        )

    def forward(self, x):
        return self.net(x)

model = MLP(4, 16, 3)
opt = torch.optim.Adam(model.parameters(), lr=1e-3)
loss_fn = nn.CrossEntropyLoss()
```

---

## One training step

```python
model.train()
opt.zero_grad()
logits = model(xb)          # xb shape (batch, 4)
loss = loss_fn(logits, yb)  # yb shape (batch,)
loss.backward()
opt.step()
```

Eval mode:

```python
model.eval()
with torch.no_grad():
    logits = model(xb)
```

`no_grad` = faster, no graph for grads. Use for inference.

---

## Dataset / DataLoader vibe

```python
from torch.utils.data import DataLoader, TensorDataset

ds = TensorDataset(X_tensor, y_tensor)
loader = DataLoader(ds, batch_size=32, shuffle=True)
```

---

## Practice task

Train MLP on Iris tensors. Beat or match sklearn baseline.  
Feel the loop. Print loss each epoch.

---

## Interview bite

> "I define `nn.Module`, write `forward`, and train with loss.backward + optimizer.step. eval() + no_grad for inference."

---

## Checkpoint

- [ ] I ran a forward pass and a backward pass
- [ ] I know train vs eval mode

Next → [19 — CNNs](./19-cnn.md)
