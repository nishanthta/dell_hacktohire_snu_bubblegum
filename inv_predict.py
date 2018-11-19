from __future__ import division
import sys,os
import xgboost as xgb
import pickle as pkl


xgb_model_api = pkl.load(open('xgb_model.pkl','rb'))

#predictions = xgb_model_api.predict(X_test)

# n_c = 0
# for i in range(len(predictions)):
# 	if predictions[i] == y_test[i]:
# 		n_c += 1

# acc = n_c/len(predictions)

# print(acc)