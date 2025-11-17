def is_palindrome(s):
    s_reversed = s[::-1] # Reverses the string with slicing
    return s_reversed.lower() == s.lower() # Compares the reversed string with the original string

# Test Cases

print(is_palindrome("madam")) #=> True
print(is_palindrome("a")) #=> True
print(is_palindrome("Abba")) #=> True
print(is_palindrome("abba")) #=> True
print(is_palindrome("walter")) #=> False
print(is_palindrome("kodok")) #=> True
print(is_palindrome("kasue")) #=> False



