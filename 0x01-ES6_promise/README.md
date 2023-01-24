<h1>0x00. ES6 Basics</h1>
<br>
<br>

**Resources**

<em><strong>Read or watch</em></strong>
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[JavaScript Promise: An introduction](https://web.dev/promises/)

[Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

[Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

<br>
<br>

<h4> Learning Objectives</h4>

<h4> TASKS</h4>

| S/N | DESCRIPTION | FILE |
|---- | ----------- | ---- |
|0. | <p>Keep every promise you make and only make promises you can keep</p> <ul><li>Return a Promise using this prototype function getResponseFromAPI()</li></ul>| [0-promise.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/0-promise.js)|
|1. |<p> Don't make a promise...if you know you can't keep it</p><p>Using the prototype below, return a promise. The parameter is a boolean</p><p>getFullResponseFromAPI(success).</p><ul>When the argument is <li> true: status = 200; body = 'Success'</li><li> false: reject the promise with an error object with the message The fake API is not working currently</li</ul>|[1-promise.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/1-promise.js)|
|2. |<p>Catch me if you can!</p><p>Using the function prototype below</p><ul>Append three handlers to the function:</ul><li>true: status = 200; body = 'Success'</li><li>When the Promise rejects, return an empty Error object</li>For every resolution, log Got a response from the API to the console<li></li>|[2-then.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/2-then.js)|
|3. |<p>Handle multiple successful promises</p><p>In this file, import uploadPhoto and createUser from utils.js
Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.</p><span><strong>Hint:</strong> In the event of an error, log Signup system offline to the console</span>|[3-all.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/3-all.js)|
|4. |<p>Simple promise</p><p>Using the following prototype, that returns a resolved promise with this object</p>|[4-user-promise.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/4-user-promise.js)|
|5. |<p> Reject the promises </p><p>Write and export a function named uploadPhoto. It should accept one argument fileName (string).
The function should return a Promise rejecting with an Error and the string $fileName cannot be processed</p>|[5-photo-reject.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/5-photo-reject.js)|
|6. |<p>Handle multiple promises</p> <p>Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.Write and export a function named handleProfileSignup. It should accept three arguments firstName(string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array </p>|[6-final-user.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/6-final-user.js)|
|7. | <p>Load balancer</p> <p>Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).
The function should return the value returned by the promise that resolved the first.</p>|[7-load_balancer.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/7-load_balancer.js)|
|8. | <p>Throw error / try catch</p> <p>Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).
When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.</p>|[8-try.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/8-try.js)|
|9. | <p> Throw an error</p> <p>Write a function named guardrail that will accept one argument mathFunction (Function).
This function should create and return an array named queue.
When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.</p>|[9-try.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/9-try.js)|
|10. | <p>Await / Async</p> <p>Import uploadPhoto and createUser from utils.js
Write an async function named asyncUploadUser that will call these two functions and return an object</p>|[100-await.js](https://github.com/Oliveth96/alx-frontend-javascript/blob/main/0x01-ES6_promise/100-await.js)|



<h5>Author</h5>

[Ndubuka Oliveth](https://github.com/Oliveth96)