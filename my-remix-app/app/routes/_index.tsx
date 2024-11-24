import React, { useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import SectionHero from "~/components/SectionHero";
import CompanyPartners from "~/components/CompanyPartners";
import Courses from "~/components/Courses";
import Service from "~/components/Service";
import PlatformInfo from "~/components/PlatformInfo";
import News from "~/components/News";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const menu = ["Courses", "Pricing", "About Us", "Contact Us"];
export default function Index() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div className="">
      <section className={"bg-heroGradient rounded-br-[200px] overflow-hidden"}>
        <Header />
        <SectionHero />
      </section>

      <CompanyPartners />
      <Courses />
      <Service />
      <PlatformInfo />
      <News />
      <Footer />
    </div>
  );
}
