/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']
- input: []
  output: []


ATURAN CODING:
--------------
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
*/
/**function reverseAll (arr) {
  if(arr.length == 0){
    return arr;
  }
  let arr_result=[];
  let count=0;
  for(let i =arr.length-1; i>=0; i--){
    let arr_temp="";
    for(let j=arr[i].length-1; j>=0;j--){
      arr_temp += arr[i][j];
    }
    arr_result.push(arr_temp);
  }
  return arr_result;
}

 **/

function reverseAll (arr) {

  let nampung=[];
  //buat balikin array
  for(let i = arr.length - 1; i>=0; i--){
    nampung.push(arr[i]);
  }

  //buat balikin per kata
  let result = []
  for(let i = 0; i< nampung.length; i++){
    let temp_string=""
    for(let j = nampung[i].length - 1; j>=0; j--){
      temp_string = temp_string +  nampung[i][j]
    }
    result.push(temp_string);
  }

  return result;
}

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello', 'arwin']));
