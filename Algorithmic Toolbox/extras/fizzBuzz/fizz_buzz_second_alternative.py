def fizz_buzz(n):
    if n<1 : return print("negative number")

    for i in range(1,n):
        if i%3==0 and i%5 == 0: print("FizzBuzz")
        elif i%3==0:  print("Fizz")
        elif i%5==0:  print("Buzz")
        else:  print(i)


if __name__=="__main__":
    test_cases = [ 2,4,5,10,11,-11,35,40]
    for index,value in enumerate(test_cases):
        print(fizz_buzz(value))