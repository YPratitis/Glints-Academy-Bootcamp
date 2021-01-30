/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  let count = 0;
  let total = 0;
  let temp_word = "";
  let result = [];
  for(let i = 0; i < words.length; i++){
    if(words[i] != ' '){
      if(words[i].toLowerCase() >='a' && words[i].toLowerCase()<='z'){
        total++;
      }
      temp_word += words[i];
      if(i == words.length - 1){
        if(temp_word.length == 1 && temp_word.toLowerCase() >='a' && temp_word.toLowerCase() <= 'z'){
          result.push(temp_word);
          count ++;
        } else if(temp_word.length>1){
          result.push(temp_word);
          count++;
        }
      }
    } else {
      result.push(temp_word);
      temp_word = "";
      count++;
    }

  }

  let avg = Math.round(total / count);

  let answer = [];

  for(let i = 0; i < result.length; i++){
    if(result[i].length==avg){
      answer.push(result[i]);
    }
  }

  return answer;
}

console.log(averageLengthWord('dd dddd dddddd dddddddd'));
console.log(averageLengthWord('Do you want to become a great coder ?')); // ['want']

console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
