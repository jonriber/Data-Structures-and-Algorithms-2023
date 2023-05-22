# import sys
# input = sys.stdin.read()

# fib_number = int(input)

## Recursive implementation
# worst case scenario, time related
def fibonacci(n):
    print("n:",n)
    if(n<=1):
        print("case 1")
        return 1
    else:
        print("returning the combination")
        return fibonacci(n-1) + fibonacci(n-2)
    
if __name__ == "__main__":
    result = fibonacci(8)
    print("resultado é:",result)
    
