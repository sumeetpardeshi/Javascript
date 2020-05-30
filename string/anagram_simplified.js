const str1= "abc";
const str2= "acb";

const lookup={};

const checkAnagram = (string1,string2) => {
    if(string1.length!=string2.length)
        return false;

    for(x of string1){
        lookup[x]= (lookup[x] || 0 ) +1;
    }
    console.log(lookup);

    for(x of string2){
        if(!lookup[x])
        return false;
        else
        lookup[x] = lookup[x]=-1;
    }
    return true;
}

console.log(checkAnagram("abcdef","defabca"));