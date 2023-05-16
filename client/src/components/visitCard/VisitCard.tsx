import { CardData } from "../../type/Card.types"

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

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
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title={name}
      description={likes}
    />
    {data}
  </Card>
  </a>
  </div>
  </>
  )
}


