

function request(method: string, url: string, value: boolean = false): Promise<any> {
    return new Promise((res) => {
        let req: XMLHttpRequest = new XMLHttpRequest();
        req.open(method, url);
        value ? req.send() : req.send(value);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                switch (req.status) {
                    case 200:
                        res(JSON.parse(req.responseText))
                        break;
                }
            }
        }
    })
}
let tbody: any = document.getElementById('tbody');
let apiUrl: string = 'http://localhost:3000/users';


request('GET', apiUrl).then((data: any[]) => {
    addToTable(data);
});

function addToTable(data: any[]) {
    tbody.innerHtml = '';
    data.forEach(item => {
        let tr: any = document.createElement('tr');
        tr.innerHTML +=
            `
        <td>${item.name}</td>
        <td>${item.l_name}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>
        `;
        createAction(tr, item.id);
    });


}

function createAction(tr: any, id: number) {
    let td: any = document.createElement('td');
    let edit: any = document.createElement('button');
    edit.innerText = 'Edit';
    let deleteButton: any = document.createElement('button');
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

function deleteUser(id: number) {
    if (confirm('Are you sure delete this item')) {
        request('DELETE', `${apiUrl}/${id}`).then(() => {

            // addToTable(data)
            request('GET', apiUrl).then((data: any[]) => {
                addToTable(data);
            })
        })
    }
}
