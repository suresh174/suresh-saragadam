# 21 — Transformers (the engine of modern AI)

Back → [Orchestration](../README.md)

---

## Small talk

Transformers power LLMs, many vision models, speech — basically the modern stack.

Big idea: **attention** = each token looks at other tokens and decides what's relevant.

---

## Self-attention in small talk

Sentence: `"The cat sat on the mat"`

When processing `cat`, attention might peek at `sat` and `mat` to gather context.

Each token builds a weighted mix of other tokens' info.

---

## Detail mode — Q, K, V

For each token we make three vectors:

- **Query (Q)** — what am I looking for?  
- **Key (K)** — what do I contain?  
- **Value (V)** — what do I pass along if selected?  

Scores ≈ `Q · K` (scaled), softmax → weights, then weighted sum of V.

**Multi-head** = several attention specialists in parallel, then combine.

---

## Positional info

Attention alone doesn't know order.  
We add **positional encodings** (or relative position bias / RoPE in modern LLMs) so order isn't lost.

---

## Encoder vs decoder vs both

| Flavor | Use |
|--------|-----|
| Encoder (BERT-like) | Understand text, classify, embed |
| Decoder (GPT-like) | Generate next token |
| Encoder–decoder (T5-like) | Translate, summarize classic style |

LLMs you chat with ≈ stacked **decoder** blocks trained to predict next token.

---

## Why so good?

- Parallel over sequence (unlike RNN)  
- Direct long-range links via attention  
- Scales absurdly well with data + compute  

Cost: attention is roughly O(n²) in sequence length — long context is expensive. Lots of research to fix that.

---

## Interview bite

> "Transformers use self-attention so each position aggregates information from others via QKV. Positional encodings supply order. GPT-style models are decoder stacks trained with next-token prediction."

---

## Checkpoint

- [ ] I can explain attention without equations
- [ ] I know GPT ≈ decoder LM

Next → [22 — NLP basics](../05-nlp-llms/22-nlp-basics.md)
