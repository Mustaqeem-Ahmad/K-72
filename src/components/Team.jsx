import React from "react";
import gsap, { Power4 } from "gsap";

const TeamMember = ({ id, name, role, img }) => {
  const pictureRef = React.useRef(null);
  const blueLayerRef = React.useRef(null);

  const handleMouseMove = (e) => {
    gsap.to(pictureRef.current, {
      opacity: 1,
      x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
      duration: 0.5,
      ease: Power4.out,
    });

    gsap.to(blueLayerRef.current, {
      opacity: 1,
      duration: 1,
      ease: Power4.out,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pictureRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: Power4.out,
    });

    gsap.to(blueLayerRef.current, {
      opacity: 0,
      duration: 1,
      ease: Power4.out,
    });
  };

  return (
    <div
      className="listelem w-full relative py-12 ml-15  border-b-1 border-zinc-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-[3] flex items-center justify-between">
        <div className="listlft flex items-center gap-5 px-2 ">
          <h3 className="text-5xl text-zinc-200">{id}</h3>
          <h1 className="text-5xl ">{name}</h1>
        </div>
        <h3 className="px-5 text-2xl">{role}</h3>
      </div>

      {/* Hidden image */}
      <div
        ref={pictureRef}
        className="picture opacity-0 h-64 w-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full absolute overflow-hidden z-[4]"
      >
        <img className="h-full w-full object-cover" src={img} alt={name} />
      </div>

      {/* Blue overlay */}
      <div
        ref={blueLayerRef}
        className="bluelayer z-[2] bg-[#D3FD50]   h-full opacity-0 w-full absolute bottom-0 left-0"
      ></div>
    </div>
  );
};

const Team = () => {
  const members = [
    { id: "01", name: "CARL GOUDBOT", role: "Conseillere", img: "/1.jpg.jpg" },
    { id: "02", name: "CHRIS MEUNER", role: "COO", img: "/2.jpg.jpg" },
    { id: "03", name: "CARLINE NIETO", role: "Chief Product Officer", img: "/3.jpg.jpg" },
    { id: "04", name: "VICTOR ALBERTOS", role: "CTO", img: "/4.jpg.jpg" },
    { id: "05", name: "ADRIAN RUNIO", role: "CTO", img: "/5.jpg.jpg" },
    { id: "06", name: "OLIVER MACKARTY", role: "Chief Executive Officer", img: "/6.jpg.jpg" },
    { id: "07", name: "LAWRENS KOHA", role: "COO", img: "/7.jpg.jpg" },
    { id: "08", name: "SOPHIE AUGER", role: "Chief Product Officer", img: "/8.jpg.jpg" },
    { id: "09", name: "MICHELE RIENDEAU", role: "CTO", img: "/9.jpg.jpg" },
    { id: "10", name: "MEL RUBIO", role: "CTO", img: "/10.jpg.jpg" },
    { id: "11", name: "CHANTEL GOBEL", role: "Chief Executive Officer", img: "/11.jpg.jpg" },
    { id: "12", name: "MAXIME KOHA", role: "COO", img: "/12.jpg.jpg" },
    { id: "13", name: "MAGGIE LAVOIE", role: "Chief Product Officer", img: "/13.jpg.jpg" },
    { id: "14", name: "JOEL ALBERTOS", role: "CTO", img: "/14.jpg.jpg" },
    

  ];

  return (
    <div className="team secton py-20 font-[font1]  font-light">
      <h1 className="text-center font-light text-5xl">OUR TEAM</h1>
      <div className="list w-[90%] px-10 mt-20 ">
        {members.map((m, i) => (
          <TeamMember key={i} {...m} />
        ))}

        {/* Footer Button */}
        <div className="flex items-center justify-center ml-25 mb-10 mt-20">
          <div className="marsker border-[1px] flex items-center bg-[#D3FD50] hover:bg-black hover:text-[#D3FD50] justify-center border-[--darkcyan] w-fit px-10 py-4">
            <span className="inline-block">MEET THE ENTIRE TEAM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
