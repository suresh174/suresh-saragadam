# 31 — Vector DBs

Back → [Orchestration](../README.md)

---

## Small talk

Vector DB stores embeddings and finds nearest neighbors fast.

For learning: **Chroma**, **FAISS**, or Postgres **pgvector**.  
At scale: Pinecone, Weaviate, Qdrant, etc.

---

## What you store per chunk

- embedding vector  
- raw text  
- metadata: source, title, date, ACL tags  

Metadata filters matter: "only docs this user can see."

---

## Minimal Chroma vibe

```python
import chromadb
client = chromadb.Client()
col = client.get_or_create_collection("docs")

col.add(
    ids=["1"],
    documents=["Reset password via Settings > Security"],
    embeddings=[[0.1, 0.2, ...]],  # or use their embedding helpers
    metadatas=[{"source": "help.md"}],
)

hits = col.query(query_embeddings=[[...]], n_results=3)
```

---

## Ops concerns

- Re-index on doc change  
- Version embedding model id in metadata  
- Backup / recreate from source of truth (docs), not only from DB  
- Measure retrieval quality, not only "DB is up"  

---

## Do you always need a vector DB?

Prototype: FAISS in memory / Chroma local.  
Tiny corpus: maybe even embed-on-the-fly.  
Real multi-user product with ACLs: proper store + filters.

---

## Interview bite

> "Vector databases enable ANN search over embeddings with metadata filters. I treat documents as source of truth and make re-indexing a first-class pipeline."

---

## Checkpoint

- [ ] I know what ANN / nearest neighbor search is for
- [ ] I can list 3 metadata fields I'd store

Next → [32 — Docker & deploy](./32-docker-deploy.md)
