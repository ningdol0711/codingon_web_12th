function FuncComponent() {
  const age = 20;
  return (
    <>
      <h1>
        Function Component
        {age >= 20 ? "성인" : "미성년"}
        {checkage(age)}
      </h1>
    </>
  );
  function checkage(age) {
    if (age >= 20) {
      return "over 20";
    } else {
      return "under 20";
    }
  }
}

export default FuncComponent;
