import React from "react";
import bgBlog from "../icons/blogbg.jpg";
import Zoom from "react-reveal/Zoom";
import Footer from "../Footer";

function Yoga() {
    return (
        <>
        <div className="container mx-auto mt-40 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgBlog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Zoom>
                <div className="max-w-4xl flex gap-12 border-4 mt-12 rounded border-purple-700 hover:scale-110">
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold">
                        Yoga offers a multitude of physical and mental health benefits that contribute to overall well-being. Through a combination of controlled breathing, meditation, and physical postures, yoga helps improve flexibility, strength, and balance. Regular practice of yoga can alleviate chronic pain, such as lower back pain and arthritis, by promoting proper alignment and relieving tension in the muscles. Moreover, yoga has been shown to reduce stress and anxiety levels, enhance mood, and improve sleep quality, leading to a greater sense of calmness and inner peace.                        </p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center w-full bg-purple-600">
                        <img
                            src="https://shwetyoga.in/wp-content/uploads/2020/10/Yoga-classes-in-thane-west-3.png"
                            alt="Large Image"
                            className="w-96 h-auto bg-purple-500 "
                        />
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="max-w-4xl flex gap-12 mt-12 border-4 rounded border-purple-700 hover:scale-110">

                    <div className="w-1/2">
                        <img
                            src="https://static1.bigstockphoto.com/6/7/1/large2/176016106.jpg"
                            alt="Large Image"
                            className="w-full h-auto bg-purple-500"
                        />
                    </div>
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold ">
                        In addition to its physical and mental health benefits, yoga also fosters a deeper connection between mind, body, and spirit. By cultivating mindfulness and self-awareness, yoga encourages individuals to become more present in the moment and to listen to their bodies' needs. This increased awareness extends beyond the yoga mat, empowering practitioners to make healthier lifestyle choices and to approach challenges with greater resilience and clarity. Whether practiced individually or in a group setting, yoga offers a holistic approach to wellness that nourishes the body, mind, and soul.                        </p>
                    </div>
                </div>
            </Zoom>
        </div>
        <Footer/>
        </>
    );
}

export default Yoga;
