from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, send_from_directory
from flask_cors import CORS
import dbase as dbase
import cred as cred
import os

app = Flask(__name__)
app.secret_key = 'devlingo123456789'
CORS(app)

@app.route('/')
def index():
    try:
        return send_from_directory(os.path.join('app', 'signup'), 'login.js')
    except Exception as e:
        print(e)
        return jsonify({"message": f"Error: {e}"}), 404

@app.route('/home')
def home():
    return jsonify({"message": "Handled by React"}), 200



@app.route('/register', methods=['GET', 'POST'])
def register_user():
    if request.method == 'GET':
        return send_from_directory(os.path.join('app', 'signup'), 'register.js')
    elif request.method == 'POST':
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        if not email or not password:
            return jsonify({"error": "Missing data"}), 400
        try:
            if dbase.check_user(email):
                return jsonify({"error": "User already exists. Please log in."}), 400
            dbase.create_user(email, password)
            return redirect(url_for('home'))
        except Exception as e:
            return jsonify({"error": str(e)}), 500


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    if request.method == 'GET':
        return send_from_directory(os.path.join('app', 'signup'), 'login.js')
    elif request.method == 'POST':
        print("Received post request")
        data = request.get_json()
        print(f"Data received: {data}")
        email = data.get('email')
        password = data.get('password')
        print(f"Received login request: {email}, {password}")  # Log the request
        if not email or not password:
            print("Missing email or password")
            return jsonify({"error": "Missing data"}), 400
        try:
            result = dbase.check_credentials(email, password)
            print(f"Login result: {result}")
            if result == "Invalid password":
                return jsonify({"error": "Invalid password. Please try again."}), 400
            elif result == "User not found":
                return jsonify({"error": "User not found. Please register."}), 400
            elif result:
                return jsonify({"message": "Login successful"}), 200
        except Exception as e:
            print(f"Error during login: {e}")
            return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
