let names = ['daniel', 'immelda', 'taufik', 'sergei'];

for(let i = 0; i<names.length; i++) {
  if(names[i][0] == 'a' || names[i][0] == 'b' || names[i][0] == 'c' || names[i][0] == 'd') {
    console.log(`\`name\` = ${names[i]}, output: \'Masuk group pertama\'`);
  } else if(names[i][0] == 'e' || names[i][0] == 'f' || names[i][0] == 'g' || names[i][0] == 'h' || names[i][0] == 'i') {
    console.log(`\`name\` = ${names[i]}, output: \'Masuk group kedua\'`);
  } else {
    console.log(`\`name\` = ${names[i]}, output: \'Masuk group terakhir\'`);
  }
}
