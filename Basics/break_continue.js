let score = [50, 20, 40, 0, 80, 100, 90];

for (let i = 0; i < score.length; i++) {
    if (score[i] == 0) {
        continue;
    }
    console.log('Your score: ', score[i]);
    if (score[i] == 100) {
        console.log("Congrats, top score!");
        break;
    }
}