from fastapi import Depends
from sqlalchemy.orm import Session

from main import app, get_db
from src.cruds import videoCrud, likeCrud, userCrud
from src.schemas.videoSchema import VisitCard


@app.get('/tape')
async def get_form(db: Session = Depends(get_db)):
    videos = videoCrud.get_video(db)
    tape = []
    for video in videos:
        author_name = userCrud.get_user(db=db, user_id=video.id_author).login
        likes = likeCrud.get_all_likes_video(db=db, video_id=video.id)
        card = VisitCard(id=video.id, name=video.name, author=author_name, preview=video.preview, like=likes)
        tape.append(card)
    return tape



@app.get('/test')
async def get():
    return{'test':'test'}