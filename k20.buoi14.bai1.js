function analyzeValue(value) {
  return {
    input: value,
    type: typeof value,
    isTruthy: !!value,
    isNullOrUndefined: value === null || value === undefined,
    isReferenceType:
      (typeof value === "object" && value !== null) ||
      typeof value === "function",
  };
}
```
