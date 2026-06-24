```javascript
function classifyUser(user) {
  const displayName = user.name || "Ẩn danh";

  const isAdult = user.age >= 18;

  const hasEmail = !!user.email;

  const role =
    user.role === null || user.role === undefined
      ? "guest"
      : user.role;

  let status;
  if (user.score >= 80) {
    status = "vip";
  } else if (user.score >= 50) {
    status = "normal";
  } else {
    status = "new";
  }

  const canAccess = isAdult && role !== "guest";

  return {
    displayName,
    isAdult,
    hasEmail,
    role,
    status,
    canAccess,
  };
}
```
