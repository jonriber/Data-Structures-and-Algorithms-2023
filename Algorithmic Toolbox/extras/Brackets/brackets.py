def brackets(array):
    print("array:",array)
    stack = list()
    for char in array:
        print(char)
        if(len(array) <=1):
            if char in ["}","]",")"]:
                return 0
            elif char =="{": list.append(1)
            elif char =="[": list.append(2)
            elif char =="(": list.append(3)
        else:
            if char == "{": stack.append(1)
            elif char == "[": stack.append(2)
            elif char == "(": stack.append(3)
            elif char =="}":
                if stack[-1] == 1: stack.pop()
                else :return 0
            elif char =="]":
                if stack[-1] == 2: stack.pop()
                else :return 0
            elif char ==")":
                if stack[-1] == 3: stack.pop()
                else :return 0
            else: return 0
    return 1

if __name__ == "__main__":
    print("initializing")
    testing_cases = ["([)()]","{[()()]}",'}()','[{}]',')','}']

    for case in testing_cases:
        print(brackets(case))