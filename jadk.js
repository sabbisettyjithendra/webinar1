

// Get references to the form and its elements
const registrationForm = document.querySelector('.registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Add an event listener to the form submission
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the user's input
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  // Validate the input (you can add more validation if needed)
  if (nameValue.trim() === '' || emailValue.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate form submission or send data to server
  alert(`Thank you for registering, ${nameValue}! We will email you more details.`);
});