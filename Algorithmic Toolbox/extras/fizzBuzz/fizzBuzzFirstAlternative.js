//given a number which represents range of your iteration, check if n is either multiple of 3 and 5, just 3, just 5 or just output the number
function fizzBuzzFirstAlternative(n){
    if (n<1) return console.log("negative number!")
    for(let i=1;i<=n;i++){
        if(i%3 == 0 && i%5 ==0) console.log("FizzBuzz",i)
        else if(i%3 == 0) console.log("Fizz",i)
        else if(i%5 == 0) console.log("Buzz",i)
        else console.log(i)
    }
    return("finished!")
}

const testCases = [ 2,4,5,10,11,-11,35,40]

testCases.forEach(item => console.log(fizzBuzzFirstAlternative(Number(item))))