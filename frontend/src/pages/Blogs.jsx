import React, { useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import bgBlog from "./icons/blogbg.jpg";
import { Link, Outlet } from "react-router-dom";
import Yoga from "./icons/yoga.jpg"
import Meditation from "./icons/meditation.jpg"
import Exercise from "./icons/exercise.jpg";
import Conversation from "./icons/conversation.jpg"
function Blogs() {
    const [text, setText] = useState("");
    const message =
        "Reading blogs related to mental health can provide valuable insights and coping strategies, offering individuals a sense of validation and understanding, ultimately empowering them to navigate their own mental health journey more effectively. Additionally, blogs often share personal stories and experiences, fostering a sense of connection and reducing feelings of isolation, thus promoting overall well-being and resilience.";
    const typingSpeed = 3; // Faster typing speed

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
            <Bounce>
                <Fade>
                    <div
                        className="hero min-h-screen text-white"
                        style={{
                            backgroundImage: `url(${bgBlog})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="hero-content text-center flex flex-col pt-36">
                            <div className="max-w-3/4">
                                <div className=" flex flex-col items-center justify-center mt-12">
                                    <h1 className="text-5xl font-bold py-3 border-3 rounded w-24 flex flex-col items-center justify-center border-white hover:bg-black hover:text-white hover:scale-105 hover:my-18 hover:text-2xl">Hello there</h1>
                                </div>
                                <p className=" text-2xl my-12 border-4 border-white hover:bg-black hover:text-white hover:scale-105 hover:my-18 ">{text}</p>
                                
                            </div>
                            <div className="flex flex-row justify-center items-start gap-12  ">
                                <div className="card w-72 h-80 bg-base-100 shadow-xl flex flex-col items-center justify-center w-64"> {/* Reduced width and height by 20% */}
                                    <figure className="w-60 h-80 "><img src={Meditation} alt="Shoes" /></figure>
                                    <div className="card-body">

                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary flex flex-col items-center justify-center w-full">

                                                <Link to='/meditation'> View Detailed Blog</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-72 h-80 bg-base-100 shadow-xl flex flex-col items-center justify-center w-64"> {/* Reduced width and height by 20% */}
                                    <figure className="w-60 h-78 pt-12"><img src={Exercise} alt="Shoes" /></figure>
                                    <div className="card-body">

                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary flex flex-col items-center justify-center w-full">

                                                <Link to='/exercise'> View Detailed Blog</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-72 h-80 bg-base-100 shadow-xl flex flex-col items-center justify-center w-64"> {/* Reduced width and height by 20% */}
                                    <figure className="w-60 h-80 "><img src={Conversation} alt="Shoes" /></figure>
                                    <div className="card-body">

                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary flex flex-col items-center justify-center w-full">

                                                <Link to='/social'> View Detailed Blog</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-72 h-80 bg-base-100 shadow-xl flex flex-col items-center justify-center w-64"> {/* Reduced width and height by 20% */}
                                    <figure className="w-60 h-80 "><img src={Yoga} alt="Shoes" /></figure>
                                    <div className="card-body">

                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary flex flex-col items-center justify-center w-full">

                                                <Link to='/yoga'> View Detailed Blog</Link></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </Fade>
            </Bounce>
        </>
    );
}

export default Blogs;
