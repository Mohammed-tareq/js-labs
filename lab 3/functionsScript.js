

//

function getName(username){

    let name = username.split(" ");

    for(let i =0 ; i<name.length ; i++){
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1).toLowerCase() ;


    }
    return name.join(" ");

}


function getLargeWord(words){
    const newWords = words.split(" ");
    return newWords.reduce((word,largeWord)=>{
      return   word.length > largeWord.length ? word :  "the all word is the same";
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

function getArr(arr){
    let unquie = []
    for(let i = 0 ; i< arr.length ; i++){
        if (!unquie.includes(arr[i])){
            unquie.push(arr[i]);
        }
    }
    return unquie;
}
console.log(getArr(arr))