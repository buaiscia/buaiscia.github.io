---
title: Epic React. Fundamentals. What I'm learning.
date: '2020-10-30'
draft: false
tags: ['react', 'web development', 'epic react']
summary: "A guide of what I'm learning on the Epic React workshops by Kent Dodds. This is the first one: fundamentals"
---

### Table of Content

- [Intro](#intro)
- [01: Basic JavaScript-rendered](#01-basic-javascript-rendered)
- [02: Intro to raw React APIs](#02-intro-to-raw-react-apis)
- [03: Using JSX](#03-using-jsx)
- [04: Creating custom components](#04-creating-custom-components)
- [05: Styling](#05-styling)
- [06: Forms](#06-forms)
- [07: Rendering Arrays](#07-rendering-arrays)
- [Conclusion](#conclusion)

## Intro

At this moment in my career, I'm a Javascript fullstack developer in the early stages. I've a good knowledge of Javascript, however React gives me sometimes a little more than a headache to understand deeply. I grew up in my learning with class based components, so later, when hooks were introduced, I found a little difficult to transition to this new way of writing React. That's why I wanted this course.

As part of my learning process, I'm going to note down not everything, but what I learnt, for each section. Often my solution was, although working, more complicated and less elegant than Kent's one. That's another aspect I wish to improve in my coding.

Of course you will find many more details and, well, the workshop itself directly in <a href="https://epicreact.dev">epicreact.dev</a>
I hope this will be useful to somebody else apart from me, and forgive my mistakes in English (not a native speaker).

## 01: Basic JavaScript-rendered

In the first exercise, it's necessary to make some DOM manipulation with plain Javascript. As I'm using this method in my daily work, I had no difficulties in the first part. As a matter of fact, I'm learning a lot into transforming a codebase that is heavily relying on jQuery into plain Javascript.

However, I did have to do some thinking on the additional exercise, as I'm not used to work with the root element of the body. So I personally didn't know -but now that I know, it makes sense - that there's a body object inside the document object. I won't give here the solution, but it's an important reminder to always check the parent elements... what are they hiding inside :)

## 02: Intro to raw React APIs

The second exercise of the workshop was already trickier - which I was happy about because definitely I didn't want to learn again the same stuff.
It's not often, if ever, that we are using the React.createElement. Using JSX we just skip this part, but that's how it works under the hood.
So after learning what jQuery is doing in Javascript, now it's React in Javascript.

First thing I learnt here is that the famous property 'children', in React, corresponds to textContent in plain JS. It makes sense, of course, as a matter of fact we are rendering some text made visually in HTML.

The second thing is that createElement has three - or more - arguments that can be passed.

<ol>
  <li>The type of element (span, div, etc)</li>
  <li>The object passed inside the element (class, children, etc)</li>
  <li>A n number of other objects, that will be rendered as additional children.</li>
</ol>

As a matter of fact, the children property doesn't even have to be defined inside the second argument of createElement, but can be listed at the end of the method.

## 03: Using JSX

The third exercise was about creating simple JSX elements that Babel will transform in normal JS with React.createElement. As it's basically almost a reverse engineering of the previous exercises, it was not difficult. However, it was interesting the use of the spread operator inside a div element, which createElement puts in the correct position:

```javascript
const className = 'myClass'
const children = 'this is my text'
const props = { children, className }
element = <div {...props} />
```

It will create a div with its own class and the innertext as children.

Another interesting point in the video is about prioritization of position using the spread operator. Supposing that we have the above props, but then we want to override the className with another name, we have to place the spread props before. In synthesis, the right argument will always override the left ones.

```javascript
<div {...props, className='secondClass'} /> // <div className="secondClass" />
<div {className='secondClass', ...props} /> // <div className="myClass" />
```

## 04: Creating custom components

So here we go finally to start creating components. The first part consists in creating a function that basically returns a div, so instead of repeating div div in the rendered element, we just pass the function with the string as "children". One thing that I knew but forgot explicitly is that if I pass a parameter to the function as an object, the argument must be an object as well. So:

```javascript
helloFunction = ({ children }) => {
  return <div>{children}</div>
}

helloFunction({ children: 'Hello' })
```

The next point was to implement this function as an element:

`const myElement = React.createElement(message, { children: 'Hello!' })`

and finally incorporate it in the element itself, which will be taken into ReactDom.render:

```javascript
const element = (
  ...
  {myElement}
)
```

Following that, it's about referring the same helloFunction but make it directly compiled through Babel as an element, without needing to pass through createElement. This is possible thanks to JSX, and it's enough to make the function name with first letter as capital, and reference it inside the element object as that.
`HelloFunction = () = {}`

`<HelloFunction>Hello!</HelloFunction>`

This is the equivalent of `React.createElement(HelloFunction, null, 'Hello!')`

Next, it was the time of implementing propTypes for typechecking, giving the same above function to have two parameters, both strings. In the workshop, it's explained how to make a propTypes function for checking manually the type. But it's interesting that it's not taking advantage of the prop-types library. It is true that for a simple check of two props, importing a whole library is excessive; but I don't think I'll ever just use two checks.

`<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>`

```javascript
HelloFunction.propTypes = {
  greeting: PropTypes.string,
  subject: PropTypes.string,
}
```

I'm not getting either a personalized message, but the standard warning is understandable enough

```
Invalid prop `subject` of type `number` supplied to `Message`, expected `string`. in HelloFunction
```

Ah, here we go, in the next exercise there's the implementation of the library... ooooops, I went a little over head. But good point, to implement also 'isRequired'

```javascript
HelloFunction.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
}
```

Anyway, Typescript rules!

## 05: Styling

In this exercise it was needed to apply style to a custom component in various ways. On a first part, just adding inline styling to a small div; then to a custom component passing its className prop; finally, passing only a string as a size prop and selecting dynamically the style inside the custom component.

First note: when making a reusable component, normally it's good to place all defaults on the left and what the user is providing (spread operator) after, because we don't want to enforce something.

Second note: as usual I overcomplicated things. As the size property passed would be only small, medium and large, and the classes are called box--small, box--medium, box--large, it's enough to substitute the size with the size prop passed into the component.

`box--${size}`

adding that to a ternary operator in case it's the prop is not present.
What I did instead was a nested ternary operator with an object created with the classes names inside. Much more complicated, although it was working 😁

```javascript
const sizes = {
  small: 'box--small',
  medium: 'box--medium',
  large: 'box--large'
}

className={`box ${size === 'small' ? sizes.small : size === 'medium' ? sizes.medium : sizes.large}`}
```

## 06: Forms

In the first exercise, the object is creating a submit listener/handler that will call the function in the main component, which is passed through as a prop.

We can put events (will be React synthetic events) on each element; however, the onSubmit goes inside the form to catch every field that is contained.
Synthetic events are objects that React creates that look and behave like regular DOM events.
It's still possible to access the DOM event with `event.nativeEvent`, however, the synthetic one is optimized to work with React code, and the virtual DOM.

I created then a function inside the function (a callback), called once the submit button is clicked. And I've added the preventDefault() to that event to prevent the page to refresh (as default event for a form).

Another interesting thing is about accessibility. Screen readers need to associate the input with its label. So it's needed to give the input an id and the label a htmlFor (the same for= parameter in normal HTML). Moreover, this gives the property of focusing on the input when clicking on it.

The second part of the exercise was about doing the same as above but using the useRef hook. UseRef are simply reference pointers to an element.
First, it's needed to be imported from 'react' and not 'react-dom'.

Then, adding the reference to our input
`<input ref={usernameInput} />`
In the main function (or custom component), we can call the hook: `const usernameInput = useRef(null);`
Why null? The argument of useRef is the initial value. But in this case we don't need that, just what will be in usernameInput.

Finally, we can access all our referenced properties, like the input value, this way: `usernameInput.current.value`

In the next credit, it was needed to create a controlled input. A controlled input is an input field that is controlled by the component state. That means setting the value of the input by the state: ` <input ref={usernameInput} value={username} onChange={handleChange} />`

Then, we can set the state at the top of the component: `const [username, setUsername] = useState('');`
And finally, use that state to change the value of the input in the handleChange function. In this case, transforming every key to lowercase:

```javascript
const { value } = event.target
setUsername(value.toLowerCase())
```

So the flow is the following:
input from user --> update input state --> transforming input state -> sending the state as value of the input --> input appears on screens.

## 07: Rendering Arrays

The exercises were just little demonstrations in this case, to show the importance of using a unique index key when showing elements in the DOM through a mapping. Not without, not with the pre-built index of the map function, but with a preset set of keys to use. This allows also React to keep the state of the inputs even with continuous rendering.

Not doing so is a mistake that leads to any kind of unpredictable behavior. I did this time ago and it also cost me many points in an interview.

## Conclusion

This is all for the Epic React Fundamentals section. I already know that the next workshops will be more challenging, but it was useful to know/be reminded of some basics.

Thank you for reading and let's connect on [Twitter](https://twitter.com/AlexBuaiscia)!
