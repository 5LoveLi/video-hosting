import os
import io
import json
import yadisk

from fastapi import Depends, HTTPException, File, Form
from sqlalchemy.orm import Session
from typing import Annotated

from main import app, get_db, oauth2_scheme
from dotenv import load_dotenv
from src.cruds import videoCrud, userCrud


load_dotenv('.env')

oauth_token=os.getenv('TOKEN')
disk_api = yadisk.YaDisk(token=oauth_token)



@app.get('/video/upload')
def get_form(token: Annotated[str, Depends(oauth2_scheme)]):
    return {"Hello": "World"}



@app.post("/video/upload")
async def upload_file(token: Annotated[str, Depends(oauth2_scheme)], file: bytes = File(...), json_data: str = Form(...), db: Session = Depends(get_db)):

    data_dict = json.loads(json_data)
    name_file = data_dict['name']
    user = userCrud.get_current_user(db, token)

    db_video = videoCrud.get_video_by_name(db, name=data_dict['name'])
    
    memory_file = io.BytesIO(file)
    response = disk_api.upload(memory_file, '/Hosting/' + name_file, overwrite=True)


    if db_video:
        raise HTTPException(
            status_code=400, detail="Уже есть видео с таким названием")

    return videoCrud.create_video(db=db, video_name=name_file, video_description=data_dict['description'], id_author=user.id, video_link='/Hosting/' + name_file)