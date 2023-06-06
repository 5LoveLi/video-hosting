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
          <source src={link}></source>
        </video>
      </div>
        <p className='nameVideo'>{name}</p>
    </div>
      )
}