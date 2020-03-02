const string = 'DDUUDDUDUUUD';
const string2 = 'UDDDUDUU';


function countingValleys(n, s) {
    let elevation = 0;
    let valleys = 0;
    let previousElevation;
    for(let i = 0; i < s.length; i++) {
        previousElevation = elevation;
        if(s.charAt(i) === 'U') elevation += 1;
        if(s.charAt(i) === 'D') elevation -= 1;
        if(elevation === 0 && previousElevation < 0) valleys += 1;
    }
    
    return valleys;
}
console.log('this should return 2', countingValleys(12, string));
console.log('this should return 1', countingValleys(8, string2));
