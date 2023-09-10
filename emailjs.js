// https://www.emailjs.com/docs/tutorial/creating-contact-form/
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          createSnackbar("Mensagem enviada com sucesso!");
        },
        function (error) {
          createSnackbar("Erro: " + error, "error");
        }
      );
    });
};
