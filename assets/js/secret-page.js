const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
burger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


const secretChatLink = document.getElementById('secretChatLink');
const overlay = document.getElementById('overlay');
const submitCodeBtn = document.getElementById('submitCodeBtn');
const errorMessage = document.getElementById('errorMessage');

secretChatLink.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.add('active');
});

submitCodeBtn.addEventListener('click', function () {
  const input = document.getElementById('secretCodeInput').value;
  if (input === 'open-sesame') {
    window.location.href = 'secret.html';
  } else {
    errorMessage.style.display = 'block';
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const chatLink = document.getElementById("chatLink");
  const modal = document.getElementById("qrModal");
  const closeBtn = document.querySelector(".close");

  if (chatLink && modal && closeBtn) {
    chatLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
});
