# 34 — Capstone project (build this)

Back → [Orchestration](../README.md)

---

## Small talk

Reading done. Now ship something you can demo in 3 minutes.

**Project: DocuBuddy — ask questions on your own docs**

You'll touch almost every AI eng muscle: chunk → embed → retrieve → LLM → API → eval → Docker.

---

## Scope (must)

1. Ingest a folder of markdown / PDF text  
2. Chunk + embed + store (Chroma/FAISS/pgvector)  
3. Query endpoint returns answer + citations  
4. Simple UI (even a Streamlit/Gradio page is fine)  
5. Offline eval file with ≥20 Q&A  
6. README with architecture diagram + how to run  
7. Dockerfile  

---

## Nice extras (pick 2)

- Hybrid search (BM25 + vectors)  
- Metadata filters (by product area)  
- Streaming tokens  
- Basic auth  
- Cost/latency logging  
- Prompt version flag  

---

## Build order (pin to pin)

1. [ ] Get 10–50 docs into a `data/` folder  
2. [ ] Write chunker; print chunk counts  
3. [ ] Embed + index; test manual similarity search  
4. [ ] Wire LLM with "answer only from context" prompt  
5. [ ] FastAPI `/ask`  
6. [ ] UI that shows citations  
7. [ ] Eval script scores groundedness / keyword checks  
8. [ ] Dockerize  
9. [ ] Record 2-minute demo video or GIF  

---

## Architecture (copy into your README)

```
User → UI → API → Retriever → Vector DB
                     ↓
                   LLM
                     ↓
              Answer + cites
```

---

## Success bar

A friend can clone, set one API key, run docker/compose, ask a question about your docs, and see where the answer came from.

---

## Alternate capstones (if you prefer)

- Support ticket classifier + dashboard (classical ML + API)  
- Image classifier with transfer learning + FastAPI  
- Mini agent that calls 2–3 tools (weather + docs + calculator)  

Still include eval + deploy story.

---

## Checkpoint

- [ ] Capstone runs end-to-end on a fresh machine story
- [ ] Eval numbers written in README

Next → [35 — Portfolio](./35-portfolio.md)
