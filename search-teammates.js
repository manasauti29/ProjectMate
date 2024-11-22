// Function to search team members based on skills
function searchTeamMembers() {
    const searchSkills = document.getElementById('search-skills').value
        .split(',')  // Split the input string by commas
        .map(skill => skill.trim().toLowerCase());  // Trim spaces and convert to lowercase for case-insensitive comparison

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Filter users based on the entered skills
    const results = users.filter(user => {
        // Check if the user's skills include all of the search skills
        return searchSkills.every(skill => user.skills.map(s => s.toLowerCase()).includes(skill));
    });

    // Get the results container element
    const resultsDiv = document.getElementById('team-results');
    resultsDiv.innerHTML = '';  // Clear any previous results

    // If no results were found
    if (results.length === 0) {
        resultsDiv.textContent = "No team members found with the specified skills.";
    } else {
        // If results found, display each matching user's details
        results.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('p-4', 'border-b', 'bg-gray-50', 'rounded-md', 'shadow-md');
            
            // Adding user information
            userCard.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-800">${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Skills:</strong> ${user.skills.join(', ')}</p>
                <p><strong>Projects:</strong> ${user.projects.join(', ')}</p>
            `;
            
            // Append user card to results container
            resultsDiv.appendChild(userCard);
        });
    }
}
