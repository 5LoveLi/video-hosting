from fastapi import HTTPException, Depends
# from werkzeug.security import generate_password_hash
from sqlalchemy.orm import Session

from src.cruds import userCrud
from src.schemas import userSchema


from main import app, get_db


@app.get('/register')
def get_form():
    return {"Hello": "World"}


@app.post('/register')
def create_user(user: userSchema.UserCreate, db: Session = Depends(get_db)):
    db_user = userCrud.get_user_by_login(db, login=user.login)
    if db_user:
        raise HTTPException(
            status_code=400, detail="this login already exists")
    return userCrud.create_user(db=db, user=user)


