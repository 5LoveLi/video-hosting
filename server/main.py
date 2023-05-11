from fastapi import FastAPI
from fastapi.security import OAuth2PasswordBearer

from src.models import user, video
from src.database import SessionLocal, engine


user.Base.metadata.create_all(bind=engine)
video.Base.metadata.create_all(bind=engine)


app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



from src.routes import registration, authorizations, createVideo








