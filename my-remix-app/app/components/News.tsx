import React from "react";
import imageArticle from "../assets/news-article/Rectangle 1073.png";
import imageArticle1 from "../assets/news-article/Rectangle 1075.png";
import imageArticle2 from "../assets/news-article/Rectangle 1074.png";
import iconArticle from "../assets/news-article/Icon.png";
import iconDate from "../assets/news-article/IconDate.png";
import backgroundArticle from "../assets/news-article/background.png";
import btnIconArrow from "../assets/news-article/btnIcon.png";

interface Props {
  className?: string;
}

const article = [
  {
    title: "Web Development",
    desc:
      "Web Development\n" +
      "Lorem ipsum dolor sit amet consectetur. sit amet \n" +
      "20-12-2022\n" +
      "Read more",
    date: "20-12-2022",
    btnText: "Read more",
    img: imageArticle,
    icon: iconArticle,
  },
  {
    title: "Business",
    desc:
      "Web Development\n" +
      "Lorem ipsum dolor sit amet consectetur. sit amet \n" +
      "20-12-2022\n" +
      "Read more",
    date: "20-12-2022",
    btnText: "Read more",
    img: imageArticle1,
    icon: iconArticle,
  },
  {
    title: "Technology",
    desc:
      "Web Development\n" +
      "Lorem ipsum dolor sit amet consectetur. sit amet \n" +
      "20-12-2022\n" +
      "Read more",
    date: "20-12-2022",
    btnText: "Read more",
    img: imageArticle2,
    icon: iconArticle,
  },
];
const News: React.FC<Props> = ({ className }) => {
  return (
    <div className={""}>
      <section
        className={
          "pt-[30px] pb-[235px] bg-[url('app/assets/news-article/background.png')] bg-cover bg-no-repeat"
        }
      >
        <h3 className="section-title text-center max-w-[365px] mx-auto ">
          Our Latest news & Article
        </h3>
      </section>

      {/*article*/}
      <section className={"pb-20  lg:mx-[15px]"}>
        <div className="grid grid-cols-3 max-w-[989px] mx-auto gap-6 mt-[-195px] md:grid-cols-2 md:px-5 md:items-center sm:grid-cols-1">
          {article.map((item, i) => (
            <div
              key={i}
              className={
                "rounded-xl shadow-[0px_0px_11px_0px_rgba(153,153,153,0.3)] bg-white "
              }
            >
              <div className={"rounded-xl overflow-hidden "}>
                <img
                  src={item.img}
                  alt=""
                  className={"w-full max-w-full h-auto"}
                />
              </div>

              <div className={"py-4 px-5"}>
                <div className={"flex items-center gap-1"}>
                  <img src={item.icon} alt="" />
                  <span className={"text-[#787878] font-medium text-sm"}>
                    {item.title}
                  </span>
                </div>

                <h4
                  className={
                    "font-montserrat tracking-[-0.002em] font-semibold mt-4"
                  }
                >
                  {item.desc}
                </h4>
                <div className="flex justify-between items-center mt-6">
                  <div className={"flex items-center gap-1"}>
                    <img className={""} src={iconDate} alt="date-icon" />
                    <span
                      className={
                        "font-montserrat text-lightgray font-medium tracking-[-0.002em] text-[14px] leading-[16px]"
                      }
                    >
                      {item.date}
                    </span>
                  </div>
                  <a href="" className={"group flex items-center gap-1"}>
                    <span
                      className={
                        "font-montserrat text-blueviolet font-medium tracking-[-0.002em] text-[14px] leading-[16px]"
                      }
                    >
                      {item.btnText}
                    </span>
                    <img
                      src={btnIconArrow}
                      alt="arrow-icon"
                      className={
                        "group-hover:translate-x-2 transition-transform"
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
