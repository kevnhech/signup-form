function isPasswordEqual() {
  if (document.getElementById("password").value == document.getElementById("confirm-password").value) {
    document.getElementById("password").setCustomValidity("");
    document.getElementById("confirm-password").setCustomValidity("");
    return true;
  } else {
    document.getElementById("password").setCustomValidity("Invalid field.");
    document.getElementById("confirm-password").setCustomValidity("Invalid field.");
    return false;
  }
}