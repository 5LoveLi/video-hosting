from sqlalchemy.orm import Session
from werkzeug.security import check_password_hash, generate_password_hash

from src.models.user import User
from src.schemas.userSchema import UserCreate


def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_login(db: Session, login: str):
    return db.query(User).filter(User.login == login).first()


def create_user(db: Session, user: UserCreate):
    db_user = User(
        login=user.login, hashed_password=generate_password_hash(user.password), name=user.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def authenticate_user(db: Session, login: str, password: str):
    user = get_user_by_login(db, login)
    if not user:
        return False
    if not check_password_hash(user.hashed_password, password):
        return False
    return user
