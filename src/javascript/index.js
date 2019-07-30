// import '../sass/styles.scss';

/**
 * @description Flattens an array recursively 
 * @param {Array} arr Array of numbers.
 * @return {Array} The flattened array.
 */
function flatten(arr) {
    const flatArr = [];
    for (let a of arr) {
        if (Array.isArray(a)) {
            flatten(a);
        } else {
            flatArr.push(a);
        }
    }
    console.log(flatArr);
    return flatArr;
}

export default flatten;