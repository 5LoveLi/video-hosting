import io


def save_file(data, path):
    with open(path, 'wb') as f:
        f.write(data)


def upload_video_local(file, name_file):

    path = 'C:/Users/User/Desktop/tochka/video-hosting/videoStore/video/' + name_file + '.mp4'
    with io.BytesIO(file) as f:
        data = f.read()
        save_file(data, path)

    path_video = 'https://fc85-5-165-233-226.ngrok-free.app/video/' + name_file + '.mp4'
    return path_video



def upload_preview_local(file_preview, name_file):
    path = 'C:/Users/User/Desktop/tochka/video-hosting/videoStore/preview/' + name_file + '.jpg'
    memory_video = io.BytesIO(file_preview)
    with io.BytesIO(file_preview) as f:
        data = f.read()
        save_file(data, path)

    path_preview = 'https://fc85-5-165-233-226.ngrok-free.app/preview/' + name_file + '.jpg'
    return path_preview