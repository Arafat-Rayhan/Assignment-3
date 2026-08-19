function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0){
        return `Invalid`
    }
    let allNumCake = scores.every(num => typeof num === 'number');
    console.log(allNumCake);
    if(!allNumCake){
        return "Invalid"
    }
    let sum = 0;
    let addAll = scores.map(num => {
        sum += num + 10;
    });
    return sum;
}



//let scores =[3,3,3,3,3,3,3,3,3,3,]
//console.log(bonusScore(scores));