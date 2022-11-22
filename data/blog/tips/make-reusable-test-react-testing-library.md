---
title: Make a reusable test with React Testing Library
date: '2022-11-22'
draft: false
tags: ['web development', 'react', 'react testing library']
summary: 'Abstract methods to be reused by different tests'
---

It can happen to have very similar tests across our suites. In one of my recent examples, I had to test if the UI of the footer of the pages in the application was correctly rendered, depending on a prop change.

The footer consists only of a box with inside an SVG icon and a text. But those are white when we have a dark background, and  dark gray when the background is white.

The logic is already in place, and the simple test steps would be: 
- render the page (component)
- get the elements to check
- check that the elements have the correct style.

The next -and boring- step would be placing this test inside each page test suite, and check for the color individually.

Instead, we can make a reusable test, like a normal function.
We can put it in some shared.js file so it can be picked up anytime.

```js
import { screen, waitFor } from '@testing-library/react'

const testPageFooterWithColor = (renderPage, expectedColor) => {
  test('it checks that the footer is present and has the correct color', async () => {
    renderPage()

    const footerText = screen.getByText('our footer text')

    await waitFor(() => {
      expect(footerText).toBeInTheDocument()
    })

    expect(footerText).toHaveStyle({ color: expectedColor })
  })
}

export { testPageFooterWithColor }
```

Then we can import it in our suites:
```js
  const renderCustomPage = () => {
    render(
      <CustomPage />,
      { wrapper: MemoryRouter },
    )
  }
  
  describe('our test suite', () => {
    ...our tests
     
    testPageFooterWithColor(renderCustomPage, 'white')
  })
```

Thank you for reading! Let's connect on [Twitter](https://twitter.com/AlexBuaiscia) or [Mastodon](@alex_@uiuxdev.social)! 
