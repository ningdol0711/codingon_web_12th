const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#btn-group');
const form = document.forms['visitor-form'];

function addVisitor() {
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
      alert('이름 또는 방명록 기입해주세요!');
      return;
  }
  if (form.name.value.length > 10) {
      alert('이름은 10글자 미만입니다!');
      return;
  }
  axios({
    method: 'post',
    url: '/addVisitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    }
  }).then(res => {
    console.log('Data from model/Visitors');
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
    url: `/visitoredit/:${id}`,
  }).then(res => {
    const {name, comment }= res.data;
        console.log('editVisitor > getShowAvisitor 에서 넘어온',res.data);
        form.name.value=name;
        form.comment.value=comment;
  })
  const html = `
    <button type='button' onclick='editDo(${id})'>변경</button>
    <button type='button' onclick='editCancle()'>취소</button>
  `;
  btnGroup.innerHTML = html;
}

function editDo(id) {
  console.log(`${id}내용을 바꾸자고 합니다`);
  axios({
    method:'patch',
    url:'/visitoreidtDo',
    data:{
      id:id,
      name : form.name.value,
      comment: form.comment.value
    }
  }).then(res=>{
    console.log('editDo', res.data)
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;
    editCancle();
  })
}

function editCancle() {
  form.reset();
  const html = `<button type='button' onclick='createVisitor()'>등록</button>`;
  btnGroup.innerHTML = html;
}

function delVisitor(obj, id) {
  if (!confirm('정말 삭제하시겠습니까?')) return;
  axios({
     method:'delete',
     url:'/visitordelete',
     data:{id:id}
  }).then(res => {
     console.log('삭제버튼 클릭 > 디비수정 후 되돌아온내용',res.data);
     obj.closest(`#tr_${id}`).remove();
  })
}