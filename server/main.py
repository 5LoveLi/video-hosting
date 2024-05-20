from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer

from src.models import user, video, like
from src.database import SessionLocal, engine


user.Base.metadata.create_all(bind=engine)
video.Base.metadata.create_all(bind=engine)
like.Base.metadata.create_all(bind=engine)


app = FastAPI()

router = APIRouter(prefix='/api')

origins = [
    'http://localhost',
    'http://localhost:3000/'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

from src.routes import registration, authorizations, createVideo, tape, likeVideo, viewing

app.include_router(router)