import { useParams } from "react-router-dom"
import { VideoPlay } from "../../components/VideoPlay/VideoPlay"

export const Viewing: React.FC = () => {
  
  const { id } = useParams();
  return (
    <>
    {id}
    <VideoPlay/>
    </>
  )
}