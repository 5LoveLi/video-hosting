from sqlalchemy.orm import Session
from datetime import datetime

from src.models.video import Video


def get_video(db: Session):
    return db.query(Video).all()

def get_video_by_id(db: Session, id:int):
    return db.query(Video).filter(Video.id == id).first()


def get_video_by_name(db: Session, name: str):
    
    return db.query(Video).filter(Video.name == name).all()


def create_video(db: Session, video_name, video_description, id_author, preview, video_link):
    db_video = Video(
        name=video_name, description=video_description, data=datetime.now(), id_author=id_author, preview=preview, link=video_link
        )
    db.add(db_video)
    db.commit()
    db.refresh(db_video)
    return db_video
