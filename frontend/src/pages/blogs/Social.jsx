import React from "react";
import bgBlog from "../icons/blogbg.jpg";
import Zoom from "react-reveal/Zoom";
import Footer from "../Footer";

function Social() {
    return (
        <>
        <div className="container mx-auto mt-40 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgBlog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Zoom>
                <div className="max-w-4xl flex gap-12 border-4 mt-12 rounded border-purple-700 hover:scale-110">
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold">
                        Social events play a crucial role in fostering connections and strengthening communities. Whether it's a neighborhood block party, a company retreat, or a cultural festival, these gatherings provide valuable opportunities for people to come together, interact, and form meaningful relationships. In an increasingly digital world where face-to-face interactions are becoming less common, social events offer a welcome respite from isolation and a chance to build a sense of belonging. 
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://www.shutterstock.com/image-vector/vector-illustration-hr-employee-orientation-260nw-2057618450.jpg"
                            alt="Large Image"
                            className="w-full h-auto bg-purple-500"
                        />
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="max-w-4xl flex gap-12 mt-12 border-4 rounded border-purple-700 hover:scale-110">

                    <div className="w-1/2">
                        <img
                            src="https://www.shutterstock.com/image-vector/three-business-woman-sitting-desk-260nw-1054868930.jpg"
                            alt="Large Image"
                            className="w-full h-auto bg-purple-500"
                        />
                    </div>
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold ">
                        Beyond the social aspect, participating in social events offers a myriad of benefits for personal and professional development. Networking opportunities abound at social gatherings, allowing individuals to meet new people, exchange ideas, and expand their social and professional circles. These interactions can lead to valuable connections, mentorship opportunities, and even career advancements. </p>
                    </div>
                </div>
            </Zoom>
        </div>
        <Footer/>
        </>
    );
}

export default Social;
