import io
import os
import yadisk
from dotenv import load_dotenv

load_dotenv('.env')

oauth_token=os.getenv('TOKEN')
disk_api = yadisk.YaDisk(token=oauth_token)


def upload_video_yaDisk(file, name_file):
    memory_video = io.BytesIO(file)
    path = '/Hosting/video/' + name_file
    disk_api.upload(memory_video, path, overwrite=True)
    return path
    
    
def upload_preview_yaDisk(file, name_file):
    memory_preview = io.BytesIO(file)
    path = '/Hosting/preview/' + name_file
    disk_api.upload(memory_preview, path, overwrite=True)
    return path