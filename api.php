<?php
// api.php - Backend simple para TecnoTigre
header('Content-Type: application/json');
$file = 'posts.json';

// Acción: Guardar posteos (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents('php://input');
    if (file_put_contents($file, $data)) {
        echo json_encode(['status' => 'success']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'No se pudo escribir el archivo']);
    }
    exit;
}

// Acción: Obtener posteos (GET)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo json_encode([]);
    }
    exit;
}
?>