<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow same-origin access (since this file is on your frontend)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// URL of your actual backend API
$backend_url = "https://aviyamagnus.zya.me/register.php";

// Read incoming request body
$input = file_get_contents('php://input');

// Initialize cURL to forward the request
$ch = curl_init($backend_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
]);

// Execute and return response
$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(["status" => "error", "message" => curl_error($ch)]);
} else {
    echo $response;
}

curl_close($ch);
?>
