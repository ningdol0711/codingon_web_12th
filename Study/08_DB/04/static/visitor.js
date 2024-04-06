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
  })
}

function editVisitor() {

}

function delVisitor() {

}