import { VideoPlayType } from '../../services/Video/VideoService.types'
import './VideoPlay.css'


interface IVideoPlay {
  videoData: VideoPlayType
}

export const VideoPlay = ({videoData} : IVideoPlay) => {
  const {id, name, author, data, description, link} = videoData
  console.log(name)

  return (
    <div className="video">
      <video controls width='1000'>
        <source src='https://04ff-5-165-233-226.ngrok-free.app/video/японец.mp4'></source>
      </video>


    </div>)
}