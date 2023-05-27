def bin_gap(num):
    if num <=0:return 0
    bin_num = str(bin(num))
    # print("big_num",bin_num)
    filt= bin_num [2:]
    print("filt:",filt)
    gap_counter = 0
    max_value = 0
    for l in filt:
        # print(l)
        if l == "0":
            print("zero aqui!")
            gap_counter +=1
        elif l =="1":
            print("um aqui!")
            max_value = max(max_value,gap_counter)
            gap_counter =0  
    return max_value

if __name__ == "__main__":
    test_cases = [1,4,6,12,45,7,15,529,32,20,9]

    for i in test_cases:
        print("resultado:",bin_gap(i))