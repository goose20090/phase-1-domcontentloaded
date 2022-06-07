document.addEventListener("DOMContentLoaded", function() {
    let grabText = document.getElementById('text');
    grabText.textContent = "This is really cool!"
  });
  
console.log(
"This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );