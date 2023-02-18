let timer = 200;
let sym = ['\r|', '\r/','\r-','\r\\','\r|', '\r/','\r-','\r\\','\n']

for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(sym[i]);
  }, timer);
  timer += 200;
};