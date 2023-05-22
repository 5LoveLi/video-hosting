from fastapi import Depends
from sqlalchemy.orm import Session

from main import app, get_db
from src.cruds import videoCrud
from src.schemas import videoSchema

@app.post('/search')
def get_form(searchQuery: videoSchema.SearchBase,  db: Session = Depends(get_db)):
    videos = []
    array = searchQuery.stringQuery.split() ## ['мем', 'про', 'японца']
    print(array)
    for word in array:
        video = videoCrud.get_video_by_name(db=db, name=word)
        # print(video)
        if video:
            videos.append(video)
        else:
            continue
        
    
    return videos