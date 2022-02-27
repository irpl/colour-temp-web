import os
from flask import Flask, jsonify, request, abort
from flask_pymongo import PyMongo
from pymongo import ReturnDocument
from dotenv import load_dotenv
from bson.json_util import dumps
from json import loads

load_dotenv()

app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("MONGO_CONNECT_STRING")
mongo = PyMongo(app)

@app.route('/api/temp', methods=["PATCH"])
def patch(mac):
  temp = request.json["temp"]
  res = mongo.db.temp.find_one_and_update({"mac": os.getenv("MAC_ADDRESS")},{"$set": {"temp": temp}}, return_document=ReturnDocument.AFTER)
  if res == None:
    return 404
  return loads(dumps(res))

@app.route('/api/temp', methods=["GET"])
def get(mac):
  res = mongo.db.temp.find_one({"mac": os.getenv("MAC_ADDRESS")})

  if res == None:
    return 404
  return loads(dumps(res))

if os.getenv("ENVIRONMENT") == "dev":
  app.listen(host="0.0.0.0", port=3000, debug=True)