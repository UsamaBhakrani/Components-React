import { useState, useEffect } from "react";

const useCounter = (intialValue) => {
  const [count, setCount] = useState(intialValue);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
};

export default useCounter
