# Flask Reference

## Introduction

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. However, it supports extensions that can add application features as if they were implemented in Flask itself.

### Contents

1. [Basic Flask Template](#basic-flask-template)

2. [Structure of Flask Project](#structure-of-flask-project)

3. [Rendering HTML](#rendering-html)

4. [Jinja](#jinja)

   - [Jinja Syntax](#jinja-syntax)

   - [Template Inheritance](#template-inheritance)

5. [POST Method](#post-method)

6. [Dynamic Route](#dynamic-route)

7. [References](#references)

---

## Basic Flask Template

```py
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return 'Hello-World'


if __name__ == '__main__':
    app.run()

```

The Above is the Basic Template of _app.py_ File.

- `@app.route()` is a Decorator which accepts any Route as well as the Types of Methods that are Supported.

- It Executes the Method Associated to it whenever the Specific Route is Accessed.

---

## Structure of Flask Project

The Structure of Flask Project is as Follows:

```tree
project-name
    │
    ├── \static
    ├── \templates
    └── app.py
```

- _static_: Any Files Which are Present inside this Directory is Made Publically Available.
- _templates_: It contains all the HTML Pages that should be Rendered.
- app.py: The Main Application which runs Flask.

---

## Rendering HTML

In order to Render an HTML page, we need to import a Function `render_template()` from flask.

The HTML present in the _templates_ Directory is rendered as Follows:

```py
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    name = "Bob"
    age = 21
    return render_template('index.html', name=name, age=age)


if __name__ == '__main__':
    app.run()
```

- `render_template()` Function accepts Multiple Key-Value Pairs that can be Used within HTML.
- This can be Done with the help of Jinja Templating Engine.

---

## Jinja

Jinja is a templating language for Python, used to generate dynamic HTML, XML or other markup formats.

### Jinja Syntax

- j.if

```html
{% if condition %}
<!-- Code -->
{% endif %}
```

- j.if-else

```html
{% if condition %}
<!-- Code -->
{% else %}
<!-- Code -->
{% endif %}
```

- j.if-elif-else

```html
{% if condition %}
<!-- Code -->
{% elif condition2 %}
<!-- Code -->
{% else %}
<!-- Code -->
{% endif %}
```

- j.if-elif-else

```html
{% if condition %}
<!-- Code -->
{% elif condition2 %}
<!-- Code -->
{% else %}
<!-- Code -->
{% endif %}
```

- j.for

```html
{% for item in iterable %}
<!-- Code -->
{% endfor %}
```

- j.url

```html
{{ url_for('endpoint' ) }}
```

### Template Inheritance

Template inheritance allows you to build a base template that contains all the common elements of your site and defines blocks that child templates can override.

- j.block

```html
{% block name %}
<!-- Code -->
{% endblock name %}
```

- j.extends

```html
{% extends 'filename' %}
```

_Example:_

```html
<!-- header.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  {% block form %} {% endblock form %}
</html>
```

```html
<!-- index.html -->

{% extends 'header.html' %} {% block form %}

<body>
  <h1>Extended Form</h1>
  <h2>Hello {{name}}</h2>
  <br /><br />
  <form action="/" method="post">
    <label for="Name: ">
      <input type="text" name="name" placeholder="Enter your Name" />
    </label>
    <button type="submit">Submit</button>
  </form>
</body>

{% endblock form %}
```

---

## POST Method

By default, Routes does not Support any Requests except GET in Flask.

The Requests which are used, are passed as a Parameter to the Decorator.

```py
@app.route("/", methods=['GET', 'POST'])
```

_request_ is used to find the type of Request and the Datas. Itimported from flask.

```py
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    name = 'User'
    if request.method=='POST':
        name = request.form['name']
    return render_template('index.html', name=name)


if __name__ == '__main__':
    app.run(debug=True, port=7000)
```

---

## Dynamic Route

```py
from flask import Flask

app = Flask(__name__)


@app.route("/student/<int:roll_no>")
def student(roll_no):
    return f'''
        <h1>Roll Number: {roll_no}<\h1>
    '''


if __name__ == '__main__':
    app.run()

```

---

## References

---
