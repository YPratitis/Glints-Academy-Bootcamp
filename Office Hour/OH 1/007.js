function arrayMerge (firstData, secondData) {
  if(firstData.length == 0 && secondData.length == 0){
    return [];
  } else if(firstData.length != 0 && secondData.length == 0) {
    return firstData;
  } else if(firstData.length == 0 && secondData.length != 0) {
    return secondData;
  }
  //buat array yang berisi secondData yang perlu ditambahkan
  let temp_Data=firstData;
  let count = firstData.length;

  for(let i=0;i < secondData.length; i++){
    let check = 0;//buat memeriksa apakah terdapat data yang sama
    for(let j = 0;j<firstData.length; j++){
      if(secondData[i]==firstData[j]){
        check++; //kalau ada, maka dia tidak akan bernilai 0
        break;
      }
    }
    //ketika dia bernilai 0, maka boleh dimasukkan ke temporary Array
    if(check == 0){
      temp_Data[count] = secondData[i];
      count++;
    }
  }

  return temp_Data;
}
console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']
