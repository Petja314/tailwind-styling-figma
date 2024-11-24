import React from "react";
import logo from "../assets/footer/Outschool svg.png";

interface Props {
  className?: string;
}

const general = ["About Us", "Pricing", "Contact Us", "Courses"];
const policies = [
  "Security safeguards",
  "Terms of service",
  "Privacy",
  "Accessibility",
];

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={"bg-[#1B1B1B] text-white pt-[65px] pb-[50px]"}>
      <section className={"max-w-[1160px] mx-auto lg:mx-[15px] "}>
        <div className="flex justify-between md:flex-wrap md:gap-10">
          <div className={"max-w-[232px]"}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className={"text-xs mt-[16px]"}>
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
              vulputate eu vitae tristique.
            </p>
          </div>

          <div className="grid grid-cols-3 max-w-[600px] md:max-w-full sm:grid-cols-2 sm:gap-5">
            <div>
              <p className={"font-medium text-xl mb-[15px]"}>General</p>
              {general.map((item, i) => (
                <ul key={i}>
                  <li>
                    <a
                      href=""
                      className={
                        "text-sm hover:text-blueviolet transition-colors"
                      }
                    >
                      {item}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <p className={"font-medium text-xl mb-[15px]"}>Policies</p>
              {policies.map((item, i) => (
                <ul key={i}>
                  <li>
                    <a
                      href=""
                      className={
                        "text-sm hover:text-blueviolet transition-colors"
                      }
                    >
                      {item}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <p className={"font-medium text-xl mb-[15px]"}>Get in touch</p>
              <p>
                Get in touch Follow us on social media and stay updated with the
                latest information about our services
              </p>
            </div>
          </div>
        </div>
        <p className={"text-center text-[#BDB9B9] mt-[75px]"}>
          2022 - @OUTSCHOOL all right deserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
