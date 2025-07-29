# RTL

## 1. The `render` Function
- Mouts your react component to virtual DOM
- `screen` object - your primary tool to query the DOM
- `debug()` - tool to inspect rendered DOM during testing 

## 2. Queries - Finding Elements in the DOM
### Variants -
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

### Queries - Priority
- `getByRole` - query elements by their aria role ex, `button`, `heading`, `textbox` etc. Most preffered way to query the elements. List of roles - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques#roles
- `getByLabelText` - query `form` elements based on their `label` text
- `getByPlaceholderText` - query form `input` elements based on their placeholder text
- `getByText` - query elements that display text content
- `getByDisplayValue` - query `input`, `textarea` or `select` elements with specific values
- `getByAltText` - query `img` elements or custom components that renders images
- `getByTitle` - query elements based on `title` attribute
- `getByTestId` - query elements based on `data-testid` attribute. Least preffered, when there's no other way to query elements.

## 3. Simulating User Interactions
- `fireEvent` - low level DOM events, simpler but realistic.
- `user-event` - simulates full user interactions (eg. `userEvent.type` will trigger `KeyDown`, `KeyUp` or `input` events just like a real user typing.) Always prefer `user-event`
- Some of the common events -
    - `click`
    - `type`
    - `clear`
    - `upload`

## 4. Asynchronous Testing
### Async Utilities
- required for handling data fetching, timeouts or other async operations
- `find*` - automatically waits for elements to appear
- `waitFor` - can be used to wait for certain conditions to be met
- `waitForElementToBeRemoved` - waits for element(s) to be removed

### Mocking Async Ops
- `jest.fn()` - creating mock functions
- `mockResolvedValue()` , `mockRejectedValue()` - mocking promises
- `jest.spyOn()` - spying on existing functions / methods
- Mocking API calls (using `msw` mock service worker for more realistic network mocking)