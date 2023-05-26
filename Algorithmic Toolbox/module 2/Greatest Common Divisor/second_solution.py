def euclidianFcd(a,b):
    if(b ==0):
        return a
    rest = a%b
    print("rest:",rest)
    return euclidianFcd(b,rest)
# this way we are tacling the problem with a specifc characteristc about it
if __name__ == "__main__":
    print("Inicializando programa!")
    result = euclidianFcd(357,234)
    print("result:",result)
    