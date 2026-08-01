# 02 — Your learning setup

Back → [Orchestration](../README.md)

---

## Small talk

Don't over-setup. You need a kitchen, not a restaurant renovation.

---

## Must have

1. **Python 3.10+**  
2. **VS Code** or Cursor (you're here — good)  
3. **Terminal** comfort (cd, ls, pip/uv)  
4. **Git + GitHub** (show your work)  
5. **Jupyter** or notebooks in VS Code (play with data)

Optional later: Docker, cloud GPU (Colab free is fine at start).

---

## One-time install vibe

```bash
# create a project folder
mkdir ai-lab && cd ai-lab

# virtual env (keeps packages tidy)
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# core stack for early phases
pip install numpy pandas matplotlib scikit-learn jupyter
```

Later phases add:

```bash
pip install torch torchvision   # or follow pytorch.org for your OS
pip install transformers datasets accelerate
pip install openai chromadb fastapi uvicorn
```

---

## Accounts worth making

- GitHub  
- Hugging Face  
- Google Colab (free GPU when laptop cries)  
- One LLM API (OpenAI / Anthropic / Groq — pick one to start)

---

## Folder habit

```
ai-lab/
  notes/          # your own scribbles
  phase3-ml/      # sklearn experiments
  phase5-rag/     # RAG project
  capstone/       # final project
```

Messy folders = lost motivation.

---

## Checkpoint

- [ ] Python venv works
- [ ] I can `import numpy` without error
- [ ] GitHub account ready

Next → [03 — Linear algebra](./03-linear-algebra.md)
