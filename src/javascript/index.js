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
            flatArr = flatArr.concat(flatten(a));
        } else {
            flatArr.push(a);
        }
    }
    return flatArr;
}

// export default flatten;
module.exports = flatten;