import React, { useContext } from "react";
import ProjectsCard from "../components/projects/ProjectsCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { NavbarColorContext } from "../context/NavContext";
import MontrealClock from "../components/MontrealTime";

const Projects = () => {



  const projectImg = [
    { image1: "public/project1.jpg", image2: "public/project2.jpg" },
    { image1: "public/project3.jpg", image2: "public/project4.jpg" },
    { image1: "public/project5.jpg", image2: "public/project6.jpg" },
    { image1: "public/project7.jpg", image2: "public/project8.jpg" },
    { image1: "public/project9.jpg", image2: "public/project10.jpg" },

    

    
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height:'120px',
      stagger:{
        amount:0.4

      },
      scrollTrigger:{
         trigger:".lol",
         start:"top 100%",
         end:"top -400%",
         scrub:true
      }
    });
  });

  return (
    <div className="">
      <div className="px-4 pt-[40vh]">
        <h2 className="font-[font2] lg:text-[11vw] text-[18vw] uppercase font-bold">
          Projets
        </h2>
      </div>
      <div className="lg:-mt-16 lol px-4 -mt-6">
        {projectImg.map((elem, index) => {
          return (
            <div key={index} className="hero w-full lg:h-[500px] h-[100px]  mb-3 gap-2  lg:gap-3 flex flex-col lg:flex-row ">
              <ProjectsCard
                image1={elem.image1}
                image2={elem.image2}           
              />
            </div>
          );
        })}
      </div>
      
        
         <div className=" bg-black h-[500px] flex flex-col justify-between w-full text-white p-5 ">
        <div className="flex items-center justify-between font-[font2]">
          <div className="flex lg:gap-1 gap-2  font-[font2]">
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-8 mr-1 text-[4rem] border-2 leading-[5rem] pt-2">FB</h1>
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-8 mr-1 text-[4rem] border-2 leading-[5rem] pt-2">IG</h1>
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-8 mr-1 text-[4rem] border-2 leading-[5rem] pt-2">IN</h1>
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-8 mr-1 text-[4rem] border-2 leading-[5rem] pt-2">BE</h1>
          </div>
          
            <h1 className="text-[4rem] hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer border-2 border-white rounded-[50px] px-8 leading-[5rem] pt-2">CONTACT ❤︎</h1>
          
        </div>
         
          <div className="flex flex-col  justify-evenly font-[font2] lg:flex-row lg:gap-5 lg:mt-0 -mt-10">
              <MontrealClock />
              <h2 className="uppercase cursor-pointer hover:text-[#D3FD50] text-[14px]">Politique de confidentialité</h2>
             <h2 className="uppercase cursor-pointer hover:text-[#D3FD50] text-[14px]">Avis de confidentialité</h2>
             <h2 className="uppercase cursor-pointer hover:text-[#D3FD50] text-[14px]">Rapport éthique</h2>
             <h2 className="uppercase cursor-pointer hover:text-[#D3FD50] text-[14px]">options de consentement</h2>
             <h2 className="uppercase cursor-pointer hover:text-[#D3FD50] text-[14px]">retour hout</h2>
          </div>
               
      </div>
      </div>
    
  );
};

export default Projects;
