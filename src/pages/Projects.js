import React from 'react';
import appp from '../images/reci.png';

const Projects = () => {
  return (
    <div className='flex flex-col md:flex-row px-4 md:px-16 items-center'>
      <div className='w-full md:w-1/2'>
        <img className="w-full md:w-[500px] h-[400px] block mx-auto md:mx-0 p-6" src={appp} alt="appp" />
      </div>
      <div className='w-full md:w-1/2 m-8'>
        <h1 className='font-bold text-2xl mb-4'>Cook Ease</h1>
        <p className='mb-4'>
          Welcome to Recipe Finder, your ultimate culinary companion! Whether you're a novice cook or a seasoned chef, our platform makes it easy to discover new recipes, plan your meals, and explore diverse cuisines. Simply enter the ingredients you have on hand or the dish you're craving, and browse through a wide array of recipes tailored to your preferences. With step-by-step instructions, nutritional information, and user reviews, Recipe Finder ensures you can create delicious meals with confidence and ease. Let Recipe Finder inspire your next culinary adventure!
        </p>
        <a className='border-2 text-xl font-bold bg-primary text-white py-2 px-4 inline-block'>View Website</a>
      </div>
    </div>
  );
};

export default Projects;
