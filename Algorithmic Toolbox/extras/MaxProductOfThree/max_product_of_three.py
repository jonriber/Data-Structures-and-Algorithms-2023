def max_prod_of_three (array):
    sorted_array = sorted(array)
    cond_1 = (sorted_array[0] * sorted_array[1]* sorted_array[-1])
    cond_2 = (sorted_array[-3] * sorted_array[-2]* sorted_array[-1])
    return max(cond_1,cond_2)

if __name__ == "__main__":
    testing_cases = [[-1,30,1,20],[-3,1,2,-2,5,6],[-1,-1,-1,-5,10]]

    for item in testing_cases:
        print(max_prod_of_three(item))