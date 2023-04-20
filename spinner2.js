const characters = ["|   ", "/   ", "-   ", "\\   ", "|   ", "|   ", "/   ", "-   ", "\\   ", "|   ",];
let timer = 0;
for (let character of characters) {
  setTimeout(() => {
    process.stdout.write(`\r ${character}`);
  }, timer);
  timer += 200;
}
