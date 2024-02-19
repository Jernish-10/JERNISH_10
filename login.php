<?php
// Example: Simulated user database
$users = [
    "john" => "password123",
    "jane" => "qwerty",
];

$username = $_POST["username"];
$password = $_POST["password"];

// Check if username exists and password matches
if (isset($users[$username]) && $users[$username] === $password) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid username or password."]);
}
?>
