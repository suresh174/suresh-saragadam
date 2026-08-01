# 11 — RAG (Retrieval Augmented Generation)

**Checkpoint:** Explain RAG in 4 steps without notes. Build a toy version or use AI Explorer. Tick when done.

---

## Small talk version

Problem: LLM doesn't know your private docs.  
Fix: **Fetch relevant chunks → paste into prompt → model answers from them.**

That's RAG. Retrieval + Generation.

---

## The 4-step pipeline

```
Index (offline):
  Documents → Chunk → Embed → Store in vector DB

Query (online):
  Question → Embed → Retrieve top-k → Build prompt → LLM → Answer
```

---

## Chunking matters

| Strategy | Size hint |
|----------|-----------|
| Fixed size | 500–1000 tokens |
| By paragraph | Natural breaks |
| By heading | For markdown/docs |

Too small → lost context. Too big → noisy retrieval.

```python
def chunk(text: str, size: int = 500, overlap: int = 50) -> list[str]:
    chunks = []
    start = 0
    while start < len(text):
        chunks.append(text[start:start + size])
        start += size - overlap
    return chunks
```

---

## RAG prompt template

```text
Use ONLY the context below. If answer not in context, say "I don't know."

Context:
---
{chunk_1}
---
{chunk_2}
---

Question: {user_question}
```

---

## Deep dive — RAG failure modes & fixes

| Failure | Cause | Fix |
|---------|-------|-----|
| Wrong retrieval | Bad chunks/embeddings | Tune chunk size, hybrid search |
| Answer ignores context | Weak prompt | Strong system rules + cite sources |
| Stale data | Index not updated | Re-index pipeline on doc changes |
| Slow | Big index, no cache | ANN indexes, cache frequent queries |

### Advanced patterns

- **Re-ranking** — retrieve 20, rerank with cross-encoder, use top 5
- **Query transformation** — LLM rewrites user question for better search
- **Multi-hop** — agent retrieves multiple times

### Eval RAG

Measure:
- Retrieval: did right chunk appear in top-k?
- Generation: is answer correct given context?
- End-to-end: user satisfaction / human eval

---

## Interview bite

**Q: RAG vs fine-tuning for company knowledge?**  
**A:** RAG for dynamic knowledge, cite sources, cheaper updates. Fine-tune for style/behavior or when retrieval isn't enough. Often both.

---

## Mini exercise

Take 3 markdown files. Chunk, embed (or mock vectors), store in dict. Query "how do I deploy?" — return best chunk.

**Hands-on:** [AI Explorer RAG lessons](https://github.com/suresh-ai-lab/ai-explorer)
