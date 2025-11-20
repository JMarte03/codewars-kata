""" Your task is to write a program which:

asks the user for two separate texts;
checks whether, the entered texts are anagrams and prints the result.
Note:

- assume that two empty strings are not anagrams;
- treat upper and lower-case letters as equal;
- spaces are not taken into account during the check - treat them as non-existent """

def anagrams(word1, word2):
    for sub in word1.lower(): # iterate through the first word
        if sub not in word2.lower(): # if a letter from the first word is not present in the second word, then it is not an anagrams
            return 'Not anagrams'
    return 'Anagrams'

word1 = input("Enter the first word: ")
word2 = input("Enter the second word: ")
print(anagrams(word1, word2))


