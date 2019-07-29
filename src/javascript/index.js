// import '../sass/styles.scss';

// function flatten(arr, depth) {
//     if(!depth) {
//         return arr.slice();
//     }
//     const flatArr = [];
//     arr.forEach(value => {
//         if(Array.isArray(value)) {
//             Array.prototype.concat.apply(flatArr, value);
//             flatArr.push(...flatten(value, depth - 1));
//         } else {
//             flatArr.push(value);
//         }
//     });
// }

function flatten(arr) {

    const flatArr;
    arr.forEach(value => {
        if(Array.isArray(value)) {
            Array.prototype.concat.apply(flatArr, value);
        } else {
            flatArr.push(value);
        }
    });

    return flatArr;
}

let initial = [[0, 1], [2, 3], [4, [5, 6, 7]]];
flatten(initial);
