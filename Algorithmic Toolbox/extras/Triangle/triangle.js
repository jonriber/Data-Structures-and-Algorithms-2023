function triangle(array){
    if(array.length<=2) return 0
    let sorted = array.sort((a,b) => a-b)
    let i = 0;

    while (i <=array.length-3){
        if((sorted[i] == sorted[i+1]) || sorted[i] == sorted[i+2]) i++
        if((sorted[i] + sorted[i+1])>sorted[i+2]){
            if((sorted[i+1] + sorted[i+2])> sorted[i]){
                if((sorted[i+2]+sorted[i])>sorted[i+1]){
                    return 1
                }
            }
        }
        i++
    }
    return 0
}

const testingCases = [[10,2,5,1,8,20],[10,50,5,1],[1,1,1],[1,1,1,2,2,3,4,5,6],[1,1],[0],[]]

testingCases.forEach(item => console.log(triangle(item)))