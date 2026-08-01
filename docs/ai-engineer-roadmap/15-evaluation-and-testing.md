# 15 — Evaluation & Testing

**Checkpoint:** Define one metric for retrieval and one for generation. Tick when done.

---

## Small talk version

"Vibes" don't ship. You need **scores**.

Before launch ask:
- Is retrieval finding the right doc?
- Is the answer correct?
- Is it safe?

---

## Eval layers

| Layer | Question |
|-------|----------|
| Retrieval | Right chunk in top-k? |
| Generation | Answer matches truth? |
| End-to-end | User task succeeded? |
| Safety | Harmful / leaked PII? |

---

## Metrics cheat sheet

| Metric | Use |
|--------|-----|
| Exact match | Structured output |
| F1 / accuracy | Classification |
| BLEU/ROUGE | Translation/summary (weak for LLMs) |
| LLM-as-judge | Compare answers to rubric |
| Human eval | Gold standard, expensive |

**LLM-as-judge:** Strong model scores weaker model's output against criteria.

---

## Minimal eval harness

```python
cases = [
    {"question": "Reset password?", "expected_contains": "settings"},
    {"question": "CEO salary?", "expected_contains": "don't know"},
]

for c in cases:
    answer = rag_pipeline(c["question"])
    ok = c["expected_contains"].lower() in answer.lower()
    print(c["question"], "PASS" if ok else "FAIL")
```

Grow this to 100+ cases from real user logs.

---

## Deep dive — production eval strategy

```
Offline (CI):
  - Golden dataset, regression on every prompt change
  - Block deploy if score drops > 5%

Online (prod):
  - Log prompts + outputs (privacy-safe)
  - Thumbs up/down, implicit signals
  - Sample for human review weekly

Red team:
  - Prompt injection attempts
  - Jailbreak prompts
  - Edge cases (empty input, huge input)
```

### RAG-specific

- **Hit rate@k** — % queries where gold doc in top k
- **MRR** — rank of first correct doc
- **Faithfulness** — answer only from context (LLM judge)

---

## Interview bite

**Q: How do you eval an LLM app?**  
**A:** Layered: retrieval metrics on golden Q→doc pairs, generation checks (correctness, faithfulness), end-to-end task success, plus safety regression suite. Mix automated + periodic human review.

---

## Mini exercise

Write 10 test cases for a FAQ bot. Include 2 trick questions where answer should be "I don't know."
