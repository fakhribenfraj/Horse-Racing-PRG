import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { IphoneContent } from "../iphonecomponents/IphoneContent.js";
import { useEffect, useState } from "react";
export const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" parallax__container">
      <div
        className="parallax__bg"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      ></div>
      <div className="LandingPage">
        <Header />
        <div className="BContent">
          <Content />
        </div>
        <div className="IContent">
          <IphoneContent />
        </div>
        <Footer />
      </div>
    </div>
  );
};
