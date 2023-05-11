from sqlalchemy.orm import Session
from datetime import datetime

from src.models.video import Video
from src.schemas.videoSchema import VideoCreate


def get_video(db: Session, video_id: int):
    return db.query(Video).filter(Video.id == video_id).first()


def get_video_by_name(db: Session, name: str):
    return db.query(Video).filter(Video.name == name).first()


def create_video(db: Session, video: VideoCreate):
    db_video = Video(
        name=video.name, description=video.description, data=datetime.now(), id_author=video.id_author, likes=0, link=video.link
        )
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    return db_video
