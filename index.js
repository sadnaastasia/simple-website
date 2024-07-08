(function () {
  const updateButton = document.getElementById('updateDetails');
  const enterButton = document.getElementById('enter');
  const registerButton = document.getElementById('register');
  const favDialog = document.getElementById('favDialog');
  const exitButton = document.getElementById('exit');

  // Update button opens a modal dialog
  updateButton.addEventListener('click', function () {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  ezitButton.addEventListener('click', function () {
    favDialog.close();
  });
})();
