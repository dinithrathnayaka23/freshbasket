<?php
$host = "localhost";
$user = "root";
$pass = "dinithmora2003"; // default is empty in XAMPP
$db = "freshbasket";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
