---
title: Memoize a React component
date: '2022-07-27'
draft: false
tags: ['web development', 'react', 'tips']
summary: 'Using React.memo to memoize a React component'
---

Memoization is a feature in React. The library compares (in a shallow way) two versions of an object and, if they are the same, does not re-render (or recompile) it, creating an optimization in performance and memory.

The React.memo higher order component (to notice, not useMemo) used on a component is very easy to implement, but it's not always efficient or necessary. As everything about memoization in React, we shouldn't memoize everything but just the objects that are heavy, big, or re-renders very often.

So in my job it happened  an interesting case. I had quite a big parent component that is wrapping inside smaller children components. I'll just change the type of subjects and component name, but the example I'm giving is the same I have.

How do we memoize a component?

Supposing we have:

```js
  const BigComponent = ({...lots of props}) => {...lots of stuff done}
```

then we just put memo on the export 
```js
  export default memo(BigComponent)
```

Is it enough? Sometimes yes. But the more interesting part is another. How does React knows what to compare? It takes a previous version, and a next version (the one we're updating with new props). In the same way, memo could use those two version as callback arguments. They can be checked to make a quicker comparison, speeding up even more the memoization process.

Supposing that our BigComponent is mostly managing a school student card, and we have the children components showing according to the student. Then we'll have BigComponent supposedly changing when the id of the student change (supposing that is mapped from a parent component).

```js
  const BigComponent = ({student, ...other props}) => {...lots of stuff done}
```

We can now memoize the component comparing the IDs of the student. We can think of the IDs as the keys of the object. If they're the same, the component will remain the same, otherwise it will re-render.

But as you can see, I've done it slightly differently!
```js
  export default memo(BigComponent, (prev, next) => prev.student.id !== next.student.id)
```

This above will say: if the previous ID is different comparing to the next one, return true. The problem here is that we're getting the props and we use them on a child component, so if the IDs are the same (===) it won't do anything (won't open the card). 

In my case, it checks that the IDs are different, and don't do anything. But if they're the same, it'll allow the rerender. It's similar to how ShouldComponentUpdate was working, as we're giving the condition on when to rerender.

So, to sum up, we're memoizing (not rerendering) this component the opposite way only when the IDs (keys) change. That means that when we open a student card it will rerender. But when we add more students, or we use other student cards, they won't rerender in the page, and we will be getting a performance improvement.
