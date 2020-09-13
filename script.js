let minValue = 0;
let maxValue = 0;
let orderNumber = 1;
let gameRun = true;
let ugadal = 0;
let ugadaltext = "";
let num1 = "";
let num2 = "";
let num3 = "";
let num4 = "";
let text1 = "";
let answerNumber  = Math.floor((minValue + maxValue) / 2);

document.getElementById('btn_ok').addEventListener('click', function () {

//let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
//let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));

minValue = parseInt(document.getElementById("inpmin").value);
maxValue = parseInt(document.getElementById("inpmax").value);

minValue = (minValue < -999)? -999 : minValue;
maxValue = (maxValue > 999)? 999 : maxValue;

if((!parseInt(minValue)) || (!parseInt(maxValue))) {
    minValue = -100;
    maxValue = 100;
}

//alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
$('.collapse').collapse("hide");

const text1 = document.getElementById('text1');
text1.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю!`;
})

answerNumber  = Math.floor((minValue + maxValue) / 2);

const do_20 = {0: "", 1: "один", 2: "два", 3: "три", 4: "четыре", 5: "пять", 6: "шесть", 7: "семь", 8: "восемь", 9: "девять", 10: "десять",
             11: "одиннадцать", 12: "двинадцать", 13: "тринадцать", 14: "четырнадцать", 15: "пятнадцать", 16: "шестнадцать", 17: "семнадцать", 
             18: "восемнадцать", 19: "девятнадцать"};
const do_100 = {0: "", 2: "двадцать", 3: "дридцать", 4: "сорок", 5: "пятьдесят", 6: "шестьдесят", 7: "семдесят", 
                8: "восемьдесят", 9: "девяносто"};
const do_900 = {0: "", 1: "сто", 2: "двести", 3: "триста", 4: "четыреста", 
                5: "пятьсот", 6: "шестьсот", 7: "семьсот", 8: "восемьсот", 9: "девятьсот"};
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function vopros(){
    let rnd = Math.round(Math.random()*3);
    text1 =((rnd > 0) && (rnd <= 1))? `Вы загадали число `:
    ((rnd > 1) && (rnd <= 2))? `Мне кажется, что это число `:
    `А вдруг это число `;
}

vopros();
orderNumberField.innerText = orderNumber;
answerField.innerText = `${text1} ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    history.go(0);
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            vopros();
            answerField.innerText = `${text1} ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            vopros();
            answerField.innerText = `${text1} ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {

    let answerNumber1 = answerNumber;
    let minus = (answerNumber < 0)? true: false;
    let chisl = Math.abs((answerNumber)/100);
    let num = String(Math.abs(answerNumber));
    let num_ch = String(Math.abs(chisl));
    let num3_ch = num_ch.charAt(2);
    let num4_ch = num_ch.charAt(3);

    if((Math.abs(answerNumber) > 0) && (Math.abs(answerNumber) < 20)) {
        answerNumber = do_20[Math.abs(answerNumber)];
         };

    if((Math.abs(answerNumber) >= 20) && (Math.abs(answerNumber) < 100)){
        num1 = num.charAt(0);
        num2 = num.charAt(1);
        answerNumber = do_100[num1] + " " + do_20[num2];
    };
        
    if((chisl >= 1) && (parseInt(num3_ch+num4_ch)<20)) {
        num1 = num.charAt(0);
        answerNumber = do_900[num1] + " " + do_20[parseInt(num.substr(1))];
    }

    if((Math.abs(answerNumber) >= 100)){
        num1 = num.charAt(0);
        num2 = num.charAt(1);
        num3 = num.charAt(2);
        answerNumber = do_900[num1] + " " + do_100[num2] + " " + do_20[num3];
    };

    if(minus) {answerNumber = `минус ${answerNumber}`};

    if(answerNumber.length > 20) {answerNumber = answerNumber1;}

ugadal = Math.round(Math.random() * 3);
    ugadaltext =((ugadal > 0) && (ugadal <= 1))? `И всего-то, число ${answerNumber }`:
                ((ugadal > 1) && (ugadal <= 2))? `Ха, я так и знал! ${answerNumber }`:
                `Это было слишком легко! ${answerNumber }`;

    if (gameRun){
        answerField.innerText = `${ugadaltext }\n\u{1F60E}`
        gameRun = false;
    }
})