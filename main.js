function setup(){
    canvas=createCanvas(900,600);
}
x=0
y=0
drawcircle="";
drawrectangle="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}
recognition.onresult=function(r){
    console.log(r);
    c=r.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speak has been recognised as"+c;
    if(c=="circle" || c=="Circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        drawcircle="set"; 
    }
    if(c=="rectangle" || c=="Rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        drawrectangle="set"; 
    }
}
function draw(){
    if(drawcircle=="set"){
        r = Math.floor(Math.random() * 100);
        circle(x,y,r);
        document.getElementById("status").innerHTML =  "circle is drawn";
        drawcircle="";
    }
    if(drawrectangle=="set"){
        r1 = Math.floor(Math.random() * 100);
        r2 = Math.floor(Math.random() * 100);
        rect(x,y,70,50);
        document.getElementById("status").innerHTML =  "rectangle is drawn";
        drawrectangle="";
    }
}