import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { VideoService } from '../../services/Video/VideoService';
import { TapeDTO } from '../../services/Video/VideoService.types';
import { VisitCard } from '../../components/VisitCard/VisitCard';
import { useParams } from 'react-router-dom';
import './Tape.style.css'



export const Tape: React.FC = () => {
  const [cards, setCards] = useState<Array<TapeDTO>>([])
  const { str } = useParams();

  const getTape = async () => {
    const cardsData = await VideoService.gallery();
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
