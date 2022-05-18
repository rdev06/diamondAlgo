
// process.stdout.write(i.toString());
// const k = 6;

//approach

const ar = ['A', 'B', 'C', 'D', 'E'];

const k = ar.length;

function getSpace(n) {
    return Array(n).fill(' ').join('')
}


for (let i = 0; i < k; i++) {
  let p = getSpace(k - i) + ar[i];
  if (i > 0) {
    p += getSpace(2*i) + ar[i];
  }
  console.log(p);
}


for (let j = k - 2; j > -1; j--) {
    let p = getSpace(k - j) + ar[j];
    if(j > 0){
        p += getSpace(2*j) + ar[j];
    }

    console.log(p);
}

// 1 => 3
// 0 => 4

// 0 => 0
// 1 => 3
// 2 => 5
// 3 => 7

// A
//B  B
// A

//  A
// B  B
//C    C
// B  B
//  A

//   A
//  B B
// C   C
//D     D
// C   C
//  B B
//   A

// for(var i=1;i<=5;i++)
// {
//     for(var j=1;j<=i;j++)
//         {
//             console.log("*");

//         }
//     console.log("\n");
// }



