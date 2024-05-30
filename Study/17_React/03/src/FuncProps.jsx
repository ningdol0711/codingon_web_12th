// props : properties / 값을 전달할때 사용
// import propTypes from "prop-types";

function FuncProps({name = "name", lunch = "reana"}) {
  return ( 
    <>
      <p>{name}</p>
      <p>{lunch}</p>
    </>
   );
}
// FuncProps.defaultProps = {
//   lunch: "raena"
// }
// FuncProps.propTypes = {
//   name: propTypes.string,
// }

export default FuncProps;