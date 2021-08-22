 
 /* Start simple page functions ........................................................................................................*/
function inset(num){
  var mytext = document.getElementById("inputtext").value ;
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
    myresult();
  }
}
var mytext ;
function myresult(){
  try{
    var mytext = document.getElementById("inputtext").value ;
    var x ;
    var y = mytext.length-1;
    for(i=0; i<=y; i++){
      x = mytext[i];
      if(x=="_"){
        myroot(i,mytext);
      }if(x == "^"){
        mypow(i,mytext);

      }
    }
    document.getElementById("result").value = eval(mytext);
      
    
    
  }catch(error){
    document.getElementById("result").value = "خطأ";
  }
}
function myroot(a){
  var x = a ;

}
function mypow(i,mytext){
  var sum ;
  var mytext2 ;
  var n1 ;
  var n2 ;
  var n3 ;
  var y1 = i-1 ;
  var y2 = i+1 ;
  while (y1>0) {
    if(mytext[y1]=="+" || mytext[y1]=="-" || mytext[y1]=="*" || mytext[y1]=="/"){
      y1++;
      break;
    }
    y1--;

  }
  while (y2<=mytext.length-1) {
    if(mytext[y2]=="+" || mytext[y2]=="-" || mytext[y2]=="*" || mytext[y2]=="/"){
      y2--;
      break;
    }
    y2++;
  }
  n1 = mytext.slice(y1,i);
  n2 = mytext.slice(i+1,y2+1);
  n3 = (y2+1)-y1 ;
  sum = Math.pow(n1, n2);
  mytext2 = Array.prototype.slice.call(mytext);
  document.getElementById("result").value = mytext2 ;
}
function clean(){
  document.getElementById("inputtext").value = '';
  document.getElementById("result").value = '';
}
function back(){
  var x = document.getElementById("inputtext").value;
  document.getElementById("inputtext").value = x.substring(0,x.length - 1);
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
      <input id="list" style=" margin: 10px; background-color: transparent; border: none;" type="button" value="&#9776;"  onclick="openNav()">
      <div id="mySidenav" class="sidenav font1">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="index.html" class="closebtn" style="margin-left:15px;"><img src="home.png" /></a>
      الحاسبة :
      <a href="simple.html" ><img src="calculator-fill.png"> قياسي</a>
      <a href="scientific.html" ><img src="file-spreadsheet-fill.png">علمي</a>
      المحول :
      <a href="length.html" ><img src="rulers.png">الطول</a>
      <a href="size.html" ><img src="box-seam.png">الحجم</a>
      <a href="weight.html" ><img src="minecart-loaded.png">الوزن</a>
      <a href="heat.html" ><img src="thermometer-sun.png">الحرارة</a>
      <a href="time.html" ><img src="clock-fill.png">الوقت</a>
      <a href="angle.html" ><img src="triangle-fill.png">الزاوية</a>
      غير ذلك :
      <a href="mirath.html" ><img src="grid-fill.png">الميراث</a>
      <a href="zakaa.html" ><img src="droplet-fill.png">الذكاة</a>
      <a href="about.html" ><img src="info-circle-fill.png">حول</a>
      <a href="settings.html" ><img src="gear-fill.png">الإعدادات</a>
      </div>
      `;
    }
  }
  window.customElements.define('my-navbar', Mynavbar);  
