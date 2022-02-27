import os
from flask import Flask, jsonify, request, abort
from flask_pymongo import PyMongo
from pymongo import ReturnDocument
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("MONGO_CONNECT_STRING")
mongo = PyMongo(app)

@app.route('/api/temp/<mac>', methods=["PATCH"])
def patch(mac):
  temp = request.json["temp"]
  res = mongo.db.temp.find_one_and_update({"mac": mac},{"$set": {"temp": temp}}, return_document=ReturnDocument.AFTER)
  if res == None:
    return 404
  return res

@app.route('/api/temp/<mac>', methods=["GET"])
def get(mac):
  res = mongo.db.temp.find_one({"mac": mac})

  if res == None:
    return 404
  return res

if os.getenv("ENVIRONMENT") == "dev":
  app.listen(host="0.0.0.0", port=3000, debug=True)