import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import datasets
from sklearn.metrics import accuracy_score


sales = pd.read_csv('/Users/nishthanayar/Desktop/sales.csv')

X_train = sales.iloc[:45, :-1].values  
y_train = sales.iloc[:45, 1].values  

X_test = sales.iloc[45:, :-1].values  
y_test = sales.iloc[45:, 1].values  


model = LinearRegression()
# 2. Use fit
model.fit(X_train, y_train)
# 3. Check the score

y_pred = model.predict(X_test)  
print(y_pred)
print("Mean squared error: %.2f" % np.mean((model.predict(X_test) - y_test) ** 2))
# Explained variance score: 1 is perfect prediction
print('Variance score: %.2f' % model.score(X_test, y_test))

