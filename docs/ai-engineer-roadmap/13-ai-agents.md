# 13 — AI Agents

**Checkpoint:** Name the 4 steps in an agent loop. Tick when done.

---

## Small talk version

Chatbot = one question, one answer.  
Agent = **multi-step** — plan, use tools, check, repeat.

Like a junior dev with API access: "Search docs → read file → write summary → email user."

---

## Agent loop

```
1. Observe  — user goal + current state
2. Think    — what next? (LLM)
3. Act      — tool call or final answer
4. Repeat   — until done or max steps
```

---

## Simple agent pseudocode

```python
MAX_STEPS = 10
messages = [{"role": "user", "content": goal}]

for _ in range(MAX_STEPS):
    response = llm(messages, tools=TOOLS)
    if response.has_tool_calls:
        for call in response.tool_calls:
            result = run_tool(call)
            messages.append(tool_result(call, result))
    else:
        return response.text  # done
```

---

## Agent vs workflow

| Pattern | When |
|---------|------|
| Workflow | Fixed steps (ETL, pipelines) |
| Agent | Open-ended goals, dynamic tools |

Don't agent everything. Deterministic workflows are cheaper and debuggable.

---

## Deep dive — agent frameworks

| Framework | Style |
|-----------|-------|
| LangChain | Chains + agents |
| LlamaIndex | Data + agents |
| CrewAI | Multi-agent roles |
| Raw loop | You own it — best for learning |

**ReAct** pattern: Reason + Act in text — `"Thought: I need weather. Action: get_weather(London)"`

### Failure modes

| Issue | Mitigation |
|-------|------------|
| Infinite loop | Max steps, stop conditions |
| Wrong tool | Better descriptions, fewer tools |
| Cost explosion | Smaller model for planning |
| Unsafe actions | Human approval for writes |

---

## Interview bite

**Q: What's the difference between RAG and an agent?**  
**A:** RAG is retrieve-then-generate, usually one shot. Agent is orchestration loop with tools and multiple LLM calls until task complete.

---

## Mini exercise

Design an agent that books a meeting: list 3 tools, max 5 steps, what happens if calendar API fails?
