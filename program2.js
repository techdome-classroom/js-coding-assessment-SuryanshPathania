const decodeTheRing = function (s, p) {

    // write your code here
     let sIndex = 0;
    let pIndex = 0;
    let starIndex = -1;
    let matchIndex = 0;
    
    while (sIndex < s.length) {
        
        if (pIndex < p.length && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
            sIndex++;
            pIndex++;
        }
       
        else if (pIndex < p.length && p[pIndex] === '*') {
            starIndex = pIndex;
            matchIndex = sIndex;
            pIndex++;
        }
        
        else if (starIndex !== -1) {
            pIndex = starIndex + 1;
            matchIndex++;
            sIndex = matchIndex;
        }
        
        else {
            return false;
        }
    }
    
   
    while (pIndex < p.length && p[pIndex] === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;

  };
  
  module.exports = decodeTheRing;
