const tryButton = document.getElementById('tryButton');
const favDialog = document.getElementById('favDialog');
const exitButton = document.getElementById('exit');
tryButton.addEventListener('click', function () {
  favDialog.showModal();
});
exitButton.addEventListener('click', function () {
  favDialog.close();
});
