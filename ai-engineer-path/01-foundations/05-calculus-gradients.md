# 05 — Calculus vibe check (gradients)

Back → [Orchestration](../README.md)

---

## Small talk

You don't need to integrate for fun on weekends.

You need one idea: **gradient = which way to nudge weights to reduce error**.

---

## The hill story

Imagine loss = height of a hill.  
You want the valley (low error).

Gradient tells you: "uphill is that way."  
So you step the **opposite** way. That's **gradient descent**.

```
weight = weight - learning_rate * gradient
```

- Big learning rate → big steps (might overshoot)  
- Small learning rate → tiny steps (slow but safer)

---

## Why "backpropagation"?

Neural net has many layers.  
Error at the end must tell **every** weight how to change.

Backprop = smart chain-rule bookkeeping so each weight gets its gradient.

You rarely code backprop by hand. PyTorch does it.  
You *should* know what it's doing.

---

## Chain rule (tiny)

If `y = f(g(x))`, then:

```
dy/dx = dy/dg * dg/dx
```

Deep net = long chain. Same idea, more multiplies.

---

## Overkill math? Skip this part.

If you want more: partial derivatives, Jacobian, Hessian.  
For AI engineering interviews, **hill + step opposite gradient + learning rate** is usually enough. Add Adam optimizer name-drop: "adaptive learning rates per parameter."

---

## Interview bite

> "Training minimizes a loss with gradient descent. Backprop computes gradients through the network via the chain rule. Optimizers like Adam tune how we step."

---

## Checkpoint

- [ ] I can explain gradient descent with the hill metaphor
- [ ] I know learning rate too big = bad

Next → [06 — Python crash](../02-python-data/06-python-crash.md)
