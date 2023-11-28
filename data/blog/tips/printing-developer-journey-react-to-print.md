---
title: Printing Perfection, A Developer’s Journey with React-to-Print
date: '2023-11-28'
draft: false
tags: ['web development', 'react']
summary: 'Navigating the Challenges: Implementing a Robust Printing Solution with react-to-print in Web Development'
---

As a requisite for a commercial application, sometimes it's needed to implement a printing solution that is not the browser's default.

## Why the browser print API is limited

While we are accustomed to using CTRL/CMD + P to print a page, we know as a fact that often the layout that is presented is not ideal. Especially if we are using other UI libraries that are injecting their components with their hidden styles.
There can be elements out of order, fonts changing size, and so on.

One solution that many of us have tried is just to save the pages as PDFs and print them instead. While this method sometimes worked, we wanted to provide an effective solution to our clients so that all the important data would be visible, clear, and organized on the layout of the printed page.

## The search

I checked various libraries but eventually, my eye fell on the one called "react-to-print".

I'll be writing shortly about why I chose it, so it could maybe helpful to other developers who are starting their journey and would like to know how a new library is chosen for a work project. Compared to other libraries, it was a solution that, first of all, was not designed to create a PDF and then print it, but to use the native browser print API and it is just built on top of that.

Secondly, the number of weekly downloads (400.000) and how many people were already using it from Github (30.5k) helped me move forward in this direction. The library is pretty weightless, just 51kB. It is just one Javascript file. The rest are Typescript definitions and other add-ons.

Why wouldn't we do it ourselves, then?

First of all, no need to reinvent the wheel and lose time when you have a timeline of features to follow for the clients.

Secondly, the library has been so far maintained by 35 people and has multiple versions published in the year. Which is much more of what we could do, even sparing hours every week on it. Lastly, it is Typescript first, so it's easier to use and safer to use it correctly.

## POC

Before finishing the analysis, I did a proof of concept (POC). I opened a new branch and tried to implement it in a very rough way, just to see that nothing was breaking and it was working on the base concept.

It was a little hard as the documentation is not so straightforward, especially as it highlights the usage of React's old class components, and there are just two examples with functional components.

However, thanks to some other kind soul who posted some solution on its usage (which was different than what the documentation suggested) I could make it work, and show a good printing layout with a small print button.

## Work in progress

Our business analysts, then, prepared the specifications and assigned them to new ticket stories. After having been refining them, on the next Sprint, I took charge of them, as I already knew part of the job.

Of course, it didn't come as easy as the POC. There were multiple requirements in the specs and lots of nuances that had to be checked. Also, lots of bugs in styling the printing layout. First of all, I had to add the CSS query for hiding elements on print. Normally it would be a new class like this:

```css
@media print {
  .print {
    display: none;
  }
}
```

Luckily we are using Tailwind, and the utility for this is simply to add: print:hidden to the components or divs we want.

The first issue I came across was the usage of components of the library. As the POC worked fine, I started implementing it with the component. After struggling with it for some time, I realized that because I needed not only the component where was, but I also needed the reference in a child component, this couldn't be used.

I figured then that I had to use the custom hook provided by the library, as the hook result could be passed as a prop and used elsewhere. Also, the hook provided a way to implement various custom options more easily. The main way on how to do it is this:

```typescript
const handlePrint = useReactToPrint({
  content: () => componentToPrintRef.current,
})
```

HandlePrint is a function, so it can be called anywhere you want that action. It can be passed to other components as prop to call the print action from somewhere else. The component that will be printed is inside the componentToPrintRef reference. So you can wrap it in a very simple way:

```typescript
<div ref={componentToPrintRef}>
  <Components />
</div>
```

Then, you can add wherever you wish a button or link to call handlePrint. That's the basics, and on a simple page, it works nicely out of the box. However, I had to add a few things:

1.  Handle keys. We wanted the print happening not only with the button(s) but also on CTRL/CMD + P keys, as it happens with the browser.
2.  Hide not only CSS elements but also checkboxes and other elements depending on the state.

To make the first feature happen, I added the event listeners. A function taking the event as a parameter and, if the keys combination was of the aforementioned, calls handlePrint(). Then, a useEffect would be this simple way:

```typescript
useEffect(() => {
  document.addEventListener('keydown', handleKeyDown)
  return () => {
    document.removeEventListener('keydown', handleKeyDown)
  }
}, [handleKeyDown])
```

So far, it's something pretty regular. However, when it came to the second point, things got a little more complex. The most immediate solution was to create a state for printing using useState.

Then, somehow, setting it inside the print hook. ReactToPrint offers some methods to handle that inside the customHook. One is onBeforeGetContent to create a custom layout set before taking the actual CSS and HTML elements. The easier way was a function, as it is a function, to set the isPrinting boolean to true. Then pass isPrinting to the various components to hide the needed elements and not show them on the print layout.

However, that wasn't working normally. Sometimes the components were hidden, sometimes not. It probably meant that the state was not synced or waited for. After some research, and thanks to the people who wrote examples also in the library GitHub Issues section, I saw that onBeforeGetContent was expecting a Promise. The issue above then made sense. The change of state was not waited as there was no callback to let it wait.

Adding a new Promise() with parameters of resolve and value, I could then call setIsPrinting to true, and then resolve the value. On exit of the layout, instead, I used the method onAfterPrint, which was simple enough to just set setIsPrinting to false to get back the hidden components.

Now, another issue came out. Whenever I was clicking on Cancel or Print on the browser print layout, the dialog was closing. But if I tried to print again, the layout was all scrambled, making it as if the library was not there at all and it was using the default from the browser. After some thinking, I realized that it wouldn't happen if I interacted with the page elements between two prints.

So it must have been that, for some reason, without clicking on the page the library methods were temporarily removed. The solution was to focus on the page after exiting the print layout. As the element of reference is an HTML element, we can use that in the onAfterPrint method: componentToPrintRef?.current?.focus()
However, it was not focusing!

Why? It's because the focusable elements are only form elements, like input, select, and button. Or link tags with an href element. But the main point is the tabIndex attribute.
It is indeed that which is causing the element to be focused. So I added it to the print reference div: `<div ref={componentToPrintRef} tabIndex={-1}>`

Why -1 instead of 0? 0 makes the element focusable and adds it to the natural tab order of the page. But the page has already sections and headers and items that are possible to navigate with the keyboard, so it would create issues. -1, instead, makes the element focusable, but it removes the element from the natural tab order.

## Conclusion

In the ever-evolving world of web development, finding effective solutions to seemingly simple tasks, like printing, can often be a challenge.

I have tried here to go through the process of implementing a robust printing solution using the “react-to-print” library. It focuses on utilizing the native browser print API, which has proven to be an effective solution, despite the hurdles along the way.

This journey underscores the importance of continuous learning, problem-solving, and the power of community in the field of web development.
