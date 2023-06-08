import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { VideoService } from '../../services/Video/VideoService';
import { TapeDTO } from '../../services/Video/VideoService.types';
import { VisitCard } from '../../components/VisitCard/VisitCard';
import './Tape.style.css'



export const Tape: React.FC = () => {
  const [cards, setCards] = useState<Array<TapeDTO>>([])

  const getTape = async () => {
    const cardsData = await VideoService.gallery();
    setCards(cardsData);
  }

  useEffect(() => {
      getTape();
  }, [])

  return (
    <>
      <div className='content-wrapper'>
        <Row gutter={[16, 16]} className='grid-row'>
          {cards.map((card) => (
            <Col span={6} key={card.id}>
              <VisitCard visitCard={card} />
            </Col>
          ))}
        </Row>
      </div>
    </>)

}