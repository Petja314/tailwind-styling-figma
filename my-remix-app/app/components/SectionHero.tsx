import React from "react";
import sally from "../assets/Saly-10.png";

interface Props {
  className?: string;
}

const SectionHero: React.FC<Props> = ({ className }) => {
  return (
    <section className={""}>
      <div
        className={
          "max-w-[1250px] mx-auto grid grid-cols-2 pt-32 lg:px-5 lg:pt-20 sm:grid-cols-1 sm:pt-16  sm:gap-5 pb-[120px] "
        }
      >
        <div>
          <h1
            className={
              "text-white font-bold text-[60px] leading-normal lg:text-5xl lg:leading-normal md:text-4xl md:leading-normal sm:text-3xl "
            }
          >
            Upgrade YOUR skills for better future
          </h1>
          <p
            className={
              "text-white mt-5 text-[22px] leading-normal lg:text-xl md:text-lg sm:text-base"
            }
          >
            Lorem ipsum dolor sit amet consectetur. Erat in commodo in a. Sit
            interdum mi felis laoreet sagittis.{" "}
          </p>

          <div
            className={
              "flex items-center gap-5 mt-6 sm:grid-cols-2 sm:mt-4 sm:grid xs:grid-cols-1 xs:gap-3"
            }
          >
            <button
              className={
                "sm:flex sm:justify-center sm:w-full  py-[10px] px-6 bg-[#FF00C7] rounded-xl text-white font-semibold  border border-[#FF00C7] hover:bg-white hover:text-black transition-colors"
              }
            >
              Check Courses
            </button>
            <button
              className={
                "sm:flex sm:justify-center sm:w-full py-[10px] px-6  rounded-xl text-white font-semibold border border-white hover:bg-white hover:text-black transition-colors"
              }
            >
              Learn more
            </button>
          </div>
        </div>
        <div className={""}>
          <img
            src={sally}
            alt="hero-img"
            className={"sm:max-w-full sm:w-full sm:h-auto"}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
