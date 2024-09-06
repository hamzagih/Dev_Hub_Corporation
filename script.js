document.getElementById('btn1').addEventListener('click', function() {
    window.location.href = 'about.html'; // Assuming 'about-me.html' is the About Me page
});


document.getElementById('Proj').addEventListener('click', function() {
    window.location.href = 'project.html'; // Assuming 'project.html.html' is the project  page
});

document.getElementById('proj').addEventListener('click', function() {
    window.location.href = 'project.html'; // Assuming 'project.html.html' is the project  page
});


function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let errorMessages = document.getElementById("errorMessages");
    let errorText = "";

    // Clear previous errors
    errorMessages.innerHTML = "";

    // Name validation: required
    if (name.trim() === "") {
        errorText += "Name is required.<br>";
    }

    // Email validation: required and proper format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        errorText += "Email is required.<br>";
    } else if (!emailPattern.test(email)) {
        errorText += "Invalid email format.<br>";
    }

    // Phone validation: optional, but must be digits only if provided
    let phonePattern = /^[0-9]{10,15}$/;
    if (phone.trim() !== "" && !phonePattern.test(phone)) {
        errorText += "Invalid phone number. Must be 10-15 digits.<br>";
    }

    // Message validation: required and minimum length
    if (message.trim() === "") {
        errorText += "Message is required.<br>";
    } else if (message.trim().length < 10) {
        errorText += "Message must be at least 10 characters long.<br>";
    }

    // If there are errors, show them and prevent form submission
    if (errorText !== "") {
        errorMessages.innerHTML = errorText;
        return false;
    }

    return true; // Allow form submission
}