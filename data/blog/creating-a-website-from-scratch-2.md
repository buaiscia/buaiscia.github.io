---
title: Building a site from scratch. Part 2 - First routing
date: '2020-01-21T10:00:00.000Z'
draft: true
tags: ['react', 'web development', 'design']
summary: "I'm going to create a website from scratch with React and Firebase. This is part 2, building the routing"
---

Having chosen the main categories, I needed to start building the website structure.
The tree is like the following

- 📂 **src**
  - 📄 [App.css](src/App.css)
  - 📄 [App.js](src/App.js)
  - 📂 **Components**
    - 📂 **About**
    - 📂 **Candles**
    - 📂 **Ceramics**
    - 📂 **Contact**
    - 📂 **Gingerbread**
    - 📄 [Landing.jsx](src/Components/Landing.jsx)
    - 📂 **Misc**
    - 📂 **Woodcarving**
  - 📂 **Containers**
  - 📂 **HOC**
    - 📂 **Layout**
  - 📄 [index.css](src/index.css)
  - 📄 [index.js](src/index.js)

By the way, I used <a href="https://github.com/michalbe/md-file-tree" target="__blank">md-file-tree by @michalbe</a> to generate the tree in my terminal of VSCode.
My App.js is only importing the Layout component

<h3>App.js</h3>

```
render() {
    return (
      <Layout />
    );
  }
```

The Layout is a HOC (High Order Component) which eventually will include the landing page and the routing to the other pages/components + the navigation (which will be hidden in the landing page):

<h3>Layout.jsx</h3>

```
<BrowserRouter>
    <React.Fragment>
        <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </React.Fragment>
</BrowserRouter>
```

BrowserRouter is the react-router-dom HOC component which is necessary to create the routing. React.Fragment is the Aux component to wrap the children (instead of using the previously-needed divs).
Switch is making sure that once you load a component, it will not check the other routes but will stop at the first found.
Route has the various path to the components/pages (I haven't created all of them)

Then, for now, I just tested if the links on the landing page were working:

<h3>Landing.jsx</h3>

```
class Landing extends Component {
    render() {
        { console.log(this.props) }

        return (
            <React.Fragment>
                <h1>Landing page</h1>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </React.Fragment>
        )
    }
}
```

The Routing props were passed from the Layout to its children, in this case the Landing component. In fact, as I added console log to props, you can see all history, location and match props, that can be used afterwards to run customized functions on them.
Eventually, I will add Suspense for Lazy loading, but now it's useless as the components will just need more time to be loaded.

I think I'll create another component as Container, which will function as Main page out of the landing page and will render the children components. In this way I can separate the root path from the others in a clean way.

<h3>Bonus(es)</h3>

<strong>1 - </strong>I started the project with create-react-app...but it was installing only the node modules and package.json, and nothing else. What was wrong?
Well, I found out that I was breaking some flow in having create-react-app installed globally. So I had to:

<li>npm uninstall -g create-react-app</li>
<li>npm cache clean --force</li>

After that I was able to `npx create-react-app my-app` without issues

<strong>2 - </strong> What's the difference between doing `npx create-react-app my-app` and `npm install create-react-app -g`?
npx is the execution command for npm. So npx is saying, use the create-react-app (CRA) tool to my new app. The global install is not used anymore since npm version > 5. This was used to run the command directly from the terminal, like: create-react-app my-app.
Also, you probably can check out the CRA templates by <a href="https://twitter.com/fragileglass" target="__blank"> Derek Shanks </a> for having added automatically <a href="https://www.npmjs.com/~dbshanks" target="__blank">react-router-dom and sass. </a>

<strong>3 - </strong>I was wondering, should I create my React files with <strong>JS</strong> or <strong>JSX</strong> extension? <a href="https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx" target="__blank"> Here's the discussion </a> about the topic... given that, I decided to opt for .jsx (at least I'll have a nice icon on VSCode ;)

That's all for today!
Thanks for reading and if you like it, please share it.

Alex
