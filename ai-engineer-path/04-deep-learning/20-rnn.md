# 20 — RNNs / sequence feel

Back → [Orchestration](../README.md)

---

## Small talk

Text and time series are **sequences**. Order matters.

**RNN** reads one step at a time and keeps a hidden state memory.

```
h_t = f(h_{t-1}, x_t)
```

---

## LSTM / GRU

Vanilla RNNs forget long-range stuff / gradient issues.  
LSTM & GRU add gates to remember longer. Old NLP workhorses.

---

## Why we mostly moved on

Transformers (next note) train more in parallel and handle long context better for many tasks.  
RNNs still appear in interviews and some streaming / edge setups.

---

## Mental model you keep forever

Any sequence model must answer:

1. How do tokens interact across positions?  
2. How long can the context be?  
3. Can we parallelize training?  

RNN: interact via hidden state, sequential, long mem limited.  
Transformer: interact via attention, highly parallel, context limited by window/compute.

---

## Tiny use cases where sequence mind helps

- Log anomaly timelines  
- Sensor streams  
- Older speech models  

---

## Interview bite

> "RNNs maintain a running hidden state over time. LSTMs help with longer dependencies, but transformers replaced them for most NLP because of attention and parallelism."

---

## Checkpoint

- [ ] I can explain hidden state in one sentence
- [ ] I know transformers largely replaced RNNs in NLP

Next → [21 — Transformers](./21-transformers.md)
