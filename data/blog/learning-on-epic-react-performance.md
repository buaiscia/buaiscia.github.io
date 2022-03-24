---
title: Epic React. Performance.
date: '2022-03-01'
draft: true
tags: ['react', 'web development', 'epic react']
summary: "test"
---

### Code splitting

Code splitting is a technique that allows code to be used only on need-basis, through lazy loading of that code. It shows like this in Javascript:

```
import('/some-module.js').then(
  module => {
    // do stuff with the module's exports
  },
  error => {
    // there was some error loading the module...
  },
)
```

In React it's taken a step further using the React.Suspense component for the fallback meanwhile the user wait for its loading. The import is done by React.lazy. The component to be imported must have a default export.

That's how it's working. Having this code:
```
import HeavyComponent from '../heavycomponent'
...
<div>
  <HeavyComponent />
</div>
```

will load the component right away in the application. Let's transform it to use it as code splitted.

```
const HeavyComponent = React.lazy(() => import('../heavycomponent'))
...
<div>
  <React.Suspense fallback={<div>loading...</div>}>
    <HeavyComponent />
  </React.Suspense>
</div>
```

with the first code and an artificial slow 3G connection, the page was loading in 14 seconds. With lazy loading, between 6 and 8 seconds. A 50% gain.

In addition to that, we can start loading the heavy component before the user actually wants to see it. We can add some listener like mouseOver or mouseEnter, or onFocus, to start lazily loading the component without showing it.

```
const loadHeavyComponent = () => import('../heavycomponent')

<div>
  <label of any kind
    onMouseEnter={loadHeavyComponent}
    onFocus={loadHeavyComponent}
  >
  <input of any kind>
</div>

<div>
  <React.Suspense fallback={<div>loading...</div>}>
    <HeavyComponent />
  </React.Suspense>
</div>
```

There is a way as well to pre-fetch the chunks by webpack, once the main component has loaded: webpack magic comments.

One that is presented is just for this, using the code above:
```
const loadHeavyComponent = () => import(/* webpackPrefetch: true */ '../heavycomponent')
```

This will appear in the browser DOM, through Webpack, as
```
<link rel="prefetch" as="script" href="/static/js/1.f2976096.chunk.js">
<link rel="prefetch" as="script" href="/static/js/2.a7113cc3.chunk.js">
```


Another magic comment is webpackChunkName, which can be used for both placing common modules in the same chunk, and giving the chunk a name.

More info could be found here: https://webpack.js.org/api/module-methods/#magic-comments

Note: suspension is good to be put outside of conditions as its components will be loaded when the HeavyComponent will be showing up, if inside, creating a problem with the new Concurrency methods.

To check the suspension in the devtools, there's this little icon that anytime can be clicked and the component will go into the fallback.

An interesting tool about checking performance is the Coverage devtool.
If we check the initial version of the code (without lazy loading) and the final version (without prefetch), the final has not only a lot fewer chunk files and less Kbs loaded, but also the final version has less Kb ran comparing to the initial one. 
It's like 20% less heavy and around 30% less code run.

In the coverage tool, in Usage Visualization, we can check how much of code is not used on the run. Even in the final version is more than 50%. This information can be used to check what to do more as code splitting. Clicking on it will show the file on the source tab, with lines that are run and lines that aren't.

### useMemo

React useMemo is well known in the React world, but as I could see in some professional projects I worked on, sometimes it's abused in its use. 

One good thing about this workshop is showing how to use the Performance devtool, and analyzing the difference in a heavy-calculation method before the use of useMemo and after.
The recording of the performance is a simple operation, but one can get lost in the data. 
Where there are performance bottlenecks, a rose-red line will appear on top of the graph. Selecting that part, and using the Main section of the graph below, it's possible to encounter down below the method/methods and their children that are slowing down the application. And also what kind of activity the method is doing taking long time.

The most interesting topic on this part of the workshop is the part building a web worker. As we have our method that needs to do an expensive calculation, even crunching the best optimization is creating anyway a little bottleneck there.
As JavaScript is single threaded, a solution could consist in creating a web worker, because it will work as a separate thread. In that case, the calculation can be done in the worker and sent back to the application once it's done, not blocking the rest of it.

In order to do so, we can load that component with the calculation via the worker. Using webpack, there's a shortcut: adding 'workerize!' in the string of the import will automatically create it as a method, which we can then export.

```
import makeFilterCitiesWorker from 'workerize!./filter-cities'

const {getItems} = makeFilterCitiesWorker()

export {getItems}
```

After that, the only difference in its implementation is that the data is async and not sync anymore, so there's some work to do in the application to make it so. 
With this specification,  even in developer mode, the click method resolved in 20 ms instead of the previous 50ms in production mode.



### React memo

There are cases in which some components are re-rendered although it's not necessary just because they're dependent on the parent component, so whenever this one re-renders, also the child component does unnecessarily, as no DOM updates were needed.

This can be checked in the Profiler section of the Devtools, with the option " Record why each component rendered while profiling." checked (in settings). Once profiling, we can make our actions on the page and once stopped recording, we can see what/when/why components rendered. The suspicious ones are the ones rerendered because the parent component rendered again. These have to be double-checked in case there is a useless rerender.

In order to use it, we can have the normal method and then reassign the method with the memoization.
Supposing that we have a method 
```
function ListCities() {
  ...
}
```
then we can memoize it just like this.
```
ListCities = React.memo(ListCities)
```

At this moment we reduced the render to only the component that is changing props or state. However there could be the case in which, under that component, there's some method that is triggering the re-rendering again for everything. 
We can avoid that using the condition of React memo, in the second argument as a callback returning a boolean. If it's false, it will rerender; if true, it won't.

We take from the callback two arguments, previous and next props (like in many React hooks), and we can check whether the prevProp is the same or it has changed comparing to the next one.
We can give multiple conditions, one for each prop, with multiple if statements.
```
ListCities = React.memo(ListCities, (prevProps, nextProps) => {

  if (prevProps.getCitiesProps !== nextProps.getCitiesProps) return false
  if (prevProps.getCitiesProps2 !== nextProps.getCitiesProps2) return false
  if (prevProps.index !== nextProps.index) return false
 
  return true
})
```

Eventually the best way to do it, if we're going to use calculation that updates specific props in the component, is to move those props a little higher in the tree. So, instead of having ListCities with the calculations, we can move them in the parent component and passed those down below as props or primitive values. This way, when memo is called, it'll do an automatic comparison and update only what is necessary to update. And then call the component with memo without other options:
```
ListCities = React.memo(ListCities)
```


### React Virtual
