/**

Virus Percentage
================

Implementasikan function virusPercentage untuk menghitung
persentase virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 40% *, 40% #, 20% @

- `input` -> **#*##
  output -> 50% *, 50% #

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex

*/
/**function virusPercentage (input) {
  let result = {};

  let byk_karakter = input.length;
  let temp = [];
  for(let i = 0; i < byk_karakter; i++){
    if(result[input[i]]){
      result[input[i]] += 1;
    } else {
      result[input[i]] = 1;
      temp.push(input[i]) ;
    }
  }

  let result_array=""
  for(let i = 0; i < temp.length; i++){
    if(i != temp.length-1){
      result_array = result_array + result[temp[i]] / byk_karakter * 100 + '% '+ temp[i] +', ';
    } else{
      result_array = result_array + result[temp[i]] / byk_karakter * 100 + '% '+ temp[i];
    }
  }
  return result_array;

}*/

//console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
//console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
//console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @

//1. Pecahin langkah-langkahnya
//2. Mendekati ke jawaban yg diinginkan

function virusPercentage (input){
  let
  for(let i = 0; i< input.length; i++){

  }
}
