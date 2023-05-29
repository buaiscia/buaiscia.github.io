---
title: Types Compatibility issues between Jest and Vitest using React Testing Library and their fix
date: '2023-05-29'
draft: false
tags: ['web development', 'jest', 'react-testing-library']
summary: 'Addressing Jest-Vitest Conflict: Fixing Global Type Identifier Errors and Optimizing Build Workflow'
---

When migrating from Jest to Vitest for our tests, we could encounter some minor issues. Having a proper setup and the test files in JavaScript usually works out pretty fine. However, at the moment of converting the test files to TypeScript and running the Vite build with TypeScript checks, we could find these errors:

```
node_modules/@types/jest/index.d.ts:33:1 - error TS6200: Definitions of the following identifiers conflict with those in another file: test, describe, it, expect, beforeAll, afterAll, beforeEach, afterEach

33 declare var beforeAll: jest.Lifecycle;
   ~~~~~~~

  node_modules/vitest/globals.d.ts:1:1
    1 declare global {
      ~~~~~~~
    Conflicts are in this file.
```

The problem is that these global types exist both in Vitest and Jest, so there's a conflict. There's an issue opened on GitHub Jest-dom for this issue since...well, January 2022 😄

Some workarounds were found along the way; however, with the latest Vitest upgrades (min. 0.31), those were not working anymore as well.
How do we solve it then?

There's a way, and it's actually killing two birds with one stone. Here's how:

- We can create an extension of the tsconfig file and call it "tsconfig.prod.json" under the root directory of our project where the original tsconfig file is located.
- This file will have the following object inside:

```json
{
  "extends": "./tsconfig",
  "exclude": [
    "./src/__test__/**",
    "./src/**/*.test.ts",
    "./src/**/*.test.tsx",
    "./src/**/*.spec.ts"
  ]
}
```

Of course, you can set it up according to your project test file types and directories.

- Then, as the last thing, we can update our build script in our package.json file:

```bash
tsc -p tsconfig.prod.json && vite build
```

What are the effects of all this?

1. We reduce build times because all test files will be ignored (hopefully, they were run earlier manually, via hooks, or on the CI/CD pipeline) and not transpiled into JavaScript.
2. Because of this, there's no conflict anymore between Jest and Vitest!

That's all for this issue. Let me know if you find some other way!

Let's connect on [Twitter](https://twitter.com/AlexBuaiscia)!
