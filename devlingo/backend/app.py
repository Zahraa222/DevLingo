from flask import Flask, request, jsonify, session, render_template, redirect, url_for, flash, send_from_directory
from flask_cors import CORS, cross_origin
import dbase as dbase
from dbase import *
import cred as cred
from cred import *
import os
import google.generativeai as genai
import uagents
from uagents import Agent
import asyncio
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv('GENAI_API_KEY'))
model = genai.GenerativeModel(model_name="gemini-1.5-flash", system_instruction="You are an expert programmer and coder. Your name is DevLingo AI.")

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')
cors=CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def index():
    try:
        return send_from_directory(os.path.join('app', 'sign-up'), 'login.js')
    except Exception as e:
        print(e)
        return send_from_directory(os.path.join('app', 'sign-up'), 'notfound.js')


@app.route('/home')
def home():
    return jsonify({"message": "Handled by React"}), 200


@app.route('/register', methods=['GET', 'POST'])
def register_user():
    if request.method == 'GET':
        return send_from_directory(os.path.join('app', 'sign-up'), 'register.js')
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
            session['user_email'] = email    
            session.permanent = True
            return redirect(url_for('home'))
        except Exception as e:
            return jsonify({"error": str(e)}), 500


@app.route('/login', methods=['POST'])
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
            return jsonify({"error": "Missing data"}), 400  # Bad request
        try:
            result = dbase.check_credentials(email, password)
            print(f"Login result: {result}")
            if result == "Incorrect password":
                return jsonify({"error": "Incorrect password. Please try again."}), 401  # Unauthorized
            elif result == "User not found":
                return jsonify({"error": "User not found. Please register."}), 400
            elif result:
                session['user_email'] = email
                session.permanent = True
                xp = fetch_xp(email)
                print(xp)
                level = fetch_level(email)
                print(level)
                print(f"User session: {session.get('user_email')} ... {session}")
                return jsonify({"message": "Login successful"}), 200
        except Exception as e:
            print(f"Error during login: {e}")
            return jsonify({"error": str(e)}), 500 


class CodingBotAgent(Agent):
    async def respond_to_question(self, question: str):
        if not question:
            return {"error": "No question provided"}

        response = model.generate_content(question)
        answer = response.text
        return {"answer": answer}

agent = CodingBotAgent(name="coding_bot")


@app.route('/gethelp', methods=['GET', 'POST'])
def ask_question():
    if request.method == 'GET':
        print("Tried to go to page get")
        return send_from_directory(os.path.join('app', 'sign-up'), 'gethelp.js')
    elif request.method == 'POST':
        print("Tried to go to page post")
        question = request.json.get("question")
        if not question:
            return jsonify({"answear": "Please provide a question."}), 400
        result = asyncio.run(agent.respond_to_question(question))
        if "answer" in result:
            return jsonify({"answer": result["answer"]})
        else:
            return jsonify({"answer": "Something went wrong, please try again."}), 500


@app.route('/python', methods=['GET', 'POST'])
def start_python():
    email = session.get['user_email']
    print(email)
    xp = fetch_xp(email)
    print(xp)
    return jsonify({"message": "Handled by React"}), 200
    # email = session.get('user_email')
    # if not email:
    #     return jsonify({"error": "User is not logged in"}), 403
    # xp = fetch_xp(email)
    # print(f"{email}'s xp is {xp}")
    # if request.method == "GET":
    #     print("Starting python...")
    #     return send_from_directory(os.path.join('app', 'languages'), 'python.js')
    # elif request.method == "POST":
    #     print("Starting python post...")
    #     return send_from_directory(os.path.join('app', 'languages'), 'python.js')


@app.route('/api/user/details', methods=['GET'])
def get_user_details():
    email = session.get('user_email')
    if not email:
        return jsonify({"error": "User is not logged in"}), 403
    xp = fetch_xp(email)  
    level = fetch_level(email)
    return jsonify({"XP": xp, "Level": level}), 200


if __name__ == '__main__':
    app.run(debug=True)
