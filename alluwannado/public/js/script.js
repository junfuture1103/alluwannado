document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    // Display the user's input in the response div
    responseDiv.textContent = `You entered: ${userInput}`;

    // Optional: Reset the input field
    document.getElementById('userInput').value = '';
});

document.getElementById('userInput').addEventListener('input', function() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    // Update the response div with the current input value
    responseDiv.textContent = `You entered: ${userInput}`;
});
