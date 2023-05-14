
def maximumPairwiseAlternative(maxN,numbers):
    print("first argument",maxN)
    print("second argument",numbers)

    maxProduct = 0
    for a in numbers:
        print("testing:",a,numbers.index(a))
        for b in numbers:
            print("b:",b, numbers.index(b))
            if (a*b > maxProduct): maxProduct = a*b
        
    return maxProduct


if __name__ == '__main__':
    numberOfElements = int(input())
    numbers = list(map(int,input().split()))
    print(maximumPairwiseAlternative(numberOfElements,numbers))