<?php
$servername = "localhost";  // your MySQL server
$username = "root";         // default XAMPP username
$password = "";             // default XAMPP password is blank
$dbname = "aviyamagnus_db"; // your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Database connected successfully!";
?>
