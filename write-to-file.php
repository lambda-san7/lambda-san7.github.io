<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $text = $_POST['text'];
  
  $filename = 'data.txt';
  $filepath = $_SERVER['DOCUMENT_ROOT'] . '/' . $filename;
  
  $file = fopen($filepath, 'w');
  fwrite($file, $text);
  fclose($file);
  
  echo 'File written successfully';
}

?>
