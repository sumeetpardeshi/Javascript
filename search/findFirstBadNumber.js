const start = 1 ;
const end = 10;
const badVersion= 5;
//Consider we have numbers representing releases, and a bad version lets all the following releases to fail as well, 
//find optimal way of fiding the first bad Version where things started failing.
//1 2 3 4 5 6 7 8 9 10
//            x x x x 
console.log(searchFirstBad(start,end));

  function searchElementByBinary(start,end,searchElement){
	mid = Math.ceil((start+end)/2);
    console.log(`start:${start} end:${end} mid:${mid} search:${searchElement}`);
    
    if(check(mid,searchElement)) return mid;
    if(check(start,searchElement)) return start;
    if(check(end,searchElement)) return end;
    else if(mid>searchElement) {
    console.log(`consider left`);
    return searchElementByBinary(start,mid,searchElement);
    }
    else if(mid<searchElement){
    console.log("consider right");
    return searchElementByBinary(mid,end,searchElement);
    }
    else 
    console.log("else condition")
	
  }
  function check(num,searchCriteria){
            return num===searchCriteria;
  }


  function searchFirstBad(start,end){
	mid = Math.ceil((start+end)/2);
    console.log(`start:${start} end:${end} mid:${mid} search:${searchElement}`);
    
    if(checkFirstBad(mid)) return mid;
    if(checkFirstBad(start)) return start;
    if(checkFirstBad(end)) return end;
    else if(isBadVersion(mid) && isBadVersion(mid-1)) {
    console.log(`consider left`);
    return searchFirstBad(start,mid);
    }
    else {
    console.log("consider right");
    return searchFirstBad(mid,end);
    }
    
	
  }

  function checkFirstBad(num){
      if(!isBadVersion(num-1) && isBadVersion(num) && isBadVersion(num+1)) return true;
      else return false;

  }

   function isBadVersion (n){
        if(n>=badVersion) return true;
        else return false;
   }
