# 27 — Fine-tuning (when prompts aren't enough)

Back → [Orchestration](../README.md)

---

## Small talk

Fine-tuning = continue training a model on **your** examples so it leans your style/task.

Not always needed. Order of ops:

1. Better prompt / examples  
2. RAG for knowledge  
3. Fine-tune for style, format, domain language, latency/cost via smaller model  

---

## Flavors

| Kind | Feel |
|------|------|
| **Full fine-tune** | Update all weights — expensive |
| **LoRA / QLoRA** | Train tiny adapter layers — popular, cheaper |
| **Instruction tune** | Teach follow-instructions style |
| **Domain tune** | Legal/medical tone & vocab (still need safety!) |

---

## Data you need

Quality > quantity. Thousands of clean input→output pairs beat 100k garbage.

```json
{"input": "Refund policy for digital goods?", "output": "Digital goods are non-refundable after download..."}
```

For chat: messages format with roles.

---

## LoRA in one breath

Freeze big model. Inject small trainable matrices.  
Save/load adapters. Swap adapters per task sometimes.

QLoRA = quantized base + LoRA → fine-tune on smaller GPUs.

---

## Risks

- Catastrophic forgetting  
- Learning bad behavior from bad data  
- License / data privacy issues  
- Thinking fine-tune replaces RAG for facts (usually no — facts change; retrieve them)

---

## Interview bite

> "I fine-tune when I need consistent behavior or a smaller specialized model. I prefer LoRA, invest in clean datasets, and still use RAG for living knowledge."

---

## Checkpoint

- [ ] I know prompt → RAG → fine-tune order
- [ ] I can say what LoRA roughly does

Next → [28 — Agents](./28-agents.md)
