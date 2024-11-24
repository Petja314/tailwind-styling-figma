import React from "react";
import logoCompany from "../assets/company-logo/Company logo.svg";
import logoCompany1 from "../assets/company-logo/Company logo (1).svg";
import logoCompany2 from "../assets/company-logo/Company logo (2).svg";
import logoCompany3 from "../assets/company-logo/Company logo (3).svg";
import logoCompany4 from "../assets/company-logo/Company logo (4).svg";

interface Props {
  className?: string;
}

const logos = [
  logoCompany,
  logoCompany1,
  logoCompany2,
  logoCompany3,
  logoCompany4,
];

const CompanyPartners: React.FC<Props> = ({ className }) => {
  return (
    <section className={" pt-10 pb-20  lg:px-5 sm:pb-10 "}>
      <div className={"max-w-[1073px] mx-auto"}>
        <h2
          className={
            "font-bold text-[40px] leading-[60px] text-[#464747] text-center md:text-3xl sm:text-2xl "
          }
        >
          Our Company and Partners
        </h2>

        <div
          className={
            "grid grid-cols-5 gap-[100px] mt-10 lg:gap-10 md:grid-cols-2 xs:grid-cols-1 xs:gap-4"
          }
        >
          {logos.map((item, i) => (
            <div className={"text-center md:grid md:justify-center"}>
              <img src={item} key={i} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPartners;
