# 20 — Capstone Project

**Checkpoint:** GitHub repo live + demo video or README screenshot. Tick when done.

---

## Small talk version

One project beats ten tutorials.

Build this: **"Company Brain"** — ask questions over your docs with citations.

If you finish this, you're employable at junior–mid AI engineer level.

---

## What you're building

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Web UI     │────▶│  FastAPI     │────▶│  OpenAI     │
│  (chat)     │     │  + RAG       │     │  API        │
└─────────────┘     └──────┬───────┘     └─────────────┘
                           │
                    ┌──────▼───────┐
                    │ Vector DB    │
                    │ (Chroma)     │
                    └──────────────┘
```

---

## MVP features (week 1)

- [ ] Upload PDF/markdown
- [ ] Chunk + embed + store
- [ ] Chat: question → retrieve → answer with [1][2] citations
- [ ] Stream responses
- [ ] `.env` for keys

---

## Pro features (week 2)

- [ ] Eval script (10 golden questions)
- [ ] `/health` + basic auth or API key
- [ ] Docker Compose (api + db + web)
- [ ] Log token usage per request
- [ ] "I don't know" when context empty

---

## Stretch (interview flex)

- [ ] Agent: `search_docs` + `summarize` tools
- [ ] Hybrid search (keyword + vector)
- [ ] Rate limit per IP
- [ ] Deploy to Railway / Fly.io / AWS

---

## Deep dive — implementation order

### Day 1–2: Core RAG

```bash
pip install fastapi uvicorn openai chromadb python-multipart
```

1. `ingest.py` — load files, chunk, embed, upsert
2. `retrieve.py` — query → top 5 chunks
3. `chat.py` — build prompt, call LLM

### Day 3: API

- `POST /ingest` — upload file
- `POST /chat` — message + stream
- `GET /health`

### Day 4: UI

Simple HTML or React: file upload + chat window. Or use AI Explorer web patterns.

### Day 5: Eval + Docker

- `eval/run.py` — pass rate on golden set
- `docker-compose.yml` — one command start

### Day 6–7: Polish

README with:
- Architecture diagram
- Setup steps
- Cost estimate
- Known limitations
- Demo GIF

---

## README template

```markdown
# Company Brain

RAG chat over private documents with citations.

## Stack
FastAPI · Chroma · OpenAI · Docker

## Quick start
docker compose up
open http://localhost:3000

## Eval
python eval/run.py  # 87% pass rate on 50 cases

## Architecture
[diagram]

## What I learned
- Chunk size 800 worked best for our PDFs
- Hybrid search +2% retrieval hit rate
```

---

## How this maps to roadmap

| Topic | In project |
|-------|------------|
| Python | All code |
| Embeddings | Index + search |
| RAG | Core feature |
| Prompting | System template |
| Tools | Stretch agent |
| Eval | Golden set |
| Production | Docker, API, logs |
| Safety | Input limits, no secrets in prompt |
| Interview | You explain this repo |

---

## Alternative capstone ideas

Pick one if Company Brain bores you:

1. **Support ticket classifier** — fine-tune or few-shot + eval
2. **Code review bot** — PR diff → comments (watch cost)
3. **Meeting agent** — transcribe → action items → email tool

Same rules: API, eval, README, deploy.

---

## Final tick

When all boxes in [ORCHESTRATION.md](ORCHESTRATION.md) are checked and capstone is on GitHub — **you're an AI engineer.** Go apply.

**Pair with:** [AI Explorer](https://github.com/suresh-ai-lab/ai-explorer) for guided hands-on labs.
