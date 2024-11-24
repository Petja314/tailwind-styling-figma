import React from "react";
import serviceIcon from "../assets/service/Icon.svg";
import serviceIcon1 from "../assets/service/Icon (1).svg";
import serviceIcon2 from "../assets/service/Icon (2).svg";
import serviceIcon3 from "../assets/service/Icon (3).svg";
import serviceIcon4 from "../assets/service/Group.svg";

interface Props {
  className?: string;
}

const services = [
  {
    title: "Life Time Access",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    icon: serviceIcon,
  },
  {
    title: "Online Classes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    icon: serviceIcon1,
  },
  {
    title: "Get Certificate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    icon: serviceIcon2,
  },
  {
    title: "Expert Trainers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    icon: serviceIcon3,
  },
  {
    title: "Great Result",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    icon: serviceIcon4,
  },
  {
    title: "Best Price",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi, ",
    icon: serviceIcon,
  },
];
const Service: React.FC<Props> = ({ className }) => {
  return (
    <section className={"py-20 sm:py-10"}>
      <div className={"max-w-[1050px] mx-auto lg:mx-[15px]"}>
        <div className={"max-w-[630px] mx-auto"}>
          <h2 className={"section-title text-center"}>
            Our Features and Services
          </h2>
          <p className={"section-text text-center mt-[10px]"}>
            Our Features and Services Lorem ipsum dolor sit amet consectetur.
            Euismod diam phasellus quis aliquet purus sem ornare mollis
            vulputate. Sapien purus faucibus massa pharetra.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[15px] mt-[60px] md:mt-10 md:gap-[8px] md:grid-cols-2 xs:grid-cols-1 ">
          {services.map((item, i) => (
            <div className="p-[25px] md:p-5 xs:p-2 " key={i}>
              <div>
                <img src={item.icon} alt="" />
              </div>
              <p
                className={"text-xl leading-normal font-medium mt-2 mb-[15px]"}
              >
                {item.title}
              </p>
              <p className={"text-lightgray text-base "}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
