 
 /* Start simple page functions ........................................................................................................*/
var finalText ;
finalText = 0 ;
var mytext ;
 function inset(num){
  mytext = document.getElementById("inputtext").value ;
  var lastChar = mytext.charAt(mytext.length - 1);
  var blastChar = mytext.charAt(mytext.length - 2);
  if (mytext.length < 100) {
    if (lastChar == "/" || lastChar == "*" || lastChar == "+" || lastChar == "-" || lastChar == "^" || lastChar == ".") {
      if(num == "/" || num == "*" || num == "^" || num == "."){
        //don't do anything hahahaha
      }else if((blastChar == "+" || blastChar == "-" || blastChar == "*" || blastChar == "/" || blastChar == "^") && (lastChar == "+" || lastChar == "-")){
        if (num == "/" || num == "*" || num == "+" || num == "-" || num == "^" || num == ".") {
          //also don't do anything
        }else{
          document.getElementById("inputtext").value = mytext + num;
        }
      }else{
        document.getElementById("inputtext").value = mytext + num;
      }
    }else{
      document.getElementById("inputtext").value = mytext + num;
    }
    mytext = document.getElementById("inputtext").value ;
  }
  myresult();
}
function mypow(i,mytext){
  var sum ;
  var m = 0 ;
  var mytext2 ;
  var n1 ;
  var n2 ;
  var n3 ;
  var y1 = i-1 ;
  var y2 = i+1 ;
  while (y1>0) {
    if(mytext[y1]=="-" || mytext[y1]=="+" || mytext[y1]=="*" || mytext[y1]=="/" || mytext[y1]=="(" || mytext[y1]==")"){
      if(mytext[y1-1]=="-" || mytext[y1-1]=="+" || mytext[y1-1]=="*" || mytext[y1-1]=="/"){
        y1--;
      }
      y1++;
      break;
    }
    y1--;
  }
  while (y2<=mytext.length-1) {
 
    if(mytext[y2]=="-"){
      m+=1;
    }
    if(mytext[y2]=="+" || m==2 || mytext[y2]=="*" || mytext[y2]=="/" || mytext[y2]=="(" || mytext[y2]==")"){
      y2--;
      m = 0 ;
      break;
    }
    y2++;
  }
  n1 = mytext.slice(y1,i);
  n2 = mytext.slice(i+1,y2+1);
  n3 = (y2+1)-y1 ;
  sum = Math.pow(n1, n2);
  mytext2 = Array.prototype.slice.call(mytext);
  mytext2.splice(y1, n3 , sum);
  finalText = mytext2.join("") ;
  myresult();
}
function myresult(){
  try{
    var x ;
    if(finalText != 0){
      mytext = finalText ;
    }
    var y = mytext.length-1;
    for(i=0; i<=y; i++){
      x = mytext[i];
      if(x == "^"){
        mypow(i,mytext);
        
      }
    }
    document.getElementById("result").value = eval(mytext);
    finalText = 0 ;
  }catch(error){
    document.getElementById("result").value = "??????";
  }
}
function myresult2(){
  document.getElementById("inputtext").value = document.getElementById("result").value;
  document.getElementById("result").value = ""
}
function sqroot(){
  var rNum ;
  rNum = eval(mytext);
  document.getElementById("result").value = Math.sqrt(rNum);
}

function clean(){
  window.location.reload();
}
function back(){
  var x = document.getElementById("inputtext").value;
  document.getElementById("inputtext").value = x.substring(0,x.length - 1);
  myresult();
}

       
 

 /* Start sidenav functions ........................................................................................................*/
function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("list").style.display = "none";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("list").style.display = "block";
}
  
  class Mynavbar extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <input id="list" style="font-size: 30px; margin: 10px; background-color: transparent; border: none;" type="button" value="&#9776;"  onclick="openNav()">
      <div id="mySidenav" class="sidenav font1">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="index.html" class="closebtn" style="margin-left:15px;"><img src="home.png" /></a>
      ?????????????? :
      <a href="simple.html" ><img src="calculator-fill.png"> ??????????</a>
      <a href="scientific.html" ><img src="file-spreadsheet-fill.png">????????</a>
      ???????????? :
      <a href="length.html" ><img src="rulers.png">??????????</a>
      <a href="size.html" ><img src="box-seam.png">??????????</a>
      <a href="weight.html" ><img src="minecart-loaded.png">??????????</a>
      <a href="heat.html" ><img src="thermometer-sun.png">??????????????</a>
      <a href="time.html" ><img src="clock-fill.png">??????????</a>
      <a href="angle.html" ><img src="triangle-fill.png">??????????????</a>
      ?????? ?????? :
      <a href="mirath.html" ><img src="grid-fill.png">??????????????</a>
      <a href="zakaa.html" ><img src="droplet-fill.png">????????????</a>
      <a href="about.html" ><img src="info-circle-fill.png">??????</a>
      <a href="settings.html" ><img src="gear-fill.png">??????????????????</a>
      </div>
      `;
    }
  }
  window.customElements.define('my-navbar', Mynavbar);  