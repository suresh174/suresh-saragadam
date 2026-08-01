# 22 — NLP basics

Back → [Orchestration](../README.md)

---

## Small talk

NLP = teach machines to deal with human language.  
Today that almost always means transformers / LLMs — but basics still matter.

---

## Tokenization

Models don't read letters like you. They read **tokens** (subwords often).

```
"unhappiness" → ["un", "happiness"]  # illustrative
```

Tokenizers differ (BPE, WordPiece, SentencePiece).  
Same text → different token counts → different cost/latency in LLM APIs.

---

## Classic pipeline (pre-LLM era, still useful)

1. Clean text  
2. Tokenize  
3. Features (bag-of-words, TF-IDF)  
4. Classifier  

TF-IDF + logistic regression still slap for simple ticket routing.

---

## Modern pipeline

1. Tokenize with model tokenizer  
2. Transformer encodes / generates  
3. Head for task OR just prompt an LLM  

---

## Tasks map

| Task | Example |
|------|---------|
| Classification | Sentiment, intent |
| NER | Find names, dates |
| Summarization | Long → short |
| QA | Answer from context |
| Translation | Language A → B |
| Retrieval | Find relevant docs |

---

## Gotchas

- Language mix / slang  
- PII in logs  
- Prompt injection (LLM era)  
- Evaluation is hard for open-ended text  

---

## Interview bite

> "NLP starts with tokenization. Classical baselines use TF-IDF; production NLP today is mostly transformers. I still keep a simple baseline for sanity."

---

## Checkpoint

- [ ] I know what a token is
- [ ] I can name 4 NLP tasks

Next → [23 — Embeddings](./23-embeddings.md)
