def fibo(n):
    # print("n",n)
    if n <= 1: return n
    fibo_array = [i for i in range(n+2)]
    print("array:",fibo_array)
    for num in fibo_array:
        print("number:",num)
        print(fibo_array[num])
        print(fibo_array[num-1])
        print(fibo_array[num-2])

        fibo_array[num] = fibo_array[num-1] + fibo_array[num-2]
    print("final array:",fibo_array)
    return fibo_array[n]

if __name__ == "__main__":
    input_n = int(input())
    result = fibo(input_n)
    print(result)
   