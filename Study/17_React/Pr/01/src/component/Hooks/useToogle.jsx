import { useState } from "react";

function useToggle() {
  const [value,setValue] = useState(false);
  const toogleValue = () => {
    setValue(!value);
  }

  return (
    [value, toogleValue]
  );
}

export default useToggle;