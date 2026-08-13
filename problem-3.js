function countHashtags(caption) {
    if(typeof caption !== 'string'){
        return `Invalid`;
    }
    let arrayOfCaption = caption.split(' ');
    let filterOfHashTag = arrayOfCaption.filter(word => word.startsWith('#'));
    let totelHashCount = filterOfHashTag.length;
    let mostLength = [...filterOfHashTag].sort((a,b) => b.length - a.length)[0];
    let result = {
        hashtagCount : totelHashCount,
        longestTag : mostLength,
    }
    const result2 = {
        longestTag :"",
    }
    if(totelHashCount === 0){
        return result2;
    }else{
        return result;
    }
    
    
}



const caption ='sdffj fsdfj kjhfdg jdkjl lkdjhf';
console.log(countHashtags(caption));