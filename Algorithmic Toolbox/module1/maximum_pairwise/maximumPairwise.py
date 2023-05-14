def max_pairwise_product(numbers): 
#    print("number sorted:",numbers)
   reversedList = sorted(numbers,reverse=True)
#    print(reversedList)
#    print(reversedList[0],reversedList[1])
   return (reversedList[0]*reversedList[1])


if __name__ == '__main__':
    _ = int(input())
    input_numbers = list(map(int, input().split()))
    print(max_pairwise_product(input_numbers))