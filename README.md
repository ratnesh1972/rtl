# RTL

## 1. The `render` Function
- Mouts your react component to virtual DOM
- `screen` object - your primary tool to query the DOM
- `debug()` - tool to inspect rendered DOM during testing 

## 2. Queries - Finding Elements in the DOM
#### Variants
- get
    - return a single matching element
    - throws error if > 1 or no matching element
    - synchronous

- query
    - returns a single matching element
    - returns null if no matching element
    - throws error if > 1 matching element
    - synchronous

- find
    - returns a promise
    - resolved when a matching element is found
    - rejected when no matching element is found within timeout
    - rejected when > 1 matching element found
    - async

- all
    - getAll - returns array of matching elements, throws error if no match
    - queryAll - returns array of matching elements, returns [] if no match
    - findAll - returns array of matching elements, throws error if no match, async.

#### Queries - Priority
- getByRole - query elements by their aria role ex, `button`, `heading`, `textbox` etc. Most preffered way to query the elements. List of roles - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques#roles
- getByLabelText - query `form` elements based on their `label` text
- getByPlaceholderText - query form `input` elements based on their placeholder text
- getByText - query elements that display text content
- getByDisplayValue - query `input`, `textarea` or `select` elements with specific values
- getByAltText - query `img` elements or custom components that renders images
- getByTitle - query elements based on `title` attribute
- getByTestId - query elements based on `data-testid` attribute. Least preffered, when there's no other way to query elements.