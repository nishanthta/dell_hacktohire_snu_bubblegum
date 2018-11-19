from flask import Flask, request
from final_predict import xgb_model_api
import jsonpickle

app = Flask(__name__)	

@app.route('/', methods=['POST'])
def home():
	print(request.get_json(force=True))
	# print(str(jsonpickle.decode(request.get_json(force=True))))
	return str(xgb_model_api(request.get_json(force=True)))
	#return "damn this shit"


if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000, debug=True)