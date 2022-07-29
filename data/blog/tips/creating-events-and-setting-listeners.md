---
title: Creating events and setting listeners in Javascript
date: '2020-09-02'
draft: false
tags: ['Javascript', 'Web development', 'tips']
summary: 'How to add an event and how to create a listener to that event'
---

Preamble: I'm a junior developer who is still learning -well, who isn't? This note is from my direct experience from daily work; I'm conscious it is not perfect but I hope it can be helpful. I'll be glad to accept any improvement on this.

## Something is listening...

We use event listeners in many occasions.
A common case is when we click some element in the DOM; another one, when we submit a form or some input field.

Let's check how they work and how to build them with vanilla Javascript.

Of course all of it could be done with jQuery. It can be seen as a 'simpler' code, but we have to remember that for loading those apparently simple methods we have to load the whole library.

### Case 1

Let's say that we don't want to submit any form or input, but just make some action. For example, a button that add/subtract a value (a counter). In this case, we attach a click listener and make it run a function to perform that action.

As a simplified example:

```
<button id="buttonId" onClick="myFunction()">Action</button>
<script>
    myFunction() {
        actions here
    }
</script>
```

We can also add a Javascript file. In this case we can take off the onClick from the button and attach a listener directly in the script. We select the button element in first instance, then attach to it the listener.

```
const submitButton = document.getElementById('buttonId');

submitButton.addEventListener('click', e => {
    e.preventDefault();
    this.onClickHandler(optional methods);
});
```

There is no immediate advantage of doing it this way instead of the other. However, if we want to keep the Javascript code only in one place, readable and scalable, then it's a good way to go.
The code would become quickly messy if we need to add more functions in the html body.

### Case 2

In other cases the above way wouldn't be enough. As mentioned above, we could have a form that receive some input, like an email, and has to submit it.

So, as a simplified example in the HTML, we have:

```
<form>
    <li><input type="radio" name="optionOne">
    <li><input type="radio" name="optionTwo">
</form>
<button id="submitButton">Submit</button>
```

A good practice, then, would be to attach a listener to the button (that is what the 'onclick' is after all).

In our separate JS file we can create the following:

```
submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        });
form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.onSubmitHandler(optional arguments);
        });
```

To break it down, we have add a listener to the button. When we click on it, it will fire the callback setup on the click listener.

Preventdefault prevents the event to bubble (for instance it will call the callback method twice instead of once).

Eventually we create a new submit Event (capital, because it's a Javascript object) and attach it to the form.

This way, as we add a listener to the form itself, it will be called collecting the form data once the button is clicked.
Through the callback it will call the method that we need to perform any action we desire.

It's just few lines of code, and we have a custom listener that we can adapt to our needs.
