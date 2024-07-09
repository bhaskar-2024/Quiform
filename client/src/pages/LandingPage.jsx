import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-500 flex flex-col justify-center items-center">
            {/* header section */}
            <div className="text-center text-white p-4">
                <h1 className="text-5xl font-bold font-mono drop-shadow-lg bg-gray-300 bg-opacity-20 p-2">
                    <div className='text-teal-950 typewriter overflow-hidden border-r-4 border-orange-500 whitespace-nowrap mx-auto animate-typing font-mono'>Quiform:</div> Revolutionize Your Data Collection
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                {/* image section */}
                <div className="w-full md:w-1/2 flex justify-center items-center  md:mb-0 p-24 h-auto">
                    <img
                        src="https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?t=st=1720208434~exp=1720212034~hmac=ea650f8ab4c9debb68d65039aca2a12f3e39a256aa33ebd9b90ad02728a9354f&w=740"
                        alt="Quiform"
                        className="rounded-lg shadow-lg w-3/4 md:w-full max-w-full max-h-full"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left text-white max-w-3xl p-4 flex flex-col justify-center">
                    {/* content section */}
                    <div className="space-y-4 text-2xl font-mono drop-shadow-md bg-gray-300 bg-opacity-20 p-4">
                        <p>
                            Create <span className='text-teal-950'>stunning surveys</span> and <span className='text-teal-950'>engaging quizzes</span> with ease. Unleash the power of seamless form building today. Whether you're gathering insights or educating your audience, Quiform provides the tools you need to succeed.
                        </p>
                        <p>
                            From data surveys to interactive quizzes, Quiform provides the tools you need to create, manage, and analyze all in one place. Enjoy a streamlined process with our user-friendly interface and robust analytics.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-center space-x-4 mt-8 bg-gray-300 bg-opacity-20 py-4">
                        <button
                            onClick={() => navigate('/user/login/home')}
                            className="bg-white text-teal-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-teal-800 hover:text-white transition duration-300">
                            Log In
                        </button>
                        <button
                            onClick={() => navigate('/user/signup/home')}
                            className="bg-white text-teal-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-teal-800 hover:text-white transition duration-300">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
