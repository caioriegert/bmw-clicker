const currentCar = document.getElementById('currentCar');

const balanceHtml = document.getElementById('balance');

const upgrade01 = document.getElementById('upgrade01');
const upgrade02 = document.getElementById('upgrade02');
const upgrade03 = document.getElementById('upgrade03');
const upgrade04 = document.getElementById('upgrade04');
const upgrade05 = document.getElementById('upgrade05');
const upgrade06 = document.getElementById('upgrade06');

const miniaturaE36 = document.getElementById('miniatura-upgrade-e36');
const miniatura320i = document.getElementById('miniatura-upgrade-320i');
const miniaturaM3 = document.getElementById('miniatura-upgrade-m3');
const miniaturaX6 = document.getElementById('miniatura-upgrade-x6');
const miniaturaM8 = document.getElementById('miniatura-upgrade-m8');
const miniaturaNazca = document.getElementById('miniatura-upgrade-nazca');

const upgrade01cost = document.getElementById('upgrade01-cost')
const upgrade02cost = document.getElementById('upgrade02-cost')
const upgrade03cost = document.getElementById('upgrade03-cost')
const upgrade04cost = document.getElementById('upgrade04-cost')
const upgrade05cost = document.getElementById('upgrade05-cost')
const upgrade06cost = document.getElementById('upgrade06-cost')

let balance = 1000;
let coinClique = 1;
let coinsPorSegundo = 0;

interval = 1000;

setInterval((intervalo) => {
    balance = balance + coinsPorSegundo;
    balanceHtml.innerText = balance;
}, interval);

function add1Coin(){
    balance = balance + coinClique; 
    console.log(balance);
    balanceHtml.innerText = balance;
}

function buy320i(){
    if (balance >= 100 && upgrade02.classList.contains('current') == false){
        balance = balance - 100;
        coinsPorSegundo < 6 ? coinsPorSegundo = 5 : "".
        balanceHtml.innerText = balance;
        upgrade02.classList.add('current');
        upgrade02cost.classList.add('bought');
        miniatura320i.classList.add('carro');
        miniatura320i.src = "midia/320 e90.png";
        currentCar.src = "midia/320 e90.png"
    }else if (upgrade02.classList.contains('current') == true){
        alert('Você já comprou este upgrade!');
    }else{
        alert('Você não tem BMW coins o suficiente...');
    }
}

function buyM3(){
    if (balance >= 150 && upgrade03.classList.contains('current') == false){
        balance = balance - 150;
        coinClique < 2 ? coinClique = 2 : "".
        balanceHtml.innerText = balance;
        upgrade03.classList.add('current');
        upgrade03cost.classList.add('bought');
        miniaturaM3.classList.add('carro');
        miniaturaM3.src = "midia/m3.png"
        currentCar.src = "midia/m3.png"
    }else if (upgrade03.classList.contains('current') == true){
        alert('Você já comprou este upgrade!');
    }else{
        alert('Você não tem BMW coins o suficiente...');
    }
}

function buyX6(){
    if (balance >= 200 && upgrade04.classList.contains('current') == false){
        balance = balance - 200;
        coinsPorSegundo = 10;      
        balanceHtml.innerText = balance;
        upgrade04.classList.add('current');
        upgrade04cost.classList.add('bought');
        miniaturaX6.classList.add('carro');
        miniaturaX6.src = "midia/x6.png"
        currentCar.src = "midia/x6.png"
    }else if (upgrade04.classList.contains('current') == true){
        alert('Você já comprou este upgrade!');
    }else{
        alert('Você não tem BMW coins o suficiente...');
    }
}


function buyM8(){
    if (balance >= 250 && upgrade05.classList.contains('current') == false){
        balance = balance - 250;
        coinClique = 3;        
        balanceHtml.innerText = balance;
        upgrade05.classList.add('current');
        upgrade05cost.classList.add('bought');
        miniaturaM8.classList.add('carro');
        miniaturaM8.src = "midia/m8.png"
        currentCar.src = "midia/m8.png"
    }else if (upgrade05.classList.contains('current') == true){
        alert('Você já comprou este upgrade!');
    }else{
        alert('Você não tem BMW coins o suficiente...');
    }
}

function buyNazca(){
    if (balance >= 500 && upgrade06.classList.contains('current') == false){
        balance = balance - 500;
        balanceHtml.innerText = balance;
        upgrade06.classList.add('current');
        upgrade06cost.classList.add('bought');
        miniaturaNazca.classList.add('carro');
        miniaturaNazca.src = "midia/nazca.png";
        currentCar.src = "midia/nazca.png"
        alert('Parabéns! Você zerou o jogo!')
    }else if(upgrade06.classList.contains('current') == true){
        alert('Você já comprou este upgrade!');
    }else{
        alert('Você não tem BMW coins o suficiente...');
    }
}





