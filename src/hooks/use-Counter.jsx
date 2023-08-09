import { useEffect, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleClick,
  };
}

export default useCounter;
