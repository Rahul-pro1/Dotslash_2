from flask import Flask, request, jsonify, redirect, url_for, session
from flask_cors import CORS
from pymongo import MongoClient
from hashlib import sha256
import re
import requests

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017")
db = client['FLASK_DB']
signup = db["signup"]
input = db['prompt']
CORS(app, origins="*")

app.secret_key = "PASSWORD"

@app.route('/')
def home():
    return "<>HOME</>"

@app.route('/register', methods=['POST'])
def register():
    # name = request.json['name']
    # username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    # phone = request.json["phone"]

    print(email, password)

    if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
        print('Invalid email address')

    elif not password or not email:
        print('Please fill out all the form fields')

    else:
        account1 = signup.find_one({'email': email})
        if account1:
            print('User with the specified credentials already exists.')
            return jsonify({"message": "Cannot insert"}), 404

        else:
            hashed_password = sha256(password.encode()).hexdigest()
            user = {'password': hashed_password, 'email': email}
            signup.insert_one(user)
            return jsonify({"message": "Inserted successfully"}), 200

@app.route('/login', methods=['POST'])
def Login():
    if request.method == 'POST':
        email = request.json["email"]
        password = request.json["password"]

        account = signup.find_one({"email":email})

        if account and account['password'] == sha256(password.encode()).hexdigest():
            session['loggedin'] = True
            session['email'] = account['email']
            print("User successfully logged in")
            return jsonify({"message":"logged in"}), 200
        
        else:
            print("User has not logged in")
            return jsonify({"message":"not logged in"}), 404

url = "https://e9b6-34-125-224-123.ngrok-free.app"

@app.route('/chatbot', methods = ['POST'])
def chatbot():
    print("In the chatbot route")
    try:
        prompt = request.json["prompt"]
        # print("This is the prompt:", prompt)
        print("in try block")
        voice = {input: "prompt"}
        return voice
    except KeyError:
        return jsonify({"error": "Key 'prompt' not found in JSON request"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# @app.route('/chat', methods=['GET'])
# def chat():
#     # prompt = request.json["prompt"]
#     prompt = "I am depressed"
#     url = 'https://5ff6-34-70-63-236.ngrok-free.app/'
#     # Make sure to replace 'YOUR_API_ENDPOINT_HERE' with the actual API endpoint
#     print("IN CHAT ", prompt)
#     res = requests.post(url, json={'prompt': prompt}, headers={'Content-type': 'application/json'})
    
#     # Check if the request was successful (status code 200)
#     if res.status_code == 200:
#         # Extract JSON data from response
#         print("IN 200")
#         response_data = res.json()
#         return jsonify(response_data)
#     else:
#         print("ERROR", res.status_code)
#         # If the request was unsuccessful, return an error message
#         return jsonify({'error': 'Failed to get response from the server'}), 500@app.route('/chat', methods=['GET','POST'])
@app.route("/chat", methods = ['POST'])
def chat():
    print("IN CHAT")
    try:
        if request.method == 'POST':
            prompt = request.json["prompt"]  # Retrieve prompt from request data
            print("Received prompt:", prompt)
        # Send the prompt to the specified URL
            url = 'https://9146-34-133-176-153.ngrok-free.app/'
            res = requests.post(url, json={'prompt': prompt}, headers={'Content-type': 'application/json'})
            print(res.json())
            return jsonify(res.json()), 200
        # Return the response from the external URL
        
    except KeyError:
        return jsonify({"error": "Key 'prompt' not found in JSON request"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

# threading.Thread(target=app.run, kwargs={"use_reloader": False}).start()