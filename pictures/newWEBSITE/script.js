document.getElementById('contactMeBtn').addEventListener('click', function() {
  showContactPopup();
});

function showContactPopup() {
  document.getElementById('contactPopup').style.display = 'block';
}

function hideContactPopup() {
  document.getElementById('contactPopup').style.display = 'none';
}

function validateForm() {
  // Add your form validation logic here
  return true; // Returning true for the example, replace with actual validation
}
