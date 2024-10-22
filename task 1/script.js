document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Here you would typically handle form submission, e.g., send data to a server

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);

    alert('Signup successful!'); // For demonstration
});
