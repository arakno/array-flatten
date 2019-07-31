// import '../sass/styles.scss';

/**
 * @description Flattens an array recursively 
 * @param {Array} arr Array of numbers.
 * @return {Array} The flattened array.
 */
function flatten(arr) {
    if (!arr.length) return [];
    let flatArr = [];
    for (let a of arr) {
        if (Array.isArray(a)) {
            // flatArr.push(flatten(a));
             Array.prototype.concat.apply(flatArr, flatten(a));
        } else {
            flatArr.push(a);
        }
    }
    console.log(flatArr);
    return flatArr;
}

export default flatten;