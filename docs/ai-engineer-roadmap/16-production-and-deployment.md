# 16 — Production & Deployment

**Checkpoint:** Sketch architecture: client → API → LLM → DB. Tick when done.

---

## Small talk version

Demo on laptop ≠ production.

Prod needs:
- **API** (FastAPI)
- **Auth** (keys, OAuth)
- **Queue** (long jobs)
- **Logs** (debug failures)
- **Deploy** (Docker, cloud)

---

## Reference architecture

```
Browser / App
    ↓ HTTPS
Load balancer
    ↓
FastAPI service
    ├→ Redis (cache)
    ├→ Vector DB
    └→ OpenAI API
```

---

## FastAPI minimal

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(req: ChatRequest):
  # call LLM, return reply
    return {"reply": "..."}
```

Run: `uvicorn app.main:app --reload`

---

## Docker one-liner mindset

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

`docker build` → `docker run` → same env everywhere.

---

## Deep dive — production checklist

| Area | Do |
|------|-----|
| Secrets | Env vars, rotate keys |
| Rate limits | Per user/IP |
| Timeouts | LLM calls can hang |
| Retries | Exponential backoff on 5xx |
| Streaming | SSE for chat UX |
| Health | `/health` for k8s |
| Versioning | `/v1/chat` |

### Observability

Log (redact PII):
- Request ID
- Model + token count
- Latency per stage (retrieve vs generate)
- Error types

Tools: LangSmith, Helicone, custom OpenTelemetry.

### Scaling

- Horizontal scale stateless API
- Vector DB replicas
- Cache embeddings for repeated queries
- Separate read/write paths for indexing

---

## Interview bite

**Q: How do you deploy an LLM feature safely?**  
**A:** Staged rollout, feature flags, offline eval gate, canary traffic, monitor latency/cost/error rate, rollback plan, human review on early traffic.

---

## Mini exercise

Add `/health` and `/chat` to a FastAPI app. Return model name in health response.
