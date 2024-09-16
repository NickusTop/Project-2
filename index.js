
const overlay = document.getElementById('overlay');
const overlay2 = document.getElementById('overlay2');
const openBtn = document.getElementById('openBtn');
const openBtn2 = document.getElementById('openBtn2');
const sendBtn = document.getElementById('sendBtn');
const backBtn = document.getElementById('backBtn');
const openBtnM = document.getElementById('openBtnM');
const closeBtn = document.getElementById('closeBtn');
const overlay3 = document.getElementById('overlay-mobile');

let canClickOpen = true;

openBtn.addEventListener('click', function() {
    if (canClickOpen) {
        overlay.classList.add('visible');
        document.body.classList.add('no-scroll');

        canClickOpen = false;
        setTimeout(() => {
            canClickOpen = true;
        }, 60000);
    } else {
        console.log("Подождите минуту перед повторным нажатием.");
    }
});
openBtn2.addEventListener('click', function() {
    if (canClickOpen) {
        overlay.classList.add('visible');
        document.body.classList.add('no-scroll');

        canClickOpen = false;
        setTimeout(() => {
            canClickOpen = true;
        }, 60000);
    } else {
        console.log("Подождите минуту перед повторным нажатием.");
    }
});

sendBtn.addEventListener('click', function() {
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay2.classList.add('visible');
    }, 500);
});

backBtn.addEventListener('click', function() {
    overlay2.classList.remove('visible');
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 500);
});

window.addEventListener('load', function() {
    overlay.classList.remove('visible');
    overlay2.classList.remove('visible');
});
openBtnM.addEventListener('click', function() {
    overlay3.classList.remove('hide');
    overlay3.style.display = 'flex';
    document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', function() {
    overlay3.classList.add('hide');
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 500);
    overlay3.style.display = 'none';
});
