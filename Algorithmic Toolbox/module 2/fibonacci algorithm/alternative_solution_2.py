def fibo(n):
    fibo_array = [i for i in range(0,n+1)]
    print('array:',fibo_array)

    for num in range(2,n):
        print(fibo_array[num])
        fibo_array[num] = fibo_array[num-1] + fibo_array[num-2]
    print("final array:",fibo_array)
    return fibo_array[n-1]

if __name__ == "__main__":
    result = fibo(10)
    print("result is:",result)