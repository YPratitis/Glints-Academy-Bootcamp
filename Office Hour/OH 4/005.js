/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

function csvToObject (keys, values) {
  // write your code here
  if(!keys && !values){
    return {};
  }
  let result = {};
  let key = [];
  let value = [];
  let temp ="";
  // 1. array keys
  for(let i = 0; i < keys.length; i++){
    if(keys[i] == ','){
      temp+=keys[i];
    } else {
      key.push(temp);
      temp = "";
    }
    if(i == keys.length - 1){
      key.push(temp);
    }
  }
  // 2. array values
  temp = ""
  for(let i = 0; i < values.length; i++){
    if(values[i] != ','){
      temp+=values[i];
    } else {
      value.push(temp);
      temp = "";
    }
  }
  value.push(temp);

  //masukkin ke object
  for(let i = 0; i < key.length; i++){
    result[key[i]] = value[i];
  }
  return result;
}

console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
// { }
