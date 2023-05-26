def get_min3(array_input):
    print("array original:",array_input)
    set_input = sorted(set(array_input))
    print("set_input",set_input)
    for idx, n in enumerate(set_input):
        print("idx and n",idx,n)
        result = idx+1
        if result != n:
            print("aqui",idx,n)
            break
        print("resultado:",result)
        return result
        
if __name__ == "__main__":
    print("iniciando o programa!")

    testing_Cases = [
        [-1,-4,0,1,1],
        [-1,-4,0,],
        [],
        [-1,-14,10,3,5,8,-2,6],
        [2,3,3,3,4,5,6],
        [25,34,6,2,1],
        [1,2,3,4,5],
    ]

for i,v in enumerate(testing_Cases):
#   print(i,v)
  print(get_min3(v))