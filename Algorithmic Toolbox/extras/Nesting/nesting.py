def nesting(string):
    if len(string) ==0:return 1
    if string[0] == ")": return 0
    right = []
    for element in string:
        # print("element:",element)
        # print()
        # print("right:",right)
        if element == "(":
            right.append(1)
        else:
            print("caso de )")
                
            if len(right) >0 and right[-1] == 1:
                # print("caso de match",right[-1])
                right.pop()
            else:
                # print("apeend de -1")
                right.append(-1)
    # print(right)               
    if len(right) == 0: return 1
    return 0

if __name__ == "__main__":
    testing_cases = ["(()(())())","())",""]

    for i in testing_cases:
        print(nesting(i))