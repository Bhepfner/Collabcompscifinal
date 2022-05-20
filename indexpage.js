//var attacklist=['spear','shortsword','longsword','cleaver','numchucks','staff','stick','morningstar'];
//var sheildlist=['buckler','kitesheild','romansheild','smallsheild','sheild'];
//var armorlist=['brigandine','plate-armor','chainmail','gamberson'];
//var passive=['healring','spikerose','strengthring'];
//20 items
var z1=0;
var energy1=5;
var hp1=50;
var z2=0;
var energy2=5;
var hp2=50;
var itemlist=['spear','shortsword','longsword','cleaver','numchucks','staff','stick','morningstar','kitesheild','romansheild','smallsheild','buckler','sheild','brigandine','gamberson','plate-armor','chainmail','healring','strengthring','spikerose'];
var tableplacep1t1=['t1p1r1d1','t1p1r1d2','t1p1r1d3','t1p1r1d4','t1p1r2d1','t1p1r2d2','t1p1r2d3','t1p1r2d4','t1p1r3d1','t1p1r3d2','t1p1r3d3','t1p1r3d4','t1p1r4d1','t1p1r4d2','t1p1r4d3','t1p1r4d4'];
var tableplacep2t1=['t1p2r1d1','t1p2r1d2','t1p2r1d3','t1p2r1d4','t1p2r2d1','t1p2r2d2','t1p2r2d3','t1p2r2d4','t1p2r3d1','t1p2r3d2','t1p2r3d3','t1p2r3d4','t1p2r4d1','t1p2r4d2','t1p2r4d3','t1p2r4d4'];
var tableplacep1t2=['t2p1r1d1','t2p1r1d2','t2p1r1d3','t2p1r1d4','t2p1r2d1','t2p1r2d2','t2p1r2d3','t2p1r2d4'];
var tableplacep2t2=['t2p2r1d1','t2p2r1d2','t2p2r1d3','t2p2r1d4','t2p2r2d1','t2p2r2d2','t2p2r2d3','t2p2r2d4'];
alert(itemlist.length);
function newitems(){
  var count=0;
  while(count<8);
  var math1z= parseInt(Math.floor(Math.random()*20));
  var math2z= parseInt(Math.floor(Math.random()*20));
  var p1=tableplacep1t2[count];
  var p2=tableplacep2t2[count];
  count=count+1;
  var m1z=chooseitem(math1z);
  var m2z=chooseitem(math2z);
  document.getElementById(p1).innerHTML="<input type='button'onclick='useit(math1z)'value='m1z'";
  document.getElementById(p2).innerHTML="<input type='button'onclick='useit(math2z)'value='m2z'";
}
function startgame(){
  document.getElementById('idd').value;
  if(value==yes){
    document.getElementById('ifnot').innerHTML="Welcome to the game!";
    loadgame();
  }
  else if(value==no){
  document.getElementById('ifnot').innerHTML=":c"+"<br>"+"If you do want to play type yes";
  }
  else{
  document.getElementById('ifnot').innerHTML="Error: please type yes or no";
  }
}
function newturn(){
  energy1=5;
  energy2=5;
  newitems();
}
function a(){
 var jump = document.getElementById("thisplace").value;
 var jump1 = document.getElementById("thisplace1").value;
  tableplacep1t1[jump] = tableplacep2t1[jump1];
  tableplacep2t1[jump1] = tableplacep1t1[jump];
}
function b(){
  var last = "";
  for(var i = 0;i<=tableplacep1t1.length;i++){
    if(tableplacep1t1[i]==""){
      tableplacep1t1[i] = tableplacep1t1[i+1];
    }
  }
}
function b1(){
var last = "
  for(var i = 0;i<=tableplacep2t1.length;i++){
    if(tableplacep2t1[i]==""){
      tableplacep2t1[i] = tableplacep2t1[i+1];
    }
  }
}

function loadgame(){
  document.getElementsByClassName('wowz').innerHTML="<table id='maintable'><tr><td id='p1t1'></td><td id='p2t1'></td></tr><br><tr><td id='p1t2'></td><td id='p2t2'></td></tr>/table>";
  document.getElementById('p1t1').innerHTML="<table id='ttable1'><tr><td id='t1p1r1d1'></td><td id='t1p1r1d2'></td><td id='t1p1r1d3'></td><td id='t1p1r1d4'></td></tr><tr><td id='t1p1r2d1'></td><td id='t1p1r2d2'></td><td id='t1p1r2d3'></td><td id='t1p1r2d4'></td></tr><tr><td id='t1p1r3d1'></td><td id='t1p1r3d2'></td><td id='t1p1r3d3'></td><td id='t1p1r3d4'></td></tr><tr><td id='t1p1r4d1'></td><td id='t1p1r4d2'></td><td id='t1p1r4d3'></td><td id='t1p1r4d4'></td></tr.</table>";
  document.getElementById('p2t1').innerHTML="<table id='ttable2'><tr><td id='t1p2r1d1'></td><td id='t1p2r1d2'></td><td id='t1p2r1d3'></td><td id='t1p2r1d4'></td></tr><tr><td id='t1p2r2d1'></td><td id='t1p2r2d2'></td><td id='t1p2r2d3'></td><td id='t1p2r2d4'></td></tr><tr><td id='t1p2r3d1'></td><td id='t1p2r3d2'></td><td id='t1p2r3d3'></td><td id='t1p2r3d4'></td><tr></tr><td id='t1p2r4d1'></td><td id='t1p2r4d2'></td><td id='t1p2r4d3'></td><td id='t1p2r4d4'></td></tr></table>";
  document.getElementById('p1t2').innerHTML="<table id='btable1'>tr><td id='t2p1r1d1'></td><td id='t2p1r1d2'></td><td id='t2p1r1d3'></td><td id='t2p1r1d4'></td></tr><tr><td id='t2p1r2d1'></td><td id='t2p1r2d2'></td><td id='t2p1r2d3'></td><td id='t2p1r2d4'></td></tr></table>";
  document.getElementById('p2t2').innerHTML="<table id='btable2'>tr><td id='t2p2r1d1'></td><td id='t2p2r1d2'></td><td id='t2p2r1d3'></td><td id='t2p2r1d4'></td></tr><tr><td id='t2p2r2d1'></td><td id='t2p2r2d2'></td><td id='t2p2r2d3'></td><td id='t2p2r2d4'></td></tr></table>";
  newitems();
}
function actualgameplay(){

while (energy>-0.5){
if(x==0){
if(energy1-2>-0.5){
 energy1=energy1-2;
 hp2=hp2+15;
 if (parseInt(Math.floor(Math.random()*10))==10) {
  hp2=hp2+10;
}}}
else if(x==1){
if(energy1-1>-0.5){
 energy1=energy1-1;
 hp2=hp2-6;
 if(parseInt(Math.floor(Math.random()*10))==5){
   energy1=energy1+1;
}
else if (parseInt(Math.floor(Math.random()*10))==10) {

}}

else if (x==2) {
if(energy1-3>-0.5);{
energy1=energy1-3;
hp2=hp2-25;
}}
else if (x==3) {
if (energy1-0.5>-0.5) {
energy1=energy1-0.5;
hp2=hp2-2;
if (parseInt(Math.floor(Math.random()*10))==10) {
hp2=hp2-5;
}
else if (parseInt(Math.floor(Math.random()*10))==9) {
hp2=hp2-4;
else if (parseInt(Math.floor(Math.random()*10))==7) {
}
hp2=hp2-3;
}
else if (parseInt(Math.floor(Math.random()*10))==6) {
hp2=hp2-3;
}
else if (parseInt(Math.floor(Math.random()*10))==5) {
hp2=hp2-2;
}
else if (parseInt(Math.floor(Math.random()*10))==4) {
hp2=hp2-2;
}
else if (parseInt(Math.floor(Math.random()*10))==3) {
hp2=hp2-1;
}
else if (parseInt(Math.floor(Math.random()*10))==2) {
hp2=hp2-1;
}}}
else if (x==4) {
if (energy1-1>-0.5){
energy1=energy1-1;
hp1=hp1-4;
hp2=hp2-12;
}}
else if(x==5){
if (energy1-1.5>-0.5){
energy1=energy1-1.5;
hp2=hp2-14;
}}
else if(x==6){
if (energy1-1){
energy1=energy1-1;
hp2=hp2+3;
if(parseInt(Math.floor(Math.random()*100))==100) {
hp2=0;
}}}
else if(x==7){
if (energy1-2>-0.5)
{
energy1=energy1-2;
hp2=hp2-8;
spikes1=spikes1+2;
}}
else if(x==8){
if (energy1-2>-0.5){
energy1=energy1-2;
hp1=hp1+10;
spikes1=spikes1+5;
}}
else if(x==9){
if (energy1-2>-0.5) {
energy=energy1-2;
hp1=hp1+5;
spikes1=spikes1+5;
 if (hp1>33){
spikes1=spikes1+5;
hp1=hp1+7;
}
}}
else if (x==10) {
if (energy1-1>-0.5) {
  energy1=energy1-1;
spikes1=spikes1+7;
hp1=hp1+3;
}}
else if (x==11) {
 if (energy1-0.5>-0.5){
energy1=energy1-0.5;
hp1=hp1+2;
spikes1=spikes1+2;
}}
else if(x==12){
if (energy1-1.5>-0.5){
energy1=energy1-1.5;
hp1=hp1+6;
spikes1=spikes1+9;
}}
else if (x==13) {
if (energy1-3>-0.5){
energy1=energy1-3;
hp1=hp1+20;
spikes1=spikes1+10;
}}
else if (x==14) {
if(energy1-1>-0.5)
energy1=energy1-1;
hp1=hp1+9;
}}
else if (x==15) {
if (energy1-3>-0.5) {
energy1=energy1-3;
hp1=hp1+30;
}}
else if (x==16) {
if(energy1-2>-0.5){
hp1=hp1+18;
spikes1=spikes1+1;
}}
else if(x==17){
if (energy1>-0.5) {
energy1=-0.5;
hp1=hp1+parseInt(Math.floor(Math.random()*10));
}}
else if(x==18){
if (energy1>-0.5) { 
energy1=-0.5;
spikes1=spikes1+parseInt(Math.floor(Math.random()*10));
}}
else if(x==19){
if (energy1>-0.5) { 
energy1=-0.5;
hp2=hp2-parseInt(Math.floor(Math.random()*10));
}}
}}
