import { useState } from "react";

interface StudentInfo {
  name: string,
  grade: number,
  part?: string,
  handleClick: (
    name: string,
    grade: number,
    score: number,
  ) => void,
}

function Student({ name, grade, part = '자유전공', handleClick }: StudentInfo) {
  const [score, setScore] = useState<number>(0);

  return (
    <div>
      <ul onClick={() => {handleClick(name, grade, score)}}>
        <li>이름 : {name}</li>
        <li>학년 : {grade}</li>
        <li>전공 : {part}</li>
        <li>점수 : <input type="text" onChange={(e) => {setScore(Number(e.target.value))}}/></li>
      </ul>
    </div>
  );
}

export default Student;
