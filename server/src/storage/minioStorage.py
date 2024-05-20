import os, io
from minio import Minio
from minio.error import S3Error
from dotenv import load_dotenv

load_dotenv('.env')


client = Minio(
    "127.0.0.1:9091",
    access_key=os.getenv('ACCESS_KEY_MINIO'),
    secret_key=os.getenv('SECRET_KEY_MINIO'),
    secure=False,
)

def upload_video_minio(file, file_name):
    video_bytes = io.BytesIO(file)
    path = file_name + '.mp4'
    client.put_object('hosting', path, video_bytes, len(file))
    return 'http://127.0.0.1:9091/hosting/' + path +'?'


def upload_preview_minio(file, name_file):
    bytes_preview = io.BytesIO(file)
    path = name_file + '.jpg'
    client.put_object('hosting', path, bytes_preview, len(file))
    return 'http://127.0.0.1:9091/hosting/' + path +'?'

