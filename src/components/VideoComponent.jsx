import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const VideoComponent = () => {
  const navi = useNavigate()
  const videoref = useRef()
  const [video, setvideo] = useState(false)

  const handlePlay = () => {
    if (videoref.current.paused) {
      videoref.current.play()
    } else {
      videoref.current.pause()
    }
  }

  return (
    <div className="lg:w-screen overflow-hidden h-screen fixed flex justify-center items-center z-[1000] top-0 left-0 bg-black bg-opacity-50">
      <video
        src="https://sandbox.elemisthemes.com/assets/media/movie.mp4"
        ref={videoref}
        controls
        autoPlay
        className="w-4/5 h-4/5 rounded-2xl shadow-lg shadow-black"
        onPlay={() => setvideo(true)}
        onPause={() => setvideo(false)}
      />
      <FontAwesomeIcon
        icon={faCirclePlay}
        aria-label="Play video"
        className={`${!video ? 'visible' : 'invisible'} text-white absolute translate-x-1 translate-y-1/3 -translate-[50%] cursor-pointer`}
        size="3x"
        onClick={handlePlay}
      />
      <FontAwesomeIcon
        icon={faCircleXmark}
        aria-label="Close video"
        className="text-white absolute top-10 right-5 text-5xl opacity-90 hover:opacity-100 cursor-pointer"
        onClick={() => navi('/')}
      />
    </div>
  )
}

export default VideoComponent
