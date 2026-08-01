# 19 — CNNs (images)

Back → [Orchestration](../README.md)

---

## Small talk

Images are big grids. Fully connected layers on every pixel = too many weights + ignores local patterns.

**CNN** = slide small filters over the image to find edges → textures → parts → objects.

---

## Key pieces

| Piece | Job |
|-------|-----|
| **Convolution** | Local filter detector |
| **ReLU** | Nonlinearity |
| **Pooling** | Shrink spatial size, keep strong signals |
| **Stride / padding** | Control size |

Early layers ≈ edges. Deeper ≈ object-ish stuff. (Rough story, still useful.)

---

## Tiny PyTorch sketch

```python
import torch.nn as nn

cnn = nn.Sequential(
    nn.Conv2d(3, 16, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Conv2d(16, 32, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.AdaptiveAvgPool2d(1),
    nn.Flatten(),
    nn.Linear(32, 10),
)
```

Input shape often `(batch, channels, height, width)`.

---

## Transfer learning (how pros start)

Don't train from scratch on 200 photos.

1. Take ResNet pretrained on ImageNet  
2. Replace last layer for your classes  
3. Fine-tune gently  

Huge win.

---

## AI eng angle

Today many vision apps also use **vision transformers** or multimodal LLMs.  
Still: CNN vocabulary shows up in interviews and older stacks.

---

## Interview bite

> "CNNs share filters across space to learn local features efficiently. For small datasets I prefer pretrained backbones and fine-tuning."

---

## Checkpoint

- [ ] I know why Conv beats giant Linear on images
- [ ] I heard "transfer learning" and get why

Next → [20 — RNNs](./20-rnn.md)
