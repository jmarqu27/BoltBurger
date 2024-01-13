/*
This code is for the success message displayed after the user
successfully enters a valid email address and clicks the
'Notify Me' button.
*/

const form = document.querySelector('form');
const successMessage = document.querySelector('#success-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMessage.classList.add('show');
  setTimeout(() => form.submit(), 5000);
});
