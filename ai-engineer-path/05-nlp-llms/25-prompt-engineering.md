# 25 — Prompt engineering

Back → [Orchestration](../README.md)

---

## Small talk

Prompting = programming with words + structure.  
Still a real skill. Cheap to try before fine-tuning.

---

## Patterns that work

1. **Role**: "You are a careful support agent…"  
2. **Task**: clear verb + output shape  
3. **Context**: only needed facts  
4. **Constraints**: tone, length, "say I don't know"  
5. **Examples**: few-shot (1–3 demos)  
6. **Reasoning**: ask for steps when it helps (but hide chain if needed)

---

## Bad vs better

Bad:

```
talk about this data
```

Better:

```
You are a data analyst.
Given the CSV summary below, list 3 bullet insights.
If data is insufficient, say what's missing.
Return only bullets.
```

---

## Structured output

Ask for JSON and validate.

```
Return JSON with keys: intent, confidence, slots
No markdown. No extra keys.
```

Then `json.loads` + schema check. Never trust raw model text in prod without validation.

---

## System vs user vs tool messages

Chat models: system sets policy; user asks; assistant replies; tools return data.  
Keep secrets and policies in system / server-side — not in the client freely editable box.

---

## Failure modes

- Hallucinations  
- Ignoring instructions when context is huge  
- Prompt injection ("ignore previous…")  
- Brittleness across model versions  

Mitigate: retrieval grounding, tool checks, allowlists, eval suite.

---

## Interview bite

> "I treat prompts as versioned interfaces: clear instructions, schemas, examples, and automated evals. Fine-tune only when prompting can't hit quality/cost targets."

---

## Checkpoint

- [ ] I rewrote one vague prompt into a structured one
- [ ] I know to validate JSON outputs

Next → [26 — RAG](./26-rag.md)
