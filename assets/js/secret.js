const secretCode = "12345"; 

const overlay = document.getElementById('overlay');
const submitCodeBtn = document.getElementById('submitCodeBtn');
const secretCodeInput = document.getElementById('secretCodeInput');
const errorMessage = document.getElementById('errorMessage');
const secretChatLink = document.getElementById('secretChatLink');

window.onload = function() {
    overlay.classList.add('active');  
};

submitCodeBtn.addEventListener('click', function() {
    const enteredCode = secretCodeInput.value;

    if (enteredCode === secretCode) {
        window.location.href = "SecretPage.html";  
    } else {
        errorMessage.style.display = "block";  
    }
});
