import React, { useEffect, useState } from "react";
import logo from "~/assets/logo.svg";
import account from "~/assets/account.svg";
import cart from "~/assets/cart.svg";
import { set } from "valibot";

interface Props {
  className?: string;
}

const menu = ["Courses", "Pricing", "About Us", "Contact Us"];

const Header: React.FC<Props> = ({ className }) => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.99) {
        setBurgerMenu(false); // Закрываем меню на большом экране
        document.body.style.overflow = ""; // Сбрасываем overflow для body
      }
    };

    window.addEventListener("resize", handleResize);

    // Чистим обработчик при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Управляем overflow в зависимости от состояния меню
    if (burgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Сброс overflow
    }
  }, [burgerMenu]);

  const toggleMenu = () => {
    setBurgerMenu((prevState) => !prevState);
  };
  return (
    <header
      className={
        "max-w-[1336px] mx-auto flex justify-between pt-[35px] lg:px-5 "
      }
    >
      {/*logo*/}
      <img src={logo} alt="" className={"z-[1]"} />
      {/*menu desktop*/}
      <nav className={"sm:hidden"}>
        <ul className={"flex items-center gap-[30px] "}>
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href=""
                className={
                  "relative font-medium text-[15px] leading-[22px] text-white after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-white after:scale-0" +
                  " hover:after:scale-100 after:transition-transform"
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/*actions*/}
      <div className={"flex items-center gap-[30px] md:hidden"}>
        <span
          className={
            "flex items-center gap-1 text-[15px] font-medium leading-[22px] text-white"
          }
        >
          <img src={account} alt="" />
          Account
        </span>
        <span
          className={
            "flex items-center gap-1 text-[15px] font-medium leading-[22px] text-white"
          }
        >
          <img src={cart} alt="" />
          Cart
        </span>
      </div>

      {/*mobile menu*/}
      <nav
        className={` fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center  bg-heroGradient  animate-fadeIn ${
          burgerMenu ? "block overflow-hidden" : "hidden"
        } `}
      >
        <ul className={"flex flex-col items-center gap-10  "}>
          {menu.map((item, i) => (
            <li key={i}>
              <a href="" className={"text-xl text-white font-bold"}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/*burger menu*/}
      <button
        onClick={toggleMenu}
        className={`hidden sm:block group  relative h-5 w-[30px] ${
          burgerMenu ? "active overflow-hidden" : ""
        }`}
      >
        <span
          className={
            "absolute bg-white h-[1px] left-0 w-full top-0   transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45 "
          }
        ></span>
        <span
          className={
            "absolute bg-white h-[1px] left-0 w-full top-1/2 transition-opacity group-[.active]:opacity-0 "
          }
        ></span>
        <span
          className={
            "absolute bg-white h-[1px] left-0 w-full bottom-0 group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45"
          }
        ></span>
      </button>
    </header>
  );
};

export default Header;
