function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0){
        return `Invalid`
    }
    let allNumCake = scores.every(num => typeof num === 'number');
    if(!allNumCake){
        return `Invalid`
    }
    let sum = 0;
    let addAll = scores.map(num => {
        sum += num;
    });
    return sum;
}



let scores =[4,3]
console.log(bonusScore(scores));