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
var form = document.getElementById('form');
var request = function (method, url, value) {
    if (value === void 0) { value = false; }
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(method, url);
        value ? req.send() : req.send(value);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                switch (req.status) {
                    case 200:
                        resolve(JSON.parse(req.responseText));
                        break;
                }
            }
        };
    });
};
var tbody = document.getElementById('tbody');
var apiURl = 'http://localhost:3000/users';
request("GET", apiURl).then(function (data) { return addToTable(data); });
var addToTable = function (data) {
    tbody.innerHTML = '';
    data.forEach(function (item) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(item.name, "</td>\n        <td>").concat(item.age, "</td>\n        <td>").concat(item.email, "</td>\n        ");
        createAction(data, tr, item.id);
    });
};
var createAction = function (data, tr, id) {
    var td = document.createElement('td');
    var buttonDelete = document.createElement('button');
    var editButton = document.createElement('button');
    buttonDelete.innerText = 'delete';
    editButton.innerText = 'edit';
    buttonDelete.addEventListener('click', function () { return deleteUser(id); });
    editButton.addEventListener('click', function () { return putUser(data, id); });
    td.append(buttonDelete);
    td.append(editButton);
    tr.append(td);
    tbody.append(tr);
};
var deleteUser = function (id) {
    if (confirm("Do want delete this user?")) {
        request('DELETE', "".concat(apiURl, "/").concat(id)).then(function () {
            request('GET', apiURl).then(function (data) { return addToTable(data); });
        });
    }
};
var ageInput = document.getElementById('age-input');
var nameInput = document.getElementById('name-input');
var emailInput = document.getElementById('email-input');
var passwordInput = document.getElementById('password-input');
var sendButton = document.getElementById('sendButton');
var PutUser = /** @class */ (function () {
    function PutUser() {
    }
    return PutUser;
}());
var putUser = function (dataTwo, id) {
    form.style.display = 'block';
    dataTwo.forEach(function (item) {
        ageInput.value = dataTwo[id - 1].age;
        nameInput.value = dataTwo[id - 1].name;
        emailInput.value = dataTwo[id - 1].email;
        passwordInput.value = dataTwo[id - 1].password;
    });
    sendButton.value = id;
    sendButton.addEventListener('click', function (e) {
        e.preventDefault();
        var putObj = {
            name: nameInput.value,
            age: +ageInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };
        var put = new XMLHttpRequest();
        put.open('PUT', "".concat(apiURl, "/").concat(e.target.value));
        put.setRequestHeader('Content-type', 'application/json');
        put.send(JSON.stringify(putObj));
        request('GET', apiURl).then(function (data) { return addToTable(data); });
    });
};
