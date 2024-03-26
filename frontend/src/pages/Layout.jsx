import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./icons/bgNode.svg";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom";
const Layout = () => {
  const [text, setText] = useState("");
  const message = "Providing you with the First Aid Mental Health Care Service";
  const typingSpeed = 13; // Faster typing speed

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === message.length) {
        clearInterval(interval);
      } else {
        setText((prevText) => prevText + message[currentIndex]);
        currentIndex++;
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-gray-700 text-white mt-36">
        <div className="hero-content flex-col lg:flex-row">
          <Bounce>
          <img src={Background} className="max-w-sm rounded-lg shadow-2xl bg-slate-300 border-8 border-black" /></Bounce>
          <div>
            <Bounce>
            <Fade>
            <h1 className="text-5xl font-bold">Mental Health ChatBot</h1>
            </Fade></Bounce>
            <p className="py-6">{text}</p>
            <button className="btn btn-primary">
            <Link to="/chat">Hello World</Link>         
                 </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
