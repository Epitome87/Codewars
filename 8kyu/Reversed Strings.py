# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

# My solution:
def solution(str):
    result = ""
    for i in range(len(str) - 1, -1, -1):
        result += str[i]
    return result
    
# Top user solution:
def solution(str):
  return str[::-1]