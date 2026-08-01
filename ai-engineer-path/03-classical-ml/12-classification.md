# 12 — Classification (pick a label)

Back → [Orchestration](../README.md)

---

## Small talk

Classification = pick a **category**.  
Spam / not. Dog / cat / bird. Churn / stay.

Binary = 2 classes. Multiclass = many.

---

## Logistic regression (not a regressor, sorry)

Despite the name, it's classification.  
Outputs a probability between 0 and 1, then you threshold (often 0.5).

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

clf = LogisticRegression(max_iter=1000)
clf.fit(X_train, y_train)
pred = clf.predict(X_test)
print(classification_report(y_test, pred))
```

---

## Other workhorses

| Model | Vibe |
|-------|------|
| Logistic Regression | Fast baseline, interpretable |
| Random Forest | Bags of trees, sturdy |
| Gradient Boosting | Often best on tabular |
| SVM | Older hero, less common now |
| Naive Bayes | Text / text classic |

---

## Probability vs decision

`predict` → hard label  
`predict_proba` → soft scores  

Product can change threshold:  
Fraud: maybe flag at 0.2 (catch more, more false alarms).

---

## Imbalance

If 1% churn, a dumb model saying "nobody churns" gets 99% accuracy.

Use: stratified splits, better metrics (see next topics), class weights, resampling — carefully.

---

## Interview bite

> "Classification assigns labels. I track precision/recall for the positive class when accuracy is misleading, and I tune the decision threshold to the cost of errors."

---

## Checkpoint

- [ ] I trained a classifier and printed a classification report
- [ ] I know accuracy can lie when classes are imbalanced

Next → [13 — Overfitting](./13-overfitting.md)
