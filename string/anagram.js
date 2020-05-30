
let string1="abccba", string2="acbbca";

console.log(validAnagram('',''))
console.log(validAnagram('aaz','zza'))
console.log(validAnagram('anagram','nagaram'))
console.log(validAnagram('rat','car'))
console.log(validAnagram('awesome','awesom'))




function validAnagram(string1,string2){
 
    let str1Freq={}, str2Freq={};
    
    if(string1.length!=string2.length)
    return false;
    else{
        for(let x=0;x<string1.length;x++){
            str1Freq[string1[x]]=str1Freq[string1[x]]===undefined? 1 : str1Freq[string1[x]]+1;
            str2Freq[string2[x]]=str2Freq[string2[x]]===undefined? 1 : str2Freq[string2[x]]+1;
        }
    
    }
    
    
   // console.log(str1Freq)
   // console.log(str2Freq)
    
    if(Object.keys(str1Freq).length!=Object.keys(str2Freq).length){
    return false;
    }
    else{
    let arr = Object.keys(str1Freq);
        for(let x =0;x<arr.length; x++){
            
           // console.log( str1Freq[arr[0]] )
            if(str1Freq[arr[x]]!==str2Freq[arr[x]]) return false;
    
        }
    
        return true;
    
    }
    
    }