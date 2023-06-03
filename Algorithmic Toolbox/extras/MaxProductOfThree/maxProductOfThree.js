//PSEUDO CODE HERE:
//I WANT MAX PROD OF THREE, SO, I COULD SORT THE ARRAY AND TAKE THE LAST THREE ELEMENTS, THEY ARE GREATEST ONES
//BUT
//I HAVE A CORNER CASE: WHAT IF I HAVE TWO NEGATIVE NUMBERS? NEGATIVE PLUS NEGATIVE EQUALS POSITIVE
//SO, I MUST CHECK TWO CASES AND GET MAX OUT OF IT
//AND THATS IT

//CONDITIONS:
// ARRAY IS ALWAYS FILLED WITH THREE ELEMENTS
//NUMBERS INSIDE THE ARRAY GOES FROM -1000 TO 1000

function maxProdThree(array){
    let sorted = array.sort((a,b) => a-b)
    let condition1 = sorted[0] * sorted[1] * sorted[(array.length-1)]
    let condition2 = sorted[(array.length-3)] * sorted[(array.length-2)] * sorted[(array.length-1)]
    let result = Math.max(condition1,condition2)
    return result
}

const testingCases = [[-1,30,1,20],[-3,1,2,-2,5,6],[-1,-1,-1,-5,10]]

testingCases.forEach(item => console.log(maxProdThree(item)))