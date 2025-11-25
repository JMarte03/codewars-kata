""" 

    Your task is to implement the Queue class with two basic operations:

    - put(element), which puts an element at end of the queue;
    - get(), which takes an element from the front of the queue and returns it as the result (the queue cannot be empty to successfully perform it.)
    
    Follow the hints:

    - use a list as your storage (just like we did with the stack)
    - put() should append elements to the beginning of the list, while get() should remove the elements from the end of the list;
    - define a new exception named QueueError (choose an exception to derive it from) and raise it when get() tries to operate on an empty list. 

"""


class QueueError(IndexError):  # Inherit from IndexError
    pass

class Queue:
    def __init__(self):
        self.queue = []

    def put(self, elem):
        self.queue.insert(0, elem) # The lastest (or newer) elements are appended at the begginning. It'll make sense in a few lines.

    def get(self):
        if not self.queue:         # check if empty
            raise QueueError()     # raise custom exception
        return self.queue.pop()    # pop from the end (FIFO). The first (or oldest) element in a list should be the first one to get removed.   
    
        """ 
            MY ACTUAL CODE FOR THE 'POP' PART:  

            val = self.queue[-1]
            del self.queue[-1]
            return val

            # another cleaner approach could be: return self.queue.pop()

        """

que = Queue()
que.put(1)
que.put("dog")
que.put(False)

try:
    for i in range(4):
        print(que.get())
except QueueError:
    print("Queue error")

# OUTPUT SHOULD BE:
# 1
# "dog"
# False
# "Queue error"