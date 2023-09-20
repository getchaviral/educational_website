import mysql.connector
from flask import Flask, render_template, request, redirect, session, flash, url_for

app = Flask(_name_)

db_config = {
    "host": "localhost",
    "user": "root",
    "password": "Pratham123@",
    "database": "userdb",
}
db = mysql.connector.connect(**db_config)

@app.route('/')
def login():
    if 'user_id' in session:
        return redirect(url_for('dashboard'))

    return render_template('sign-up.html')

@app.route('/login', methods=['POST'])
def login_post():
    if 'user_id' in session:
        return redirect(url_for('dashboard'))

    username = request.form['username']
    password = request.form['password']

    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
    user = cursor.fetchone()

    if user and user[2] == password:
        session['user_id'] = user[0]
        session['username'] = user[1]
        flash('Login successful!', 'success')
        return redirect(url_for('dashboard'))

    flash('Invalid credentials. Please try again.', 'error')
    return redirect(url_for('login'))

@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        return f'Welcome, {session["username"]}! This is your dashboard.'
    else:
        flash('You need to log in first.', 'error')
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('username', None)
    flash('Logged out successfully.', 'success')
    return redirect(url_for('login'))

if _name_ == '_main_':
    app.run(debug=True)