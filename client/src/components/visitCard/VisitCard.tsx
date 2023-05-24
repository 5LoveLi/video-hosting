import { CardData } from "../../type/Card.types"

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import "./VisitCard.css"
import { TapeDTO } from "../../services/Video/VideoService.types";

import { VideoPlay } from "../VideoPlay/VideoPlay";


const { Meta } = Card;


export const VisitCard = (card: TapeDTO) => {
  const {id, name, preview, author, like} = card;

  return (<>
  <div className="card">
    <a href={`/viewing/${id}`}>
    <Card
    style={{ width: 350}}
    cover={
      <img
        alt="example"
        src={preview}
      />
    }
  >
    <Meta
      // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title={name}
      description={author}
    />
    {<div className="like">{like} <HeartOutlined /></div>}
  </Card>
  </a>
  </div>
  </>
  )
}


