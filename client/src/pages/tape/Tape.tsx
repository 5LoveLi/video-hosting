import { useEffect, useState } from 'react';

import { Col, Row } from 'antd';
import { VisitCard } from '../../components/visitCard/VisitCard';




export const Tape: React.FC = () => {
  const [cards, setCards] = useState([
    {
  id: 'alksdjf',
  name: 'work',
  likes: 2,
  data: '21.01.2022',
},
{
  id: 'asdf',
  name: 'hi',
  likes: 15,
  data: '21.10.2022',
},
{
  id: 'sdfghgsfh',
  name: 'work',
  likes: 2,
  data: '21.01.2022',
},
{
  id: 'sdfr',
  name: 'hi',
  likes: 15,
  data: '21.10.2022',
}
  ])

  // const getMessage = async () => {
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json'},
  //   }
  //   const response = await fetch('/', requestOptions);
  //   const data = await response.json();

  //   if (!response.ok) {
  //     console.log('sjdghfhdsfhkdshf');
  //   } else {
  //     setCards(data);
  //   }
  // };

  // useEffect(()=> {
  //   getMessage();
  // }, []);


    
  //   <video controls>
  //   <source src="https://c0ea-5-165-233-226.ngrok-free.app/test.mp4" type='video/mp4'/>
  // </video>




  return (
    <>
      {/* {cards.map(c => <div><VisitCard card={c} key={c.id} /></div>)} */}
      <Row>
      {cards.map(({ id, name, likes, data}) => ( <Col lg={{ span: 4, offset: 3 }}><VisitCard id={id} name={name} likes={likes} data={data}/></Col>))}
      </Row>
    </>
    // {cadrs.map(t => <div className='Task'><Task task={t} onChange={updateTask} key={t.id} onClick={deleteTask} /></div>)}

  )
}