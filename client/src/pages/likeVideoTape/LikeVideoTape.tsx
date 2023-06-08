import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { VideoService } from '../../services/Video/VideoService';
import { TapeDTO } from '../../services/Video/VideoService.types';
import { VisitCard } from '../../components/VisitCard/VisitCard';



export const LikeVideoTape: React.FC = () => {
  const [cards, setCards] = useState<Array<TapeDTO>>([])

  const getTape = async () => {
    const cardsData = await VideoService.likeGallery();
    setCards(cardsData);
  }

  useEffect(() => {
      getTape();
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