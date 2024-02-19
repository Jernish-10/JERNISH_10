document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example: Basic validation
    if (username.trim() === '' || password.trim() === '') {
        document.getElementById("error-message").innerText = "Please enter both username and password.";
        return;
    }

    // Send login credentials to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    window.location.href = "dashboard.html"; // Redirect to dashboard on successful login
                } else {
                    document.getElementById("error-message").innerText = response.message;
                }
            } else {
                console.error("Error:", xhr.status);
            }
        }
    };
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
});
