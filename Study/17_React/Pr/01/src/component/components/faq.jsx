import useToggle from "../Hooks/useToogle";

function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  return (
    <div>
      <h1>Custom hook</h1>
      <div onClick={setIsFaqOpen}>Q. 리액트에서 커스텀 훅을 만들수 있나요?</div>
      <div>{isFaqOpen && <div>SURE</div>}</div>
    </div>
  );
}

export default Faq;
