from fastapi import FastAPI
import storage

app = FastAPI()


@app.get("/")
async def root():
    return storage.readall()
@app.get('/search/')
async def search(id):
    return storage.search(id)