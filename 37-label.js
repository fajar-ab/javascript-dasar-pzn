

loopi:
for (let i = 1; i <= 10; i++) {
    loopj:
    for (let j = 1; j <= 10; j++) {
        if (j > 10) {
            continue loopi
        }
        console.log(`${i}-${j}`);
    }
}