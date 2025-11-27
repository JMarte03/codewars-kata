""" 
    Exercises 01 and 02:

    The declaration of the Snake class is given below. Enrich the class 
    with a method named increment(), adding 1 to the victims property.

    Redefine the Snake class constructor so that is has a parameter to 
    initialize the victims field with a value passed to the object during 
    construction.
 """

# class Snake:
#    def __init__(self):
#        self.victims = 0

class Snake:
    def __init__(self, val):
        self.victims = val
    
    def increment(self):
        self.victims += 1

""" 
    Exercise 03:

    Can you predict the output of the following code?

 """

# class Snake:
#    pass


class Python(Snake):
    pass


print(Python.__name__, 'is a', Snake.__name__)
print(Python.__bases__[0].__name__, 'can be a', Python.__name__)


# OUTPUT:

# Python is a Snake
# Snake can be a Python