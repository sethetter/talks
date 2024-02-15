# type-safe openapi

talks.sethetter.com/type-safe-openapi

---

# what is openapi?

----

## openapi

standard format for documenting web APIs

---

# why would you use it?

helps people know how to use your API

----

# why would you use it?

helps ~people~ ai know how to use your API

---

# pain points

why might you _not_ use openapi?

----

# pain points

- maintaining by hand
- code getting out of alignment
- meeting documentation standards

---

# solutions?

----

## maintaining by hand

generate it from code (but don't abstract away!)

_start with openapi, even if defined in code_

----

## code getting out of alignment

generate types from spec, attach to handlers

----

## meeting documentation standards

1. type constraints in your spec source
2. linting on your generated spec

---

demo!
