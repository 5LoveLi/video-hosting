import os
import io
import yadisk

from fastapi import Depends
from sqlalchemy.orm import Session

from main import app, get_db
from dotenv import load_dotenv
from src.cruds import videoCrud


load_dotenv('.env')

oauth_token=os.getenv('TOKEN')
disk_api = yadisk.YaDisk(token=oauth_token)


@app.get('/viewing/{video_id}')
def viewing_video(video_id, db: Session = Depends(get_db)):
    video = videoCrud.get_video_by_id(db=db, id=video_id)

    video_on_disk = video.preview
    # buffer = io.BytesIO()
    # disk_api.download(video_on_disk, buffer)
    # return {'video_link': video}
    # public_url = disk_api.get_download_link(video_on_disk)
    # print(disk_api.check_access(video_on_disk))

    # disk_api.publish(video_on_disk)
    # link = disk_api.get_meta(video_on_disk)
    meta = disk_api.get_meta(video_on_disk)
    print(meta['public_url'])
    if meta['public_url']:
        print("Публичный доступ к файлу разрешен")
    else:
        print("Публичный доступ к файлу запрещен")
    return {'video_link': 123}