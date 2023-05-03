from fastapi import FastAPI


from src.models import user, video
from src.database import SessionLocal, engine


user.Base.metadata.create_all(bind=engine)
video.Base.metadata.create_all(bind=engine)


app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



from src.routes import registration
from src.routes import authorizations










