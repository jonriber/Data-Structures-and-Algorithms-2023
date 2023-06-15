def max_3_digits(number,k):
    remaining_add = k
    digits = list(str(number))

    for index,value in enumerate(digits):
        print(index,value)
        if value !=9:
            diff = min(9-int(value),remaining_add)
            digits[index] = str(int(digits[index])+ diff)
            remaining_add -= diff
        if remaining_add == 0:
            break
    # print(digits)
    return int(''.join(digits))

if __name__ =="__main__":
    testingCases = [(952,10),(111,10)]
    for i in testingCases:
        # print(i,i[0])
        print(max_3_digits(i[0],i[1]))