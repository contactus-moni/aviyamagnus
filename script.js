// Registration Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        try {
            // Send data to the backend API
            const res = await fetch('https://my-backend.onrender.com/api/register/student', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (data.success) {
                alert('Registration successful');
                // Optionally, you can redirect the user to a login page or directly to the dashboard
                window.location.href = "login.html";
            } else {
                alert(data.message); // Show the error message from the backend
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed!');
        }
    });
}
