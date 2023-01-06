import React from "react";

function About (){
return (
<section id="about">
<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
           
            Hi, I'm Chrisphine.
            <br className="hidden lg:inline-block" />
         I am a software Engineer and 
            I love to build amazing
          apps .

          </h1>
          <p className="mb-8 leading-relaxed">
          Hello! My name is Chrisphine and I love  creating things that Fascinate poeple when using the internet. 
          the love for  in web development started way  back in 2019  when I  was in campus ,i enjoyed seeing these cute users platforms and I
            decided that it was time to also be apart of this great works .
             .I dived into HTML & CSS and i really enjoyed the experience.

     Fascinated on how intricate programming can be I was quickly drawn to learn more. I joined Moringa School and learnt HTML, CSS and Javascript . 
     I also added knowledge on Javascript library - React , which is flexible and also has support from facebook.
        have  gained more backend knowledge too on Ruby and Ruby on Rails. 
 
                  Currently am focused on building fullstack applications.
 </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              join me in these wonderfull adventures of we programmings 
            </a>

            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>

</section>
);
}

export default About;