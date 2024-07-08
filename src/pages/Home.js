import React from 'react';
import { MdWavingHand } from 'react-icons/md';
import image from '../images/ad.jpg';


const Home = () => {
  return (
    <div className="px-4 md:px-16 my-20 flex flex-col md:flex-row justify-center items-center md:gap-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="sm:text-xl md:text-2xl lg:text-3xl flex items-center gap-2 text-2xl">
          Hello, I'm Jessica <MdWavingHand className="text-orange-300" />
        </h1>
        <h2 className="font-extrabold text-6xl mt-4 md:mt-0">
          <span className="text-primary">Front</span>end
          <br />
          Developer
        </h2>
        <p className="text-xl my-8">
          I'm a front-end developer with a passion for creating beautiful websites your users will love
        </p>
      </div>
      <div className="md:w-1/2">
        <img className="w-full md:w-[350px] h-[350px] rounded-full block mx-auto md:mx-0 p-6 border-4" src={image} alt="image" />
      </div>
    </div>
  );
};

export default Home;
