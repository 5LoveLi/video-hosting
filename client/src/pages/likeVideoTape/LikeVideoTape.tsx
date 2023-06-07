import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { VideoService } from '../../services/Video/VideoService';
import { TapeDTO } from '../../services/Video/VideoService.types';
import { VisitCard } from '../../components/VisitCard/VisitCard';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { AuthContext } from "../../context/AuthContext";
// import './Tape.style.css'



export const LikeVideoTape: React.FC = () => {
  const [cards, setCards] = useState<Array<TapeDTO>>([])
  const { str } = useParams();
  // const { token } = useContext(AuthContext)

  const getTape = async () => {
    const cardsData = await VideoService.likeGallery();
    setCards(cardsData);
  }

  const getSearchTape = async () => {
    const cardsData = await VideoService.search(str);
    setCards(cardsData);
  }

  useEffect(() => {
    if (str === undefined) {
      getTape();
    } else {
      getSearchTape();
    }

  }, [])

  return (
    <>
      <div className='content-wrapper'>
        <Row gutter={16} className='grid-row'>
          {cards.map((card) => (
            <Col span={6} >
              <VisitCard visitCard={card} />
            </Col>
          ))}
        </Row>
      </div>
    </>)

}