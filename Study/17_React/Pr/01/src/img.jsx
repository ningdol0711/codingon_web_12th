function SelectImg(props = "peach") {
  const text = `/${props.selectedValue}.jpg`

  return (  
    <div>
      <img src={text} alt={props.selectedValue} width={100} height={100}/>
    </div>
   );
}

export default SelectImg;