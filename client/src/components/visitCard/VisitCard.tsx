// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import "./VisitCard.css"
import { TapeDTO } from "../../services/Video/VideoService.types";

import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

interface IVisitCard {
  visitCard: TapeDTO
}

export const VisitCard = ({ visitCard }: IVisitCard) => {
  const { id, name, preview, author, like } = visitCard;
  const navigate = useNavigate();

  const selectCard = () => {
    navigate(`/viewing/${id}`);
  }

  return (<>
    <Card
      className='card'
      hoverable
      onClick={selectCard}
      cover={
        <div className='image-wrapper'>
          <img
            className='image'
            // preview={false}
            alt="example"
            src={preview}
          />
        </div>
      }
    >
      <div>
      <Meta
        // avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={name}
        description={author}
      />
      <div className="like">{like} <HeartOutlined /></div>
      </div>
    </Card>
  </>
  )
}


