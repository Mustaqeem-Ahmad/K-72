import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current,{
      opacity:0,
      delay:1.2,
      scale:1.2
    })
  }, [currentPath]);
  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full  fixed z-10 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} className="">{children}</div>
    </div>
  );
};

export default Stairs;


// app stair ka children hai page change karne me effect k pehle page change horaha tha isliye banaye usey children and pageRef bhi
