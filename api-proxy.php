<?php
// api-proxy.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
  exit;
}

// Read JSON input
$input = json_decode(file_get_contents("php://input"), true);
if (!$input) {
  echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
  exit;
}

// Prepare to forward to your real backend
$backend_url = "https://aviyamagnus.rf.gd/register.php"; // 🔹 replace this with your real PHP backend URL

$ch = curl_init($backend_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($input));

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
  echo json_encode(["status" => "error", "message" => curl_error($ch)]);
  curl_close($ch);
  exit;
}
curl_close($ch);

// Ensure valid JSON before sending to browser
if ($http_code >= 200 && $http_code < 300) {
  $decoded = json_decode($response, true);
  if (is_array($decoded)) {
    echo json_encode($decoded);
  } else {
    echo json_encode(["status" => "error", "message" => "Invalid response from backend"]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "Backend returned $http_code"]);
}
?>
