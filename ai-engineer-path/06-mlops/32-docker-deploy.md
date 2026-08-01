# 32 — Docker & deploy basics

Back → [Orchestration](../README.md)

---

## Small talk

"Works on my machine" → box it with **Docker** so it works on a server too.

---

## Tiny Dockerfile

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
```

```bash
docker build -t ai-api .
docker run -p 8000:8000 --env-file .env ai-api
```

---

## Deploy destinations (pick later)

- Cloud Run / Render / Fly / Azure Container Apps  
- Kubernetes (when team already lives there)  
- Serverless functions for light stuff (cold start care)

Early career: one container + managed Postgres/vector beats fancy K8s flexing.

---

## Model weights

Don't bake 10GB models into every image if you can mount/download at start with cache.  
Or call hosted model APIs and keep your service thin.

---

## CI sketch

On push: lint → tests → build image → deploy staging → run eval smoke → prod.

---

## Interview bite

> "I containerize the serving app, inject secrets at runtime, and prefer simple managed deploys before Kubernetes complexity."

---

## Checkpoint

- [ ] I understand build vs run
- [ ] I know .env shouldn't be committed

Next → [33 — Monitoring, cost, safety](./33-monitoring-cost-safety.md)
