// Get the hamburger element
const hamburger = document.getElementById("hamburger");

// Add event listener to the hamburger
hamburger.addEventListener("click", () => {
  // Get the menu element
  const menu = document.querySelector(".menu");

  // Toggle the show-menu class
  menu.classList.toggle("show-menu");

  // Toggle the hamburger icon
  hamburger.classList.toggle("active");
});

// Get the form element
const form = document.getElementById("contact-form");

// Add event listener to the form
form.addEventListener("submit", (e) => {
  // Prevent default form submission
  e.preventDefault();

  // Get the input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const disname = document.getElementById("display_name");
  const disemail = document.getElementById("display_email");
  const disphone = document.getElementById("display_phone");
  const dismessage = document.getElementById("display_message");

  // Validate the inputs
  let isValid = true;
  if (name === "") {
    document.getElementById("name-error").innerText = "Name is required";
    isValid = false;
  } else {
    document.getElementById("name-error").innerText = "";
  }

  if (email === "") {
    document.getElementById("email-error").innerText = "Email is required";
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById("email-error").innerText = "Invalid email format";
    isValid = false;
  } else {
    document.getElementById("email-error").innerText = "";
  }

  if (phone === "") {
    document.getElementById("phone-error").innerText = "Phone is required";
    isValid = false;
  } else if (!validatePhone(phone)) {
    document.getElementById("phone-error").innerText =
      "Phone must only contain numbers";
    isValid = false;
  } else {
    document.getElementById("phone-error").innerText = "";
  }

  if (message === "") {
    document.getElementById("message-error").innerText = "Message is required";
    isValid = false;
  } else {
    document.getElementById("message-error").innerText = "";
  }

  // If validation is successful, submit the form
  if (isValid) {
    // Submit the form data to the server
    console.log("Form submitted successfully");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
    disname.innerText = name;
    disemail.innerText = email;
    disphone.innerText = phone;
    dismessage.innerText = message;
  }
});

// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Function to validate phone
function validatePhone(phone) {
  const phoneRegex = /^(\+92|0|92)[0-9]{10}$/;
  return phoneRegex.test(phone);
}
