function FuncComp(props) {
  return ( 
    <div>
      <p>This is FuncComp</p>
      <p>{props.name}</p>
      <div>{props.children}</div>
    </div>
   );
}

export default FuncComp;