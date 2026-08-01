# 01 — AI vs ML vs DL vs LLM

Back → [Orchestration](../README.md)

---

## Small talk

People mix these words. Don't.

| Term | Meaning (friend version) |
|------|--------------------------|
| **AI** | Umbrella. Machines doing smart-ish stuff. |
| **ML** | Learn patterns from data instead of hard rules. |
| **DL** | ML with neural nets (many layers). |
| **LLM** | Huge neural net trained on text. Talks. |

Russian doll:

```
AI
 └─ ML
     └─ DL
         └─ LLMs (and vision models, etc.)
```

---

## Everyday examples

**AI (broad)**  
Spam filter, chess bot, face unlock, ChatGPT — all under AI.

**ML**  
You show 10,000 emails labeled spam / not spam. Model learns clues. No hand-written "if word == viagra" for everything.

**DL**  
Same idea, but the model is a neural net. Great for images, speech, language.

**LLM**  
GPT, Claude, Llama — type text in, get text out. Trained to predict the next word… a lot. Feels like intelligence.

---

## Rule of thumb for projects

| Problem | Often start with |
|---------|------------------|
| Predict house price from features | Classical ML |
| Detect cats in photos | DL (CNN) |
| Chat / summarize / extract from docs | LLM + maybe RAG |
| Tiny data, clear features | Classical ML first |

Don't use an LLM for "is this number even or odd." That's a hammer for a thumbtack.

---

## Checkpoint

- [ ] I can draw the Russian doll from memory
- [ ] I can pick a starting approach for a simple product idea

Next → [02 — Setup](./02-setup.md)
