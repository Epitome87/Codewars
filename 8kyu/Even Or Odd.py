# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# My solution:
def even_or_odd(number):
    if number % 2: 
        return 'Odd'
    return 'Even'

# Top user solution:
def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'