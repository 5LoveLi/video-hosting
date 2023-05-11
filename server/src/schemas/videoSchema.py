from datetime import datetime
from pydantic import BaseModel


class VideoBase(BaseModel):
    name: str
    description: str | None = None
    data: datetime 
    id_author: int 
    link: str
    likes: int | None = None


class VideoCreate(VideoBase):
    pass


class Video(VideoBase): 
    id: int 
    

    class Config:
        orm_mode = True 
