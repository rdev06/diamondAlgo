// const array = ['A', 'B', 'C', 'D'];

// const k = 4;


// function getSpace(n) {
//     return Array(n).fill(' ').join('')
// }


// for (let i = 0; i < k; i++) {
//     let p = getSpace(i) + array[i];
//     if(i !== k-1){
//         p += getSpace(k+1-(2*i)) + array[i];
//     }
//     console.log(p)
    
// }


// for (let j = k-2; j > -1; j--) {
//     const p = getSpace(j) + array[j] + getSpace(k+1-(2*j)) + array[j]

//     console.log(p);
// }

// // 0   5
// // 1   3
// // 2   1


// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// console.log(alphabet);
