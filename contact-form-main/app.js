let radioGreen = document.querySelectorAll(".radio-green");

radioGreen.forEach((element) => {
  element.addEventListener("change", () => {
    radioGreen.forEach((element) => {
      element.parentElement.classList.remove("child-radio-checked");
    });
    if (element.checked) {
      element.parentElement.classList.add("child-radio-checked");
    }
  });
});

let forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      showNotification();
      form.reset();
      form.classList.remove("was-validated");
    } else {
      form.classList.add("was-validated");
    }
  });
});

const notification = document.querySelector("#notification");

function showNotification() {
  notification.classList.remove("show-notification");
  void notification.offsetWidth;
  notification.classList.add("show-notification");
}
