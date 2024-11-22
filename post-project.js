document.addEventListener("DOMContentLoaded", () => {
    // Function to load and display posted projects
    function displayProjects() {
        const projectsList = JSON.parse(localStorage.getItem('projects')) || [];
        const projectsContainer = document.getElementById('projects-list');
        projectsContainer.innerHTML = ''; // Clear previous projects
        
        if (projectsList.length === 0) {
            projectsContainer.innerHTML = "<p>No projects posted yet.</p>";
        } else {
            projectsList.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.classList.add('p-4', 'border-b', 'bg-gray-50', 'rounded-md', 'shadow-md');
                projectDiv.innerHTML = `
                    <h4 class="text-xl font-semibold text-gray-800">${project.title}</h4>
                    <p><strong>Required Skills:</strong> ${project.skills}</p>
                    <p><strong>Description:</strong> ${project.description}</p>
                `;
                projectsContainer.appendChild(projectDiv);
            });
        }
    }

    // Call the displayProjects function on page load to show existing projects
    displayProjects();

    // Handle the form submission to save a new project
    const form = document.getElementById('project-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('project-title').value;
        const skills = document.getElementById('required-skills').value;
        const description = document.getElementById('project-description').value;

        const newProject = {
            title: title,
            skills: skills,
            description: description
        };

        // Save the project to localStorage
        const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
        existingProjects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(existingProjects));

        // Clear the form
        form.reset();

        // Reload the projects list
        displayProjects();
    
    });
});
