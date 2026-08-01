# 00 — What even is an AI Engineer?

Back → [Orchestration](../README.md)

---

## Small talk

AI Engineer ≠ "person who only trains models in a notebook forever."

You're the person who **makes AI useful in a product**.

Think:

- Data Scientist → finds patterns, experiments a lot  
- ML Researcher → invents new model ideas  
- **AI Engineer → takes models + APIs + data and ships something that works**

Like a chef who doesn't just invent recipes — they run the kitchen so food reaches the table.

---

## What you actually do day to day

1. Talk to product people: "What should this AI do?"
2. Pick approach: classic ML? LLM? RAG? fine-tune?
3. Build pipeline: data → model → API → UI
4. Measure: is it accurate? fast? cheap? safe?
5. Fix when it breaks in production (it will)

---

## Skills stack (simple map)

```
Python + data
    ↓
ML / DL basics
    ↓
LLMs, RAG, agents
    ↓
APIs, Docker, monitoring
    ↓
You can ship
```

---

## Tiny example of "AI engineering"

User asks: *"Summarize this PDF for me."*

Bad answer: paste whole PDF into ChatGPT every time by hand.

AI Engineer answer:

1. Extract text from PDF  
2. Chunk it  
3. Store embeddings in a vector DB  
4. Retrieve relevant chunks  
5. Send to LLM with a prompt  
6. Return summary via API  

That's the job.

---

## Interview one-liner

> "I build reliable AI features end-to-end — data, model choice, evaluation, and deployment — not just demos."

---

## Checkpoint

- [ ] I can explain AI Engineer vs Data Scientist in one sentence
- [ ] I know the job is *shipping*, not only training

Next → [01 — AI vs ML vs DL vs LLM](./01-ai-ml-dl-llm.md)
