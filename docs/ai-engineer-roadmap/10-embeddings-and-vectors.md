# 10 — Embeddings & Vectors

**Checkpoint:** Embed 5 sentences, find which pair is most similar. Tick when done.

---

## Small talk version

Embedding = turn text into a list of numbers that capture **meaning**.

`"king"` and `"queen"` → close vectors  
`"king"` and `"banana"` → far apart

Same language, different words → similar vectors. That's semantic search.

---

## Quick API call

```python
from openai import OpenAI

client = OpenAI()
resp = client.embeddings.create(
    model="text-embedding-3-small",
    input="The quick brown fox",
)
vector = resp.data[0].embedding  # list of ~1536 floats
```

---

## Similarity search flow

```
1. Embed all documents (once, store)
2. Embed user question (each query)
3. Compare vectors (cosine similarity)
4. Return top 5 docs
```

---

## Vector DB options

| Tool | Notes |
|------|-------|
| Chroma | Easy local |
| Pinecone | Managed cloud |
| pgvector | Postgres extension |
| FAISS | Facebook, in-memory |

All do: store vectors + nearest neighbor search.

---

## Deep dive — embedding model choice

| Factor | Tradeoff |
|--------|----------|
| Dimensions | Higher → more accurate, more storage |
| Model size | Better model → better retrieval |
| Domain | Code/docs may need specialized embedders |

**Normalize** vectors before dot product = cosine similarity.

### Hybrid search

Sometimes combine:
- **Vector** — semantic ("automobile" matches "car")
- **Keyword** — exact match (SKU numbers, names)

Production search often uses both (BM25 + vectors).

---

## Interview bite

**Q: Why not just keyword search?**  
**A:** Keywords miss synonyms and paraphrases. Embeddings capture semantic similarity. Best systems often blend both.

---

## Mini exercise

```python
sentences = [
    "How do I reset my password?",
    "Password recovery steps",
    "The weather is nice today",
]
# Embed all, compute cosine between query and each, print best match.
```
