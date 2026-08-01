# 28 — Agents & tools

Back → [Orchestration](../README.md)

---

## Small talk

An **agent** = LLM that can **use tools** in a loop until it finishes a goal.

Not magic. It's:

```
think → pick tool → get result → think → ... → final answer
```

---

## Tools (examples)

- Search docs  
- Call SQL  
- Hit HTTP API  
- Run calculator  
- Write file (careful!)  

You define tools with schemas (name, args, description). Model picks JSON tool calls.

---

## Tiny loop

```python
# pseudocode
while steps < max_steps:
    action = llm.decide(messages, tools)
    if action.type == "final":
        return action.answer
    result = run_tool(action.name, action.args)
    messages.append(tool_result(result))
```

Always: **max steps**, timeouts, allowlisted tools.

---

## When agents shine

- Multi-step workflows ("find customer, check orders, draft email")  
- Unknown path length  
- Need fresh external data  

When they flop:

- Simple single-call tasks (just prompt)  
- Ambiguous tools  
- No eval / infinite loops  

---

## Safety

- Least privilege credentials  
- Confirm before irreversible acts  
- Log every tool call  
- Guard against prompt injection via retrieved content  

---

## Interview bite

> "Agents are LLMs with tool-calling loops. I constrain tools, cap steps, log actions, and use agents only when a single completion isn't enough."

---

## Checkpoint

- [ ] I can draw the agent loop
- [ ] I know why max_steps matters

Next → [29 — LLM eval](./29-llm-eval.md)
