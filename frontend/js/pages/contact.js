const form = document.querySelector("[data-contact-form]");
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = form.querySelector(".form-status");
  const data = Object.fromEntries(new FormData(form));
  status.textContent = "Thanks — your message is ready to send. Connect the contact function to enable delivery.";
  status.className = "form-status success";
  form.reset();
  console.info("Contact submission", { name: data.name, email: data.email });
});