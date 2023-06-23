//First Game

// let th = document.querySelectorAll('th');
// let users = document.querySelector('.users')
// let reset = document.querySelector('.reset')
// let random = Math.round(Math.random() * 25);

// th.forEach((item) => {
//     if (random != item.className) {
//         item.addEventListener('click', () => {
//             item.innerText = 'X';
//             if (users.innerText === 'First User') {
//                 users.innerText = 'Second User'
//             } else if (users.innerText === 'Second User') {
//                 users.innerText = 'First User'
//             }
//         })
//     } else {
//         item.addEventListener('click', () => {
//             item.innerHTML = '<img src="gold.png" alt="adf">';
//             users.innerText = `${users.innerText} is WIN!`
//         })
//     }

//     reset.addEventListener('click', () => {
//         item.innerText = '';
//         users.innerText = 'First User';
//         location.reload;
//     })
// })

//Tic-Tac-Toe
// let th = document.querySelectorAll('th');
// let reset = document.querySelector('.reset');
// let XandO = true;

// th.forEach((item) => {
//     item.addEventListener('click', () => {
//         if (item.innerText == '') {
//             if (XandO) {
//                 item.innerText = 'X';
//                 XandO = false;
//                 console.log(XandO);
//             } else {
//                 item.innerText = 'O';
//                 XandO = true;
//                 console.log(XandO);
//             }
//             checkX();
//         }
//     });
//     reset.addEventListener('click', () => {
//         item.innerText = '';
//         XandO = true;
//     })
// })


// function checkX() {
//     for (let i = 0; i <= 6; i++) {
//         if (i == 0 || i == 3 || i == 6) {
//             if (th[i].innerText == 'X' && th[i + 1].innerText == 'X' && th[i + 2].innerText == 'X' ||
//                 th[i].innerText == 'O' && th[i + 1].innerText == 'O' && th[i + 2].innerText == 'O') {
//                 alert('You Win')
//             }
//         }
//     }

//     for (let i = 0; i <= 2; i++) {
//         if (th[i].innerText == 'X' && th[i + 3].innerText == 'X' && th[i + 6].innerText == 'X' ||
//             th[i].innerText == 'O' && th[i + 3].innerText == 'O' && th[i + 6].innerText == 'O') {
//             alert('You Win')
//         }
//     }

//     if ((th[0].innerText == 'X' && th[4].innerText == 'X' && th[8].innerText == 'X' ||
//         th[0].innerText == 'O' && th[4].innerText == 'O' && th[8].innerText == 'O')) {
//         alert('You win')
//     }

//     if ((th[2].innerText == 'X' && th[4].innerText == 'X' && th[6].innerText == 'X' ||
//         th[2].innerText == 'O' && th[4].innerText == 'O' && th[6].innerText == 'O')) {
//         alert('You win')
//     }
// }

//Form's validation

let ageInput = document.getElementById('age-input');
let nameInput = document.getElementById('name-input');
let lastName = document.getElementById('lastName-input');
let email = document.getElementById('email-input');
let password = document.getElementById('password-input');
let btn = document.querySelector('.dis-btn')
let valiable = document.querySelector('.valiable');
let warning = document.querySelector('.warning');

//RegExp
let ageRegExp = /^[0-9][0-9]?$|^100$/;
let nameRegExp = /^.{3,}$/;
let emailRegExp = /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,4}/;
let passRegExp = /^.{8,}$/
let count = 0;

ageInput.addEventListener('input', (e) => {
    if (ageRegExp.test(e.target.value)) {
        valiable.style.display = 'block'
        warning.style.display = 'none';
        if (count == 0) {
            count++;
            console.log(count);
        }
    } else {
        warning.style.display = 'block';
        valiable.style.display = 'none';
    }
})

nameInput.addEventListener('input', (e) => {
    if (nameRegExp.test(e.target.value)) {
        valiable.style.display = 'block'
        warning.style.display = 'none'

        if (count == 1) {
            count++;
            console.log(count);
        }
    } else {
        warning.style.display = 'block';
        valiable.style.display = 'none'
    }
})

lastName.addEventListener('input', (e) => {
    if (nameRegExp.test(e.target.value)) {
        valiable.style.display = 'block'
        warning.style.display = 'none';

        if (count == 2) {
            count++;
            console.log(count);
        }
    } else {
        warning.style.display = 'block';
        valiable.style.display = 'none'
    }
})

email.addEventListener('input', (e) => {
    if (emailRegExp.test(e.target.value)) {
        valiable.style.display = 'block'
        warning.style.display = 'none'

        if (count == 3) {
            count++;
            console.log(count);
        }
    } else {
        warning.style.display = 'block';
        valiable.style.display = 'none'
    }
})

password.addEventListener('input', (e) => {
    if (passRegExp.test(e.target.value)) {
        valiable.style.display = 'block'
        warning.style.display = 'none'

        if (count == 4) {
            count++;
            console.log(count);
        }
    } else {
        warning.style.display = 'block';
        valiable.style.display = 'none'
    }

    if (count == 5) {
        btn.removeAttribute('disabled');
    }
})