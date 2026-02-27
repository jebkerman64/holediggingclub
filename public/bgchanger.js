const welcomes = [
  "Welcome",
  "Bienvenido",
  "Bienvenue",
  "Willkommen",
  "Bem-vindo",
  "Добро пожаловать",
  "欢迎",
  "ようこそ",
  "환영합니다",
  "स्वागत है",
  "مرحبا",
  "Selamat datang",
  "Chào mừng",
  "Hoş geldiniz",
  "Witamy",
  "Καλώς ήρθατε",
  "Karibu",
  "ยินดีต้อนรับ"
];

let ind = 0;
let size = 0;

const element = document.getElementById("bgtext");

Add();

function Shift(){
    ind = (ind + 1) % welcomes.length;
    size = 0;
    Add();
}

function Del(){
    if(element.innerHTML.length > 0){
        element.innerHTML = element.innerHTML.slice(0, -1);
        setTimeout(Del, 50);
    }
    else{
        Shift(); 
    }
}

function Add(){
    if(size <= welcomes[ind].length){
        element.innerHTML = welcomes[ind].slice(0, size);
        size++;
        setTimeout(Add, 100);
    }
    else{
        //setTimeout(Del, 10000);
        setTimeout(Del, 6000);
    }
}