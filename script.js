
document.addEventListener("DOMContentLoaded", function () {
    // Get all the filter buttons and project items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project');
    
    // Function to filter projects
    function filterProjects(category) {
        projectItems.forEach(function (project) {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block'; // Show project
            } else {
                project.style.display = 'none'; // Hide project
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const category = button.getAttribute('data-filter');
            filterProjects(category);
        });
    });

    // Show all projects initially
    filterProjects('all');
});
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
      
const sendEmail = (e) =>{
  e.preventDefault()

  // Check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'Write all the input fields 📩' 
  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9oppz23','template_s1yots8','#contact-form','O1X4E8-H58R_zjSCc')
      .then(() =>{
        // Show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'

        // Remove message after three seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000);

      }, (error) =>{
        alert('OOPS! SOMETHING HAS FAILED...', error)
      })

    // To clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)



// sr.reveal  (`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
// sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})