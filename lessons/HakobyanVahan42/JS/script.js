function request(method, url, value) {
    if (value === void 0) { value = false; }
    return new Promise(function (res) {
        var req = new XMLHttpRequest();
        req.open(method, url);
        value ? req.send() : req.send(value);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                switch (req.status) {
                    case 200:
                        res(JSON.parse(req.responseText));
                        break;
                }
            }
        };
    });
}
var tbody = document.getElementById('tbody');
var apiUrl = 'http://localhost:3000/users';
request('GET', apiUrl).then(function (data) {
    addToTable(data);
});
function addToTable(data) {
    tbody.innerHtml = '';
    data.forEach(function (item) {
        var tr = document.createElement('tr');
        tr.innerHTML +=
            "\n        <td>".concat(item.name, "</td>\n        <td>").concat(item.l_name, "</td>\n        <td>").concat(item.age, "</td>\n        <td>").concat(item.email, "</td>\n        ");
        createAction(tr, item.id);
    });
}
function createAction(tr, id) {
    var td = document.createElement('td');
    var edit = document.createElement('button');
    edit.innerText = 'Edit';
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        deleteUser(id);
    });
    edit.addEventListener('click', function () {
    });
    td.append(edit);
    td.append(deleteButton);
    tr.append(td);
    tbody.append(tr);
}
function deleteUser(id) {
    if (confirm('Are you sure delete this item')) {
        request('DELETE', "".concat(apiUrl, "/").concat(id)).then(function (data) {
            addToTable(data);
            // request('GET', apiUrl).then((data: any[]) => {
            //     addToTable(data);
            // })
        });
    }
}
