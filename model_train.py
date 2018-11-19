from __future__ import print_function,division
import sys,os
import pandas as pd
import xgboost as xgb
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import OneHotEncoder, LabelEncoder
import numpy as np
from sklearn.model_selection import train_test_split, KFold, cross_val_score
import pickle as pkl
from input_pd import X_train, y_train

gbm = xgb.XGBClassifier(max_depth=3, n_estimators=300, learning_rate=0.05).fit(X_train, y_train)

pkl.dump(gbm, open('xgb_model1.pkl','wb'))

# df = pd.read_csv('testcasesfinal.csv')

# df = fillValues(df)
# df = encode(df)


# Xt = df[diff(params_to_use, ['label'])].as_matrix()
# yt = df['label'].as_matrix()

# predictions = gbm.predict(Xt)

# print(predictions)
# print(yt)

#K-Fold cross validation
# kfold = KFold(n_splits=10, random_state=7)

# results = cross_val_score(gbm, X, y, cv = kfold)

# print("Accuracy: %.2f%% (%.2f%%)" % (results.mean()*100, results.std()*100))

#xgb._Booster.save_model('./model.xgb')

# print(predictions[1] == y_test[1])



