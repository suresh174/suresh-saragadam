# 24 — Hugging Face in practice

Back → [Orchestration](../README.md)

---

## Small talk

Hugging Face = GitHub of models + sweet Python libs (`transformers`, `datasets`, `huggingface_hub`).

You'll live here as an AI engineer.

---

## Pipeline fast path

```python
from transformers import pipeline

clf = pipeline("sentiment-analysis")
print(clf("this course is short and sweet"))
```

Good for demos. For control, use models + tokenizers explicitly.

---

## Explicit load

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

name = "distilbert-base-uncased-finetuned-sst-2-english"
tok = AutoTokenizer.from_pretrained(name)
model = AutoModelForSequenceClassification.from_pretrained(name)

inputs = tok("I love shipping models", return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
print(logits.argmax(-1))
```

`Auto*` classes = "figure out the architecture from the name."

---

## Model cards matter

Before you prod a model, read:

- License  
- Intended use / limits  
- Training data hints  
- Metrics  

Random top download ≠ right for your case.

---

## Hub workflow

1. Browse models / datasets  
2. `from_pretrained`  
3. Fine-tune or just infer  
4. Optionally `push_to_hub` your fine-tune  

---

## Interview bite

> "I use Hugging Face transformers with AutoTokenizer/AutoModel, check model cards for license and limits, and start with pipelines only for quick spikes."

---

## Checkpoint

- [ ] I ran a `pipeline` locally or on Colab
- [ ] I know what `from_pretrained` does

Next → [25 — Prompt engineering](./25-prompt-engineering.md)
