import React from "react";
import icon from "../assets/platform-info/Group 14593.png";
import icon2 from "../assets/platform-info/Group 14614.png";

interface Props {
  className?: string;
}

const PlatformInfo: React.FC<Props> = ({ className }) => {
  return (
    <section className={"py-20 sm:py-10"}>
      <div className={"max-w-[1144px] mx-auto lg:mx-[15px]"}>
        {/*section 1*/}

        <div className="grid grid-cols-2 gap-[100px] lg:gap-10 sm:grid-cols-1 items-center">
          <div className={"sm:order-2"}>
            <img
              src={icon}
              alt="icon"
              className={"lg:h-auto lg:w-full lg:max-w-full"}
            />
          </div>
          <div>
            <h3 className="section-title">Best Platform to grow</h3>
            <p className="section-text my-5 ">
              Best Platform to grow Lorem ipsum dolor sit amet consectetur.
              Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet.
              Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae.
              Justo adipiscing integer dictum tortor viverra vel . Learn more
            </p>
            <button
              className={
                "sm:flex sm:justify-center sm:w-full  py-[10px] px-[39px] bg-[#5228B6] rounded-xl text-white font-semibold  hover:bg-[#AC85FF]  transition-colors "
              }
            >
              Learn more
            </button>
          </div>
        </div>

        {/*section 2*/}

        <div className="grid grid-cols-2 gap-[100px] lg:gap-10 sm:grid-cols-1  items-center mt-[60px]">
          <div>
            <h3 className="section-title">24/7 Students Support</h3>
            <p className="section-text my-5 ">
              Best Platform to grow Lorem ipsum dolor sit amet consectetur.
              Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet.
              Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae.
              Justo adipiscing integer dictum tortor viverra vel . Learn more
            </p>
            <button
              className={
                "sm:flex sm:justify-center sm:w-full  py-[10px] px-[39px] bg-[#5228B6] rounded-xl text-white font-semibold  hover:bg-[#AC85FF]  transition-colors "
              }
            >
              Learn more
            </button>
          </div>
          <div className={"sm:order-1"}>
            <img
              src={icon2}
              alt="icon"
              className={"lg:h-auto lg:w-full lg:max-w-full"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformInfo;
