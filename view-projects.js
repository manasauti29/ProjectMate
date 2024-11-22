// view-projects.js

// Function to display posted projects
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve projects from localStorage
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Get the container for displaying projects
    const projectsListDiv = document.getElementById('projects-list');

    // If no projects exist, show a message
    if (projects.length === 0) {
        projectsListDiv.innerHTML = "<p>No projects have been posted yet.</p>";
    } else {
        // Loop through the projects and display each one
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('bg-gray-50', 'p-4', 'border', 'rounded-md', 'shadow-md');
            
            projectCard.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
                <p><strong>Required Skills:</strong> ${project.skills.join(', ')}</p>
                <p><strong>Description:</strong> ${project.description}</p>
                <p><small><strong>Posted on:</strong> ${project.createdAt}</small></p>
            `;

            // Append the project card to the container
            projectsListDiv.appendChild(projectCard);
        });
    }
});
