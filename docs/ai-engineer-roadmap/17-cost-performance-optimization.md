# 17 — Cost & Performance

**Checkpoint:** Name 3 ways to cut LLM cost without killing quality. Tick when done.

---

## Small talk version

Tokens = money. Slow = users leave.

Your job: **fast enough, cheap enough, good enough.**

---

## Cost levers

| Lever | Effect |
|-------|--------|
| Smaller model | 10x cheaper for simple tasks |
| Shorter prompts | Fewer input tokens |
| Cache | Same question → no API call |
| Batch embed | Index docs in batches |
| Route by task | GPT-4o for hard, mini for easy |

---

## Caching pattern

```python
import hashlib

def cache_key(prompt: str) -> str:
    return hashlib.sha256(prompt.encode()).hexdigest()

# Redis: get(key) or call LLM and set(key, ttl=3600)
```

Semantic cache: embed question, if similar past question → reuse answer.

---

## Performance levers

| Lever | Effect |
|-------|--------|
| Streaming | Show tokens as they arrive |
| Async | Parallel retrieve + prep |
| ANN index | Fast vector search at scale |
| Speculative decode | Faster generation (provider-side) |

---

## Deep dive — model routing

```
Classifier (cheap): "Is this billing, tech, or sales?"
  → billing → fine-tuned small model
  → tech → RAG + gpt-4o-mini
  → complex → gpt-4o
```

Measure quality per route. Don't over-route to expensive model.

### Token budget review (monthly)

1. Top 10 longest prompts
2. Top 10 most frequent queries (cache these)
3. Avg tokens in vs out
4. Failed retries (wasted spend)

---

## Interview bite

**Q: LLM app is too slow. Debug steps?**  
**A:** Profile stages (embed, retrieve, generate). Stream UI. Shrink context. Smaller model. Cache. Parallelize retrieval. Check network/regions. Consider edge caching for static RAG chunks.

---

## Mini exercise

Estimate monthly cost: 50k requests, 1500 input + 500 output tokens, gpt-4o-mini pricing. Then halve with caching 30% hits.
