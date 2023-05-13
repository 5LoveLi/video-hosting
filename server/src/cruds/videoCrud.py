from sqlalchemy.orm import Session
from datetime import datetime

from src.models.video import Video
from src.schemas.videoSchema import VideoCreate


def get_video(db: Session):
    return db.query(Video).all()


def get_video_by_name(db: Session, name: str):
    return db.query(Video).filter(Video.name == name).first()


def create_video(db: Session, video_name, video_description, id_author, video_link):
    db_video = Video(
        name=video_name, description=video_description, data=datetime.now(), id_author=id_author, likes=0, link=video_link
        )
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    return db_video
