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

// Test theo đề bài
console.log(analyzeValue(null));
console.log(analyzeValue(undefined));
console.log(analyzeValue(0));
console.log(analyzeValue("hello"));
console.log(analyzeValue([1, 2, 3]));
console.log(analyzeValue({}));
console.log(analyzeValue(function () {}));
console.log(analyzeValue(NaN));
