#PSEUDO CODE NOTATION
#Objective is to analyse fish going in differnt direction
#Check their sizes when they cross each other
#Inser the remaining fish in a stack
def fish(fish_sizes, fish_directions):
    print("function started",fish_sizes,fish_directions)
    eaten=0
    ds = []
    
    for i in range(0,len(fish_directions)):
        print(i)
        print("fish size:",fish_sizes[i])
        if fish_directions[i] == 1:
            ds.append(fish_sizes[i])
        else:
            while len(ds) != 0:
                if ds[-1] > fish_sizes[i]:
                    eaten+=1
                    break
                elif ds[-1] < fish_sizes[i]:
                    ds.pop()
                    eaten+=1
    return (len(fish_sizes) - eaten)


if __name__ == "__main__":
    testing_cases = [
        ([4,3,2,1,5],[0,1,0,0,0])
    ]

    for i,v in enumerate(testing_cases):
        print(testing_cases[i])
        print(fish(testing_cases[i][0],testing_cases[i][1]))