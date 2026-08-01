# 33 — Monitoring, cost, safety

Back → [Orchestration](../README.md)

---

## Small talk

Shipped ≠ finished.  
Production AI fails quietly: slow, pricey, rude, wrong, leaky.

---

## Monitor these

| Signal | Why |
|--------|-----|
| Latency p50/p95 | UX |
| Error rate | Breakage |
| Token usage $ | Bills |
| Retrieval hit quality | RAG drift |
| User feedback | Reality |
| Tool failures | Agent health |

Alert when p95 latency or cost per day spikes.

---

## Cost levers

1. Smaller / cheaper model for easy traffic  
2. Cache repeated questions  
3. Shorter prompts / fewer chunks  
4. Route hard cases to big model only  
5. Batch where possible  

---

## Safety basics

- **Prompt injection**: treat retrieved text as untrusted  
- **PII**: redact logs; careful training data  
- **Jailbreaks**: policy + filters + refusal tests in eval  
- **Permissions**: never let model invent auth  
- **Abuse**: rate limit, auth  

---

## Incident playbook (mini)

1. Feature flag off / revert prompt version  
2. Check provider status  
3. Inspect sample failing traces  
4. Patch + add eval case so it never returns unnoticed  

---

## Interview bite

> "I monitor latency, cost, and quality regressions, cache and route for cost, and treat safety as eval + least privilege + fast rollback."

---

## Checkpoint

- [ ] I listed 4 metrics I'd dashboard
- [ ] I know retrieved docs can inject prompts

Next → [34 — Capstone](../07-projects-interview/34-capstone.md)
