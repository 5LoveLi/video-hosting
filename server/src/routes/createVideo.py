import os
from fastapi import Depends, HTTPException, File, Form
from sqlalchemy.orm import Session
from typing import Annotated

from src.cruds import videoCrud, userCrud
from src.models.user import User
from src.schemas import videoSchema

from main import app, get_db, oauth2_scheme
import yadisk
import io

from dotenv import load_dotenv



load_dotenv('.env')


oauth_token=os.getenv('TOKEN')
disk_api = yadisk.YaDisk(token=oauth_token)

# auth_url = disk_api.get_auth_url()



# token: Annotated[str, Depends(oauth2_scheme)]
@app.get('/video/upload')
def get_form():
    file='file.txt'
    # print(list(disk_api.get_files()))
    print('/путь/к/папке/' + file)
    return {"Hello": "World"}


# , json_data: dict = Form(...), , "json_data": json_data
@app.post("/video/upload")
async def upload_file(file: bytes = File(...)):
    # with open(file, 'rb') as f:
    #     response = 
    # disk_api.upload(file, '/Hosting/' + file, overwrite=True)
    memory_file = io.BytesIO(file)
    # print(file)
    name_file = 'test'
    response = disk_api.upload(memory_file, '/Hosting/' + name_file, overwrite=True)
    link = disk_api.generate_public_url('/Hosting/' + name_file)
    print(link)

    file_contents = file.decode('utf-8')
    return {"file_contents": file_contents}








# @app.post('/create')
# def create_video(token: Annotated[str, Depends(oauth2_scheme)], video: videoSchema.VideoCreate, db: Session = Depends(get_db)):
#     db_user = videoCrud.get_video_by_name(db, name=video.name)
#     if db_user:
#         raise HTTPException(
#             status_code=400, detail="there is already a video with this name")
#     return videoCrud.create_video(db=db, video=video)