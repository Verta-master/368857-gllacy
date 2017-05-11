var link = document.querySelector(".feedback-form");
var popup = document.querySelector(".feedback-modal");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=yourname]");
var email = popup.querySelector("[name=youremail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
  event.preventDefault();
	overlay.classList.add("modal-overlay-show");
	popup.classList.add("feedback-modal-show");
	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
});
	  
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("feedback-modal-show");
	overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function (event) {
	if (!login.value || !email.value) {
		event.preventDefault();
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("feedback-modal-show")) {
			popup.classList.remove("feedback-modal-show");
		}
	}
});