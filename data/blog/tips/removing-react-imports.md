---
title: Removing Default React Imports in React. A Guide to Cleaner Code
date: '2023-02-13'
draft: false
tags: ['Web development', 'React', 'tips']
summary: 'Simplifying Your Codebase with the New JSX Transform and Eslint Configuration'
---

If you are one of the many people migrating their projects to React 18, maybe you skipped one great feature for your code coming along from the previous version (17): you can remove all default React imports! 
To be precise, it was present also in some previous React versions, but it was always somehow hidden from the general public (or maybe just me?). 

We were accustomed to the need of importing React in every. single. file.
And maybe you are still doing it after the migration. I did it, indeed, for a while :D

That is because this possibility is in the docs, but in a side note with an enigmatic title: ["Introducing the new JSX transform"](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports).

In substance, it creates React as a global so it does not need to import it everywhere. How does it work? 
It is quite simple. Instead of having:
```js
import React, {useState, useEffect} from 'react'
```

you can have the normal destructured import without the need to import the whole library:
```js
import {useState, useEffect} from 'react'
```

or skip it entirely if you don't need any hook.

Also, instead of removing all those imports manually, React offers an automated script that will make everything for you: 
```
npx react-codemod update-react-imports
```

Just be careful to have all your work committed, as it will create changes probably on almost every file of your repository.


## What about linting?

There was another small problem. Eslint was complaining if one was removing React from a file, saying it was not a UMD global. 

The missing piece is on this page, in a small note at the end of the page: [the eslint rule to disallow missing React when using JSX.](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

At the bottom, there is a paragraph. If you are using the new JSX transform from React 17, you should disable this rule, adding "plugin:react/jsx-runtime" to "extends" in the eslint config file.

Now everything will work as expected and you will have a much cleaner codebase!


Thank you for reading! Let's connect on [Twitter](https://twitter.com/AlexBuaiscia)
