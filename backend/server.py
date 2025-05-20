from flask import Flask
import subprocess

app = Flask(__name__)

process = None  # Track running Python process

@app.route('/run-script')
def run_script():
    global process
    if process is None:
        process = subprocess.Popen(["python", "main.py"])  # Starts script
        return {"message": "Python script started!"}, 200
    else:
        return {"message": "Script already running!"}, 400

@app.route('/stop-script')
def stop_script():
    global process
    if process:
        process.terminate()  # Stops the Python script gracefully
        process = None
        return {"message": "Python script stopped!"}, 200
    else:
        return {"message": "No script running!"}, 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
