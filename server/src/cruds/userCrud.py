from sqlalchemy.orm import Session
from werkzeug.security import generate_password_hash

from src.models.user import User
from src.schemas import userSchema


def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_login(db: Session, login: str):
    return db.query(User).filter(User.login == login).first()


def create_user(db: Session, user: userSchema.UserCreate):
    db_user = User(
        login=user.login, hashed_password=generate_password_hash(user.password), name=user.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
