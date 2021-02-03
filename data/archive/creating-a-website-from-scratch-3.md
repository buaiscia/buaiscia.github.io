---
title: Building a site from scratch. Part 3 - Refactoring, showing/hiding header
date: '2020-03-24T10:00:00.000Z'
draft: true
tags: ['react', 'web development', 'design']
summary: "I'm going to create a website from scratch with React and Firebase. This is part 3, we add the header and it's show/hide functionality, and we do some refactoring"
---

Having deepened a little my studies and having done some other major or minor project, I have decided that some refactoring was needed before continuing. It is explicit to me now that for a website, I had to divide my 'files' into components and 'pages'. The pages are the ones that you see in frontend, the components are everything behind it (and which compose the pages of course).
So here's the new structure:

- 📂 **src**
  - 📄 [App.css](src/App.css)
  - 📄 [App.js](src/App.js)
  - 📄 [App.test.js](src/App.test.js)
  - 📂 **Components**
    - 📂 **candles**
      - 📄 [candles.component.jsx](src/Components/candles/candles.component.jsx)
    - 📂 **ceramics**
      - 📄 [ceramics.component.jsx](src/Components/ceramics/ceramics.component.jsx)
    - 📂 **gingerbread**
      - 📄 [gingerbread.component.jsx](src/Components/gingerbread/gingerbread.component.jsx)
    - 📂 **header**
      - 📄 [header.component.jsx](src/Components/header/header.component.jsx)
      - 📄 [header.styles.scss](src/Components/header/header.styles.scss)
    - 📂 **homepage**
      - 📄 [homepage.component.jsx](src/Components/homepage/homepage.component.jsx)
      - 📄 [homepage.styles.scss](src/Components/homepage/homepage.styles.scss)
    - 📂 **misc**
      - 📄 [misc.component.jsx](src/Components/misc/misc.component.jsx)
    - 📂 **woodcarving**
      - 📄 [woodcarving.component.jsx](src/Components/woodcarving/woodcarving.component.jsx)
  - 📄 [index.css](src/index.css)
  - 📄 [index.js](src/index.js)
  - 📂 **pages**
    - 📂 **about**
      - 📄 [about.component.jsx](src/pages/about/about.component.jsx)
    - 📂 **art**
      - 📄 [art.component.jsx](src/pages/art/art.component.jsx)
    - 📂 **contact**
      - 📄 [contact.component.jsx](src/pages/contact/contact.component.jsx)
    - 📂 **landing**
      - 📄 [landing.component.jsx](src/pages/landing/landing.component.jsx)
  - 📄 [setupTests.js](src/setupTests.js)

Refactoring didn't quite finished here.
First of all, I moved BrowserRouter from App.js to Index.js, which is at the root level. The problem was that I didn't want the routing props to be just in the switch or under the render in the app.js, but more into a high level.

Here's my new Index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </ BrowserRouter>,
    document.getElementById('root')
);
```

For refactoring, if you checked the previous post, you should have seen that I moved the main show pages in the pages folder: - landing --> the actual homepage on the root ("/") element - art --> the collection of types - about - contact

I took off the Layout component, as it seemed, at this point, redundant; or in another way to put it, it created too much nesting.

The further step was to migrate the Switch and routing to the App.js (more on that below).
As a detail, the landing page has its own component (called not originally 'homepage'), as the latter will have to manage an internal state (class component). Art is also a class component... it could be possible to make it functional and create a child component, however only the homepage will have a bigger stateful management to make it worthy.

So now App.js looks like this:

```

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/header/header.component';
import Landing from './pages/landing/landing.component';
import Art from './pages/art/art.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';


import './App.css';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            path="/art"
            component={Art}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/contact"
            component={Contact}
          />
        </Switch>
      </div>
    );
  }
}
```

### Styling

The next step wasThe further step was to install the module node-sass (`npm i node-sass`) that is converting all scss files into css while (re)starting the node server.
So it's possible to use .scss files directly as style files, with all its advantages.

I set up the header css:

```
.header {
    height: 5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;

    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 2em;

      .option {
        padding: 10px 15px;
        cursor: pointer;
      }
    }
  }
```

For anyone who's not familiar with sass, we can nest classes to tell the preprocessor that one class is inside another, ie. logo-container is inside header, and .option is inside .options which is inside .header.

### Hide and seek

Now, I needed to hide the Header component whenever I am in the home page, because I want to have the various links as an artistic page, and show the Header on any other page.
For this I needed to check the URL path where I was into, and hide/show the header accordingly: if in root path (/) then hide it.

In order to check the URL, I would need something that in vanilla JS is located in the window object (location.pathname); in React, react-router-dom can be used with 'withRouter'. So I would import it in my app js file:

`import { Switch, Route, withRouter } from 'react-router-dom';`
and wrap the app component with it
`export default withRouter(App);`
Now the location and path can be accessed. So I just added the condition above

```
render() {
    const urlPath = this.props.location.pathname

    return (
      <div>
        {
          urlPath !== "/" ? <Header /> : null
        }

        <Switch>
```

### Update1

Considering the new implementation of react-router 5, I made the routing as children instead of 'component' or 'render' in the Route. That gives much more control:

```
<Switch>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route path="/art">
      <Art />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
</Switch>
```

### Update 2

I've added as well a 404-Not found page. It has to go inside the Switch, as otherwise it will always show. It's enough to not specify the path, so the Switch will always render that if there is no match found.

```
<Route>
    <NotFound />
</Route>
```

### Results

So here we have it:

![Navigation](/media/site1.gif)

It's definitely ugly but the navigation works properly, the pathnames are recognized and usable, and the historization (function of back/forward arrows in the browser) also works fine.

The following action will be starting to create content!

To the next time!
