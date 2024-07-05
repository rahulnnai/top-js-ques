const interviewQA = [
  {
    id: 1,
    question: "Difference between == and === operators",
    answer:
      "The `==` operator checks for equality after performing type conversion, meaning it converts the operands to the same type before making the comparison. The `===` operator, on the other hand, checks for both value and type equality without performing type conversion.",
  },
  {
    id: 2,
    question: "Difference between 'var', 'let', and 'const' keywords",
    answer:
      "`var` is function-scoped and can be re-declared and updated. `let` is block-scoped and can be updated but not re-declared in the same scope. `const` is also block-scoped but cannot be updated or re-declared; it must be initialized at the time of declaration.",
  },
  {
    id: 3,
    question: "Explain Implicit Type Coercion in JS",
    answer:
      "Implicit type coercion in JavaScript occurs when the language automatically converts one data type to another, such as converting a string to a number or vice versa. This happens in operations where the operands are of different types but an operation expects operands of the same type.",
  },
  {
    id: 4,
    question: "Difference between 'undefined' and 'not defined'",
    answer:
      "`undefined` is a variable that has been declared but not assigned a value. `not defined` refers to a variable that has not been declared at all in the current scope.",
  },
  {
    id: 5,
    question: "What is Hoisting and are 'let' variables hoisted?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope. `var` declarations are hoisted to the top and initialized with `undefined`. `let` and `const` declarations are hoisted but not initialized, leading to a 'temporal dead zone' until they are assigned.",
  },
  {
    id: 6,
    question: "What is a Template Literal?",
    answer:
      "Template literals are string literals allowing embedded expressions, denoted by backticks (`` ` ``). They allow multi-line strings and interpolation of variables and expressions using `${expression}` syntax.",
  },
  {
    id: 7,
    question: "What is the Spread and Rest Operator?",
    answer:
      "The spread operator (`...`) allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected. The rest operator also uses `...` but is used to collect multiple elements or arguments into a single array.",
  },
  {
    id: 8,
    question: "What is DOM and BOM?",
    answer:
      "DOM (Document Object Model) represents the HTML structure of a webpage, allowing JavaScript to interact with and manipulate it. BOM (Browser Object Model) represents the browser components like history, location, and navigator, providing a way to interact with the browser itself.",
  },
  {
    id: 9,
    question: "Explain Map, Filter, and Reduce methods",
    answer:
      "`map` creates a new array by applying a function to each element of an array. `filter` creates a new array with elements that pass a test implemented by a provided function. `reduce` applies a function against an accumulator and each element of the array to reduce it to a single value.",
  },
  {
    id: 10,
    question: "What is the Event Loop?",
    answer:
      "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the browser (or Node.js) and queueing them for execution after the current stack is cleared.",
  },
  {
    id: 11,
    question: "What is Closure, Lexical Environment, and Execution Context?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. A lexical environment is the environment in which the code is written, including variables and functions. The execution context is the environment where the code is executed, including the call stack, memory heap, and scope chain.",
  },
  {
    id: 12,
    question:
      "What is: \ni. First Class Function \nii. Immediately Invoked Function \niii. Higher Order Function \niv. Callback Function \nv. Function Expression",
    answer: `i. First Class Function: Functions treated as first-class citizens can be assigned to variables, passed as arguments, and returned from other functions.
  ii. Immediately Invoked Function Expression (IIFE): A function that is executed immediately after it is defined.
  iii. Higher Order Function: A function that takes other functions as arguments or returns a function as a result.
  iv. Callback Function: A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  v. Function Expression: A function defined within an expression and can be anonymous or named.`,
  },
  {
    id: 13,
    question:
      "Different ways to handle async operations: \ni. Callback \nii. Promises \niii. Async Await",
    answer: `i. Callback: A function passed as an argument to another function and executed after an asynchronous operation completes.
  ii. Promises: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
  iii. Async Await: Syntactic sugar built on Promises, allowing for writing asynchronous code in a synchronous manner using 'async' and 'await' keywords.`,
  },
  {
    id: 14,
    question: "Difference between Callback, Promises, and Async Await",
    answer:
      "Callbacks are functions passed to another function to be executed later. Promises provide a more structured way to handle asynchronous operations and can be chained with `.then` and `.catch`. Async/Await, built on Promises, allows writing asynchronous code in a more synchronous and readable manner using `async` and `await`.",
  },
  {
    id: 15,
    question: "Explain the behavior of the 'this' keyword",
    answer:
      "`this` refers to the context in which a function is called. Its value can vary: in a method, it refers to the object the method belongs to; in a regular function, it refers to the global object (or `undefined` in strict mode); in an event handler, it refers to the element that received the event.",
  },
  {
    id: 16,
    question: "Truthy and Falsy Value",
    answer:
      "Truthy values are values that evaluate to `true` in a Boolean context, such as non-zero numbers, non-empty strings, and objects. Falsy values evaluate to `false`, including `false`, `0`, `''`, `null`, `undefined`, and `NaN`.",
  },
  {
    id: 17,
    question: "Difference between Normal and Arrow Functions",
    answer:
      "Normal functions have their own `this` context and can be used as constructors. Arrow functions, introduced in ES6, do not have their own `this` context; they inherit `this` from the enclosing scope and cannot be used as constructors.",
  },
  {
    id: 18,
    question: "What is Currying?",
    answer:
      "Currying is a technique where a function takes multiple arguments one at a time, returning a new function for each argument, until all arguments have been provided. It transforms a function with multiple arguments into a sequence of nested functions.",
  },
  {
    id: 19,
    question: "What is Shadowing?",
    answer:
      "Shadowing occurs when a variable declared within a certain scope has the same name as a variable in an outer scope. The inner variable 'shadows' the outer variable, making the outer variable inaccessible within the inner scope.",
  },
  {
    id: 20,
    question: "Explicit Object Binding - call, apply, bind",
    answer:
      "`call` and `apply` methods are used to invoke a function with a specific `this` context. `call` takes arguments individually, while `apply` takes arguments as an array. `bind` creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments.",
  },
  {
    id: 21,
    question: "Promise Combinators - all, race, allSettled, any",
    answer:
      "`Promise.all` waits for all promises to resolve or any to reject. `Promise.race` waits for the first promise to settle (resolve or reject). `Promise.allSettled` waits for all promises to settle, regardless of outcome. `Promise.any` waits for the first promise to resolve, ignoring rejections.",
  },
  {
    id: 22,
    question: "Event Propagation - Bubbling & Capturing",
    answer:
      "Event propagation describes the order in which events are captured and handled. Bubbling phase is when an event starts from the target element and propagates upwards through the DOM. Capturing phase is when the event starts from the root and propagates downwards to the target element.",
  },
  {
    id: 23,
    question: "Event Delegation",
    answer:
      "Event delegation involves leveraging event propagation to handle events at a higher level in the DOM, rather than attaching event handlers to each child element. It improves performance and simplifies code by reducing the number of event handlers.",
  },
  {
    id: 24,
    question: "What is Debouncing and Throttling?",
    answer:
      "Debouncing and throttling are techniques to limit the rate at which a function executes. Debouncing ensures a function is only called after a certain amount of time has passed since the last call. Throttling ensures a function is called at most once in a specified period.",
  },
  {
    id: 25,
    question: "What are Object Prototypes?",
    answer:
      "Prototypes are the mechanism by which JavaScript objects inherit features from one another. Each object has a prototype, and it can access properties and methods from its prototype. This allows for shared behavior and property inheritance.",
  },
  {
    id: 26,
    question: "What is Critical Rendering Path?",
    answer:
      "The Critical Rendering Path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into a rendered web page. It involves constructing the DOM and CSSOM trees, combining them into the Render Tree, and then performing layout and painting processes to display the page.",
  },
];

export default interviewQA;
