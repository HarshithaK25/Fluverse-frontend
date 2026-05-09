from flask import Flask, jsonify
from sklearn.ensemble import RandomForestClassifier
import numpy as np
app = Flask(__name__)
X = np.array([
[30, 60, 20],
[15, 80, 50],
[10, 90, 80]
])
Y = np.array([0, 1, 1])
model = RandomForestClassifier()
model.fit(X, Y)
@app.route('/predict')
def predict():
sample = np.array([[12, 88, 75]])
prediction = model.predict(sample)
s

return jsonify({
'prediction': int(prediction[0]),
'message': 'High outbreak probability detected'
})
if __name__ == '__main__':
app.run(port=8000)
