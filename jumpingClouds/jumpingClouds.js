const array = [0, 0, 1, 0, 0, 1, 0];
const array2 = [0, 0, 0, 1, 0, 0];
function jumpingClouds(c) {
    let jumps = 0;
    let currentCloud = 0;
    for(let i = 0; i < c.length; i++) {
        let nextCloud = c[i + 1];
        let nextNextCloud = c[i + 2];
        if(i === currentCloud) {
            if(nextNextCloud === 0) {
                currentCloud = i + 2;
                jumps += 1;
            } else if(nextCloud === 0) {
                currentCloud = i + 1;
                jumps += 1;
            }
        }
    }
    return jumps;
}
console.log('this should return 4', jumpingClouds(array));
console.log('this should return 3', jumpingClouds(array2));
