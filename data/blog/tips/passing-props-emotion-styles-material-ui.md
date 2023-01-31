---
title: Fixing Material UI and Emotion's handling of Transient Options
date: '2023-01-31'
draft: false
tags: ['web development', 'react', 'material ui']
summary: 'Passing Props to custom Emotion styles with Material UI'
---

Recently I encountered an issue with the Material UI that I couldn't wrap my head around. What was happening?

Modern libraries for managing custom CSS, like Styled Components or Emotion, have accustomed us developer to the possibility to use styled elements as real, reusable components. They can even extend other styles or other components. CSS becomes building blocks like React, and that's just great.

Using Material UI means using Emotion. It works in a similar way to Styled Components, although the syntax is slightly different. 
One of the advantages of using these libraries with React is that you can pass them props and you can change the style according to their values.

However, it turns out that Emotion with Material UI lack a proper handling of this feature (as of now at least), which is called transient options.
So if it happens that you pass a boolean value as a prop and use it like this:

```js
  // component
  <MyStyledBox isdarktheme={true} />
  
  // style file
  import { Box } from '@mui/material'

  export const MyStyledBox = styled(Box)(
    ({isdarktheme}) => ({
      color: isdarktheme ? 'white' : 'black'
    })
  )
```

React will throw an error in console -which is more of a warning, actually- saying: 'Warning: Received `true` for non-boolean attribute `isdarktheme`'.
It will work, but the warning will stay.

How to fix it? I found that there's an issue opened with Emotion about this, and here's the (best working workaround answer)[https://github.com/emotion-js/emotion/issues/2193#issuecomment-766173118]. 

So here's how I followed it and implemented it. In one util file I added:
```js
  export const transientOptions: Parameters<CreateStyled>[1] = {
    shouldForwardProp: (propName: string) => !propName.startsWith('$'),
  }
```

This identifies the props starting with $ as transientOptions through the React hook shouldForwardProp. As the name says, it will allow the prop to be passed.

Then I can import the method and use it as options for the emotion component as option. Here's with TS:
```js
  import { transientOptions } from 'utils'
  
  type Props = {
    $isdarktheme: boolean
  }
  
  export const MyStyledBox = styled(Box, transientOptions)<Props>(({ theme, $isdarktheme }) => ({
    color: $isdarktheme ? 'white' : 'black'
  }))
```

The warning disappeared and the prop is correctly taken by Emotion.


Thank you for reading! Let's connect on [Twitter](https://twitter.com/AlexBuaiscia) or [Mastodon](@alex_@uiuxdev.social)!
