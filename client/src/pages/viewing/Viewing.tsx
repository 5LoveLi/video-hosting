import { useParams } from "react-router-dom"
import { VideoPlay } from "../../components/VideoPlay/VideoPlay"
import { useContext, useEffect, useState } from "react";
import { VideoPlayType } from "../../services/Video/VideoService.types";
import { VideoService } from "../../services/Video/VideoService";
import { TableInfo } from "../../components/TableInfo/TableInfo";
import { AuthContext } from "../../context/AuthContext";
import { Header } from "../../components/Header/Header";

export const Viewing: React.FC = () => {
  const [video, setVideo] = useState<VideoPlayType>({} as VideoPlayType);
  const { id_user } = useParams();
  const { token } = useContext(AuthContext)
  

  const getVideo  = async () => {
    const cardData = await VideoService.play(id_user);
    setVideo(cardData);
  }

  const {id, name, author, data, description, link, like} = video;
  const table = { id, author, data, description, like};
  const play = {name, link }
  

  const toggleLike = async (id: number) => {
    try {
      await VideoService.like(id);
      getVideo();
    } catch (error) {
      
    } 
  }

  useEffect(() => {
    getVideo();
  }, [])


  return (
    <>
    <VideoPlay videoData={play}/>
    <TableInfo table={table} toggleLike={toggleLike} viewOnly={!token} />
    </>
  )
}