function FoodProps(props) {
  return ( 
    <div>Changook = cold noodle / <p style={{color:"red"}}>{props.food}</p></div>
   );
}

FoodProps.defaultProps = {
  food: "burger",
}

export default FoodProps;