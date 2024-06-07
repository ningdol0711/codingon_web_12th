import './styles/Sasscomp.scss';

function Pr1() {
  return (
    <div>
      <div className="larva">
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>
      </div>
      <img
        className="grass"
        src={process.env.PUBLIC_URL + '/grass.png'}
        alt="잔디"
      />
    </div>
  );
}

export default Pr1;
