import { useParams } from "react-router-dom"
import { VideoPlay } from "../../components/VideoPlay/VideoPlay"
import { useEffect, useState } from "react";
import { VideoPlayType } from "../../services/Video/VideoService.types";
import { VideoService } from "../../services/Video/VideoService";

export const Viewing: React.FC = () => {
  const [video, setVideo] = useState<VideoPlayType>({} as VideoPlayType);
  const { id } = useParams();

  const getVideo  = async () => {
    const cardData = await VideoService.play(id);
    setVideo(cardData);
  }

  useEffect(() => {
    getVideo();
  }, [])



  return (
    <>
    <VideoPlay videoData={video}/>
    </>
  )
}