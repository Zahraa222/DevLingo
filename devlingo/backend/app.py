from flask import Flask, request, jsonify, render_template, redirect, url_for, flash, send_from_directory
from flask_cors import CORS, cross_origin
import dbase as dbase
import cred as cred
import os
import google.generativeai as genai
import uagents
from uagents import Agent


genai.configure(api_key="AIzaSyBDeJ7XoBPRcc_tqVIZzhDZqWCp0VK0lak")
model = genai.GenerativeModel(model_name="gemini-1.5-flash", system_instruction="You are an expert programmer and coder. Your name is DevLingo AI.")

app = Flask(__name__)
app.secret_key = 'devlingo123456789'
# CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:3000"}})
cors=CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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


class CodingBotAgent(Agent):
    async def respond_to_question(self, question: str):
        if not question:
            return {"error": "No question provided"}

        response = model.generate_content(question, 
                                          candidate_couunt=1,
                                          temperature=1.5)
        answer = response.text
        return {"answer": answer}

agent = CodingBotAgent(name="coding_bot")


@app.route('/gethelp', methods=['GET', 'POST'])
def ask_question():
    if request.method == 'GET':
        print("Tried to go to page get")
        return send_from_directory(os.path.join('app', 'signup'), 'gethelp.js')
    elif request.method == 'POST':
        print("Tried to go to page post")
        question = request.json.get("question")
        if not question:
            return jsonify({"answer": "Please provide a question."}), 400
        
        result = agent.respond_to_question(question)

        if "answer" in result:
            return jsonify({"answer": result["answer"]})
        else:
            return jsonify({"answer": "Something went wrong, please try again."}), 500



if __name__ == '__main__':
    app.run(debug=True)
