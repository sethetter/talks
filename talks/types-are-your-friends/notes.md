# OUTLINE

- **What are types?**
  - In a programming language, all variables have a **type**.
    - Primitives: string, integer, function, object, array
    - Domain Specific: LoginRequest, User, BlogPost

- **Programming languages can be typed in different ways.**
  - Dynamically typed
    - No need to specify types in your code, they're determined at runtime.
    - Type incompatibilities turn into runtime errors.
    - Example: `001.js`
  - Statically typed
    - You specify in your code what type a variable is, what types a function
      accepts as arguments, and returns as values.
    - Before the program is executed, analysis is performed to verify that the
      right types are used in the right places, and no violations exist.
    - Example: `001.ts`
  - Many other categories of type systems in between **static** and **dynamic**.
    - Duck typing, gradual typing, optional typing, etc.

- **Arguments for dynamic typing.**
  - Less cognitive overhead; just write your code and don't worry about types.
  - More flexibility; avoid restriction that a type system might impose.

- **Valid arguments, but I'm here to convince you that static is better.**
  - Prevent an entire class of potential coding errors, for free.
    - Any code that misuses a type is caught during compilation.
      - Even better, during development!
  - Refactor your codebase with confidence.
    - Encode changes into the types, compiler guides you through the rest.
  - More information at your fingertips.
    - We can read source code and understand behavior.
    - Types provide more information for understanding and shaping our program.

- **Preventing type errors during runtime.**
  - Example: `02.js`
    - This file has an error, and maybe you can spot it quickly, but..
    - When we try to run it, we get weird, unhelpful behavior.
    - The _information_ we've received (`undefined`) is very indirect.
  - Example: `02.ts`
    - The same error exists here, but, the compiler catches it immediately.
    - A bit more code required to define the interface.
    - But even a simple example shows that a small time investment up front empowers the tooling to prevent runtime errors.

- **Refactor with confidence.**
  - Example: `03.js`
    - What if the `location` property is renamed to `address`?
    - Find and replace?
  - Example: `03.ts`
    - Shape of data changed.
    - Update `address` property name, and move name inside address.

- **Types lead to a more organized mental model.**
  - 
  - TODO: Example
    - New API endpoint, decide on request and response objects first.

- **Work with the compiler, not against it.**
  - ...
  - TODO: Example
    - Show conversational style of quick compiler feedback.
      - 
  - Write pseudocode, let compiler complain, and fill in the gaps.
  
- **Ultimately, choose the right tool for the job, dependent on many factors.**
  - What is it that you're building?
  - How big and long-lived will the code base be?
  - What's the staffing situation? Company/personal experience?
  - The list goes on..