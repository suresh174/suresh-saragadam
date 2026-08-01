# 19 — Interview Prep

**Checkpoint:** Answer 5 questions below out loud in 60 sec each. Tick when done.

---

## Small talk version

Interviews = show you can **think in systems**, not recite papers.

Pattern: **Short answer → tiny example → tradeoff.**

---

## Must-know questions (with short answers)

### 1. What is an LLM?

Autocomplete model trained on text to predict next token. At scale it learns language, reasoning patterns, and world knowledge — but not guaranteed truth.

### 2. What is RAG?

Retrieve relevant docs from a vector store, inject into prompt, generate answer grounded in those docs. Updates without retraining.

### 3. Embeddings?

Dense vectors representing meaning. Similar text → nearby vectors. Used for search and clustering.

### 4. Prompt injection?

Attacker hides instructions in user-controlled text to override system behavior. Mitigate with isolation, least privilege, output checks.

### 5. How reduce hallucination?

RAG, tool verification, ask model to cite sources, low temperature, eval suite, say "I don't know" training in prompt.

### 6. Agent vs chain?

Chain = fixed steps. Agent = LLM decides next tool/step dynamically until task done.

### 7. Fine-tune vs prompt vs RAG?

| Need | Pick |
|------|------|
| New facts | RAG |
| Format/behavior | Prompt → Fine-tune |
| Cost at scale | Fine-tune small model |

### 8. How eval LLM apps?

Golden Q&A set, retrieval hit rate, LLM-as-judge, human review, online feedback, regression in CI.

### 9. Context window issue?

Long chats/docs exceed limit. Fix: chunking, RAG, summarization, sliding window.

### 10. Design doc Q&A bot for 10k PDFs?

```
Upload → parse → chunk → embed → index (async job)
Query → embed question → retrieve top-k → rerank → prompt → stream answer
Deploy FastAPI + vector DB + object storage
Eval set from real questions, monitor cost/latency
```

---

## Deep dive — system design template (use in interview)

```
1. Requirements — latency, users, privacy
2. Data — sources, update frequency
3. Architecture — API, index, model, cache
4. Retrieval — chunk size, hybrid search
5. Generation — model choice, prompt version
6. Eval — offline + online metrics
7. Safety — injection, PII, tool limits
8. Cost — routing, caching
9. Failure modes — model down, stale index
10. Rollout — MVP → iterate
```

Draw boxes while talking. Interviewers care about **tradeoffs**, not perfect diagram.

---

## Behavioral (STAR format)

Prepare 2 stories:
- **Shipped** something with deadlines
- **Debugged** bad model output in prod
- **Learned** new tool fast (RAG, agents)

---

## Coding you might see

- Chunk text
- Cosine similarity
- Parse JSON from LLM output safely
- Simple FastAPI endpoint
- Retry wrapper for API calls

---

## Mini exercise

Pick 5 questions above. Record voice answers. Cut anything over 90 seconds.
