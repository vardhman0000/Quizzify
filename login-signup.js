window.addEventListener('DOMContentLoaded', () => {
  // Load the loader HTML
  fetch('glassloader.html')
      .then(response => response.text())
      .then(html => {
          document.body.insertAdjacentHTML('afterbegin', html);
          // After 2 seconds, hide the loader and show the quiz content
          setTimeout(() => {
              document.querySelector('.loader-body').style.display = 'none';
              document.querySelector('.container').style.display = 'block';
              document.querySelector('.cross-x').style.display = 'block';
              triggerAnimaitons() ;
          }, 2000);
      });
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.querySelector('.cross-x').addEventListener('click', () => { 
  window.location.href='index.html';
 })


// Selecting Elements:

// sign_in_btn: Selects the element with the id sign-in-btn, which is the "Sign in" button.
// sign_up_btn: Selects the element with the id sign-up-btn, which is the "Sign up" button.
// container: Selects the element with the class container, which is the main container holding the entire form.
// Adding Event Listeners:

// sign_up_btn.addEventListener("click", () => {...}): Listens for a click event on the "Sign up" button. When clicked, it executes the provided function.
// sign_in_btn.addEventListener("click", () => {...}): Listens for a click event on the "Sign in" button. When clicked, it executes the provided function.
// Toggle Sign-up Mode:

// Inside the event listener for the "Sign up" button, container.classList.add("sign-up-mode") adds the class sign-up-mode to the container element. This class triggers CSS animations and transitions to switch the form to the sign-up mode.
// Toggle Sign-in Mode:

// Inside the event listener for the "Sign in" button, container.classList.remove("sign-up-mode") removes the class sign-up-mode from the container element. This class removal triggers CSS animations and transitions to switch the form back to the sign-in mode.
// These event listeners ensure that clicking the "Sign up" button switches the form to sign-up mode, while clicking the "Sign in" button switches it back to sign-in mode, providing a seamless user experience.


// User
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// }) ; code explanation in detail
// ChatGPT
// This JavaScript code adds interactivity to a sign-in/sign-up form by toggling between sign-in and sign-up modes. Let's break down the code step by step:

// Selecting Elements:

// sign_in_btn: This variable stores a reference to the HTML element with the id sign-in-btn, typically a button used for signing in.
// sign_up_btn: This variable stores a reference to the HTML element with the id sign-up-btn, typically a button used for signing up.
// container: This variable stores a reference to the HTML element with the class container, which likely wraps the entire sign-in/sign-up form.
// Adding Event Listeners:

// sign_up_btn.addEventListener("click", () => { ... }): This line adds a click event listener to the "Sign up" button. When this button is clicked, the provided arrow function is executed.
// sign_in_btn.addEventListener("click", () => { ... }): This line adds a click event listener to the "Sign in" button. When this button is clicked, the provided arrow function is executed.
// Handling Click Events:

// When the "Sign up" button is clicked, the code inside the first event listener executes. It adds the class sign-up-mode to the container element using container.classList.add("sign-up-mode").
// When the "Sign in" button is clicked, the code inside the second event listener executes. It removes the class sign-up-mode from the container element using container.classList.remove("sign-up-mode").
// CSS Class Handling:

// The addition and removal of the sign-up-mode class on the container element trigger CSS animations and transitions defined in the accompanying CSS code. This class likely controls the visual transformation of the form between sign-in and sign-up modes.
// In summary, this JavaScript code enables the form to switch between sign-in and sign-up modes dynamically based on user interactions with the corresponding buttons. This provides a more interactive and user-friendly experience for handling authentication on a website or application.






// Selecting Elements:

// sign_in_btn: This variable stores a reference to the HTML element with the id sign-in-btn, typically a button used for signing in.
// sign_up_btn: This variable stores a reference to the HTML element with the id sign-up-btn, typically a button used for signing up.
// container: This variable stores a reference to the HTML element with the class container, which likely wraps the entire sign-in/sign-up form.

// Adding Event Listeners:

// sign_up_btn.addEventListener("click", () => { ... }): This line adds a click event listener to the "Sign up" button. When this button is clicked, the provided arrow function is executed.
// sign_in_btn.addEventListener("click", () => { ... }): This line adds a click event listener to the "Sign in" button. When this button is clicked, the provided arrow function is executed.

// Handling Click Events:

// When the "Sign up" button is clicked, the code inside the first event listener executes. It adds the class sign-up-mode to the container element using container.classList.add("sign-up-mode").
// When the "Sign in" button is clicked, the code inside the second event listener executes. It removes the class sign-up-mode from the container element using container.classList.remove("sign-up-mode").

// CSS Class Handling:

// The addition and removal of the sign-up-mode class on the container element trigger CSS animations and transitions defined in the accompanying CSS code. This class likely controls the visual transformation of the form between sign-in and sign-up modes.
