def gcd(a,b):
    d = 0
    for x in range(1,a+b):
        # print("x",x)
        # print("teste1:",a%x)
        if((a%x ==0) and (b%x == 0)):
            d = x
    return d

# Explanation:
# We need to find the max commom number that divides both number inputs (a,b)
if (__name__ =="__main__"):
    print("starting the programm!")
    result = gcd(10,4)
    print("result:",result)
    result = gcd(100,443)
    print("result 2:",result)
    result = gcd(140,42)
    print("result 3:",result)
