function createSnackbar(content, theme = "default") {
  const snackbar = document.createElement("div");
  snackbar.innerText = content;
  snackbar.className = "snackbar";
  if (theme === "error") {
    snackbar.classList.add("snackbar--theme--" + theme);
  }
  snackbar.setAttribute("role", "status");
  document.body.appendChild(snackbar);
  setTimeout(() => {
    snackbar.style.opacity = 0;
    setTimeout(() => {
      snackbar.remove();
    }, 500);
  }, 5000);
}
