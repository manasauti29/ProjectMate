// register.js

document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;

    // Check if user already exists in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Prevent duplicate registration (based on email)
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User with this email already exists.");
        return;
    }

    // Create new user object
    const newUser = {
        name: name,
        email: email,
        password: password,
        skills: skills.split(',').map(skill => skill.trim()),  // Save skills as array
        projects: projects.split(',').map(project => project.trim()),  // Save projects as array
    };

    // Add new user to users array
    users.push(newUser);

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Alert and redirect to login page
    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});
