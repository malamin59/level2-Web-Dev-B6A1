# ⭐ TypeScript নিয়ে গুরুত্বপূর্ণ ৪টি কনসেপ্ট: সহজ বাংলায় ব্যাখ্যা

আজকের ব্লগ পোস্টে আমরা TypeScript-এর কিছু গুরুত্বপূর্ণ কনসেপ্ট নিয়ে আলোচনা করবো। এগুলো জানলে তোমার TypeScript বেস আরও শক্ত হবে এবং প্রফেশনাল কোড লিখতে সাহায্য করবে।

---

## 1️⃣ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ **interface** এবং **type** প্রায় একই রকম হলেও কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### ✔ 1. Extending/Inheritance

**Interface →** extend করা যায় (multiple interface extend করা যায়)

**Type →** extend করা যায়, তবে মাঝে মাঝে complex union এ সীমাবদ্ধতা থাকে

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}
```

```ts
type Person = { name: string };
type Student = Person & { roll: number };
```

### ✔ 2. Declaration Merging (Only Interface)

**Interface →** বারবার declare করলে merge হয়ে যায়

**Type →** একাধিকবার declare করলে error

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
// Result: { name: string; age: number }
```

### ✔ 3. Union & Intersection

**Type →** union (`|`) এবং intersection (`&`) সাপোর্ট করে

**Interface →** union support করে না

---

## 2️⃣ keyof কীওয়ার্ডের ব্যবহার

`keyof` কোনো object type-এর সব keys-কে একটি union type হিসেবে বের করে।

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
// "name" | "age"
```

এটি চেক করার জন্য দারুণ কাজ দেয় যে কোনো key সঠিক কিনা।

---

## 3️⃣ any, unknown, এবং never এর পার্থক্য

TypeScript-এর তিনটি গুরুত্বপূর্ণ টাইপ।

### ✔ any

* যেকোনো কিছু assign করা যায়
* টাইপ চেকিং বন্ধ হয়ে যায় (unsafe)

```ts
let a: any = 10;
a = "Hello";
a = true;
```

### ✔ unknown

* যেকোনো value রাখা যায়
* কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হয় (safe)

```ts
let x: unknown = "Hello";

if (typeof x === "string") {
  console.log(x.toUpperCase());
}
```

### ✔ never

* এমন টাইপ যার কোনো মান কখনো হয় না
* সাধারণত error বা infinite loop এর ক্ষেত্রে

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## 4️⃣ Enum এর ব্যবহার (Numeric & String)

Enum হলো একটি constant value এর group।

### ✔ Numeric Enum

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
```

### ✔ String Enum

```ts
enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}
```

Enum ব্যবহার করলে কোড আরও readable হয় এবং ভুল কমে।
