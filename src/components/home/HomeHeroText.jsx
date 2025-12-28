import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-96 lg:mt-0 text-center pt-3">
      <div className="lg:text-[9vw] text-[11vw] uppercase lg:leading-[8.2vw] leading-[11vw] tracking-wide flex items-center justify-center">
        L'étincelle
      </div>
      <div className="lg:text-[9vw] text-[11vw] uppercase lg:leading-[8.2vw] leading-[11vw] tracking-wide flex items-center justify-center">
        qui <div className="h-[7vw] w-[15vw] overflow-hidden rounded-full -mt-4"> <Video /> </div> génère
      </div>
      <div className="lg:text-[9vw] text-[11vw] uppercase lg:leading-[8.2vw] leading-[11vw] tracking-wide flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
