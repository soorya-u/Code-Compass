# _Tkinter_ - Python Reference

## Introduction

Tkinter is the standard Python GUI library for a fast and easy way to create GUI applications.

### Contents

1. [Root](#root)

2. [Geometry](#geometry)

3. [Positioning Widgets](#positioning-widget)

   - [Pack](#pack)

   - [Grid](#grid)

4. [Label](#label)

   - [Label Attributes](#label-attributes)

5. [Frame](#frame)

6. [Button](#button)

7. [Entry](#entry)

8. [Check Buttons](#check-buttons)

9. [Canvas](#canvas)

10. [References](#references)

---

## Root

Tkinter Runs on a Single Continous Loop.

```py
from tkinter import *
root = Tk()

# Contents Here

root.mainloop()
```

The _root_ variable is the Main Class that Contains other Widgets within it.

The `root.mainloop()` runs a Single Continous Loop.

All the Widgets are Placed within the Decleration and _mainloop_ Function.

---

## Geometry

`geometry` Function is used to Set the Width and Height of the Application.

_Example:_

```py
# Width x Height
root.geometry("440x440")
```

The Functions `minsize` and `maxsize` takes height and width as Parameters and sets the Minimum and Maximum Size of the Application.

```py
# (width,height)
root.minsize(200,100)
root.maxsize(800,600)
```

## Positioning Widget

There are Muliple Ways to Position a Widget within container.

### Pack

`pack()` organizes widgets in horizontal and vertical boxes that are limited to left, right, top, bottom positions.

#### Pack Attributes

- anchor = nw,s,n,e,se(direction:north,south,northwest etc)
- side = top,bottom,right,left
- fill = x,y
- padx = number(pixel)
- pady = number(pixel)

```py
label_1.pack(side=BOTTOM,anchor='nw',fill = X)
label_2.pack(side=LEFT,fill = Y)
```

### Grid

`pack()` organizes widgets the Form of Table.

#### Grid Attributes

- row = number(row of the widget)
- column = number(column of the widget)

```py
b.grid(row = 3,column=0)
```

---

## Label

Label is a Widget with which User cannot Interact.

Label should be Declared and Packed for the Widget to be Placed.

```py
l = Label(text = "This is a Label")
l.pack()
```

Label can also be used to Insert Image within the Application.

To insert _JPG_ Image, the class `PhotoImage` is used,
which comes with the Tkinter Module.

```py
img_jpg = PhotoImage(file = "image.jpg")
l_img_jpg = Label(image=img_jpg)
l_img_jpg.pack()
```

To insert _PNG_ Image, a module `PIL` is required.

```py
from PIL import Image, ImageTk

import_png_image = Image.open("image.png")
img_png = ImageTk.PhotoImage(import_png_image)
l_img_png = Label(image = img_png)
l_img_png.pack()
```

### Label Attributes

- _text_ - Adds the text
- _image_ - Adds the image
- _bg_ - background color
- _fg_ - foreground color or color of the Text
- _font_ - sets the font
  1. font=("comicsansms",10,"bold")
  2. font="comicsansms 10 bold"
- _padx_ - x padding
- _pady_ - y padding
- _relief_ - border styling - SUNKEN,RAISED,GROOVE,RIDGE

```py
title_label = Label(text = '''
Tkinter is a Python binding to the Tk GUI toolkit. It is the standard Python \ninterface to the Tk GUI toolkit, and is Python's de facto standard GUI. \nTkinter is included with standard GNU/Linux, Microsoft Windows and macOS \ninstalls of Python.''',
bg="pink",fg="white",padx=250,pady=150,font=("comicsans",10,"bold"),relief=GROOVE)
```

---

## Frame

Frame acts like a container which can be used to hold the other Widgets.

Frame acts similar to that of a Root which holds other Widgets.

```py
f1 = Frame(root,bg = 'grey',borderwidth=3,relief=GROOVE)
f1.pack(side=LEFT,fill='y')

l1 = Label(f1,text="Tkinter 1")
l1.pack(pady = 15)
```

In the Above code, the Label _l1_ is Placed within the Frame _f1_.

---

## Button

Button is an Interactive Widget which performs a task when Pressed.

```py
def funct1():
    print("Hello World")

b = Button(fg="red",text='Submit',command=funct1)
b.pack()
```

The Function _funct1()_ is called when the Button is Clicked.

---

## Entry

The Entry widget is used to provde the single line text-box to the user to accept a value from the user.

The Values of the Entry Widgets cannot be stored in Normal Variables. There are Few Objects which acts as Variables to accept the Entries.

- Boolean - `BooleanVar()`
- Double - `DoubleVar()`
- Integer - `IntVar()`
- String - `StringVar()`

```py
def view():
    # Get Methods is Used to Get the Value of Entry
    print(usernamevalue.get())
    print(passwordvalue.get())

usernamevalue = StringVar()
passwordvalue = StringVar()

username = Label(root,text = "Username: ")
password = Label(root,text = "Password: ")

usernameentry = Entry(root,textvariable=usernamevalue)
passwordentry = Entry(root,textvariable=passwordvalue)

submit_button = Button(text="Submit",command=view)

username.grid()
password.grid(row=1)
usernameentry.grid(column=1)
passwordentry.grid(row=1,column=1)
submit_button(row = 3)
```

---

## Check Buttons

The Checkbutton Widget is used to Display a Number of options to a user as toggle buttons which can be selected by clicking the Button corresponding to each Option.

```py
printervalue = IntVar()

printer = Checkbutton(text="Do you want to Print the Application?",variable=printervalue)
printer.grid()
```

---

## Canvas

The Canvas is a rectangular area intended for drawing pictures or other complex layouts. You can place graphics, text, widgets or frames on a Canvas.

canvas = Canvas(root,width=canvas_width,height=canvas_height)
canvas.pack()

```py
canvas_width = 800
canvas_height = 400

canvas = Canvas(root,width=canvas_width,height=canvas_height)
canvas.pack()

# canvasname.create_line(x1,y1,x2,y2)
canvas.create_line(0,0,800,400,fill="red")

# canvasname.create_rectangle(top_left-x1,top_left-y1,bottom_right-x2,bottom_right-y2)
canvas.create_rectangle(3,5,700,300,)

# canvasname.create_text(center_coordinate-x,center_coordinate-y)
canvas.create_text(200,200,text="Tkinter")

# canvasname.create_oval(rectangle_top_left_coordinate-x1,rectangle_top_left_coordinate-y1,rectangle_bottom_right_coordinate-x2,rectangle_bottom_right_coordinate-y2)
canvas.create_oval(3,5,700,300)
```

---

## References

1. [_Official Tkinter Documentation_](https://docs.python.org/3/library/tkinter.html)

---
