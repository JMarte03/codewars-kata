""" 
    Your task is to slightly extend the Queue class' capabilities. 
    We want it to have a parameterless method that returns True if 
    the queue is empty and False otherwise. 
"""

# * CHECK queue.py FIRST *

class QueueError(IndexError):
    pass

class Queue:
    def __init__(self):
        self.queue = []
    def put(self,elem):
        self.queue.insert(0,elem)
    def get(self):
        if len(self.queue) > 0:
            elem = self.queue[-1]
            del self.queue[-1]
            return elem
        else:
            raise QueueError

class SuperQueue(Queue):
    def __init__(self):
        Queue.__init__(self)
    
    def isempty(self):
        if not self.queue: # If queue is empty
            return True # return True
        return False

que = SuperQueue()
que.put(1)
que.put("dog")
que.put(False)
for i in range(4):
    if que.isempty(): # if it is empty, print the message
        print("Queue empty")
    else:
        print(que.get()) # else show the removed element

# OUTPUT SHOULD BE:
# 1
# "dog"
# False
# "Queue empty"