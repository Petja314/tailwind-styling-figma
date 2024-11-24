import React from "react";
import coursePreviewImage from "../assets/courses/Rectangle 1085.png";
import coursePreviewImage1 from "../assets/courses/Rectangle 1086.png";
import coursePreviewImage2 from "../assets/courses/Rectangle 1087.png";
import coursePreviewImage3 from "../assets/courses/Rectangle 1088.png";
import coursePreviewImage4 from "../assets/courses/Rectangle 1089.png";
import coursePreviewImage5 from "../assets/courses/Rectangle 1090.png";
import coursePreviewImage6 from "../assets/courses/Rectangle 1091.png";
import coursePreviewImage7 from "../assets/courses/Rectangle 1092.png";
import rating from "../assets/courses/rating.png";
interface Props {
  className?: string;
}

const courseTitle = [
  "Top Rated",
  "Development",
  "Desgin",
  "Music",
  "Marketing",
  "Business",
  "Photography",
];

const courseCard = [
  {
    topic: "Artificial Intelligence ",
    title: "Modern Artificial Intelligence with zero coding",
    author: "Jhon David",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage,
  },
  {
    topic: "UX/UI Designing",
    title: "Figma UX/UI Design essentials",
    author: "Daniel Walter Scott",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage1,
  },
  {
    topic: "UX/UI Designing",
    title: "Complete figma mega course: UX/UI Design Beginner to Expert  ",
    author: "Kaleb Kingston",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage2,
  },
  {
    topic: "Web Development",
    title: "The Complete 2022 Fullstack Web Developer course",
    author: "Mark Lassoff",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage3,
  },
  {
    topic: "Web Development",
    title: "Javascript for beginners",
    author: "Jhon David",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage4,
  },
  {
    topic: "Digital Marketing",
    title: "Digital Advertising and Marketing 101: The Complete...",
    author: "Ben Silverstain",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage5,
  },
  {
    topic: "Digital Marketing",
    title: "Mega Digital Marketing course: 12 Courses in 1",
    author: "Phil Ebiner",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage6,
  },
  {
    topic: "UX/UI Designing",
    title: "User Experience Design Essentials",
    author: "Jacob Murphy",
    rating: "4.9",
    price: "49.99",
    img: coursePreviewImage7,
  },
];

const Courses: React.FC<Props> = ({ className }) => {
  return (
    <section className={"py-20"}>
      <div className={"max-w-[1168px] mx-auto lg:px-10 sm:py-10 "}>
        <h2 className={"section-title"}>Our Courses</h2>

        {/*tabs header*/}
        <div
          className={
            "flex gap-10 text-lg text-[#787878] mt-[30px] md:flex-wrap md:gap-5 sm:justify-center"
          }
        >
          {courseTitle.map((item, i) => (
            <button className={`tab-trigger flex ${i === 0 ? "active" : ""} `}>
              {item}
            </button>
          ))}
        </div>
        {/*tabs content*/}

        <div className="grid grid-cols-4 mt-10 gap-5 lg:grid-cols-2 sm:grid-cols-1 ">
          {courseCard.map((card, i) => (
            <div
              className="tab-content shadow-[0px_0px_9px_0px_#99999740] rounded-xl flex flex-col "
              key={i}
            >
              <div className={"rounded-xl overflow-hidden"}>
                <img
                  src={card.img}
                  alt="img"
                  className={"max-w-full w-full h-auto"}
                />
              </div>
              <div className={"p-4 flex flex-col flex-1"}>
                <span
                  className={
                    "text-lightgray py-2 px-4 bg-[#EAEAEA] rounded-md "
                  }
                >
                  {card.topic}
                </span>
                <h3
                  className={
                    "mt-4 font-semibold text-[15px] leading-[22px] tracking-[-0.0024em]"
                  }
                >
                  {card.title}
                </h3>
                <p className={"mt-1 text-base"}>{card.author}</p>
                <span className={"my-2 block "}>
                  <img src={rating} alt="rating" />
                </span>

                <div className="flex justify-between mt-auto">
                  <span
                    className={
                      "text-blueviolet uppercase font-bold tracking-[-0.0024em]"
                    }
                  >
                    {card.price} $
                  </span>
                  <button
                    className={
                      "text-blueviolet py-[6px] px-[18px] rounded-md text-xs font-bold border-2 border-blueviolet "
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
