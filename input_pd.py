from __future__ import print_function,division
import sys,os
import pandas as pd
import xgboost as xgb
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import OneHotEncoder, LabelEncoder
import numpy as np
from sklearn.model_selection import train_test_split, KFold, cross_val_score
from preprocess import fillValues,encode,encode_test
import pickle as pkl

N_DATA = 8339

def diff(li1, li2): 
    return (list(set(li1) - set(li2)))

df = pd.read_csv('newdata.csv')

params_to_use = ['Binding', 'Brand', 'ListPrice', 'ProductGroup', 'location', 'govSchemeSize', 'companiesMoving', 'supplyDelhi', 'supplyMumbai', 'supplyKolkata', 'supplyChennai', 'demandDelhi', 'demandMumbai', 'demandChennai', 'demandKolkata', 'label']

data = df[params_to_use]
#print(data.info())

#fill Nan values
data = fillValues(data)

#encode strings
data = encode(data)

print(data.loc[8])

X = data[diff(params_to_use, ['label'])].as_matrix()
y = data['label'].as_matrix()

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.15, random_state=7)