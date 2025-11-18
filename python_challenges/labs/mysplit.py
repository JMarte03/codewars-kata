# A function that behaves almost exactly as the .split() method in python. Separators will be whitespaces.

def mysplit(str):
    list = [] # The resulting list
    item = "" # Each item of the resulting list

    # Here we iterate through the str passed into the function, stripping leading whitespaces on the left and right
    for substr in str.strip(): # substr is everything inside the string
        if substr != " ":
            item += substr # A single item of the list is made of one or more substrings different than a whitespace
        else:
            # The moment we find a whitespace it will be a separator, so we append it to the list and then clear the item variable
            list.append(item)
            item = "" 
    list.append(item) # for cases where there's only one item (e.g: one-word strings like 'abc', 'hi')
    return list

# Test cases
print(mysplit("To be or not to be, that is the question")) # Should output: ['To', 'be', 'or', 'not', 'to', 'be,', 'that', 'is', 'the', 'question']
print(mysplit("To be or not to be,that is the question")) # Should output: ['To', 'be', 'or', 'not', 'to', 'be,that', 'is', 'the', 'question']
print(mysplit("   ")) # Should output: ['']
print(mysplit(" abc ")) # Should output: ['abc']
print(mysplit("")) # Should output: ['']
