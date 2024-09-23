
// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons by their IDs
    const bioButton = document.getElementById("Bio_id");
    const resumeButton = document.getElementById("Resume_id");
    const projectsButton = document.getElementById("Projects_id");
    const contactButton = document.getElementById("Contact_id");
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
    
        // Get form data
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
    
        // You can now send the data to a backend or process it
        console.log({
            name: name,
            email: email,
            message: message
        });
    
        // Example: Displaying a confirmation message
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
    
        // Optionally reset the form after submission
        e.target.reset();
    });
    
 
    // Add event listeners to buttons
    if (bioButton) {
        bioButton.addEventListener("click", function() {
            window.location.href = "bio.html"; // Navigate to Bio page
        });
    }

    if (resumeButton) {
        resumeButton.addEventListener("click", function() {
            window.location.href = "resume.html"; // Navigate to Resume page
        });
    }

    if (projectsButton) {
        projectsButton.addEventListener("click", function() {
            window.location.href = "projects.html"; // Navigate to Projects page
        });
    }

    if (contactButton) {
        contactButton.addEventListener("click", function() {
            window.location.href = "contact.html"; // Navigate to Contact page
        });
    }
});
