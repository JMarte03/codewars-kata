# This code prints seven-segment displays. 
# Not solved by me.

seven_segment_codes = {
    "0": ["111", "101", "101", "101", "111"],
    "1": ["001", "001", "001", "001", "001"],
    "2": ["111", "001", "111", "100", "111"],
    "3": ["111", "001", "111", "001", "111"],
    "4": ["101", "101", "111", "001", "001"],
    "5": ["111", "100", "111", "001", "111"],
    "6": ["111", "100", "111", "101", "111"],
    "7": ["111", "001", "001", "001", "001"],
    "8": ["111", "101", "111", "101", "111"],
    "9": ["111", "101", "111", "001", "111"],
}

def helper(digit):
    # Convert one digit into its 7-segment block as lines of # and spaces.
    pattern = seven_segment_codes[digit]  # e.g. ["111","100","111","001","111"]
    
    result = []

    for row in pattern:
        new_row = ""
        for char in row:
            if char == "1":
                new_row += "#"
            else:
                new_row += " "
        result.append(new_row)

    return result

def led_display(text):  
    # Convert each digit to its 5-line block
    blocks = [helper(d) for d in text]

    final_output = []

    for row in range(5):  # because each digit has 5 rows
        line = ""
        for block in blocks:
            line += block[row] + " "
        final_output.append(line.rstrip())

    return "\n".join(final_output)


inp = input('Number: ')
print(led_display(inp))
