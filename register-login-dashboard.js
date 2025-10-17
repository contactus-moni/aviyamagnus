// Show registration form
function showRegister() {
    document.getElementById('registerFormDiv').style.display = 'block';
    document.getElementById('loginFormDiv').style.display = 'none';
    document.getElementById('dashboardDiv').style.display = 'none';
}

// Show login form
function showLogin() {
    document.getElementById('registerFormDiv').style.display = 'none';
    document.getElementById('loginFormDiv').style.display = 'block';
    document.getElementById('dashboardDiv').style.display = 'none';
}

// Show dashboard
function showDashboard(user) {
    document.getElementById('registerFormDiv').style.display = 'none';
    document.getElementById('loginFormDiv').style.display = 'none';
    document.getElementById('dashboardDiv').style.display = 'block';
    document.getElementById('userName').textContent = user.email;
    fetchMessages(user.email);  // Load user-specific messages
}

// Log out
function logout() {
    localStorage.removeItem('user');  // Remove user data from local storage
    showLogin();  // Show the login form again
}

// Handle Register Form Submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    fetch('http://localhost:5000/api/register/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful!');
            showLogin();  // Show login form after successful registration
        } else {
            alert(data.message);  // Show any error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed!');
    });
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:5000/api/login/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));  // Save user data in localStorage
            showDashboard(data.user);  // Show dashboard with user data
        } else {
            alert(data.message);  // Show any error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed!');
    });
});

// Fetch user-specific messages (example)
function fetchMessages(email) {
    fetch(`http://localhost:5000/api/messages/${email}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const messagesDiv = document.getElementById('messages');
                messagesDiv.innerHTML = '';
                data.messages.forEach(message => {
                    const messageDiv = document.createElement('div');
                    messageDiv.textContent = message;
                    messagesDiv.appendChild(messageDiv);
                });
            } else {
                alert('Failed to load messages');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to load messages');
        });
}

// Check if user is already logged in
window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        showDashboard(user);  // If user is logged in, show the dashboard
    } else {
        showLogin();  // Show the login form if no user is logged in
    }
};
