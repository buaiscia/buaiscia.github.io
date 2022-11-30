---
title: Finding a bug after writing a test, an example
date: '2022-11-30'
draft: false
tags: ['web development', 'react', 'testing']
summary: 'I wrote a test and found a small bug. Even in React writing tests is important'
---

In almost every Sprint, at work, I try to reserve some space for solving tech debt and doing some refactoring. A part of resolving this debt is making integration tests. And sometimes it happens that those tests find some unknown bug. That's what happened a few days ago. As usual, the names of the methods and variables are just an example.

The page I was writing the tests on is a simple one. Some text, three buttons, and nothing more. Yet, it has some hooks as well, defining the logic of those buttons (opening another URL, submitting the form, etc).

I started writing the tests in the usual way, using React Testing Library. Checking the rendering and the behavior of the page by clicking on the different buttons. When I was writing the test for one of the three buttons, however, it forced me to let me think: is this button always visible? Why?

```js
{showButton && (
   <Button onClick={onApplyClick}>
      DO THING
   </Button>
 )}
```

I checked the hooks and found out that it would render only when another property was true, or present. So why it was always there?

```js
  showButton: !!secondaryProp,
```

I followed the source of that property and I came across the point where its data was fetched from the (easy-peasy) store, and then it was set as an initial value of 0, instead of being undefined.

```js
const initialState: IState = {
  ...
  secondaryProp: 0,
```

The type of that property was just "number", instead of "number?". So it was always true.

```js
export interface IState {
  secondaryProp: number
```

To fix it, I changed the type and set the initial values as undefined. 

Re-checking that property I saw that another value was dependent on it being present or not. So in another hook, I had to redefine the behavior in case the prop was falsy.

```js
const newUrl = secondaryProp && `${FETCHED_URL}/prop=${secondaryProp}`

const onClick = () => {
    if (!newUrl) {
      return
    }

    window.open(newUrl)
  }
```

So that's an interesting case of how making tests helps you reflect on what the behavior, and the logic of the methods and components, should be.

Thank you for reading! Let's connect on [Twitter](https://twitter.com/AlexBuaiscia) or [Mastodon](@alex_@uiuxdev.social)! 
