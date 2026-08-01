# 08 — Pandas: clean messy data

Back → [Orchestration](../README.md)

---

## Small talk

Real data is ugly. Missing values. Weird dates. Duplicate rows.  
Pandas = spreadsheet powers in Python.

---

## Core objects

- **Series** → one column  
- **DataFrame** → table  

```python
import pandas as pd

df = pd.read_csv("people.csv")
print(df.head())
print(df.shape)
print(df.columns)
print(df.dtypes)
```

---

## Daily cleaning moves

```python
# missing values
df["age"].isna().sum()
df = df.dropna(subset=["age"])          # or
df["age"] = df["age"].fillna(df["age"].median())

# filter rows
adults = df[df["age"] >= 18]

# new column
df["is_adult"] = df["age"] >= 18

# groupby
df.groupby("city")["salary"].mean()

# select columns
X = df[["age", "tenure"]]
y = df["churned"]
```

---

## Train-ready tip

Before sklearn:

1. Drop ID columns that leak nothing useful (or leak future info — careful)  
2. Handle NaNs  
3. Encode categories (more in sklearn lab)  
4. Split train/test **before** fancy fitting on all data  

---

## Tiny end-to-end sniff test

```python
print(df.describe())
print(df["label"].value_counts())  # class imbalance?
```

If one class is 99%, accuracy will lie to you later.

---

## Checkpoint

- [ ] I loaded a CSV and used `head`, `isna`, filter
- [ ] I know DataFrame ≈ table

Next → [09 — Data thinking](./09-data-thinking.md)
