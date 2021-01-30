function addTitle (person1, person2, person3, person4) {
  // Code disini
  return `Mr. ${person1}, Mr. ${person2}, Mr. ${person3}, Mr. ${person4}`;

}

function changeSpacesWith (str, to) {
  // Code disini
  let str_temp="";
  for(let i=0; i<str.length; i++){
    if(str[i] != ' '){
      str_temp += str[i];
    } else {
      str_temp += to;
    }
  }
  return str_temp;
}

function cutString (str) {
  // Code disini
  let str_temp="";
  for(let i=0; i<6; i++){
    str_temp += str[i];
  }
  return str_temp;
}
cutString ('Kazuya Mishima');
