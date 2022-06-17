//グローバル変数
let startX = 0;
let startY = 0;
let mousedown = false;

//HTML要素
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


//Webページの読込み完了
window.onload = function(){
    initialCanvas();
}

//canvasの初期設定
function initialCanvas(){
    var b = document.body;
    var d = document.documentElement;
    canvas.width = Math.max(b.clientWidth, b.scrollWidth, d.scrollWidth, d.clientWidth);
    canvas.height = Math.max(b.clientHeight, b.scrollHeight, d.scrollHeight, d.clientHeight);
}

//クリック(タッチ)開始
//canvas.onmousedown = function(e){
canvas.ontouchstart = function(e){
    startX = e.pageX;
    startY = e.pageY;
    mousedown = true;
}

//クリック(タッチ)移動中
//canvas.onmousemove = function(e){
canvas.ontouchmove = function(e){
    if(mousedown){
        //スクロール禁止
        e.preventDefault();
        draw(e.pageX, e.pageY);
    }
}

//クリック(タッチ)終了
//canvas.onmouseup = function(e){
canvas.ontouchend = function(e){
    mousedown = false;
}

//描画
function draw(x, y){
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    //次の開始座標を設定
    startX = x;
    startY = y;
}