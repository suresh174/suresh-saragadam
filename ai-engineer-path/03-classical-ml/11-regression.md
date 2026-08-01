# 11 — Regression (predict a number)

Back → [Orchestration](../README.md)

---

## Small talk

Regression = model outputs a **number**.  
House price. Temperature. Delivery minutes.

---

## Linear regression vibe

Draw the best straight line through points.

```
price ≈ w1*size + w2*rooms + b
```

Simple. Interpretable. Strong baseline. Always try a baseline.

---

## Tiny sklearn

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

model = LinearRegression()
model.fit(X_train, y_train)
pred = model.predict(X_test)
print(mean_absolute_error(y_test, pred))
```

MAE = average absolute miss. Easy to explain to humans ("off by ~$12k").

---

## When linear isn't enough

- **Polynomial features** (still linear in weights, curved in x)  
- **Trees / Random Forest / Gradient Boosting** (often crush tabular data)  
- **Neural nets** (when you have lots of data / complex signals)

For Excel-like business tables, **XGBoost / LightGBM** often beat fancy DL.

---

## Watch outs

- Outliers can yank the line  
- Features on different scales → consider scaling for some models  
- Don't compare models only on train score  

---

## Interview bite

> "Regression predicts continuous values. I start with a linear baseline, then try tree ensembles for tabular data, and pick a metric like MAE or RMSE that matches the business."

---

## Checkpoint

- [ ] I fit a LinearRegression once
- [ ] I know MAE in plain words

Next → [12 — Classification](./12-classification.md)
