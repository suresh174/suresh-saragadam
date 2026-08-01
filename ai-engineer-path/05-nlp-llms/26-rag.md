# 26 — RAG (chat with your docs)

Back → [Orchestration](../README.md)

---

## Small talk

**RAG** = Retrieval-Augmented Generation.

Don't make the LLM memorize your company wiki.  
**Retrieve** relevant chunks → **stuff into prompt** → **generate** answer.

Like an open-book exam instead of closed-book guessing.

---

## Pipeline

```
docs → chunk → embed → vector DB
                  ↑
user question → embed → search top-k chunks
                  ↓
prompt(system + chunks + question) → LLM → answer (+ citations)
```

---

## Chunking (underrated)

Too big → noisy retrieval.  
Too small → missing context.

Start: ~300–800 tokens, slight overlap.  
Respect headings when you can (chunk by section).

---

## Prompt sketch

```
Use ONLY the context to answer.
If missing, say you don't know.
Cite chunk ids.

Context:
[1] ...
[2] ...

Question: ...
```

---

## When RAG fails

1. Bad chunks  
2. Weak embeddings  
3. Wrong top-k  
4. LLM ignores context  
5. Docs outdated  
6. Question needs multi-hop reasoning  

Fixes: hybrid search (keyword + vector), rerankers, better prep, agentic retrieval.

---

## Detail — hybrid + rerank

- **BM25** catches exact SKUs / error codes  
- **Vector** catches paraphrases  
- **Reranker** (cross-encoder) re-orders top 50 → top 5  

This combo is very "AI engineer IRL."

---

## Interview bite

> "RAG retrieves relevant chunks into the prompt so answers are grounded. Quality hinges on chunking, retrieval, and citation — not just the LLM brand."

---

## Checkpoint

- [ ] I can draw the RAG pipeline from memory
- [ ] I know chunking matters as much as the model

Next → [27 — Fine-tuning](./27-fine-tuning.md)
