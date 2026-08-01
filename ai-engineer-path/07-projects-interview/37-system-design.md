# 37 — System design for AI apps

Back → [Orchestration](../README.md)

---

## Small talk

AI system design interviews aren't "draw Kubernetes until ink dies."  
They want: **clear requirements → architecture → failure modes → metrics**.

---

## 5-step template (use every time)

1. **Clarify**  
   Users? Latency? Budget? Languages? Online learning? Compliance?
2. **API sketch**  
   `POST /ask {query, user_id}` → `{answer, citations, request_id}`
3. **High-level boxes**  
   Gateway → orchestrator → retrieval → LLM → cache → store
4. **Deep dives** they pick  
   Chunking, ACL, eval, scale, cost
5. **Risks & monitors**  

---

## Example: "Design ChatGPT over company docs"

### Requirements (ask!)

- 500 employees, ACL by team  
- Answers must cite  
- p95 < 4s  
- Don't train on private data for foundation model  

### Boxes

```
Client
  → API gateway (auth)
  → Query service
       → cache (semantic or exact)
       → retriever (vector + BM25) + ACL filter
       → prompt builder
       → LLM provider
       → answer validator (JSON / toxicity / PII)
  → async: ingest pipeline (parse → chunk → embed → index)
  → stores: object storage (docs), vector DB, SQL (feedback)
```

### Scale knobs

- Cache frequent queries  
- Async ingest workers  
- Separate read-heavy query path  
- Rate limit per user  
- Fallback model if provider downs  

### Eval & safety

- Golden set in CI  
- Red-team injection tests  
- Human review queue for low-confidence  

---

## Detail — ACL on retrieval

Never retrieve then hope the LLM stays quiet.  
**Filter by permissions in the DB query** before chunks enter the prompt.

---

## Numbers to practice saying

- Chunk size / overlap  
- top_k = 5–10, maybe rerank  
- embedding dims & model name tradeoffs  
- expected QPS and cost/1k tokens  

Wrong precise numbers beat vague handwaving — say assumptions.

---

## Interview bite

> "I start from requirements and SLOs, separate ingest from query, enforce ACL at retrieval, ground answers with citations, and close the loop with offline eval plus cost/latency monitors."

---

## Final checkpoint

- [ ] I can design DocuBuddy on a whiteboard in 20 minutes
- [ ] I finished the orchestration checklist phases 0–7

You're ready to build + interview. Go back → [Orchestration](../README.md) and tick what's left.
