import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { VideoService } from '../../services/Video/VideoService';
import { TapeDTO } from '../../services/Video/VideoService.types';
import { VisitCard } from '../../components/VisitCard/VisitCard';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';



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

  return(
    <>
    <Header/>
     <Row>
      {cards.map((card) => (<Col lg={{ span: 4, offset: 3 }}><VisitCard visitCard={card}/></Col>))}
     </Row>
  </>)

}