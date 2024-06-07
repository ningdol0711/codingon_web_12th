import './styles/Sasscomp.scss'

function SassComp() {
  return ( 
    <div className="container">
      <div className="box red"></div>
      <div className="box orange"></div>
      <div className="box green"></div>

      <div className="btn container">
        <button className='btn'>Button</button>
        <button className='btn-primary'>Button primary</button>
      </div>
    </div>
   );
}

export default SassComp;