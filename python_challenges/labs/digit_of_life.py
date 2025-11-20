# Some say that the Digit of Life is a digit evaluated using somebody's birthday. '
# 'It's simple - you just need to sum all the digits of the date. If the result contains 
# more than one digit, you have to repeat the addition until you get exactly one digit.  

# Your task is to write a program which:

# - asks the user her/his birthday 
# - outputs the Digit of Life for the date.

def helper(n):
    n_string = str(n) # takes a number and turns it into string
    result = 0 # final result of the function
    for digit in n_string: # sums every digit in the number
        result += int(digit)
    return result

def digit_of_life(bday):
    result = 0
    for digit in bday: # sums every digit in the birthdate
        result += int(digit)
    
    while result > 9: # runs the helper function until the result is one-digit
        result = helper(result)

    return result

# Test cases
print(digit_of_life('20031108')) # Output: 6
print(digit_of_life('19991229')) # Output: 6
print(digit_of_life('20000101')) # Output: 4

