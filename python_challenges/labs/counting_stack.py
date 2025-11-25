""" 
    Your task is to extend the Stack class behavior in such a way so that the 
    class is able to count all the elements that are pushed and popped 
    (we assume that counting pops is enough). Use the Stack class we've provided in the editor.

    Follow the hints:

    - introduce a property designed to count pop operations and name it in a way which guarantees hiding it;
    - initialize it to zero inside the constructor;
    - provide a method which returns the value currently assigned to the counter (name it get_counter()).

    Complete the code in the editor. Run it to check whether your code outputs 100. 
"""

# Superclass
class Stack:
    def __init__(self): # super constructor
        self.__stk = []

    def push(self, val):
        self.__stk.append(val)

    def pop(self): # Super pop method
        val = self.__stk[-1]
        del self.__stk[-1]
        return val # returns a value


class CountingStack(Stack): # Sub-class
    def __init__(self): # sub-constructor
        Stack.__init__(self) # superclass' constructor invocation
        self.__count = 0
        
    def get_counter(self): # just a getter. Returns the count.
        return self.__count

    # Overriding of the pop method. 
    def pop(self): 
        self.__count += 1  # We add this new functionality   
        value = Stack.pop(self) # We keep the main functinality of the superclass pop
        return value

stk = CountingStack()
for i in range(100):
    stk.push(i)
    stk.pop()
print(stk.get_counter())
