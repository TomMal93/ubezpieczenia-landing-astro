const form = document.getElementById('contact-form') as HTMLFormElement | null;
const msg = document.getElementById('form-msg') as HTMLParagraphElement | null;

if (form && msg) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const f = e.currentTarget as HTMLFormElement;

    if (!f.checkValidity()) {
      f.reportValidity();
      msg.textContent = 'Uzupełnij wymagane pola.';
      return;
    }

    msg.textContent = 'Dziękujemy! Skontaktujemy się wkrótce.';
    f.reset();
  });
}
