interface StudentInfo {
  name: string,
  grade: number,
  part?: string,
}

function Student({ name, grade, part = '자유전공' }: StudentInfo) {
  return (
    <div>
      <ul>
        <li>이름 : {name}</li>
        <li>학년 : {grade}</li>
        <li>전공 : {part}</li>
      </ul>
    </div>
  );
}

export default Student;
