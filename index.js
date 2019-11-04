function randomNumber() {
    let randNum = Math.ceil(Math.random() * 6);
    return randNum;
}

function randImgPath(number) {
    return 'images/dice' + number + '.png';
}

let img1 = document.getElementsByClassName('img1')[0];
let img2 = document.getElementsByClassName('img2')[0];

let img1Value = randomNumber();
let img2Value = randomNumber();

img1.setAttribute("src", randImgPath(img1Value));
img2.setAttribute("src", randImgPath(img2Value));

if (img1Value > img2Value) {
    document.querySelector('h1').innerHTML = 'Jogador 1 Venceu!';
} else if (img2Value > img1Value) {
    document.querySelector('h1').innerHTML = 'Jogador 2 Venceu!';
} else {
    document.querySelector('h1').innerHTML = 'Empate :(';
}