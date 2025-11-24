#Your task is to write a function able to input integer values and to check if 
#they are within a specified range.


#The function should:

# 1. accept three arguments: a prompt, a low acceptable limit, and a high acceptable limit;
# 2. if the user enters a string that is not an integer value, the function should emit the message Error: wrong input, and ask the user to input the value again;
# 3. if the user enters a number which falls outside the specified range, the function should emit the message Error: the value is not within permitted range (min..max) and ask the user to input the value again;
# 4. if the input value is valid, return it as a result.

def read_int(prompt, min, max):
    try:
        v = int(input(prompt)) # This might raise a ValueError exception.
        assert max >= v >= min # if this assert is not positive an AssertionError exception will be raised.
        return v # Always returning a value.
    except ValueError:
        print('Error: wrong input')
        return read_int(prompt, min, max) # recursion
    except AssertionError:
        print('Error: the value is not within permitted range', min, '...', max)
        return read_int(prompt, min, max) # recursion

v = read_int("Enter a number from -10 to 10: ", -10, 10)
print("The number is:", v)
