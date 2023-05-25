from datetime import datetime
from pydantic import BaseModel


class VideoBase(BaseModel):
    id: int
    name: str
    author: str



class VisitCard(VideoBase):
    preview: str

    like: int


class Video(VideoBase): 
    data: datetime 
    description: str | None = None
    link: str

    
    class Config:
        orm_mode = True 


class SearchBase(BaseModel):
    stringQuery: str
