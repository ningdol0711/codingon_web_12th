import PropTypes from "prop-types";

function ConsoleComp({ text = "Default", vaild }) {

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={vaild}>Console message</button>
    </div>
  );

}

ConsoleComp.propTypes = {
  text: PropTypes.string.isRequired
}

export default ConsoleComp;
