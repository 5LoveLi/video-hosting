from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from src.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    login = Column(String, unique=True)
    hashed_password = Column(String)
    name = Column(String)

