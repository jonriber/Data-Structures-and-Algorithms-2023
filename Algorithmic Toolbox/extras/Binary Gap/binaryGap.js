

function binaryGap(num){
    if(num <=0) return 0
    let 
        binaryString = num.toString(2),//transform decimal number into binary
        maxGapValue = 0
        gapCounter = 0
    console.log("binaryString:",binaryString)
    for(let i in binaryString){
        if(binaryString[i] == "0") gapCounter +=1
        else if(binaryString[i] =="1"){
            maxGapValue = Math.max(maxGapValue,gapCounter)
            gapCounter =0
        }
    }
    return maxGapValue
}

const testingCases = [1,4,6,12,45,7,15,529,32,20,9]

testingCases.forEach(item => console.log(binaryGap(item)))