from app import app

@app.route('/')
@app.route('/index')
def index():
	#return something (e.g.,...)
	return "Hello, World!"