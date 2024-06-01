function SelectImg(props = "peach") {
  const text = `/${props.selectedValue}.jpg`

  return (  
    <div>
      <img src={text} alt="" />
    </div>
   );
}

export default SelectImg;