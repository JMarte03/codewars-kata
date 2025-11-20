# Your task is to write a program which:

# - asks the user for one line of text to encrypt;
# - asks the user for a shift value (an integer number from the range 1..25 - note: you should force the user to enter a valid shift value (don't give up and don't let bad data fool you!)
# - prints out the encoded text.

def caesar_cipher(text, shift_value):

    if not (shift_value >= 1 and shift_value <= 25): # terminates if the jump value is not valid
        return "Shift value must be between 1 and 25."

    cipher = "" # a variable to store the final result

    for sub in text:
        # iterating through the text (uncrypted) and transform only the alphabetical characters
        if sub.isalpha():
            code = ord(sub) # take the letter's codepoint
            for i in range(shift_value):
                code += 1 # and increment it by one until the loop reaches shift_value
                if sub.isupper() and code > ord("Z"): # if it goes beyond Z, set it to A. Automatically changes the codepoint of the letter, so this condition won't be fulfilled again for now.
                    code = ord("A")
                elif sub.islower() and code > ord("z"): # same implementation, but for lowercased letters.
                    code = ord("a")
            sub = chr(code) # the letter transformed after all increments.
        cipher += sub # concatenate or append the letter (or character) to the final result.
    return cipher # return the result.

text = input("Enter a message to encrypt: ")
shift_value = int(input("Enter a shift jump value: "))
print(caesar_cipher(text, shift_value))