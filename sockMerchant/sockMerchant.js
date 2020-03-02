const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const array2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, arr) {
    let pairs = 0;
    const numberTracker = {};
    arr.forEach(i => {
        if(numberTracker[i]) {
            pairs += 1;
            numberTracker[i] = 0;
        } else {
            numberTracker[i] = 1;
        }
    });
    return pairs;
    
}
console.log('this should return 3', sockMerchant(9, array));
console.log('this should return 4', sockMerchant(10, array2));