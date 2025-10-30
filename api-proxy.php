<?php
// api-proxy.php - forward POST JSON to remote backend and return its response
header("Content-Type: application/json; charset=UTF-8");

// Read incoming JSON
$body = file_get_contents("php://input");

// Remote backend URL
$remote = "https://aviyamagnus.rf.gd/register.php";

// forward using cURL
$ch = curl_init($remote);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json',
  'Content-Length: ' . strlen($body)
]);

$response = curl_exec($ch);
$err = curl_error($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($err) {
  http_response_code(502);
  echo json_encode(["status"=>"error","message"=>"Proxy error: $err"]);
} else {
  http_response_code($http_code ? $http_code : 200);
  echo $response;
}
