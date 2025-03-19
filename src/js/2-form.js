const lsKey = 'feedback-form-state';
let formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(lsKey, JSON.stringify(formData));
});

const savedInfo = localStorage.getItem(lsKey);
if (savedInfo) {
  formData = { ...formData, ...JSON.parse(savedInfo) };
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    formData.email.trim().length === 0 ||
    formData.message.trim().length === 0
  ) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(lsKey);
  form.reset();
});
