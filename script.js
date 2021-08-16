const colors = ['yellow', 'blue', 'red', 'orange'];

let text = "";
let i = 0;

while (i <= colors.length) {
    text += colors[i] + "<br>";
    console.log(colors[i]);
    i++;
}

console.log('---');

for (let j = 0; j <= colors.length; j++) {
    text += colors[j] + "<br>";
    console.log(colors[j]);
}

console.log('---');

colors.forEach(element => console.log(element));

// for neemt 4 regels in. while neemt 4 regels in.
// foreach neemt 1 regel in
// foreach is korter en duidelijker af te lezen.