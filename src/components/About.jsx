import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    "I'm a full stack developer experienced in Express, Node.js,
                    React, Tailwind CSS, and Next.js. I specialize in creating
                    both the backend and frontend of websites. With Express and
                    Node.js, I build the core functions and APIs, while using
                    React and Next.js along with Tailwind CSS for crafting
                    user-friendly and responsive interfaces. My goal is to
                    create powerful, scalable, and efficient web applications by
                    combining these technologies across the entire development
                    process."
                </p>

                <br />

                <p className="text-xl">
                    I am familiar with tools like git and github and can work efficiently in a team. I have collaborated in various projects in both 
                    frontend and backend. 
                </p>
            </div>
        </div>
    );
};

export default About;
