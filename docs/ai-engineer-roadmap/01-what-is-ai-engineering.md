# 01 — What is AI Engineering?

**Checkpoint:** Explain AI engineer vs ML engineer in one sentence. Tick when done.

---

## Small talk version

You know ChatGPT? Someone built that *experience* — not just the model.  
That's AI engineering: **wire models into products people use.**

ML engineer = trains models.  
AI engineer = **ships features** — chat, search, agents, APIs.

---

## What you'll actually do day-to-day

| Task | Example |
|------|---------|
| Call LLM APIs | OpenAI, Anthropic, local Ollama |
| Build RAG | "Ask our docs" bot |
| Prompt + eval | Make answers good, measure them |
| Deploy | Docker, FastAPI, rate limits |
| Debug | Why did it hallucinate? |

---

## Skills stack (rough order)

```
Python → APIs → LLMs → Embeddings → RAG → Agents → Deploy
```

You don't need to invent transformers. You need to **integrate** them safely.

---

## Deep dive — why this role exploded

Before 2023, "AI in prod" meant recommendation systems or vision classifiers.  
LLMs changed the game: **natural language became an interface.**

Companies don't want a researcher paper. They want:
- A support bot on their site
- Internal search over PDFs
- Code assistant in their IDE

The model is 30% of the work. The other 70%:
- Data pipeline (chunk, embed, index)
- Guardrails (don't leak secrets)
- Latency & cost (cache, stream)
- Monitoring (log prompts, track quality)

That's the AI engineer job description in practice.

---

## Interview bite

**Q: AI engineer vs ML engineer?**  
**A:** ML engineer focuses on training and model architecture. AI engineer focuses on application layer — prompts, RAG, agents, production APIs, and eval — often using off-the-shelf models.

---

## Mini exercise

Write 3 AI features you'd add to an app you use daily. For each: model call only, or RAG, or agent?
