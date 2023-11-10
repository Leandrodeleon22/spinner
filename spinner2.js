process.stdout.write("hello from spinner2.js... \rheyyy\n");

const animate = ["|", "/", "-", "\\", "|", "/"];
let speed = 100;

animate.forEach((el) => {
  setTimeout(() => {
    process.stdout.write(`\r${el}   `);
  }, speed);
  speed += 200;
});
