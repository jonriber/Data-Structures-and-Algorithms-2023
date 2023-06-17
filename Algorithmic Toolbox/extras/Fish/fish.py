def fish(fish_sizes, fish_directions):
    print("function started",fish_sizes,fish_directions)
    

if __name__ == "__main__":
    testing_cases = [
        ([4,3,2,1,5],[0,1,0,0,0])
    ]

    for i,v in enumerate(testing_cases):
        print(testing_cases[i])
        print(fish(testing_cases[i][0],testing_cases[i][1]))