# 17 — Backprop & loss (why it learns)

Back → [Orchestration](../README.md)

---

## Small talk

Training loop in one breath:

1. **Forward**: input → predictions  
2. **Loss**: how wrong?  
3. **Backward**: gradients for each weight  
4. **Step**: update weights  
5. Repeat  

---

## Common losses

| Task | Loss you'll hear |
|------|------------------|
| Regression | MSE / L1 |
| Classification | Cross-entropy |
| Embeddings | Contrastive / InfoNCE (later) |
| LLMs | Cross-entropy on next token |

Cross-entropy punishes confident wrong answers hard. Good.

---

## Pseudocode

```python
for batch in data:
    pred = model(batch.x)
    loss = loss_fn(pred, batch.y)
    optimizer.zero_grad()
    loss.backward()      # backprop
    optimizer.step()     # update weights
```

That's the heartbeat of PyTorch training.

---

## Softmax + cross-entropy (classification)

Raw scores (logits) → softmax → probabilities.  
Loss compares that distribution to the true class.

In practice: `CrossEntropyLoss` wants logits + integer labels. Don't softmax twice.

---

## Vanishing / exploding gradients (name-drop)

Deep stacks can make gradients tiny or huge.  
Modern fixes: ResNets, careful init, normalization, good activations, clipping.

---

## Detail mode — backprop intuition

Loss depends on last layer weights directly.  
Earlier layers affect the loss *through* later layers.  
Chain rule multiplies local derivatives along the path.

Autodiff frameworks build a graph of ops during forward, then walk it backward. You write forward; they gift gradients.

---

## Interview bite

> "We minimize a loss with SGD/Adam. Backward computes ∂loss/∂weight; the optimizer applies the update. I match loss to the task — cross-entropy for classification."

---

## Checkpoint

- [ ] I can recite the 4-step training loop
- [ ] I know not to double-softmax with CrossEntropyLoss

Next → [18 — PyTorch](./18-pytorch.md)
