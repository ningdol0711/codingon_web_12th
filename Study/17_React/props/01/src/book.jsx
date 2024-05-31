import './App.css'

function BookComp(props) {
  return ( 
    <div className="App book">
      <h2 className='best'>Best Seller</h2>
      <div className="img"></div>
      <h2 className="title">{props.title}</h2>
      <div className="info">
        <p className="author">저자 : {props.author}</p>
        <p className="price">가격 : {props.price}</p>
        <p className="type">구분 : {props.type}</p>
      </div>
    </div>
   );
}

export default BookComp;