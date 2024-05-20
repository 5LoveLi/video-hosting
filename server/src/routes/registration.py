from fastapi import HTTPException, Depends
from sqlalchemy.orm import Session

from src.cruds import userCrud
from src.schemas import userSchema


from main import router, get_db


@router.post('/register')
async def create_user(user: userSchema.UserCreate, db: Session = Depends(get_db)):
    db_user = userCrud.get_user_by_login(db, login=user.login)
    if db_user:
        raise HTTPException(
            status_code=400, detail="this login already exists")
    return userCrud.create_user(db=db, user=user)


