# 14 — Fine-Tuning

**Checkpoint:** List 3 reasons to fine-tune vs 3 reasons to stick with prompting/RAG. Tick when done.

---

## Small talk version

Fine-tune = extra training on **your** examples so model behaves your way.

Use when:
- Same format 10,000 times (JSON extraction)
- Domain jargon (medical, legal)
- Style/tone must be exact

Don't use when:
- Knowledge changes daily → **RAG**
- Few examples → **prompting**
- No budget/GPU → **API + prompts**

---

## Types

| Type | What changes | Cost |
|------|------------|------|
| Full fine-tune | All weights | $$$ |
| LoRA | Small adapter layers | $ |
| Distillation | Small model mimics big | Medium |

**LoRA** = industry default for custom behavior.

---

## Data format (instruction tuning)

```json
{
  "messages": [
    {"role": "system", "content": "Extract entities as JSON."},
    {"role": "user", "content": "John works at Acme."},
    {"role": "assistant", "content": "{\"name\":\"John\",\"company\":\"Acme\"}"}
  ]
}
```

Quality > quantity. 500 golden examples beat 50k noisy ones.

---

## Deep dive — fine-tune pipeline

```
1. Collect & clean examples
2. Train/val split
3. Choose base model (often already instruction-tuned)
4. Run LoRA training (epochs, learning rate)
5. Eval on held-out set
6. Deploy adapter or merged weights
```

OpenAI also offers **fine-tuning API** for GPT models — upload JSONL, they train.

### When fine-tune beats RAG

- Task is **transformation** (format, classify, rewrite) not **lookup**
- Retrieved text would confuse model
- Latency: smaller fine-tuned model vs huge prompt

### When RAG beats fine-tune

- Facts update often
- Need citations
- Can't afford retrain cycle

---

## Interview bite

**Q: How do you prevent catastrophic forgetting in fine-tuning?**  
**A:** Use LoRA on limited layers, lower learning rate, mix general examples with task data, eval on general benchmarks not just task.

---

## Mini exercise

Write 5 training examples for a model that converts angry customer emails into polite internal tickets.
