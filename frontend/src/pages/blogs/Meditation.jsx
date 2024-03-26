import React from "react";
import bgBlog from "../icons/blogbg.jpg";
import Zoom from "react-reveal/Zoom";
import Footer from "../Footer";

function Meditation() {
    return (
        <>
        <div className="container mx-auto mt-40 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgBlog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Zoom>
                <div className="max-w-4xl flex gap-12 border-4 mt-12 rounded border-purple-700 hover:scale-110">
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold">
                            Stress Reduction: Meditation is widely recognized for its ability to reduce stress and promote relaxation. By practicing meditation regularly, individuals can learn to calm their minds and bodies, which can help lower cortisol levels (the stress hormone) and alleviate symptoms of anxiety and tension. Research has shown that even short meditation sessions can have significant stress-reducing effects, making it an accessible and effective tool for managing daily stressors.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="https://thumbs.dreamstime.com/z/benefits-meditation-concept-vector-illustration-relaxation-body-mind-emotion-infographic-flat-design-201276005.jpg"
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
                            src="https://static1.bigstockphoto.com/6/7/1/large2/176016106.jpg"
                            alt="Large Image"
                            className="w-full h-auto bg-purple-500"
                        />
                    </div>
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold ">
                            Enhanced Focus and Concentration: Regular meditation practice has been shown to improve cognitive function, particularly attention and concentration. By training the mind to focus on the present moment, meditation helps cultivate sustained attention and mental clarity. This can be especially beneficial in today's fast-paced world, where distractions abound and multitasking is often the norm. Whether it's at work, in school, or during daily activities, individuals who meditate may find themselves better able to stay focused, productive, and engaged in the task at hand.
                        </p>
                    </div>
                </div>
            </Zoom>
        </div>
        <Footer/>
        </>
    );
}

export default Meditation;
