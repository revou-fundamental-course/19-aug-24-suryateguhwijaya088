document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Get the current date
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Check if all fields are filled out
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        // Display the submission details in an alert
        alert('Message Sent Successfully!\n\n' +
              'Date: ' + formattedDate + '\n' +
              'Name: ' + name + '\n' +
              'Email: ' + email + '\n' +
              'phone: ' + phone + '\n' +
              'Message: ' + message);

        // Reset the form after submission
        document.getElementById('contactForm').reset();
    }
});