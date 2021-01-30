/*
Minimum Distance Between Greatest Element


Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

function minDistanceBetweenGreatest(arr) {
  // your code here
  let array_greatest = [];
  for(let i = 0; i < arr.length; i++){
    let track_greatest = 0;
    for(let j = 0; j < arr.length; j++){
      if(arr[i]>= arr[j]){
        track_greatest++
      }
    }
    if(track_greatest == arr.length){
      array_greatest.push(i);
    }
  }

  if(array_greatest.length == 1){
    return 0;
  }

  let result = arr.length - 1;
  for(let i = 0; i < array_greatest.length; i++){
    if(array_greatest[i+1]){
      if(array_greatest[i] - array_greatest[i+1] < 0){
        let compare = array_greatest[i+1] - array_greatest[i];
        if(compare < result){
          result = compare;
        }
      } else {
        let compare = array_greatest[i] - array_greatest[i+1] ;
        if(compare < result){
          result = compare;
        }
      }
    }
  }
  return result;
}

console.log(minDistanceBetweenGreatest([ 3, 5, 2, 3, 5, 3, 5 ])); //2
console.log(minDistanceBetweenGreatest([ 1, 1, 1, 1, 1, 1 ])); //1
console.log(minDistanceBetweenGreatest([ 7, 8, 5, 2, 1, 1 ])); //0



