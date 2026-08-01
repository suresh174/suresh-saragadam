# 23 — Embeddings (meaning as vectors)

Back → [Orchestration](../README.md)

---

## Small talk

An **embedding** turns text (or image) into a list of numbers so **similar meaning ≈ nearby vectors**.

`"king"` near `"queen"`.  
`"dog"` far from `"trigonometry"` (usually).

This is the heart of search for RAG.

---

## Similarity

Common: **cosine similarity** (angle between vectors).

```python
import numpy as np

def cos(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
```

1 ≈ same direction. 0 ≈ meh. -1 ≈ opposite.

---

## How you get embeddings

```python
# pseudocode / HF style
from sentence_transformers import SentenceTransformer
model = SentenceTransformer("all-MiniLM-L6-v2")
vecs = model.encode(["how to reset password", "password reset help"])
```

API style: OpenAI / vendor embedding endpoints.

---

## Use cases

1. Semantic search  
2. Clustering support tickets  
3. Deduplicate near-copy text  
4. Recommendations  
5. RAG retrieval  

---

## Practical tips

- Embed **chunks**, not giant books as one vector  
- Same embedding model for index + query  
- Re-embed if you change models (vectors not compatible)  
- Normalize if using dot-product search that expects it  

---

## Interview bite

> "Embeddings map content into a vector space where similarity search finds semantically related items. RAG depends on good chunking plus a consistent embedding model."

---

## Checkpoint

- [ ] I can explain embedding in one sentence
- [ ] I know cosine similarity ≈ closeness of meaning

Next → [24 — Hugging Face](./24-huggingface.md)
