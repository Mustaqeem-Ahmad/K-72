import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video src="public/herovideo.mp4" autoPlay loop muted className='h-full w-full object-cover'></video>
    </div>
  )
}

export default Video