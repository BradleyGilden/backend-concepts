#!/usr/bin/python3

"""
using flask with templates

Author: Bradley Dillion Gilden
Date: 19-10-2023
"""


from flask import Flask, render_template

app = Flask(__name__)

posts = [
    {
        'author': 'Bradley Gilden',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'April 20, 2018'
    },
    {
        'author': 'Jane Doe',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'April 21, 2022'
    }
]


@app.route("/", strict_slashes=False)
@app.route("/home", strict_slashes=False)
def home():
    return render_template('home.html', posts=posts)


@app.route("/about", strict_slashes=False)
def about():
    return render_template('about.html', title='About')


if __name__ == '__main__':
    app.run(debug=True)
