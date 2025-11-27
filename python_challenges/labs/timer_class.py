""" 
    The class itself should provide the following facilities:

        - objects of the class should be "printable", i.e. they should be able to implicitly 
        convert themselves into strings of the following form: "hh:mm:ss", 
        with leading zeros added when any of the values is less than 10;

        - the class should be equipped with parameterless methods called next_second() 
        and previous_second(), incrementing the time stored inside objects by +1/-1 
        second respectively. 
    
    Use the following hints:

        - all object's properties should be private;
        - consider writing a separate function (not method!) to format the time string. 
 """

# This function formats the time into hh:mm:ss (adds trailing zero's when neccessary)
def time_format(time): # sample 9:12:3 => 09:12:03
    formatted_time = []
    for n in time.split(":"):
        num = int(n)
        if num <= 9: # if it's less than or equal to nine, we add a trailing zero.
            n = '0' + n
            formatted_time.append(n)
        else:
            formatted_time.append(n)
    return ':'.join(formatted_time) # back to string

class Timer:
    time = ""
    def __init__(self, h=0, m=0, s=0):
        self.__hour = h
        self.__minute = m
        self.__second = s

    def __str__(self): # this special method turns the object into a printable string
        return time_format(f"{self.__hour}:{self.__minute}:{self.__second}")

    def next_second(self):
        self.__second += 1 # adding a second
    
        if self.__second > 59:
            self.__second = 0
            self.__minute += 1

        if self.__minute > 59:
            self.__minute = 0
            self.__hour += 1
            
        if self.__hour > 23:
            self.__hour, self.__minute, self.second = 0, 0, 0

        return time_format(f"{self.__hour}:{self.__minute}:{self.__second}") # use the time_format function to format the string.

    def prev_second(self):
        self.__second -= 1 # substracting a second
    
        if self.__second < 0:
            self.__second = 59
            self.__minute -= 1

        if self.__minute < 0:
            self.__minute = 59
            self.__hour -= 1
            
        if self.__hour < 0:
            self.__hour, self.__minute, self.second = 23, 59, 59

        return time_format(f"{self.__hour}:{self.__minute}:{self.__second}")

timer = Timer(21, 58, 3)
print(timer)
timer.next_second()
print(timer)
timer.prev_second()
print(timer)
