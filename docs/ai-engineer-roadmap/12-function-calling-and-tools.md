# 12 — Function Calling & Tools

**Checkpoint:** Describe how an LLM "calls" a weather API without executing code itself. Tick when done.

---

## Small talk version

LLM can't run your database query. But it can **output structured JSON** saying:

`"call get_weather with city=London"`

Your code runs it, feeds result back. Model continues.

That's **function calling** / **tool use**.

---

## Flow

```
User: "What's the weather in London?"
  → LLM decides: need tool get_weather(city="London")
  → Your server runs get_weather()
  → Result: "14°C, cloudy"
  → LLM: "It's 14°C and cloudy in London."
```

---

## OpenAI tools pattern

```python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current weather for a city",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string"}
            },
            "required": ["city"]
        }
    }
}]

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=messages,
    tools=tools,
)
```

If model returns `tool_calls`, you execute and send `tool` message back.

---

## Tool design rules

1. **Clear names** — `search_orders` not `fn1`
2. **Good descriptions** — model picks tool from text
3. **Validate args** — never trust LLM output blindly
4. **Timeout & errors** — return error text to model

---

## Deep dive — tools vs MCP

| Layer | What |
|-------|------|
| Function calling | OpenAI/Anthropic API format |
| Your functions | Python functions you write |
| MCP | Standard protocol to expose tools to many clients |

Tools = capability. MCP = plug standard. AI Explorer teaches both.

### Security

- Read-only tools first
- Auth per tool call
- No raw SQL from model — parameterized queries only
- Rate limit external APIs

---

## Interview bite

**Q: How do agents use tools?**  
**A:** Loop: model plans → emits tool call → runtime executes → result as new message → model decides next step until final answer.

---

## Mini exercise

Define two tools: `add(a,b)` and `multiply(a,b)`. Ask model: "What is (3+4)*5?" Trace tool calls.
