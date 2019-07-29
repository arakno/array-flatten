// import '../sass/styles.scss';

/**
 * 
 * @param {Array} arr
 * @description Flattens an array recursively 
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