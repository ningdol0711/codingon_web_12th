function SelectorComp(props) {
  const {Name, items, onChange} = props;

  return ( 
    <span className="select">
      <span>{Name} : </span>
      <select name={Name} id={Name} onChange={onChange}>
        {items.map((e) => (
          <option value={e} key={e}>{e}</option>
        ))}
      </select>
    </span>
   );
}

export default SelectorComp;