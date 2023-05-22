from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from src.database import Base


class Like(Base):
    __tablename__ = "likes"

    id = Column(Integer, primary_key=True, index=True)
    id_video = Column(Integer)
    id_user = Column(Integer)