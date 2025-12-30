import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import MontrealClock from "../MontrealTime";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);

  const fullScreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  

  function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })

       tl.to(".botpart", { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
        tl.from('.botpart',{
          opacity:0
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

  return (
    <div ref={fullScreenRef}
      id="fullscreennav"
      className=" hidden fullscreennav h-screen text-white overflow-hidden z-50 w-full absolute "
    >
      <div className="h-screen  w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navlink flex w-full p-3 items-start justify-between">
          <div className="">
            <div className="w-28 ">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div onClick={()=>{setNavOpen(false)}} className="h-20 w-20 relative cursor-pointer">
            <div className="h-28 absolute -rotate-45 origin-top w-1 bg-[#D3FD50]"></div>
            <div className="h-28 absolute right-0 rotate-45 origin-top w-1 bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="all-links lg:py-10 py-60 ">
          <div className="link origin-top relative  border-t-1 border-white">
            <h1 className="font-[font2] leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
              Projects
            </h1>
            <div className="movelink absolute text-black  bg-[#D3FD50] flex top-0">
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16  shrink-0 rounded-full w-36 lg:w-64"
                  src="/navimg1.jpg"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:h-20 h-16 shrink-0 object-cover rounded-full w-36 lg:w-64"
                  src="/navimg2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full w-36 lg:w-64"
                  src="/navimg1.jpg"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="lg:h-20 h-16 shrink-0 object-cover rounded-full w-36 lg:w-64"
                  src="/navimg2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative  border-t-1 border-white">
            <h1 className="font-[font2] leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
              Agence
            </h1>
            <div className="movelink absolute text-black  bg-[#D3FD50] flex top-0">
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg3.jpg"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full object-cover w-40 lg:w-64"
                  src="/navimg4.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="  lg:h-20 h-16 shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg3.jpg"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 object-cover shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative  border-t-1 border-white">
            <h1 className="font-[font2] leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
              contact
            </h1>
            <div className="movelink absolute text-black  bg-[#D3FD50] flex top-0">
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg1.jpg"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 object-cover rounded-full w-40 lg:w-64"
                  src="/navimg2.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg1.jpg"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 object-cover rounded-full w-40 lg:w-64"
                  src="/navimg2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative  border-y-1 border-white">
            <h1 className="font-[font2] leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
              blogue
            </h1>
            <div className="movelink absolute text-black  bg-[#D3FD50] flex top-0">
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg5.png"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 object-cover rounded-full w-40 lg:w-64"
                  src="/navimg6.gif"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center  ">
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 rounded-full w-40 lg:w-64"
                  src="/navimg5.png"
                  alt=""
                />
                <h2 className="font-[font2] whitespace-nowrap leading-[0.8] pt-4 tracking-tight text-center font-bold text-[14vw] lg:text-[8vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-20 h-16 shrink-0 object-cover rounded-full w-40 lg:w-64"
                  src="/navimg6.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="botpart opacity-0 text-white flex lg:flex-row flex-col gap-3 font-[font1] lg:mt-10 items-center justify-between px-3 ">
          <div className="lg:block hidden">
            <MontrealClock/>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-5  lg:mt-0 -mt-10">
              <h2 className="uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer text-xs">Politique de confidentialité</h2>
             <h2 className="uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer text-xs">Avis de confidentialité</h2>
             <h2 className="uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer text-xs">Rapport éthique</h2>
             <h2 className="uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer text-xs">options de consentement</h2>
          </div>
          <div className="flex lg:gap-1 gap-2 font-[font2]">
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-2 mr-1 text-2xl border-2">FB</h1>
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-2 mr-1 text-2xl border-2">IG</h1>
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-2 mr-1 text-2xl border-2">IN</h1>
            <h1 className="border-white hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer rounded-[50px] px-2 mr-1 text-2xl border-2">BE</h1>
          </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default FullScreenNav;
