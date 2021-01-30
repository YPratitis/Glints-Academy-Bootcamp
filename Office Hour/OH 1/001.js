const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask user for the name input
rl.question(`name: `, (name) => {

    // ask for nilai
    rl.question(`nilai: `, (nilai) => {
        let description = "";
        if (nilai < 0 || nilai > 100) {
          console.log(`Nilai Invalid`);
          rl.close();
        } else if (nilai >= 0 && nilai <= 34) {
          console.log(`Nilai ${name} mendapatkan nilai E`);
          rl.close();
        } else if (nilai >= 35 && nilai <= 49) {
          console.log(`Nilai ${name} mendapatkan nilai D`);
          rl.close();
        } else if (nilai >= 50 && nilai <= 64) {
          console.log(`Nilai ${name} mendapatkan nilai C`);
          rl.close();
        } else if (nilai >= 65 && nilai <= 79) {
          console.log(`Nilai ${name} mendapatkan nilai B`);
          rl.close();
        } else {
          console.log(`Nilai ${name} mendapatkan nilai A`);
          rl.close();
        }
    });

});
