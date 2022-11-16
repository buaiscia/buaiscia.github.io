---
title: Making reusable get methods in React Testing Library
date: '2022-11-16'
draft: false
tags: ['web development', 'react', 'react testing library']
summary: 'Creating some abstractions to have ready to use getter functions'
---

While writing unit and integration tests, I'm trying to find the best way on how to write them cleanly.
I'm using React Testing Library so that makes already a good job of using good patterns.
However, recently I stumbled upon the fact that I'm reusing again and again the same methods to get the elements from the DOM.

The majority of cases are using `screen.getByRole` for the buttons and `screen.getByLabelText` for the inputs, using the name prop. The only difference would be the first returing the element, and the latter returning the value of the input. Normally, I would use the first one this way:
```js
screen.getByRole('button', {name: /name of the button/i })
```

As I like to use the names without having to think about capitalization of some letter, I use the parameter 'i' with Regex in order to ignore this case. Also, being with Regex, I don't have to worry whether it's a full sentence or just a part of it.

So, I thought I could extract these methods in a more reusable way, in order to use them freely around the test suites.

Here's how I did it:

```js
const getButtonByName = (btnName) => {
  const regName = new RegExp(btnName, 'i')

  return screen.getByRole('button', { name: regName })
}

const getInputByLabel = (label) => {
  const regName = new RegExp(label, 'i')

  const { value } = screen.getByLabelText(regName)

  return value
}
```

Then I can easily use them:
```js
  const button = getButtonByName('my button')
  const inputValue = getInputByLabel('my input label')
```

I made another method in a similar way for radio buttons. More could be done but these are the three methods I use the most. So for the rest, it could be a little of over-abstraction.

Another improvement that can be done, in my opinion, would be change the strings of the names ('my button', etc.) with fixed objects (JS) or enums (TS). For example: 

```js
JS

const ButtonNames = Object.freeze({
	ButtonOne: "button one",
	ButtonTwo: "button two",
})

TS

enum ButtonNames {
  ButtonOne = "button one"
  ButtonTwo = "button two"
}


```

Thank you for reading and let's connect on [Twitter](https://twitter.com/AlexBuaiscia)!
