// let ageInput = document.getElementById('age-input');
// let nameInput = document.getElementById('name-input');
// let lastName = document.getElementById('lastName-input');
// let email = document.getElementById('email-input');
// let password = document.getElementById('password-input');
// let btn = document.querySelector('.dis-btn')
// let valiable = document.querySelector('.valiable');
// let warning = document.querySelector('.warning');

// //RegExp
// let ageRegExp = /^[0-9][0-9]?$|^100$/;
// let nameRegExp = /^.{3,}$/;
// let emailRegExp = /^[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,4}/;
// let passRegExp = /^.{8,}$/
// let count = 0;

// ageInput.addEventListener('input', (e) => {
//     if (ageRegExp.test(e.target.value)) {
//         valiable.style.display = 'block'
//         warning.style.display = 'none';
//         if (count == 0) {
//             count++;
//             console.log(count);
//         }
//     } else {
//         warning.style.display = 'block';
//         valiable.style.display = 'none';
//     }
// })

// nameInput.addEventListener('input', (e) => {
//     if (nameRegExp.test(e.target.value)) {
//         valiable.style.display = 'block'
//         warning.style.display = 'none'

//         if (count == 1) {
//             count++;
//             console.log(count);
//         }
//     } else {
//         warning.style.display = 'block';
//         valiable.style.display = 'none'
//     }
// })

// lastName.addEventListener('input', (e) => {
//     if (nameRegExp.test(e.target.value)) {
//         valiable.style.display = 'block'
//         warning.style.display = 'none';

//         if (count == 2) {
//             count++;
//             console.log(count);
//         }
//     } else {
//         warning.style.display = 'block';
//         valiable.style.display = 'none'
//     }
// })

// email.addEventListener('input', (e) => {
//     if (emailRegExp.test(e.target.value)) {
//         valiable.style.display = 'block'
//         warning.style.display = 'none'

//         if (count == 3) {
//             count++;
//             console.log(count);
//         }
//     } else {
//         warning.style.display = 'block';
//         valiable.style.display = 'none'
//     }
// })

// password.addEventListener('input', (e) => {
//     if (passRegExp.test(e.target.value)) {
//         valiable.style.display = 'block'
//         warning.style.display = 'none'

//         if (count == 4) {
//             count++;
//             console.log(count);
//         }
//     } else {
//         warning.style.display = 'block';
//         valiable.style.display = 'none'
//     }

//     if (count == 5) {
//         btn.removeAttribute('disabled');
//     }
// })

let form: any = document.getElementById('form');

const request = (method: string, url: string, value: boolean = false): Promise<string> => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open(method, url);
        value ? req.send() : req.send(value);
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                switch (req.status) {
                    case 200:
                        resolve(JSON.parse(req.responseText))
                        break
                }
            }
        }
    })
}

let tbody: HTMLTableSectionElement = document.getElementById('tbody')
let apiURl: string = 'http://localhost:3000/users'

request("GET", apiURl).then((data: (string | number)[]) => addToTable(data))

const addToTable = (data: (string | number)[]) => {
    tbody.innerHTML = ''

    data.forEach(item => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        `
        createAction(data, tr, item.id)
    })
}

const createAction = (data: any, tr: Element, id: number) => {
    let td = document.createElement('td')
    let buttonDelete = document.createElement('button')
    let editButton = document.createElement('button')
    buttonDelete.innerText = 'delete'
    editButton.innerText = 'edit'
    buttonDelete.addEventListener('click', () => deleteUser(id))
    editButton.addEventListener('click', () => putUser(data, id))
    td.append(buttonDelete)
    td.append(editButton)
    tr.append(td)
    tbody.append(tr)
}

const deleteUser = (id: number) => {
    if (confirm("Do want delete this user?")) {
        request('DELETE', `${apiURl}/${id}`).then(() => {
            request('GET', apiURl).then((data: (string | number)[]) => addToTable(data))
        })
    }
}

const ageInput: HTMLInputElement = document.getElementById('age-input');
const nameInput: HTMLInputElement = document.getElementById('name-input');
const emailInput: HTMLInputElement = document.getElementById('email-input');
const passwordInput: HTMLInputElement = document.getElementById('password-input');
const sendButton: HTMLButtonElement = document.getElementById('sendButton')

class PutUser {
    name: string;
    age: number;
    email: string;
    password: string;
}

const putUser = (dataTwo: (string | number)[], id: number) => {
    form.style.display = 'block';
    dataTwo.forEach(item => {
        ageInput.value = dataTwo[id - 1].age
        nameInput.value = dataTwo[id - 1].name
        emailInput.value = dataTwo[id - 1].email
        passwordInput.value = dataTwo[id - 1].password
    })

    sendButton.value = id;

    sendButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        let putObj: PutUser = {
            name: nameInput.value,
            age: +ageInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }

        let put = new XMLHttpRequest();
        put.open('PUT', `${apiURl}/${e.target.value}`);
        put.setRequestHeader('Content-type', 'application/json');
        put.send(JSON.stringify(putObj));

        request('GET', apiURl).then((data: (string | number)[]) => addToTable(data))
    })
}