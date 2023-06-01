import { PlayData } from '../../type/Card.types'
import './VideoPlay.css'


interface IVideoPlay {
  videoData: PlayData
}

export const VideoPlay = ({videoData} : IVideoPlay) => {
  const {name, link} = videoData

  return (
    <div className="video">
      <div>
        <video controls width='1000'>
          <source src='https://04ff-5-165-233-226.ngrok-free.app/video/японец.mp4'></source>
          {link}
        </video>
      </div>
        <p className='nameVideo'>{name}</p>
    </div>
      )
}