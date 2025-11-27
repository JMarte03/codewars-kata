""" 
    Exercise 3

    What is the expected output of the following code?

 """

import math

class NewValueError(ValueError): # custom exception, inherits from ValueError
    def __init__(self, name, color, state):
        self.data = (name, color, state)

try:
    raise NewValueError("Enemy warning", "Red alert", "High readiness") # when a 'NewValueError' exception is raised, an instance of that class is created
except NewValueError as nve: # the instance or objects name is what comes after the 'as' keyword, in this case, 'nve'
    for arg in nve.data: # now we access nve.data, the tuple created at line 5
        print(arg, end='! ')

# Output => Enemy warning! Red alert! High readiness! 