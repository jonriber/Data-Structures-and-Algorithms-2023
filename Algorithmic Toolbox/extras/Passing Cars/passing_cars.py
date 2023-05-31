def passing_cars(array):
    if len(array) <= 1: return 0

    pairs_of_cars = 0
    cars_going_west = 0

    for car in array:
        if car == 0:
            cars_going_west +=1
        else:
            pairs_of_cars +=cars_going_west
            if(pairs_of_cars > 1000000000): return -1
    return pairs_of_cars

if __name__ == "__main__":
    testing_cases = [[0,1,0,1,1],[],[1],[0],[0,0,0,1,1]]

    for i in testing_cases:
        print(passing_cars(i))