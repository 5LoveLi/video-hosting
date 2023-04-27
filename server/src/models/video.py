from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime

from src.database import Base


class Video(Base):
    __tablename__ = "videos"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    description = Column(String)
    data = Column(DateTime)
    id_author = Column(Integer)
    likes = Column(Integer)
    link = Column(String)


    # items = relationship("Item", back_populates="owner")