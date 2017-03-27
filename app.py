from config import Config
from flask import Flask, render_template, request



app = Flask(__name__)



app.config.from_object('config.Config')







@app.route('/', methods=['GET'])
def show_homepage():
	return render_template('home.html')



if __name__ == "__main__":
	app.run(debug=True, port=3000)



