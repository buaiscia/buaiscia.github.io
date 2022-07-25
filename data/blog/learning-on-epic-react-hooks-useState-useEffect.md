---
title: Epic React. Hooks. UseState, useEffect. What I'm learning.
date: '2021-11-01'
draft: false
tags: ['react', 'web development', 'epic react']
summary: "A guide of what I'm learning on the Epic React workshops by Kent Dodds. This is the second one: useState + useEffect"
---
- [Back into Epic React](#back-into-epic-react)
- [1 - useState](#1---usestate)
- [2 - useEffect](#2---useeffect)
- [Other notes](#other-notes)
## Back into Epic React

After a long break and quite more experience, I managed to get back to EpicReact. This is the second chapter of the series. Here's the link to the first one:

[Epic React. Fundamentals. What I'm learning.](https://buaiscia.github.io/blog/learning-on-epic-react-fundamentals)

As in the other post, this isn't a guide to React nor to EpicReact. They are just my notes, thoughts and learning on the course workshops. Few things can appear as confusing for lack of context. However, I hope you can find some interesting points to reflect upon. Repositories and solutions are anyway publicly available on Kent's Github.

Let's dive into hooks, with a focus on useState and useEffect!

## 1 - useState

A first good point is: in controlled components value is changed/updated by the state and uncontrolled by event handlers.

The interesting part of useState is how under the hood is nothing else but an array declaration. When it's used, it gets two elements of the array, in which the first is the variable and the second one is the function to update the variable.

So a code like this:
`const [ count, setCount ] = useState(0)`
would be, not destructured:

```javascript
const array = useState(0)
const count = array[0]
const setCount = array[1]
```

The first exercise is quite simple if one understands React states well. Every time (unless different specified) the state changes, in any part of the component, there will be a re-render of the component virtual DOM, updating what appears on the page.
If I call a function on the onChange in the input, and that function changes the state (`setCount(event.target.value)`), then I can call the updated state in any part of the render
` {count ? <strong>Count is {count}</strong> : 'Add a number to count'}`

In the second part the task would be to use a prop in the component as initial value to pass
`<Counting initialCount={0}`
I find there are different ways. The best way is to setState to that initial value that is destructured in the function arguments:

```javascript
function Counting({ initialCount = 0 })
```

Destructuring is necessary because initialCount is an object so, if we're passing the argument just like it (initialCount), the result will be [Object object].
The default value (= '') is also necessary in case we don't pass anything as a prop. In this case we don't cause a crash because of undefined value (unless we use Typescript and we define it as possible undefined).
So one way is to setState(initialCount) and value=count in the input.

Another possible way is to set the defaultValue of the input to the initialCount. This will have the same effect except that the state of the rendered text won't be updated until something is typed. It's possible to create a check to use the count (like a nested if but with ternary operator). However, it will make the code more difficult to read and follow in its flow.

## 2 - useEffect

This hook is called at every render of the component whenever its dependencies change. Or at any render if the dependency array is empty.

We can persist the state: call the localstorage methods inside useEffect (getter and/or setter) `const [name, setName] = React.useState(window.localStorage.getItem('name') || initialName)`
However in doing so we can run into a performance issue. Access to localstorage is slower than other methods.

There are some workarounds for this:

- React’s useState hook allows you to pass a function instead of the actual value, and then it will only call that function to get the state value when the component is rendered the first time: `React.useState(() => someExpensiveComputation())` ... that's the same as the callback on setState in class components
  `const [name, setName] = React.useState(() => window.localStorage.getItem('name') || initialName)`
  If we put a console inside the callback we cans see it's called only on the first render.
  It should be used only for bottleneck functions that require sync time

Or using useEffect: 

- lazy initialization, or not reading from localStorage at every render.
- dependency array: second argument on useEffect which signals to React that your effect callback function should be called when (and only when) those dependencies change:

```javascript
React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [name])
```

If other states apart from name change setItem won't be called
If left empty, it'll be called only at the first render.
The state in the dependency array is an object that is compared on the render with the previous state through object comparison. If they're the same useEffect won't run , otherwise yes.

Custom hooks. They are external functions called inside a method. Their names start with ”use”.
If we have different functions inside the component method we can externalize those, even useEffect:

If we have a method like this:

```javascript
function Greeting({ initialCount = 0 }) {
  const [count, setCount] = React.useState(
    () => window.localStorage.getItem('count') || initialCount,
  )

  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  function handleChange(event) {
    setCount(event.target.value)
  }
```

We can convert it to this and then use it in the main method as custom hook:

```javascript
function useLocalStorageWithState() {
  const [count, setCount] = React.useState(
    () => window.localStorage.getItem('count') || initialCount,
  )

  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  return [count, setCount];
}

function Greeting({ initialCount= 0 }) {
  const [count, setCount] = useLocalStorageWithState()
  function handleChange(event) {
    setCount(event.target.value)
  }
```

## Other notes

- Setting up a callback inside useState makes the setting of the state as lazy, as it compares the states and doesn't change it if it's the same.

- If you ar getting an error that goes like: 'React Hook ... is called in function ... which is neither a React function component or custom React Hook function', then it's possible that you put a wrong name to the custom hook.
As a React convention, your function should start with 'use' and probably is not. For example, useGetItems.
So, instead of syncLocalStorageWithState, we call it useLocalStorageWithState.

useLocalStorageWithState should have the same use as the useState hook, so it can return an array like useState, and we can store it in a similar array. So we have created a custom useState hook that does other stuff as well.
We pass as well count and initialCount as parameters `useLocalStorageWithState(count, initialCount)` and then making useLocalStorageWithState more generic, receiving as arguments `key, defaultValue` , so the method can be reused freely and not stay chained to a count state. The same applies to the state. We can set [state, setState] and return the same.
Having two arguments means that also useEffect should have two in the dependency array.

The logic of the flexible localStorage hook is the following:
  - get the item from local storage
  - if present, JSON parse it and return the result
  - if not, return the default value

That's for getting the state. For setting the changes using useEffect -in this case for creating/editing the local storage- se can move forward like this: once the state changes we can just stringify whatever the state will be and store it.
Serialize will be for stringify the JSON, while deserialize for parsing it.

In case as argument of useLocalStorageWithState, instead of a number, we'll pass a function, it's possible to create a check to return the results of another function.
`const [name, setName] = useLocalStorageWithState('name', complexCounting() )` --> pass a function as default value
`return typeof defaultValue === 'function' ? defaultValue() : defaultValue;` --> return to useState the result of the method

Then it comes the complicated part. 
In the above case, we are passing two parameters to useLocalStorageWithState. The first one -the key- is a string and the second a primitive value or a method.
What if somebody wants to pass another value to the 'key'? Now, for example, can be passed 'count' as string, but maybe somebody will want to pass something different (to store a different thing in local storage, for instance).

There's no direct way to change the state of the key, so what could be done is storing the key into a variable that won't trigger the render, using useRef. Following that, in useEffect we can compare the old key with the new one.

According to the docs:

> useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
> Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

The difference with useState is then that useRef doesn't trigger a rerender, so with this hook we can actually set the key without triggering the rerender. The purpose of this is clear in the useEffect

```javascript
const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
```

Usually we store in localStorage a value. But this value is in an object, and that object has a key. So for now it's 'count'. But if it will be 'sum', and we don't remove the initial key, we'll have two objects in localStorage. So if the new key and the old one, which is stored in the useRef var, is different, we will remove the object in localStorage with the old key.
