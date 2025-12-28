import React from 'react'

const ProjectsCard = ({image1, image2}) => {
  return (
    <>
          <div className=" lg:w-1/2 group relative transition-all hover:rounded-[50px] overflow-hidden h-full ">
            <img className="h-full w-full " src={image1} alt="" />
            <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center h-full w-full top-0 left-0 bg-black/10 ">
              <h2 className="uppercase font-[font1] text-white text-center pt-2 text-[3.5vw] border-3 border-white rounded-full px-7 leading-[3vw] ">voir le projets</h2>
            </div>
          </div>
          <div className=" lg:w-1/2 group relative transition-all hover:rounded-[50px] overflow-hidden h-full ">
            <img className="h-full w-full " src={image2} alt="" />
            <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center h-full w-full top-0 left-0 bg-black/10 ">
              <h2 className="uppercase font-[font1] text-white text-center pt-2 text-[3.5vw] border-3 border-white rounded-full px-7 leading-[3vw] ">voir le projets</h2>
            </div>
          </div>
          </>
        
  )
}

export default ProjectsCard