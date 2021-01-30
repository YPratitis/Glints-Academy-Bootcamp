function drawSymbolicColsBox(number) {
  let angka = 1;
  for(let i =0; i< number; i++) {
    let arrays=[];
    for(let j =0; j< number; j++) {
      if (angka % 2 != 0 && angka%3 !=0){
        arrays += "@ ";
      } else if(angka % 2 == 0){
        arrays += "$ ";
      } else if(angka%3 == 0){
        arrays+= "* ";
      }
      angka++;
    }
    console.log(arrays);
  }
  //console.log(arrays);
}
drawSymbolicColsBox(3);
