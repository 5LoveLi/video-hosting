from datetime import datetime
from pydantic import BaseModel


class VideoBase(BaseModel):
    name: str
    description: str | None = None
    data: datetime 
    id_author: int 
    likes: int | None = None
    link: str
    

class VideoCreate(VideoBase):
    pass


class Video(VideoBase): 
    id: int 
    

    class Config:
        orm_mode = True 
