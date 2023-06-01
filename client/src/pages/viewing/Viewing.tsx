import { useParams } from "react-router-dom"
import { VideoPlay } from "../../components/VideoPlay/VideoPlay"
import { useEffect, useState } from "react";
import { VideoPlayType } from "../../services/Video/VideoService.types";
import { VideoService } from "../../services/Video/VideoService";
import { TableInfo } from "../../components/TableInfo/TableInfo";

export const Viewing: React.FC = () => {
  const [video, setVideo] = useState<VideoPlayType>({} as VideoPlayType);
  const { id } = useParams();
  

  const getVideo  = async () => {
    const cardData = await VideoService.play(id);
    setVideo(cardData);
  }

  const {id_user, name, author, data, description, link, like} = video;
  const table = { id_user, author, data, description, like};
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