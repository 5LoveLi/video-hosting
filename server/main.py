from typing import Union

from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session

from src import crud
from src.models import user
from src.schemas import userSchema
from src.database import SessionLocal, engine

user.Base.metadata.create_all(bind=engine)

app = FastAPI()
