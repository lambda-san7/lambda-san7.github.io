document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var textInput = document.querySelector('#text-input');
  var submitBtn = document.querySelector('#submit-btn');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var text = textInput.value;
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write-to-file.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log(xhr.status)
      if (xhr.status === 200) {
        console.log('File written successfully');
      } else {
        console.error('Error writing file');
      }
    };
    xhr.send('text=' + encodeURIComponent(text));
  });
});
