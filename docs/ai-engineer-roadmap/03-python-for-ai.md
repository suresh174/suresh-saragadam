# 03 — Python for AI

**Checkpoint:** Write a function that chunks a string into 100-char pieces. Tick when done.

---

## Small talk version

AI code is 90% Python. You don't need everything — just these:

- Lists & dicts (data everywhere)
- Functions & classes (organize logic)
- `async`/`await` (fast APIs)
- `pip` + venv (dependencies)
- JSON (API payloads)

---

## Patterns you'll copy-paste daily

### Dict access safe

```python
config = {"model": "gpt-4o-mini", "temp": 0.7}
model = config.get("model", "gpt-4o-mini")
```

### List comprehension

```python
texts = ["hello", "world"]
upper = [t.upper() for t in texts]
```

### Read a file

```python
from pathlib import Path
content = Path("doc.txt").read_text(encoding="utf-8")
```

### Async HTTP (FastAPI style)

```python
import httpx

async def fetch(url: str) -> str:
    async with httpx.AsyncClient() as client:
        r = await client.get(url)
        return r.text
```

---

## Type hints — interview gold

```python
def embed_texts(texts: list[str]) -> list[list[float]]:
    ...
```

Shows you care about contracts. Pydantic uses this everywhere.

---

## Deep dive — why async matters for AI apps

One user chat = multiple waits:
- Call embedding API
- Query vector DB
- Call LLM (slow — 2–30 sec)

Sync code blocks everything. Async lets your server handle other users while one waits on OpenAI.

FastAPI + `async def` is the standard stack.

---

## Libraries map

| Library | Use |
|---------|-----|
| `openai` | LLM API |
| `fastapi` | HTTP API |
| `pydantic` | Validate request bodies |
| `numpy` | Vector math |
| `tiktoken` | Count tokens |

---

## Interview bite

**Q: Why Pydantic?**  
**A:** Validates and parses incoming JSON at the boundary. Bad requests fail before they hit your LLM logic — saves money and bugs.

---

## Mini exercise

```python
def chunk_text(text: str, size: int = 100) -> list[str]:
    # your code: split text into chunks of `size` chars
    pass
```

Test with a 250-char string → expect 3 chunks.
