# 30 — From notebook to API

Back → [Orchestration](../README.md)

---

## Small talk

Notebooks explore.  
**APIs** serve users.

AI Engineer move: wrap your pipeline in a small web service.

---

## FastAPI sketch

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class AskIn(BaseModel):
    question: str

class AskOut(BaseModel):
    answer: str

@app.post("/ask", response_model=AskOut)
def ask(body: AskIn):
    # call rag_pipeline(body.question)
    return AskOut(answer="hello from api")
```

Run:

```bash
uvicorn app:app --reload
```

---

## Production checklist (starter)

1. Input validation (Pydantic)  
2. Timeouts on LLM / DB calls  
3. Structured logging (request id)  
4. Secrets in env vars, not code  
5. Rate limits  
6. Health endpoint `/healthz`  
7. Separate "load models" at startup vs per request  

---

## Sync vs queue

Slow LLM jobs?  
API accepts request → enqueue worker → client polls or webhook.  
Don't block HTTP for 2 minutes without a plan.

---

## Interview bite

> "I productize models behind validated APIs with timeouts, logging, and clear separation between research notebooks and serving code."

---

## Checkpoint

- [ ] I ran a Hello FastAPI endpoint
- [ ] I know secrets belong in env vars

Next → [31 — Vector DBs](./31-vector-dbs.md)
