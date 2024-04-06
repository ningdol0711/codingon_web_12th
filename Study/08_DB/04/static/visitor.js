const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#btn-group');

function addVisitor() {
  const form = document.forms['visitor-form'];
  if(form.name.value.length == 0 || form.comment.value.length == 0) {
    alert('Pleast insert name and comment');
  }
  if(form.name.value.length > 10) {
    alert('Name is too long please make sure name is less then 10 words');
  }

  axios({
    method: 'post',
    url: '/visitor',
    data : {
      name: form.name.value,
      comment: form.comment.value,
    }
  }).then(res => {
    const data = res.data;
    console.log('Now location : /static/visitor (data)', data);

    const html = `
      <tr id="tr_${data.id}">
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editVisitor('${data.id}')">Edit</button></td>
        <td><button type="button" onclick="delVisitor('${data.id}')">Delete</button></td>
      </tr>
    `;
    //insertAdjacentHTML : 지정된 텍스트를 HTML 파싱하여 지정된 위치의 DOM트리에 삽입한다.
    tbody.insertAdjacentHTML('beforeend', html);
    form.reset();
  })
}

function editVisitor(id) {
  axios({
    method: 'get',
    url: `/visitor/${id}`,
  }).then(res => {
    console.log('/static/visitor.js.editVisitor');
    const {name, comment} = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value = comment;
  })
  const html = `
    <button type = "button" onclick = "doEdit(${id})">Edit</button>
    <button type = "button" onclick = "cancelEdit()">Cancel</button>
  `;
  btnGroup.innerHTML = html;
}

function doEdit(id) {
  const form = document.forms['visitor-form'];
  axios({
    method: 'patch',
    url: '/visitor',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    }
  }).then(res => {
    console.log('who the fuck are you /static/visitor.js.doEdit');
    const child = document.querySelector(`tr_${id}`).children;
    child[1].textContent = form.name.value;
    child[2].textContent = form.comment.value;
    cancelEdit();
  })
}

function cancelEdit() {
  const form = document.forms['visitor-form'];
  form.reset();
  const html = `<button type = "button" onclick = "addVisitor()>Add</button>`;
  btnGroup.innerHTML = html;
}

function delVisitor() {
  console.log('/static/visitor.js.delVisitor');
  if(!confirm('Are you sure??')) {
    return;
  }
  else {
    axios({
      method: 'delete',
      utl: '/visitor',
      data: {id: id},
    }).then(res => {
      console.log('Data deleted');
      obj.cloeset(`#tr_${id}`).remove();
    })
  }
}