// login.js

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Get stored users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Successfully logged in, save user info to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Optionally, save user projects to localStorage (if any)
        const userProjects = user.projects || []; // Assume users have 'projects' in their data
        localStorage.setItem('projects', JSON.stringify(userProjects));

        // Successfully logged in
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to the dashboard page
    } else {
        // Login failed
        alert("Invalid email or password.");
    }
});
