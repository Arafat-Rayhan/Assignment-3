function countHashtags(caption) {
    if(typeof caption !== 'string'){
        return `Invalid`;
    }else if(!caption.includes('#')){
        return {
        hashtagCount:0,
        longestTag:"",
    }
    }
    let arrayOfCaption = caption.split(' ');
    let filterOfHashTag = arrayOfCaption.filter(word => word.startsWith('#'));
    let totelHashCount = filterOfHashTag.length;
    console.log(totelHashCount);
    let allHashtag = [...filterOfHashTag].sort((a,b) => b.length - a.length);
    let bigtag = allHashtag[0].slice(1);
    console.log(bigtag);
    let result = {
        hashtagCount : totelHashCount,
        longestTag : bigtag,
    }
     return result;
    
    
    
}



// const caption ='sdffj fsdfj kjhfdg jdkjl lkdjhf';
// console.log(countHashtags(caption));