from __future__ import print_function
import pandas as pd
import xgboost as xgb
from sklearn.preprocessing import OneHotEncoder, LabelEncoder, LabelBinarizer
import numpy as np
from sklearn.model_selection import train_test_split

def fillValues(data):
	#fill NaN values
	defaults = {'Binding' : 'Electronics', 'Brand' : 'Dell'}
	data.fillna(value = defaults, inplace = True)
	return data

def encode(data):
	leBinding, leBrand, lePG, leLabel = LabelEncoder(), LabelEncoder(), LabelEncoder(), LabelEncoder()
	data['Binding'] = leBinding.fit_transform(data['Binding'])
	data['Brand'] = leBrand.fit_transform(data['Brand'])
	data['ProductGroup'] = lePG.fit_transform(data['ProductGroup'])
	data['label'] = leLabel.fit_transform(data['label'])
	#ohe = OneHotEncoder()
	# lb = LabelBinarizer()
	# X = lb.fit_transform(data.Binding.values)
	# dfOneHot = pd.DataFrame(X, columns = ["Binding_"+str(int(i)) for i in range(X.shape[1])])
	# data = pd.concat([data, dfOneHot], axis = 1)
	# data.drop(columns = ['Binding'])
	return data

def encode_test(data):
	tmpbinding = pd.get_dummies(data.Binding).values.tolist()
	print('**********************************************************\n\n\n\n', data['Binding'].dtype)
	data['Binding'] = tuple(tmpbinding)
	print(data['Binding'].dtype)
	tmpbrand = pd.get_dummies(data.Brand).values.tolist()
	data['Brand'] = tuple(tmpbrand)
	tmppg = pd.get_dummies(data.ProductGroup).values.tolist()
	data['ProductGroup'] = tuple(tmppg)
	tmplabel = pd.get_dummies(data.label).values.tolist()
	data['label'] = tuple(tmplabel)
	return data