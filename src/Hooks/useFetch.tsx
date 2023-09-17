import { useEffect, useState } from "react";
type AdviceType = {
  advice: string;
  id: number;
};// <--- create type
// <--- create initial state
const initialState: AdviceType = {
  advice: "",
  id: 0,
};
// <--- create custom hook
const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [advice, setAdvice] = useState<AdviceType>(initialState);
  const getAdvice = async () => {
    try {
        // <--- set loading to true
      setIsLoading(true);
      // <--- fetch data
      const response = await fetch("https://api.adviceslip.com/advice");
    //   <--- convert response to json
      const data = await response.json();
      // <--- set advice to data
      setAdvice(data.slip);
    } catch (error) {
        // <--- log error
      console.log(error);
    } finally {
        // <--- set loading to false
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);
  // <--- return values
  return { isLoading, advice, getAdvice };
};
// <--- export custom hook
export default useFetch;
