import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = document.querySelector("input[name='delay']");
    const delay = parseInt(delayInput.value);

    const stateInput = document.querySelector("input[name='state']:checked");
    const state = stateInput ? stateInput.value : null;

    if (!isNaN(delay) && state) {
      const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') {
          setTimeout(() => resolve(delay), delay);
        } else {
          setTimeout(() => reject(delay), delay);
        }
      });

      promise
        .then(delay => {
          iziToast.success({
            message: `✅ Fulfilled promise in ${delay}ms`,
            background: '#59a10d',
            titleColor: '#ffffff',
            messageColor: '#ffffff',
            position: 'topRight',
            close: false,
          });
        })
        .catch(delay => {
          iziToast.error({
            message: `❌ Rejected promise in ${delay}ms`,
            background: '#ef4040',
            titleColor: '#ffffff',
            messageColor: '#ffffff',
            position: 'topRight',
            close: false,
          });
        });
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a delay and select a state',
      });
    }
  });
});

// test
