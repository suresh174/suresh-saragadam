# 06 — Python crash for AI

Back → [Orchestration](../README.md)

---

## Small talk

You don't need to know all of Python.  
You need the bits that show up in every ML script.

---

## Must-feel comfortable

1. Variables, lists, dicts  
2. `for` / `if`  
3. Functions  
4. List comprehensions  
5. Reading files  
6. `pip` + virtual envs  
7. Basic classes (just enough to read PyTorch code)

---

## Tiny patterns you'll copy forever

```python
# dict of configs
cfg = {"lr": 1e-3, "epochs": 10}

# list comprehension
squares = [x * x for x in range(5)]

# unpacking
a, b = (1, 2)

# f-strings
name = "rag"
print(f"building {name} app")

# type hints (nice for APIs)
def add(x: float, y: float) -> float:
    return x + y
```

---

## Files & JSON

```python
from pathlib import Path
import json

text = Path("notes.txt").read_text()
data = json.loads(Path("data.json").read_text())
Path("out.json").write_text(json.dumps(data, indent=2))
```

---

## When code breaks

1. Read the **last** line of the traceback  
2. Print shapes / types (`type(x)`, `x.shape`)  
3. Google the exact error  

Debugging is half the job. Seriously.

---

## Checkpoint

- [ ] I wrote a function that reads a JSON file and prints a key
- [ ] I know what a venv is for

Next → [07 — NumPy](./07-numpy.md)
