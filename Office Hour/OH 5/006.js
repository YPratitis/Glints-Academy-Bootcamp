
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {

  // Only Code Here
  let studentObj = {}

  for(let i = 0; i < studentsArr.length; i++){
    if(studentObj[studentsArr[i][0]]){
      studentObj[studentsArr[i][0]].push(studentsArr[i]);
    } else {
      studentObj[studentsArr[i][0]] = [studentsArr[i][0], studentsArr[i]]
    }
  }
  let result = Object.values(studentObj);

  let swapped;
  do{
    swapped = false;
    for(let i = 0; i < result.length; i++){
      if(result[i+1]){
        if(result[i][0] < result[i+1][0]){
          let temp = result[i];
          result[i] = result[i+1];
          result[i+1] = temp;
          swapped = true;
        }
      }
    }
  }while(swapped)

  return result;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/

// let dict = {'J' : ['a', 'b', 'c'], 'B': ['a', 'bb','cc']}

// console.log(dict);
// console.log(Object.values(dict)) // [ [ 'a', 'b', 'c' ], [ 'a', 'bb', 'cc' ] ]
