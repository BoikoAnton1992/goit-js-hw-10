import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/cross.png';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let countdownInterval;
let selectedDate;

let timerRunning = false;

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate < now) {
      startButton.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        iconUrl: cross,
        theme: 'dark',
      });
    } else {
      startButton.disabled = false;
    }
  },
};

const datePicker = flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
  if (!timerRunning) {
    startButton.disabled = true;
    datetimePicker.disabled = true;
    selectedDate = datePicker.selectedDates[0];
    const now = new Date();
    const timeDiff = selectedDate - now;

    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {
      const timeLeft = selectedDate - new Date();
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        updateDisplay(0);
        timerRunning = false;
        startButton.disabled = false;
        datetimePicker.disabled = false;
      } else {
        updateDisplay(timeLeft);
      }
    }, 1000);

    timerRunning = true;

    function updateDisplay(timeLeft) {
      const { days, hours, minutes, seconds } = convertMs(timeLeft);

      daysElement.textContent = addLeadingZero(days);
      hoursElement.textContent = addLeadingZero(hours);
      minutesElement.textContent = addLeadingZero(minutes);
      secondsElement.textContent = addLeadingZero(seconds);
    }
  }
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
