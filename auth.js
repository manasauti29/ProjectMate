
// Mock user data (This would ideally come from a registration process)
const mockUsers = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "mypassword" },
];

// Store mock users in localStorage if not already present
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(mockUsers));
}

// Function to handle login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const emailInput = document.getElementById("login-email").value.trim();
    const passwordInput = document.getElementById("login-password").value.trim();

    if (!emailInput || !passwordInput) {
        alert("Please enter both email and password.");
        return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email and password match any user
    const user = users.find(
        (u) => u.email === emailInput && u.password === passwordInput
    );

    if (user) {
        alert("Login successful!");
        // Redirect to another page or perform post-login actions
        window.location.href = "dashboard.html"; // Example redirection
    } else {
        alert("Invalid email or password.");
    }
});
