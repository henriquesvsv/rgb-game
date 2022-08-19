const box1=document.querySelector('#box-1')
const box2=document.querySelector('#box-2')
const box3=document.querySelector('#box-3')
const box4=document.querySelector('#box-4')
const box5=document.querySelector('#box-5')
const box6=document.querySelector('#box-6')
const rgbValue=document.querySelector('#rgbValue')
const newColor =  document.querySelector('#new-colors');
const easy =  document.querySelector('#easy');
const hard =  document.querySelector('#hard');

function background(){
    newColor.style.backgroundColor='red';
}

function createColor(){
  var color ="rgb("+Math.floor(Math.random() *101)+","+Math.floor(Math.random() * 101)+","+Math.floor(Math.random() *101)+")"
  
  return color;
}
var arrayColor=[];
var corprincipal;

function inserirCores(){
    x=1;
    while(x<=7){
        arrayColor.push(createColor());
    x++;
}
box1.style.backgroundColor=arrayColor[1];
box2.style.backgroundColor=arrayColor[2];
box3.style.backgroundColor=arrayColor[3];
box4.style.backgroundColor=arrayColor[4];
box5.style.backgroundColor=arrayColor[5];
box6.style.backgroundColor=arrayColor[6];

}
function esColherColor(){
    corprincipal=arrayColor[Math.floor(Math.random()*6)]
}

function confere(x){

    if(arrayColor[x]==corprincipal){
        window.alert("acertou");
        start();
    }
    else{
        window.alert("errou");
        console.log(errou);
    }
}
function adicionar(x){
    x.classList.add("select");
}

function remover(x){
    x.classList.remove("select");
}

function start(){
    arrayColor=[];
    inserirCores();
esColherColor();
rgbValue.innerText=corprincipal;

}
start();