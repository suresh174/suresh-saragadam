# 07 — How LLMs Work

**Checkpoint:** Draw "text in → tokens → transformer → text out" on paper. Tick when done.

---

## Small talk version

LLM = autocomplete at super scale.

Feed: `"The capital of France is"`  
Model predicts: `" Paris"` (then next token, then next…)

It read billions of sentences first (pretraining). It didn't "look up" Paris — it learned the pattern.

---

## Key pieces

| Piece | What |
|-------|------|
| Tokenizer | Text → token IDs |
| Embedding layer | IDs → vectors |
| Transformer blocks | Attention + feed-forward |
| Output head | Vectors → vocab probabilities |

---

## Pretrain vs inference

| Phase | What happens |
|-------|----------------|
| Pretrain | Learn language from huge corpus (expensive, once) |
| Inference | Generate answers for users (you pay per token) |
| Fine-tune | Extra training on your data (optional) |

---

## Temperature & sampling

- **Temp 0** — deterministic, same answer each time
- **Temp 0.7** — creative, varied
- **Top-p** — only sample from top probability mass

Prod support bot → low temp. Creative writing → higher.

---

## Deep dive — transformer attention (readable version)

Each token asks: *"Which other tokens should I pay attention to?"*

Example: In `"The cat sat on the mat because it was tired"` — **it** should link to **cat**.

Attention computes weights between all pairs of tokens in the context window. Stacked 32–80+ layers → deep representations.

**Why scale matters:** More params + more data → better general language ability. That's the GPT jump.

### Open weights vs API

| Approach | Pros | Cons |
|----------|------|------|
| API (OpenAI, etc.) | Fast, best models | Cost, data policy |
| Local (Llama, Mistral) | Control, privacy | GPU, ops burden |

AI engineers pick per product constraints.

---

## Interview bite

**Q: Why do LLMs hallucinate?**  
**A:** They're trained to predict plausible text, not verify facts. No guaranteed grounding unless you add RAG, tools, or explicit retrieval.

---

## Mini exercise

Open [tiktokenizer.vercel.app](https://tiktokenizer.vercel.app). Paste a paragraph. Note token count vs word count.
