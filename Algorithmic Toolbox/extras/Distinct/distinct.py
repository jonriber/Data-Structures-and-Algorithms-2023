def distinct(array):
    return len(set(array))

if __name__ == "__main__":
    testing_cases = [[2,1,1,2,3,1],[],[1,1,1]]

    for item in testing_cases:
        print(distinct(item))