import sys
input = sys.stdin.read()
fib_number = int(input)

## Recursive implementation
# worst case scenario, time related
def fibonacci(n):
    if(n<=1):
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)
    
