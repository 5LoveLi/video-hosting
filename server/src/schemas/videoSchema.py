from datetime import datetime
from pydantic import BaseModel


class VideoBase(BaseModel):
    id: int
    name: str
    preview: str


class VisitCard(VideoBase):
    author: str
    like: int


class Video(VideoBase): 
    data: datetime 
    description: str | None = None
    id_author: int 
    link: str

    
    class Config:
        orm_mode = True 


class SearchBase(BaseModel):
    stringQuery: str
