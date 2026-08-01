# 02 — Setup Your Lab

**Checkpoint:** Run `python --version`, hit OpenAI API once, `docker --version`. All green? Tick.

---

## Small talk version

No fancy lab. You need:
- Python 3.11+
- A code editor (VS Code / Cursor)
- Git
- An API key (OpenAI or free local Ollama)
- Docker (optional but nice)

---

## Install checklist

```bash
# Python
python3 --version   # want 3.11+

# Create project folder
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# Essentials
pip install openai fastapi uvicorn httpx numpy
```

---

## API key — do it right

1. Get key from [platform.openai.com](https://platform.openai.com)
2. Put in `.env` file:
   ```
   OPENAI_API_KEY=sk-...
   ```
3. **Never** commit `.env` to git
4. Add `.env` to `.gitignore`

---

## Free alternative — Ollama (local)

```bash
# Install Ollama, then:
ollama pull llama3.2
ollama run llama3.2
```

No bill. Slower. Great for learning.

---

## Docker (one command apps)

```bash
docker --version
docker compose version
```

Many AI repos (including AI Explorer) start with `docker compose up`.

---

## Deep dive — folder structure habit

Start every project like this:

```
my-ai-app/
├── .env              # secrets
├── .gitignore
├── requirements.txt
├── app/
│   ├── main.py       # FastAPI entry
│   └── llm.py        # model calls
└── tests/
```

Clean folders = easier interviews ("I separated the LLM adapter from the router").

---

## Interview bite

**Q: Where do you store API keys?**  
**A:** Environment variables or secret manager (AWS Secrets Manager, Vault). Never client-side, never in git.

---

## Mini exercise

Create `.env`, write a 5-line Python script that prints "API key loaded" if `OPENAI_API_KEY` exists. Don't print the key itself.
