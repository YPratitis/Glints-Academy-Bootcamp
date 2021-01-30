/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!

# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'

*/

function multiDimensionalXO (size) {
  // Code here
  if(size < 1){
    return 'Invalid input';
  }
  let result = [];
  let counter = 1;
  for(let i = 0; i < size; i++){
    result[i] = [];
    for(let j = 0; j< size; j++){
      if(counter % 2 == 0){
        result[i].push('x');
      } else{
        result[i].push('o');
      }
      counter++;
    }
  }
  return result;
}

console.log(multiDimensionalXO(3));
// [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
        1    2    3        4    5    6
console.log(multiDimensionalXO(5));
/*
[ [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o',s 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(0));
// Invalid input
