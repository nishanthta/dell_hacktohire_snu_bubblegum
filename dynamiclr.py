from __future__ import division
import sys,os
import xgboost as xgb
import pickle as pkl
from input_pd import X_train, y_train

#xgb_model0 stores the previous model, 1 stores the current model

sales, expected, lr = 15, 20, 0.05

alpha = sales - expected

previous_model = pkl.load(open('xgb_model1.pkl','rb'))
pkl.dump(previous_model, open('xgb_model0.pkl','wb'))

if alpha > 0:
	lr = lr - alpha*0.001*lr #change lr depending on the magnitude of sales difference
	xgb_model_api = pkl.load(open('xgb_model1.pkl','rb'))
	clf = xgb.XGBClassifier(max_depth=3, n_estimators=300, learning_rate=lr).fit(X_train, y_train)
	pkl.dump(clf, open('xgb_model1.pkl','wb'))

else:
	xgb_model_api = pkl.load(open('xgb_model0.pkl','rb'))
	#clf = xgb.XGBClassifier(max_depth=3, n_estimators=300, learning_rate=lr).fit(X_train, y_train)
	pkl.dump(xgb_model_api, open('xgb_model1.pkl','wb'))
	
		
# n_c = 0
# for i in range(len(predictions)):
# 	if predictions[i] == y_test[i]:
# 		n_c += 1

# acc = n_c/len(predictions)

# print(acc)