# XMLHttpRequest (XHR) in JavaScript

## Overview

XMLHttpRequest (XHR) is a built-in browser object that allows you to make HTTP requests in JavaScript. It is commonly used to interact with APIs and fetch data from a server without reloading the page.

## Code Snippet Breakdown

```javascript
const requestUrl = 'https://api.github.com/users/priyanshujoshi99';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.name);
  }
};
xhr.send();
```

### Key Components

1. **`requestUrl`**:

   - The URL to which the request is sent. In this case, it's the GitHub API endpoint for a specific user.

2. **`XMLHttpRequest` Object**:

   - `const xhr = new XMLHttpRequest();`
   - Creates a new instance of the `XMLHttpRequest` object, which is used to interact with servers.

3. **`xhr.open(method, url)`**:

   - Initializes the request. Here, `GET` is the HTTP method, and `requestUrl` is the endpoint.
   - Syntax: `xhr.open(method, url[, async[, user[, password]]])`

4. **`xhr.onreadystatechange`**:

   - An event handler that is called whenever the `readyState` attribute changes.
   - `readyState` indicates the state of the request:
     - `0`: UNSENT (Client has been created, but `open()` not called yet)
     - `1`: OPENED (`open()` has been called)
     - `2`: HEADERS_RECEIVED (`send()` has been called, headers and status are available)
     - `3`: LOADING (Downloading; `responseText` holds partial data)
     - `4`: DONE (Operation is complete)

5. **`xhr.readyState === 4`**:

   - Checks if the request is complete. If true, the response is ready to be processed.

6. **`JSON.parse(this.responseText)`**:

   - Parses the JSON response from the server into a JavaScript object.
   - `this.responseText` contains the response as a string.

7. **`xhr.send()`**:
   - Sends the request to the server. For `GET` requests, the body is `null`.

---

## Additional Points

1. **Asynchronous vs Synchronous**:

   - By default, XHR requests are asynchronous. To make a synchronous request, pass `false` as the third argument in `xhr.open()`.
   - Example: `xhr.open('GET', requestUrl, false);`

2. **Error Handling**:

   - Always handle errors by checking the `status` property of the XHR object.
   - Example:
     ```javascript
     if (xhr.status === 200) {
       console.log('Request successful');
     } else {
       console.error('Error:', xhr.statusText);
     }
     ```

3. **Alternatives to XHR**:

   - Modern JavaScript provides the `fetch` API, which is more flexible and easier to use than XHR.
   - Example:
     ```javascript
     fetch(requestUrl)
       .then((response) => response.json())
       .then((data) => console.log(data.name))
       .catch((error) => console.error('Error:', error));
     ```

4. **CORS (Cross-Origin Resource Sharing)**:

   - XHR requests are subject to CORS restrictions. Ensure the server allows requests from your domain.

5. **Performance Considerations**:
   - XHR can block the main thread if used synchronously. Always prefer asynchronous requests for better performance.

---

## Interesting Facts

- XHR was introduced by Microsoft in Internet Explorer 5 as an ActiveX object. It was later standardized and adopted by other browsers.
- Despite its name, XHR can be used to fetch data in formats other than XML, such as JSON, HTML, or plain text.
