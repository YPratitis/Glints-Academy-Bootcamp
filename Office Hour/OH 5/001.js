/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

let height= 1;
for(let i = 0; i < height; i++){
  temp ="";
  for(let j = 0; j < height; j++){
    if(i % 2 == 0){
      temp+= "*";
    } else {
      temp+= "#";
    }
  }
  console.log(temp);
}
