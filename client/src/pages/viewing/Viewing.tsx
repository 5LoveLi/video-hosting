import { useParams } from "react-router-dom"
import { VideoPlay } from "../../components/VideoPlay/VideoPlay"
import { useEffect, useState } from "react";
import { VideoPlayType } from "../../services/Video/VideoService.types";
import { VideoService } from "../../services/Video/VideoService";
import { TableInfo } from "../../components/TableInfo/TableInfo";

export const Viewing: React.FC = () => {
  const [video, setVideo] = useState<VideoPlayType>({} as VideoPlayType);
  const { id_user } = useParams();
  

  const getVideo  = async () => {
    const cardData = await VideoService.play(id_user);
    setVideo(cardData);
  }

  const {id, name, author, data, description, link, like} = video;
  const table = { id, author, data, description, like};
  const play = {name, link }

  useEffect(() => {
    getVideo();
  }, [])


  return (
    <>
    <VideoPlay videoData={play}/>
    <TableInfo table={table}/>
    </>
  )
}