document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact-form');
    const messageBox = document.getElementById('message-box');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(contactForm);

        // You can perform additional validation here if needed

        // Simulate form submission (replace with actual submission logic)
        // For demonstration, just displaying the submitted data in the message box
        let messageContent = "<strong>Submitted Data:</strong><br>";
        formData.forEach(function (value, key) {
            messageContent += `<strong>${key}:</strong> ${value}<br>`;
        });

        messageBox.innerHTML = messageContent;
        messageBox.style.display = "block"; // Show the message box
    });
});
