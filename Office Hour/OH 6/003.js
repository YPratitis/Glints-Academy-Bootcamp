/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh FBI

  Berikut adalah kamus huruf dari FBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf FBI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus FBI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/
function encrypt(input) {
  // your code here
  let huruf_biasa = 'abcdefghijklmnopqrstuvwxyz';
  let huruf_fbi = '!@#$%^&*()-+1234567890[]{}';

  let result = "";

  for(let i = 0; i < input.length; i++){
    let get = false;
    for(let j = 0; j < huruf_biasa.length; j++){
      if(input[i] == huruf_biasa[j]){
        result += huruf_fbi[j];
        get = true;
        break;
      }
    }
    if(!get){
      result += input[i];
    }
  }

  return result;

}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
