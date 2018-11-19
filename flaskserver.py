from flask import Flask, request
from final_predict import xgb_model_api
import json

app = Flask(__name__)	

@app.route('/', methods=['POST'])
def home():
	return xgb_model_api(json.loads((request.json)))
	#return "damn this shit"


if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000, debug=True)