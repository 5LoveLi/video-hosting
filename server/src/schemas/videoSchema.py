from datetime import datetime
from pydantic import BaseModel


class VideoBase(BaseModel):
    name: str
    description: str | None = None
    data: datetime 
    link: str
    likes: int | None = None


class VideoCreate(VideoBase):
    pass


class Video(VideoBase): 
    id: int 
    id_author: int 

    class Config:
        orm_mode = True 
