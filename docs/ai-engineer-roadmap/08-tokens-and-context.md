# 08 — Tokens & Context

**Checkpoint:** Know your model's context limit and price per 1M tokens. Tick when done.

---

## Small talk version

Models don't read "words." They read **tokens** — chunks of text.

`"ChatGPT"` might be 1 token. `"unbelievable"` might be 2–3.

**Context window** = max tokens in one request (input + output).  
Example: 128k context ≈ ~100 pages of text — but attention cost grows.

---

## Why it matters for you

1. **Billing** — charged per token
2. **Truncation** — long docs get cut → bad answers
3. **RAG** — you must fit retrieved chunks + question in window

---

## Count tokens in Python

```python
import tiktoken

enc = tiktoken.encoding_for_model("gpt-4o-mini")
text = "Hello, how many tokens am I?"
tokens = enc.encode(text)
print(len(tokens))
```

---

## Context budget template

```
Total context:     128,000 tokens
− System prompt:     500
− User question:     200
− Retrieved chunks:  8,000
− Reserved for reply: 2,000
= Available for more chunks: ~119,300
```

Plan this in every RAG design.

---

## Deep dive — context rot & long context

Models can *accept* 128k tokens but **quality** may drop in the middle ("lost in the middle" research). Don't dump whole books — **retrieve** the right parts.

Techniques:
- **Chunking** — split docs into passages
- **Summarize** — compress history in long chats
- **Sliding window** — only last N messages

---

## Interview bite

**Q: User uploads 500-page PDF. Your approach?**  
**A:** Chunk, embed, index. On query, retrieve top-k relevant chunks only. Never stuff full PDF in prompt. Optionally hierarchical summarize for overview questions.

---

## Mini exercise

Pick a model on OpenAI pricing page. Calculate cost for 1000 users × 10 questions/day × 2000 tokens each.
