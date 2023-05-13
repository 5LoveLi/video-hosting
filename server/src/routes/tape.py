from fastapi import Depends
from sqlalchemy.orm import Session

from main import app, get_db
from src.cruds import videoCrud


@app.get('/')
def get_form(db: Session = Depends(get_db)):
    videos = videoCrud.get_video(db)
    
    return videos