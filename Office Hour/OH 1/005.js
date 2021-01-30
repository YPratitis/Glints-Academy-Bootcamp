function graduatesCount (scores) {
  if(scores.length == 0){
    return "Data kosong";
  }
  let count = 0;
  for(let i = 0; i<scores.length; i++){
    if(scores[i]>= 75){
      count++;
    }
  }
  if(count == 0){
    return "Tidak ada yang lulus";
  } else if(count == scores.length){
    return "Semua lulus";
  } else{
    return `${count} orang lulus`;
  }
}

console.log(graduatesCount([0, 0, 0, 0, 0]));
