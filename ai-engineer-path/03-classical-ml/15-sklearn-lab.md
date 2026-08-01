# 15 — scikit-learn mini lab

Back → [Orchestration](../README.md)

---

## Small talk

This is your **hands-on checkpoint** for classical ML.  
Do it. Don't only read.

---

## Lab: predict flower species (Iris)

Tiny famous dataset. Perfect gym weights.

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

pipe = Pipeline([
    ("scale", StandardScaler()),
    ("clf", LogisticRegression(max_iter=1000)),
])

pipe.fit(X_train, y_train)
pred = pipe.predict(X_test)
print(classification_report(y_test, pred))
```

Why `Pipeline`? Scaling fits on train only, then applies same transform to test. Less leakage. Cleaner code.

---

## Stretch goals

1. Swap model for `RandomForestClassifier` — compare F1  
2. Use `cross_val_score` on train  
3. Try a regression dataset: `fetch_california_housing`  

```python
from sklearn.datasets import fetch_california_housing
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error
```

---

## What "done" looks like

You can, without copy-paste panic:

1. Load data  
2. Split  
3. Build pipeline  
4. Fit  
5. Evaluate with the right metric  
6. Say what you'd try next  

---

## Interview bite

> "I use sklearn pipelines so preprocessing is tied to the model and fitted only on training folds."

---

## Checkpoint

- [ ] Iris lab runs on my machine
- [ ] I changed one model and re-compared metrics

Next → [16 — Neural nets](../04-deep-learning/16-neural-nets.md)
