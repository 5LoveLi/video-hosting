import { VideoPlayType } from '../../services/Video/VideoService.types'
import { TableInfo } from '../TableInfo/TableInfo'
import './VideoPlay.css'


interface IVideoPlay {
  videoData: VideoPlayType
}

export const VideoPlay = ({videoData} : IVideoPlay) => {
  const {id, name, author, data, description, link, like} = videoData
  // console.log(name)
  const table = { author, data, description, like}

  return (
    <div className="video">
      <div>
        <video controls width='1000'>
          <source src='https://04ff-5-165-233-226.ngrok-free.app/video/японец.mp4'></source>
        </video>
      </div>
        <p className='nameVideo'>{name}</p>
        {/* <h2>{name}</h2> */}
        <TableInfo table={table}/>
    </div>
      )
}