#!/usr/bin/python3

"""
minimal Flask application demo from Quickstart

Author: Bradley Dillion Gilden
Date: 19-10-2023
"""


from flask import Flask

app = Flask(__name__)


@app.route("/", strict_slashes=False)
@app.route("/home", strict_slashes=False)
def home():
    return "<h1 align=center>Home Page</h1>"


@app.route("/about", strict_slashes=False)
def about():
    return "<h1 align=center>About Page</h1>"


if __name__ == '__main__':
    app.run(debug=True)
