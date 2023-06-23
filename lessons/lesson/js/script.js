// let td = [...document.getElementsByTagName('td')];
// let winIndex = Math.floor(Math.random() * 26);
// let title = document.querySelector('h2');
// let whoIs = true;
// let idDone = true;
//
// td.forEach((item, i) => {
//   item.addEventListener('click', () => {
//     if (item.innerHTML.trim() == '' && idDone) {
//       setValue(item, i);
//     }
//   })
// });
//
// function setValue(item, index) {
//   if (winIndex == index) {
//     item.innerText = 'W';
//     idDone = false;
//   } else {
//     item.innerText = 'X';
//   }
//   title.innerText = whoIs ? 'User 2' : 'User 1';
//   whoIs = !whoIs;
// }

// let country = document.getElementById('country');
// let city = document.getElementById('city');
// let cities = {};
//
// function getRequest() {
//   return new Promise((res, rej) => {
//     let req = new XMLHttpRequest();
//     req.open('GET', ' http://localhost:3000/country');
//     req.send();
//     req.onreadystatechange = function() {
//       if (req.readyState === 4 && req.status === 200) {
//         res(JSON.parse(req.responseText));
//       }
//     }
//   });
// }
//
// getRequest().then((data) => {
//   data.forEach((item, i) => {
//     let option = document.createElement('option');
//     option.append(item.name);
//     option.value = item.id;
//     cities[item.id] = item;
//     country.append(option);
//   });
//   console.log(cities);
// });
//
// country.addEventListener('change', (e) => {
//   console.log(e.target.value);
//   city.innerHTML = '<option disabled hidden>City</option>';
//   cities[e.target.value].cityes.forEach((item, i) => {
//     let option = document.createElement('option');
//     option.append(item.name);
//     option.value = item.id;
//     city.append(option);
//   });
//
// })

let tbody = document.getElementById('tbody');
let apiUrl = 'http://localhost:3000/users';

function request(method, url, value = false) {
  return new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.open(method, url);
    value ? req.send() : req.send(value);
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        switch(req.status) {
          case 200 : res(JSON.parse(req.responseText));
          break;
        }
      }
    }
  });
}

request('GET', apiUrl).then((data) => {
  addToTable(data);
})

function addToTable(data) {
  tbody.innerHTML = '';
  data.forEach((item, i) => {
    let tr = document.createElement('tr');
    tr.innerHTML =
    `
      <td>${item.name}</td>
      <td>${item.l_name}</td>
      <td>${item.age}</td>
      <td>${item.email}</td>
    `;
    createAction(tr, item.id);
  });
}

function createAction(tr, id) {
  let td = document.createElement('td');
  let edit = document.createElement('button');
  edit.innerText = 'Edit';
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteUser(id);
  });
  edit.addEventListener('click', () => {

  })
  td.append(edit);
  td.append(deleteButton);
  tr.append(td);
  tbody.append(tr)
}

function deleteUser(id) {
  if (confirm('Are you sure delete this item')) {
    request('DELETE', `${apiUrl}/${id}`).then(() => {
      request('GET', apiUrl).then((data) => {
        addToTable(data);
      })
    })
  }
}

// let a = 78;
//
// function test(params) {
//   params.toFixed(2);
// }
// test(45);
// test();
