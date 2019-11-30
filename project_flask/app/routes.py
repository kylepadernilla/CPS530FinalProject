from app import app

@app.route('/')
@app.route('/index')
def index():
	return "Hello, World!"
	#return something (e.g.,...)
	#return render_template('index.html')