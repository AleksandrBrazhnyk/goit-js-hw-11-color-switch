import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onBtnStart);
stopBtn.addEventListener('click', onBtnStop);

// находим цвет
const showColor = items => { 
    const index = randomIntegerFromInterval(0, items.length - 1);
    const color = items.find(item => items.indexOf(item) === index);
    bodyRef.style.backgroundColor = color;
};

// timer

 let intervalId = null;

   function onBtnStart() {   
        intervalId = setInterval(() => { 
            showColor(colors); 
            startBtn.setAttribute('disabled', '');
        }, 1000); 
    };

    function onBtnStop() {
        clearInterval(intervalId);
        startBtn.disabled = false
       
    };

