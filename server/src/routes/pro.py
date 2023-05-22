from fastapi import Depends
from sqlalchemy.orm import Session
from typing import Annotated

from main import app, get_db, oauth2_scheme
from src.cruds import videoCrud, userCrud, likeCrud
# from src.schemas.userSchema import User



@app.get('/users/me')
async def get_user(token: Annotated[str, Depends(oauth2_scheme)], db: Session = Depends(get_db)):
    return userCrud.get_current_user(db=db, token=token)