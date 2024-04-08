const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#btn-group');
const form = document.forms['visitor-form'];

function addVisitor() {
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert('Please insert name and comment');
    return;
  }
  axios({
    method: 'post',
    url: '/addVisitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then(res => {
    console.log('/static/scripts.addVisitor');
    const data = res.data;
    const html = `
    <tr id="tr_${data.id}">
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.comment}</td>
      <td><button type="button" onclick="editVisitor(${data.id})">Edit</button></td>
      <td><button type="button" onclick="delVisitor(this, ${data.id})">Delete</button></td>
    </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', html);
    form.reset();
  })
}

function editVisitor(id) {
  axios({
    method: 'get',
    url: '/selectVisitor',
    data: {
      name : data.name.value,
      comment : data.comment.value,
    },
  }).then((req, res) => {
    console.log(res.data);
  })
}

function delVisitor(obj, id) {
  if(!confirm('Are you sure??')) return;
  axios({
    method: 'delete',
    url: '/deleteVisitor',
    data: {id: id},
  }).then(res => {
    obj.closest(`#tr_${id}`).remove();
  })
}