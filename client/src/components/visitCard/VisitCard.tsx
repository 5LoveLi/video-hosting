import { CardData } from "../../type/Card.types"

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import "./VisitCard.css"


const { Meta } = Card;

// interface ICardProps {
//   card: CardData
// }

export const VisitCard = (card: CardData) => {
  const {id, name, likes, data} = card;

  return (<>
  <div className="card">
    <a href="viewing">
    <Card
    style={{ width: 350}}
    cover={
      <img
        alt="example"
        src='https://fc85-5-165-233-226.ngrok-free.app/preview/японец.jpg'
      />
    }
  >
    <Meta
      
      title={name}
      
      description={<>{likes} <HeartOutlined /></>}
    />
    {/* {data} */}
  </Card>
  </a>
  </div>
  </>
  )
}


