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
          python_q4 int DEFAULT 0,
          python_q5 int DEFAULT 0,
          python_quiz1 int DEFAULT 0,
          python_quiz2 int DEFAULT 0,
          python_quiz3 int DEFAULT 0,
          java_chapter1 int DEFAULT 0,
          java_chapter2 int DEFAULT 0,
          java_chapter3 int DEFAULT 0,
          java_q1 int DEFAULT 0,
          java_q2 int DEFAULT 0,
          java_q3 int DEFAULT 0, 
          java_q4 int DEFAULT 0, 
          java_q5 int DEFAULT 0, 
          java_quiz1 int DEFAULT 0,
          java_quiz2 int DEFAULT 0,
          java_quiz3 int DEFAULT 0,
          js_chapter1 int DEFAULT 0,
          js_chapter2 int DEFAULT 0,
          js_chapter3 int DEFAULT 0,
          js_q1 int DEFAULT 0,
          js_q2 int DEFAULT 0,
          js_q3 int DEFAULT 0, 
          js_q4 int DEFAULT 0,
          js_q5 int DEFAULT 0,
          js_quiz1 int DEFAULT 0,
          js_quiz2 int DEFAULT 0,
          js_quiz3 int DEFAULT 0,
          c_chapter1 int DEFAULT 0,
          c_chapter2 int DEFAULT 0,
          c_chapter3 int DEFAULT 0,
          c_q1 int DEFAULT 0,
          c_q2 int DEFAULT 0,
          c_q3 int DEFAULT 0,
          c_q4 int DEFAULT 0,
          c_q5 int DEFAULT 0,
          c_quiz1 int DEFAULT 0,
          c_quiz2 int DEFAULT 0,
          c_quiz3 int DEFAULT 0,
          level int DEFAULT 1,
          coins int DEFAULT 0,
          badge1 int DEFAULT 0,
          badge2 int DEFAULT 0,
          badge3 int DEFAULT 0,
          badge4 int DEFAULT 0,
          badge5 int DEFAULT 0
          )""")


## User DB Functions

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


## Validate login

def check_credentials(email, password):
    print(f"Checking credentials for: {email}")  
    c.execute("SELECT password FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result is None:
        print("User not found") 
        return "User not found"
    stored_password = result[0]
    print(f"Stored password: {stored_password}, Provided password: {password}") 
    if stored_password == password:
        print("Passwords match!")  
        return True
    print("Passwords do not match!") 
    return "Incorrect password"


## XP Functions

def save_xp(xp, email):
    c.execute("UPDATE UserData SET xp = ? WHERE email = ?",(xp, email))
    conn.commit()

def fetch_xp(email):
    c.execute("SELECT xp FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Level Functions

def save_level(level, email):
    c.execute("UPDATE UserData SET level = ? WHERE email = ?",(level, email))
    conn.commit()

def fetch_level(email):
    c.execute("SELECT level FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Coin Functions

def save_coins(coins, email):
    c.execute("UPDATE UserData SET coins = ? WHERE email = ?",(coins, email))
    conn.commit()

def fetch_coins(email):
    c.execute("SELECT coins FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Badge Functions

## Save Badge Functions

def save_badge1(badge1, email):
    c.execute("UPDATE UserData SET badge1 = ? WHERE email = ?",(badge1, email))
    conn.commit()

def save_badge2(badge2, email):
    c.execute("UPDATE UserData SET badge2 = ? WHERE email = ?",(badge2, email))
    conn.commit()

def save_badge3(badge3, email):
    c.execute("UPDATE UserData SET badge3 = ? WHERE email = ?",(badge3, email))
    conn.commit()

def save_badge4(badge4, email):
    c.execute("UPDATE UserData SET badge4 = ? WHERE email = ?",(badge4, email))
    conn.commit()

def save_badge5(badge5, email):
    c.execute("UPDATE UserData SET badge5 = ? WHERE email = ?",(badge5, email))
    conn.commit()

# Fetch Badge Functions

def fetch_badge1(email):
    c.execute("SELECT badge1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_badge2(email):
    c.execute("SELECT badge2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_badge3(email):
    c.execute("SELECT badge3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_badge4(email):
    c.execute("SELECT badge4 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_badge5(email):
    c.execute("SELECT badge5 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Fetch Python DB Functions


def fetch_python_chapter1(email):
    c.execute("SELECT python_chapter1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_chapter2(email):
    c.execute("SELECT python_chapter2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_chapter3(email):
    c.execute("SELECT python_chapter3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_q1(email):
    c.execute("SELECT python_q1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_q2(email):
    c.execute("SELECT python_q2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_q3(email):
    c.execute("SELECT python_q3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_q4(email):
    c.execute("SELECT python_q4 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_q5(email):
    c.execute("SELECT python_q5 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_quiz1(email):
    c.execute("SELECT python_quiz1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_quiz2(email):
    c.execute("SELECT python_quiz2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_python_quiz3(email):
    c.execute("SELECT python_quiz3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Fetch JAVA DB Functions


def fetch_java_chapter1(email):
    c.execute("SELECT java_chapter1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_chapter2(email):
    c.execute("SELECT java_chapter2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_chapter3(email):
    c.execute("SELECT java_chapter3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_q1(email):
    c.execute("SELECT java_q1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_q2(email):
    c.execute("SELECT java_q2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_q3(email):
    c.execute("SELECT java_q3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_q4(email):
    c.execute("SELECT java_q4 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_q5(email):
    c.execute("SELECT java_q5 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_quiz1(email):
    c.execute("SELECT java_quiz1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_quiz2(email):
    c.execute("SELECT java_quiz2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_java_quiz3(email):
    c.execute("SELECT java_quiz3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Fetch C++ DB Functions


def fetch_c_chapter1(email):
    c.execute("SELECT c_chapter1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_chapter2(email):
    c.execute("SELECT c_chapter2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_chapter3(email):
    c.execute("SELECT c_chapter3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_q1(email):
    c.execute("SELECT c_q1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_q2(email):
    c.execute("SELECT c_q2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_q3(email):
    c.execute("SELECT c_q3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_q4(email):
    c.execute("SELECT c_q4 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_q5(email):
    c.execute("SELECT c_q5 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_quiz1(email):
    c.execute("SELECT c_quiz1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_quiz2(email):
    c.execute("SELECT c_quiz2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_c_quiz3(email):
    c.execute("SELECT c_quiz3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Fetch JS DB Functions


def fetch_js_chapter1(email):
    c.execute("SELECT js_chapter1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_chapter2(email):
    c.execute("SELECT js_chapter2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_chapter3(email):
    c.execute("SELECT js_chapter3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_q1(email):
    c.execute("SELECT js_q1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


def fetch_js_q2(email):
    c.execute("SELECT js_q2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_q3(email):
    c.execute("SELECT js_q3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_q4(email):
    c.execute("SELECT js_q4 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_q5(email):
    c.execute("SELECT js_q5 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_quiz1(email):
    c.execute("SELECT js_quiz1 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_quiz2(email):
    c.execute("SELECT js_quiz2 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None

def fetch_js_quiz3(email):
    c.execute("SELECT js_quiz3 FROM UserData WHERE email = ?", (email,))
    result = c.fetchone()
    if result:
        return result[0]
    return None


## Save Python DB Functions

## Save Python Chapters

def save_python_chapter1(python_chapter1, email):
    c.execute("UPDATE UserData SET python_chapter1 = ? WHERE email = ?",(python_chapter1, email))
    conn.commit()

def save_python_chapter2(python_chapter2, email):
    c.execute("UPDATE UserData SET python_chapter2 = ? WHERE email = ?",(python_chapter2, email))
    conn.commit()

def save_python_chapter3(python_chapter3, email):
    c.execute("UPDATE UserData SET python_chapter3 = ? WHERE email = ?",(python_chapter3, email))
    conn.commit()

## Save Python Questions

def save_python_q1(python_q1, email):
    c.execute("UPDATE UserData SET python_q1 = ? WHERE email = ?",(python_q1, email))
    conn.commit()

def save_python_q2(python_q2, email):
    c.execute("UPDATE UserData SET python_q2 = ? WHERE email = ?",(python_q2, email))
    conn.commit()

def save_python_q3(python_q3, email):
    c.execute("UPDATE UserData SET python_q3 = ? WHERE email = ?",(python_q3, email))
    conn.commit()

def save_python_q4(python_q4, email):
    c.execute("UPDATE UserData SET python_q4 = ? WHERE email = ?",(python_q4, email))
    conn.commit()

def save_python_q5(python_q5, email):
    c.execute("UPDATE UserData SET python_q5 = ? WHERE email = ?",(python_q5, email))
    conn.commit()

## Save Python Quiz

def save_python_quiz1(python_quiz1, email):
    c.execute("UPDATE UserData SET python_quiz1 = ? WHERE email = ?",(python_quiz1, email))
    conn.commit()

def save_python_quiz2(python_quiz2, email):
    c.execute("UPDATE UserData SET python_quiz2 = ? WHERE email = ?",(python_quiz2, email))
    conn.commit()

def save_python_quiz3(python_quiz3, email):
    c.execute("UPDATE UserData SET python_quiz3 = ? WHERE email = ?",(python_quiz3, email))
    conn.commit()


## Save Java DB Functions

## Save Java Chapters

def save_java_chapter1(java_chapter1, email):
    c.execute("UPDATE UserData SET java_chapter1 = ? WHERE email = ?",(java_chapter1, email))
    conn.commit()

def save_java_chapter2(java_chapter2, email):
    c.execute("UPDATE UserData SET java_chapter2 = ? WHERE email = ?",(java_chapter2, email))
    conn.commit()

def save_java_chapter3(java_chapter3, email):
    c.execute("UPDATE UserData SET java_chapter3 = ? WHERE email = ?",(java_chapter3, email))
    conn.commit()

## Save Java Questions

def save_java_q1(java_q1, email):
    c.execute("UPDATE UserData SET java_q1 = ? WHERE email = ?",(java_q1, email))
    conn.commit()

def save_java_q2(java_q2, email):
    c.execute("UPDATE UserData SET java_q2 = ? WHERE email = ?",(java_q2, email))
    conn.commit()

def save_java_q3(java_q3, email):
    c.execute("UPDATE UserData SET java_q3 = ? WHERE email = ?",(java_q3, email))
    conn.commit()

def save_java_q4(java_q4, email):
    c.execute("UPDATE UserData SET java_q4 = ? WHERE email = ?",(java_q4, email))
    conn.commit()

def save_java_q5(java_q5, email):
    c.execute("UPDATE UserData SET java_q5 = ? WHERE email = ?",(java_q5, email))
    conn.commit()

## Save Java Quiz

def save_java_quiz1(java_quiz1, email):
    c.execute("UPDATE UserData SET java_quiz1 = ? WHERE email = ?",(java_quiz1, email))
    conn.commit()

def save_java_quiz2(java_quiz2, email):
    c.execute("UPDATE UserData SET java_quiz2 = ? WHERE email = ?",(java_quiz2, email))
    conn.commit()

def save_java_quiz3(java_quiz3, email):
    c.execute("UPDATE UserData SET java_quiz3 = ? WHERE email = ?",(java_quiz3, email))
    conn.commit()


## Save JS DB Functions

## Save JS Chapters

def save_js_chapter1(js_chapter1, email):
    c.execute("UPDATE UserData SET js_chapter1 = ? WHERE email = ?",(js_chapter1, email))
    conn.commit()

def save_js_chapter2(js_chapter2, email):
    c.execute("UPDATE UserData SET js_chapter2 = ? WHERE email = ?",(js_chapter2, email))
    conn.commit()

def save_js_chapter3(js_chapter3, email):
    c.execute("UPDATE UserData SET js_chapter3 = ? WHERE email = ?",(js_chapter3, email))
    conn.commit()

## Save JS Questions

def save_js_q1(js_q1, email):
    c.execute("UPDATE UserData SET js_q1 = ? WHERE email = ?",(js_q1, email))
    conn.commit()

def save_js_q2(js_q2, email):
    c.execute("UPDATE UserData SET js_q2 = ? WHERE email = ?",(js_q2, email))
    conn.commit()

def save_js_q3(js_q3, email):
    c.execute("UPDATE UserData SET js_q3 = ? WHERE email = ?",(js_q3, email))
    conn.commit()

def save_js_q4(js_q4, email):
    c.execute("UPDATE UserData SET js_q4 = ? WHERE email = ?",(js_q4, email))
    conn.commit()

def save_js_q5(js_q5, email):
    c.execute("UPDATE UserData SET js_q5 = ? WHERE email = ?",(js_q5, email))
    conn.commit()

## Save JS Quiz

def save_js_quiz1(js_quiz1, email):
    c.execute("UPDATE UserData SET js_quiz1 = ? WHERE email = ?",(js_quiz1, email))
    conn.commit()

def save_js_quiz2(js_quiz2, email):
    c.execute("UPDATE UserData SET js_quiz2 = ? WHERE email = ?",(js_quiz2, email))
    conn.commit()

def save_js_quiz3(js_quiz3, email):
    c.execute("UPDATE UserData SET js_quiz3 = ? WHERE email = ?",(js_quiz3, email))
    conn.commit()


## Save C++ DB Functions

## Save C++ Chapters

def save_c_chapter1(c_chapter1, email):
    c.execute("UPDATE UserData SET c_chapter1 = ? WHERE email = ?",(c_chapter1, email))
    conn.commit()

def save_c_chapter2(c_chapter2, email):
    c.execute("UPDATE UserData SET c_chapter2 = ? WHERE email = ?",(c_chapter2, email))
    conn.commit()

def save_c_chapter3(c_chapter3, email):
    c.execute("UPDATE UserData SET c_chapter3 = ? WHERE email = ?",(c_chapter3, email))
    conn.commit()

## Save C++ Questions

def save_c_q1(c_q1, email):
    c.execute("UPDATE UserData SET c_q1 = ? WHERE email = ?",(c_q1, email))
    conn.commit()

def save_c_q2(c_q2, email):
    c.execute("UPDATE UserData SET c_q2 = ? WHERE email = ?",(c_q2, email))
    conn.commit()

def save_c_q3(c_q3, email):
    c.execute("UPDATE UserData SET c_q3 = ? WHERE email = ?",(c_q3, email))
    conn.commit()

def save_c_q4(c_q4, email):
    c.execute("UPDATE UserData SET c_q4 = ? WHERE email = ?",(c_q4, email))
    conn.commit()

def save_c_q5(c_q5, email):
    c.execute("UPDATE UserData SET c_q5 = ? WHERE email = ?",(c_q5, email))
    conn.commit()

## Save C++ Quiz

def save_c_quiz1(c_quiz1, email):
    c.execute("UPDATE UserData SET c_quiz1 = ? WHERE email = ?",(c_quiz1, email))
    conn.commit()

def save_c_quiz2(c_quiz2, email):
    c.execute("UPDATE UserData SET c_quiz2 = ? WHERE email = ?",(c_quiz2, email))
    conn.commit()

def save_c_quiz3(c_quiz3, email):
    c.execute("UPDATE UserData SET c_quiz3 = ? WHERE email = ?",(c_quiz3, email))
    conn.commit()