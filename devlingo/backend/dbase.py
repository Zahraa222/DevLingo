import sqlite3
from datetime import *
from threading import Lock

lock = Lock()

path = 'data.db'
conn = sqlite3.connect(path, check_same_thread=False)

c = conn.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS UserData(
          id int AUTO_INCREMENT,
          password text,
          email text,
          xp int DEFAULT 0,
          python_chapter1 int DEFAULT 0,
          python_chapter2 int DEFAULT 0,
          python_chapter3 int DEFAULT 0,
          python_q1 int DEFAULT 0,
          python_q2 int DEFAULT 0,
          python_q3 int DEFAULT 0,
          python_quiz1 int DEFAULT 0,
          python_quiz2 int DEFAULT 0,
          python_quiz3 int DEFAULT 0,
          java_chapter1 int DEFAULT 0,
          java_chapter2 int DEFAULT 0,
          java_chapter3 int DEFAULT 0,
          java_q1 int DEFAULT 0,
          java_q2 int DEFAULT 0,
          java_q3 int DEFAULT 0, 
          java_quiz1 int DEFAULT 0,
          java_quiz2 int DEFAULT 0,
          java_quiz3 int DEFAULT 0,
          c_chapter1 int DEFAULT 0,
          c_chapter2 int DEFAULT 0,
          c_chapter3 int DEFAULT 0,
          c_q1 int DEFAULT 0,
          c_q2 int DEFAULT 0,
          c_q3 int DEFAULT 0,
          c_quiz1 int DEFAULT 0,
          c_quiz2 int DEFAULT 0,
          c_quiz3 int DEFAULT 0
          )""")


def create_user(email, password):
    sql = "INSERT INTO UserData (email, password) VALUES (?, ?)"
    c.execute(sql, (email, password))
    conn.commit()

def check_user(email):
    c.execute("SELECT * FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return True
    return False

def check_credentials(email, password):
    print(f"Checking credentials for: {email}")  # Log the email being checked
    c.execute("SELECT password FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    
    if result is None:
        print("User not found")  # Log when user is not found
        return "User not found"
    
    stored_password = result[0]
    print(f"Stored password: {stored_password}, Provided password: {password}")  # Log both passwords
    
    if stored_password == password:
        print("Passwords match!")  # Log success if passwords match
        return True

    print("Passwords do not match!")  # Log failure if passwords don't match
    return "Incorrect password"


def save_xp(xp, email):
    c.execute("UPDATE UserData SET xp = ? WHERE email = ?",(xp, email))
    conn.commit()

def fetch_xp(email):
    c.execute("SELECT xp FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None
