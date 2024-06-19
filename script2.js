document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to all images in the gallery
    const galleryImages = document.querySelectorAll('.gallery-wrap img');
    galleryImages.forEach(function (image) {
        image.addEventListener('click', function () {
            if (image.classList.contains('zoomed')) {
                // If already zoomed, remove zoom class
                image.classList.remove('zoomed');
            } else {
                // If not zoomed, add zoom class
                galleryImages.forEach(function (img) {
                    img.classList.remove('zoomed');
                });
                image.classList.add('zoomed');
            }
        });
    });

    // Contact form submission logic
    const contactForm = document.getElementById('contact-form');
    const messageBox = document.getElementById('message-box');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(contactForm);

        // You can perform additional validation here if needed
        document.getElementById('contact-form').reset();

        // Simulate form submission (replace with actual submission logic)
        // For demonstration, just displaying the submitted data in the message box
        let messageContent = "<strong>Submitted Data:</strong><br>";
        formData.forEach(function (value, key) {
            messageContent += `<strong>${key}:</strong> ${value}<br>`;
        });

        messageBox.innerHTML = messageContent;
        messageBox.style.display = "block"; // Show the message box
    });

    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let frontBtn = document.getElementById("frontBtn");

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
    });

    frontBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // Chatbox Functionality
    const chatPopup = document.getElementById('popup-chat');
    const chatBody = document.getElementById('chat-popup-body');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const openChatButton = document.getElementById('open-chat');

    function appendMessage(message, sender) {
        const msgElement = document.createElement('div');
        msgElement.textContent = `${sender}: ${message}`;
        chatBody.appendChild(msgElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            appendMessage(userMessage, 'You');
            userInput.value = '';
            respondToUser(userMessage.toLowerCase());
        }
    }

    function respondToUser(message) {
        let response = '';
        if (message.includes('hello') || message.includes('hi')) {
            response = "Hello there! How can I help you?";
        } else if (message.includes('how are you')) {
            response = "I'm just a bot, but thanks for asking!";
        } else {
            response = "I'm not sure how to respond to that.";
        }
        setTimeout(() => {
            appendMessage(response, 'Bot');
        }, 500);
    }

    function toggleChat() {
        chatPopup.classList.toggle('open');
    }

    openChatButton.addEventListener('click', toggleChat);
    sendButton.addEventListener('click', handleUserInput);

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    //const chatPopup = document.getElementById('popup-chat');
    const minimizeButton = document.querySelector('.minimize-button');

    // Function to toggle the chat popup visibility
    function toggleChat() {
        chatPopup.classList.toggle('open');
    }

    // Event listener for the minimize button
    minimizeButton.addEventListener('click', toggleChat);
});
