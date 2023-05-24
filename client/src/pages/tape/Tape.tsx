import { useEffect, useState } from 'react';
// import { ApiClient } from './api/apiClient';
import { Col, Row } from 'antd';
import { VisitCard } from '../../components/visitCard/VisitCard';
import { ApiClient } from '../../api/apiClient';
import { VideoService } from '../../services/Video/VideoService';
import { TapeDTO } from '../../services/Video/VideoService.types';




export const Tape: React.FC = () => {
  const [cards, setCards] = useState<Array<TapeDTO>>([])

  const getTape = async () => {
    const cardsData = await VideoService.gallery()
    setCards(cardsData);
    console.log(cardsData[0].name)
  }

  useEffect(() => {
    getTape();
  }, [])

  return(
    <>
      <Row>
        {cards.map(({ id, name, preview, author, like}) => ( <Col lg={{ span: 4, offset: 3 }}><VisitCard id={id} name={name} like={like} preview={preview} author={author} /></Col>))}
     </Row>

  </>)

}

    
  //   <video controls>
  //   <source src="https://c0ea-5-165-233-226.ngrok-free.app/test.mp4" type='video/mp4'/>
  // </video>




//   return (
//     <>
//       {/* {cards.map(c => <div><VisitCard card={c} key={c.id} /></div>)} */}
//       <Row>
//       {cards.map(({ id, name, likes, data}) => ( <Col lg={{ span: 4, offset: 3 }}><VisitCard id={id} name={name} likes={likes} data={data}/></Col>))}
//       </Row>
//     </>
//     // {cadrs.map(t => <div className='Task'><Task task={t} onChange={updateTask} key={t.id} onClick={deleteTask} /></div>)}

//   )
// }