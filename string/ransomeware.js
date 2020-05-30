/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/
var canConstruct = function(ransomNote, magazine) {
    const magazineMap= {};
    for(let i=0; i < magazine.length;i++){
        const valIfExists= magazineMap[magazine[i]];
        if(valIfExists){
            magazineMap[magazine[i]]=valIfExists+1;
        }else{
            magazineMap[magazine[i]]=1;
        }
    }


    for(let i=0; i< ransomNote.length;i++){
       const ransomeChar= ransomNote[i];
       const countInMagazineMap= magazineMap[ransomeChar];
       
       if(countInMagazineMap && countInMagazineMap>0){
            magazineMap[ransomeChar]= countInMagazineMap -1;
       }else{
           return false;
       }

    }


    console.log(magazineMap);
    return true;
};



console.log(canConstruct("giveme1cr", "23456789abcdfgivemeraejwuerqwqporqow"));
