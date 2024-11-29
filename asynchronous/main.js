let output = document.getElementById('demo');
output.innerHTML += "Code execution started. <br>";
setTimeout(function () {
    output.innerHTML += "setTimeout() called. <br>";
}, 2000);
output.innerHTML += "Code execution finished. <br>";