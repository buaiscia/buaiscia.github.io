---
title: How to Handle Scroll Events in React
date: '2023-10-22'
draft: false
tags: ['web development', 'react']
summary: 'Mastering Smooth Scroll Events in React: A Guide to Debouncing and Dynamic Navigation'
---

In this blog post, we’ll explore how to handle scroll events in a React application. We’ll focus on an issue developers could face: synchronizing state with the scroll position.

## The Problem

Imagine you’re building a complex UI with multiple sections, and you want to highlight the navigation link of the section currently visible in the viewport. Not only that, you would like to be able to click on the sections and scroll on the corresponding one. You might think of using a scroll event listener that checks the scroll position and updates the state accordingly.

However, you may encounter an issue where your state updates continuously, causing unnecessary re-renders and performance issues.
Unfortunately, the only browser API for it, called [scrollend event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollend_event), is not compatible and implemented in Safari, nor in iOS, Samsung or Opera browsers, so it can't be really used on large scale. 

## The Solution: Debouncing

To solve this problem, we can use a technique called debouncing. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often. This can be particularly useful for rate limiting execution of handlers on events that will trigger requests.

Here’s how you could implement a debounce function in TypeScript, in a very abstract method:


```typescript
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
```

This debounce function takes two arguments: func, the function you want to debounce, and wait, the number of milliseconds to delay before executing the function.

## Checking if an Element is in the Viewport

To determine which section is currently visible in the viewport, we can use a helper function:

```typescript
function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
```

This function takes a DOM element as an argument and uses the [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) method to get its position relative to the viewport. It then checks if the entire element (from top to bottom and left to right) is within the viewport dimensions. If it is, the function returns true; otherwise, it returns false.

We can use this function in our scroll event listener to check if each section is in the viewport and update our selected state accordingly.

By combining these techniques, we can create a dynamic navigation system that responds to both user interactions and scroll events, providing a smooth and intuitive user experience.

## Applying Debouncing to Scroll Event Listener

We can apply our debounce function to the scroll event listener in our React component:

```typescript
useEffect(() => {
  const handleScroll = debounce(() => {
    if (!isScrolling) {
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        if (isElementInViewport(section as HTMLElement)) {
          setSelected(() => section.id)
        }
      })
    }
  }, 500); // Adjust this value as needed

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isScrolling]);
```

In this code snippet, we’re adding a scroll event listener that fires our debounced function. This function checks if we’re currently scrolling and if not, it checks each section (through a class name to be applied) to see if it’s in the viewport. If it is, it sets the selected state to the ID of that section.

By using debouncing, we ensure that our event handler doesn’t fire too often and cause performance issues. Instead, it waits until a certain amount of time has passed without the event being fired before executing.

## Handling Click Events

In our React component, we may want to handle click events that trigger scrolling to a specific section. Here’s how we can do it:

```typescript
const handleOnClick = async (value: any) => {
  setIsScrolling(true)

  const element = document.getElementById(value)

  if (element) {
    element.scrollIntoView({behavior: 'smooth'})

    setTimeout(() => {
      setIsScrolling(false)
      setSelected(() => value)
    }, 500)
  }
}
```

In this function, we’re first setting isScrolling to true. Then, we’re getting the DOM element with the ID equal to the clicked value. If such an element exists, we’re using the scrollIntoView method to smoothly scroll to that element.

After a timeout of 500ms (to allow for the scrolling animation to finish), we’re setting isScrolling back to false and updating our selected state to the ID of the clicked section.

## Simplifying debouncing

It is even possible to use directly the setTimeout browser API directly, instead of making a function about debouncing. The effect, pardon the pun, will be the same, but the code simpler, if you don't need to reuse it. Otherwise, the debounce function, or even import lodash debounce, will do.

```typescript
useEffect(() => {
  let timeout: NodeJS.Timeout
  
  const handleScroll = () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      if (!isScrolling) {
        const sections = document.querySelectorAll('.section')
        sections.forEach(section => {
          if (isElementInViewport(section as HTMLElement)) {
            setSelected(() => section.id)
          }
        })
      }
    }, 100) // set to what is your need; can be lower than the handle on click for it doesn't need too much waiting
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isScrolling]);
```

## Conclusion

Handling scroll events in React can be tricky due to the asynchronous nature of JavaScript and the way React batches state updates. However, with techniques like debouncing, we can efficiently handle these events and create smooth, responsive user interfaces.
When we have to use two different listeners to make actions on our DOM, they can interfere with each other. That's why we need to create some workaround to wait for the changes to happen.

Remember to always remove event listeners when they’re no longer needed to prevent memory leaks and potential performance issues.
If you have other ways of handling scroll events in such cases, please share it!
