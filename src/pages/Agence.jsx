import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Team from "../components/Team";
import TeamBottom from "../components/TeamBottom";





const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/1.jpg.jpg",
    "/2.jpg.jpg",
    "/3.jpg.jpg",
    "/4.jpg.jpg",
    "/5.jpg.jpg",
    "/6.jpg.jpg",
    "/7.jpg.jpg",
    "/8.jpg.jpg",
    "/9.jpg.jpg",
    "/10.jpg.jpg",
    "/11.jpg.jpg",
    "/12.jpg.jpg",
    "/13.jpg.jpg",
    "/14.jpg.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top -90%",
        end: "top -240%",
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        pinReparent: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: true,
        
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1  py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-28 w-[85px] lg:h-[305px] lg:w-[230px] top-[16vh] lg:top-[23vh] left-[30vw] rounded-2xl lg:rounded-3xl"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full "
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[55vh] mt-[25vh]">
            <h1 className="txt lg:text-[20vw] text-[17vw] uppercase leading-[17vw] lg:leading-[18vw] text-center">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="lg:pl-[41%]">
            <p className="lg:text-[3.5vw] mt-[9vh] px-2 lg:px-0 lg:mt-0 text-[5vw] leading-[2vh] lg:leading-[7vh] tracking-wide ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen mt-20 font-[font2] w-[70%] m-auto">
        <div className="mn flex flex-col">
          <div className="grid grid-cols-3 text-lg">
            <div>Expertise</div>
            <div>
              <h2>Stratégie</h2>
              <h2>Publicité</h2>
              <h2>Branding</h2>
              <h2>Design </h2>
              <h2>Contenu</h2>
            </div>
            <div>&nbsp;</div>
            
          </div>
          <div className="grid grid-cols-3 mt-40">
            <p className="w-80 text-lg">Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
            <p className="w-80 text-lg">Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
            <p className="w-80 text-lg">Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers. </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto mt-[-30vh]">
        <Team/>
      </div>

      <div>
        <TeamBottom/>
      </div>

      </div>

      

)
}

export default Agence
