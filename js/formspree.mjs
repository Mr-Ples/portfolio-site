const form = document.getElementById("contactForm");
async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("contactFormStatus");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
        window.location = "thank-you.html"
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = `<span class="text-danger">Oops! There was a problem submitting your form. Please try again</span>`;
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = `<span class="text-danger">Oops! There was a problem submitting your form. Please try again</span>`;
    });
}
form.addEventListener("submit", handleSubmit);
