import './App.css'

function Promo() {
  const name = "Lee Jun Gue";
  const gender = true;
  const style = {
    backgroundColor: "#2b2b2b",
    color: "red",
    fontSize: "30px"
  }

  return ( 
    <div className="App">
      <p>My name is {name}</p>
      <p style={{backgroundColor: "skyblue", color: "violet"}}>My age is {2024 - 2003}</p>
      <p style={style}>My gender is {gender ? "male" : "female"}</p>
      <p>{21 > 20 ? "저는 성인 입니다." : "저는 미성년자 입니다."}</p>
    </div>
   );
}

export default Promo;
