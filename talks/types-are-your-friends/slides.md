## Types are your friends!

---

I'm Seth

----

I've worked in a variety of languages.

----

I have strong **opinions** about types.

---

## What are types?

----

In a programming language, all variables have a **type**.

----

## Primitive Types

string, number, boolean, function, object

----

## Domain Specific Types

LoginRequest, SiteUser, BlogPost, SaleReceipt

---

A type defines what we can do with a thing in code.

----

## Types of Type Systems

----

## Dynamically Typed

- Types determined when the code is run.
- Incompatibilities result in runtime errors.

```
function add(x, y) {
  return x + y;
}
```

----

## Statically Typed

- Types specified (mostly) by you in the code.
- Code is checked for incompatibilities before execution.

```
function addTyped(x: number, y: number): number {
  return x + y;
}
```

----

Many other types of types systems exist.

We're just going to focus on these two for today.

---

## Arguments for dynamic typing.

----

**Lower friction to getting code written.**

----

**Less restrictive in expressing behavior.**

----

**Reduced complexity, easier to reason about.**

----

_Completely valid arguments, but.._

---

## Arguments for static typing

----

**Prevent entire classes of potential failures.**

----

**Ease the refactoring process.**

----

**More information at your fingertips.**

---

![](https://media.giphy.com/media/lVHrrNULjBbd6/giphy.gif)

---

## Thanks!