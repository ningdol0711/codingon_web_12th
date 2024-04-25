const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#btn-group');
const form = document.forms['visitorForm'];

function addUser() {
  if(form.name.value.length === 0 || form.comment.value.length === 0) {
    alert('Please insert value');
    return;
  }
  if(form.name.value.length > 10) {
    alert('Plase insert name less then 10 word');
    return;
  }
  axios({
    method: 'post',
    url: '/addUser',
    data: {name: form.name.value, comment: form.comment.value},
  }).then((req, res) => {
    const data = req.data;
    const html = `
      <tr id="tr_${data.id}">
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.comment}</td>
      <td><button type="button" onclick="editVisitor(${data.id})">Edit</button></td>
      <td><button type="button" onclick="delVisitor(${this}, ${data.id})">Del</button></td>
      </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', html);
    form.reset();
  })
}

function editVisitor(id) {
  alert(`user id : ${id}`);
  axios({
    method: 'get',
    url: `/selectVisitor/${id}`,
  }).then((req, res) => {
    console.log(req.data);
    const {name, comment} = req.data;
    form.name.value = name;
    form.comment.value = comment;
    const html = `
      <button type="button" onclick="doEdit(${id})">Edit</button>
      <button type="button" onclick="editCancel()">Calcel</button>
    `;
    btnGroup.innerHTML = html;
  })
}

function doEdit(id) {
  axios({
    method: 'patch',
    url: '/patchVisitor',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((req, res) => {
    const child = document.querySelector(`#tr_${id}`).children;
    child[1].textContent = form.name.value;
    child[2].textContent = form.comment.value;
    editCancel();
  })
}

function editCancel() {
  form.reset();
  const html = `<button type = "button" onclick = "addUser()">add</button>`;
  btnGroup.innerHTML = html;
}

function delVisitor(obj, id) {
  if(!confirm('please make sure')) return;
  axios({
    method: 'delete',
    url: '/deleteVisitor',
    data: {id: id},
  }).then((req, res) => {
    obj.closest(`tr_${id}`).remove();
  })
}