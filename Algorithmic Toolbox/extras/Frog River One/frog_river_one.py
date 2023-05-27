def frog_river_one(x,array):
    # x is the distance between one margin of the river and the other one
    print("inputs:",x,array)
    # 
    s = [0] *(x+1)
    distance_left = x

    for second, position in enumerate(array):
        print("second and position:",second,position)
        currentLeafPos = position
        print(currentLeafPos)
        if currentLeafPos<x:
            if s[currentLeafPos] != 1:
                s[currentLeafPos] = 1
                distance_left -=1
        
        if distance_left == 0: return second
        print("array s:",s, distance_left)
    return -1


if __name__ == "__main__":
    testingCases = [[5,[1,3,1,4,2,3,5,4]],[5,[1,3,1,4,2,3,6,4]]]
    for item in testingCases:
        print("resultado:",frog_river_one(item[0],item[1]))
