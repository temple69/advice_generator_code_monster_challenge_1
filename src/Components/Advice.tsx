import useFetch from "../Hooks/useFetch"; // <--- import custom hook
import Dice from "./Icons/Dice"; // <--- import dice icon
import Icon from "./Icons/Icon"; // <--- import icon
import DiceGlow from "./Icons/DiceGlow"; // <--- import dice glow icon
import { useState } from "react"; // <--- import useState
import BeatLoader from "react-spinners/BeatLoader"; //   <--- import loader

const Advice = () => {
  const { isLoading, advice, getAdvice } = useFetch(); // <--- use custom hook
  const [isHovered, setIsHovered] = useState<boolean>(false); // <--- use useState
  return (
    <section className="flex justify-center items-center h-[100vh] content-center section_padding min-w-fit">
      <div className="div_width py-4 rounded-[0.9375rem] border border-[#313A48] shadow bg-[#313A48]  text-center font-extrabold px-4">
        <h3 className="text-center text-[#53FFAA] text-[0.8125rem] tracking-[0.25538rem]">
          {isLoading ? (
            <BeatLoader
              loading={isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#53FFAA"
            />
          ) : (
            ` ADVICE #${advice.id}`
          )}
        </h3>
        <blockquote className=" text-[1.75rem] h-[8.125rem] tracking-[-0.01875rem] mt-5 overflow-auto text-ellipsis ">
          {isLoading ? (
            <BeatLoader
              loading={isLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#53FFAA"
            />
          ) : (
            `"${advice.advice}"`
          )}
        </blockquote>
        <p className="flex justify-center items-center play mt-10">
          <Icon />
        </p>

        <button
          className="sticky mt-[3.125rem] left-0 right-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => getAdvice()}
        >
          {isHovered ? <DiceGlow /> : <Dice />}
        </button>
      </div>
    </section>
  );
};
// <--- export component
export default Advice;
