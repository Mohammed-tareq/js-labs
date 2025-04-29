

//
 function fullName(username){
    return  username.toUpperCase();
 }



function getLargeWord(words){
    const newWords = words.split(" ");
    return newWords.reduce((word,largeWord)=>{
      return   word.length > largeWord.length ? word : largeWord;
    },0)
}


function sortString(words){
    return words.split("").sort().join("");
}



function selectRepeat (arr1,arr2){
    return arr1.filter(a=> arr2.includes(a));
}

let arr = [1,2,3,4,5,6,1,2,3,4,7,8,9];

function removeDuplicates(arr){
    return  arr.filter((a,b)=> arr.indexOf(a) === b);
}

function removeDup(arr){
    return [...new Set(arr)]
}

