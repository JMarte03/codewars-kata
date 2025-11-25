""" Exercise 01 """

# Assuming that there is a class named Snakes, 
# write the very first line of the Python class 
# declaration, expressing the fact that the new class is 
# actually a subclass of Snake.

class Snakes:
    def __init__(self):
        self.color = "green"

class Python(Snakes):
    pass

""" Exercise 02 """

# Something is missing from the following declaration – what?

# class Snakes:
#    def __init__():
#        self.sound = 'Sssssss'

class Snakes:
    def __init__(self):
        self.sound = 'Sssssss'

# Answer: the 'self' parameter.

""" Exercise 03 """

# Modify the code to guarantee that the venomous property is private.

# class Snakes:
#    def __init__(self):
#         self.venomous = True

class Snakes:
    def __init__(self):
        self.__venomous = True