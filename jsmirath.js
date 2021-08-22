/* Start mirath functions ........................................................................................................*/
/* grandf  grandm1  grandm2  father  mather  husband  wife  sons  dau  grands  grandd  bro1  sis1 bro2 sis2  bro3 uncle1 uncle2            */
var xgrandf  ,xgrandm1  ,xgrandm2  ,xfather  ,xmather  ,xhusband  ,xwife  ,xsons  ,xdau  ,xgrands  ,xgrandd  ,xbro1  ,xsis1 ,xbro2 ,xsis2  ,xbro3 ,xuncle1 ,xuncle2 ,xamount ,xrest ;
var ygrandf=ygrandm1=ygrandm2=yfather=ymather=yhusband=ywife=ysons=ydau=ygrands=ygrandd=ybro1=ysis1=ybro2=ysis2=ybro3=yuncle1=yuncle2 = 0 ;
xrest = 0 ;
function check(){
    xamount = parseInt(document.getElementById("amount").value*1) ;
    if(xamount < 1){
        window.amountErr.style.display = "block";
    }else{
        xgrandf = parseInt(document.getElementById("grandf").value*1) ;
        xgrandm1 = parseInt(document.getElementById("grandm1").value*1) ;
        xgrandm2 = parseInt(document.getElementById("grandm2").value*1) ;
        xfather = parseInt(document.getElementById("father").value*1) ;
        xmather = parseInt(document.getElementById("mather").value*1) ;
        xhusband = parseInt(document.getElementById("husband").value*1) ;
        xwife = parseInt(document.getElementById("wife").value*1) ;
        xsons = parseInt(document.getElementById("sons").value*1) ;
        xdau = parseInt(document.getElementById("dau").value*1) ;
        xgrands = parseInt(document.getElementById("grands").value*1) ;
        xgrandd = parseInt(document.getElementById("grandd").value*1) ;
        xbro1 = parseInt(document.getElementById("bro1").value*1) ;
        xsis1 = parseInt(document.getElementById("sis1").value*1) ;
        xbro2 = parseInt(document.getElementById("bro2").value*1) ;
        xsis2 = parseInt(document.getElementById("sis2").value*1) ;
        xbro3 = parseInt(document.getElementById("bro3").value*1) ;
        xuncle1 = parseInt(document.getElementById("uncle1").value*1) ;
        xuncle2 = parseInt(document.getElementById("uncle2").value*1) ;
        window.data.style.display = "none";
        window.amountErr.style.display = "none";
        if(xhusband==1){
            husband();
        }if(xwife==1){
            wife();
        }if(xgrandm1==1){
            grandm1();
        }if(xgrandm2==1){
            grandm2();
        }if(xbro3>=1){
            bro3();
        }if(xgrandd>=1){
            if(xgrandf==1){
                grandf();
            }
            if(xfather==1){
                father();
            }
            rest();
            grandd();
        }if(xdau>=1){
            if(xgrandf==1){
                grandf();
            }
            if(xfather==1){
                father();
            }
            rest();
            dau();
        }if(xmather==1){
            rest();
            mather();
        }if(xgrandf==1){
            rest();
            grandf();
        }if(xfather==1){
            father();
        }if(xsis1>=1){
            rest();
            sis1();
        }if(xsis2>=1){
            rest();
            sis2();
        }if(xsons>=1){
            rest();
            sons();
        }if(xgrands>=1){
            rest();
            grands();
        }if(xbro1>=1){
            rest();
            bro1();
        }if(xbro2>=1){
            rest();
            bro2();
        }if(xuncle1>=1){
            rest();
            uncle1();
        }if(xuncle2>=1){
            rest();
            uncle2();
        }
    } 
}
/* husband and wife functions ----------------------------------------------------------------- */
function husband(){
    if(xsons == 0 && xdau == 0 && xgrands == 0 && xgrandd == 0){
        yhusband = xamount/2 ;
        document.getElementById("R1husband").innerHTML = "1/2";
        document.getElementById("Ghusband").innerHTML = "(وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ) سورة النساء،12.";
    }else{
        yhusband = xamount/4;
        document.getElementById("R1husband").innerHTML = "1/4";
        document.getElementById("Ghusband").innerHTML = "(إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ فَإِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ) سورة النساء،12.";
    }
    window.Rhusband.style.display = "block";
    document.getElementById("R2husband").innerHTML =  Math.round(yhusband * 10000)/10000 ;
    document.getElementById("R3husband").innerHTML = Math.round(yhusband * 10000)/10000 ;
}
function wife(){
    if(xsons == 0 && xdau == 0 && xgrands == 0 && xgrandd == 0){
        ywife = xamount/4 ;
        document.getElementById("R1wife").innerHTML = "1/4";
        document.getElementById("Gwife").innerHTML = "(وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِنْ لَمْ يَكُنْ لَكُمْ وَلَدٌ فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِنْ بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ) سورة النساء،12.";
    }else{
        ywife = xamount/4;
        document.getElementById("R1wife").innerHTML = "1/8";
        document.getElementById("Gwife").innerHTML = "(وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِنْ لَمْ يَكُنْ لَكُمْ وَلَدٌ فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِنْ بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ) سورة النساء،12.";
    }
    window.Rwife.style.display = "block";
    document.getElementById("R2wife").innerHTML = Math.round(ywife * 10000)/10000 ;
    document.getElementById("R3wife").innerHTML = Math.round(ywife * 10000)/10000 ;
}
/* ancestral functions ------------------------------------------------------------------------ */
function mather(){
    if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1== 0 && xbro2 == 0 && xbro3 == 0 && xsis1 == 0 && xsis2 == 0) && ((xfather == 1) && (xhusband == 1 || xwife == 1))){
        ymather = xrest/3 ;
        document.getElementById("R1mather").innerHTML = "ثلث الباقي";
        document.getElementById("Gmather").innerHTML = " مسألتي العمريتين "
    }else if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1 <= 1 && xbro2 <= 1 && xbro3 <= 1 && xsis1 <= 1 && xsis2 <= 1) && ((xfather == 0) || (xhusband == 0 || xwife == 0))){
        ymather = xamount/3 ;
        document.getElementById("R1mather").innerHTML = "1/3";
    }else{
        ymather = xamount/6 ;
        document.getElementById("R1mather").innerHTML = "1/6";
    }
    window.Rmather.style.display = "block";
    document.getElementById("R2mather").innerHTML = Math.round(ymather * 10000)/10000 ;
    document.getElementById("R3mather").innerHTML = Math.round(ymather * 10000)/10000 ;
    document.getElementById("Gmather").innerHTML = "(وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِنْ كَانَ لَهُ وَلَدٌ فَإِنْ لَمْ يَكُنْ لَهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ فَإِنْ كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ مِنْ بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ) سورة النساء،11.";
}
function grandm1(){
    if(xmather == 0 && xfather == 0){
        if(xgrandm2 == 0){
            ygrandm1 = xamount/6;
            document.getElementById("R2grandm1").innerHTML = Math.round(ygrandm1 * 10000)/10000 ;
        }else{
            ygrandm1 = xamount/12;
            document.getElementById("R2grandm1").innerHTML = (Math.round(ygrandm1 * 100)/100)*2 ;
        }
        document.getElementById("R1grandm1").innerHTML = "1/6";
        document.getElementById("R3grandm1").innerHTML = Math.round(ygrandm1 * 10000)/10000 ;
    }else{
        document.getElementById("R1grandm1").innerHTML = "لا ترث";
    }
    window.Rgrandm1.style.display = "block";
}
function grandm2(){
    if(xmather == 0){
        if(xgrandm1 == 0){
            ygrandm2 = xamount/6;
            document.getElementById("R2grandm2").innerHTML = Math.round(ygrandm2 * 10000)/10000 ;
        }else{
            ygrandm2 = xamount/12;
            document.getElementById("R2grandm2").innerHTML = (Math.round(ygrandm2 * 100)/100)*2 ;
        }
        document.getElementById("R1grandm2").innerHTML = "1/6";
        document.getElementById("R3grandm2").innerHTML =  Math.round(ygrandm2 * 10000)/10000 ;
    }else{
        document.getElementById("R1grandm2").innerHTML = "لا ترث";
    }
    window.Rgrandm2.style.display = "block";
    
    
    
}
function grandf(){
    if(xfather == 0){
        if(xsons >= 1 || xgrands >= 1 ){
            ygrandf = xamount/6 ;
            document.getElementById("R1grandf").innerHTML = "1/6";
        }else if((xsons == 0 && xgrands == 0 ) && (xdau == 1 || xgrandd == 1)){
            ygrandf = xrest ;
            document.getElementById("R1grandf").innerHTML = "1/6+الباقي";
        }else{
            ygrandf = xrest ;
            document.getElementById("R1grandf").innerHTML = "بالتعصيب";
        }
        document.getElementById("R2grandf").innerHTML = Math.round(ygrandf * 10000)/10000 ;
        document.getElementById("R3grandf").innerHTML = Math.round(ygrandf * 10000)/10000 ;
    }else{
        document.getElementById("R1grandf").innerHTML = "لا يرث";
    }
    window.Rgrandf.style.display = "block";
    
}
function father(){
    rest();
    if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1== 0 && xbro2 == 0 && xbro3 == 0 && xsis1 == 0 && xsis2 == 0) && ((xmather == 1) && (xhusband == 1 || xwife == 1))){
        yfather = xrest ;
        document.getElementById("R1father").innerHTML = "ثلثي الباقي";
        document.getElementById("Gfather").innerHTML = " مسألتي الغراوين "
    }else if(xsons >= 1 || xgrands >= 1 ){
        yfather = xamount/6 ;
        document.getElementById("R1father").innerHTML = "1/6";
    }else if((xsons == 0 && xgrands == 0 ) && (xdau == 1 || xgrandd == 1)){
        yfather = xrest ;
        document.getElementById("R1father").innerHTML = "1/6+الباقي";
    }else{
        yfather = xrest ;
        document.getElementById("R1father").innerHTML = "بالتعصيب";
    }
    window.Rfather.style.display = "block";
    document.getElementById("R2father").innerHTML = Math.round(yfather * 10000)/10000 ;
    document.getElementById("R3father").innerHTML = Math.round(yfather * 10000)/10000 ;
}
/*  The inheritance of children and grandchildren ----------------------------------------------------- */
function dau(){
    if(xdau != 0){
        window.Rdau.style.display = "block";
    }
    if(xdau == 1 && xsons == 0){
        ydau = xamount/2 ;
        document.getElementById("R1dau").innerHTML = "1/2";
    }else if(xdau > 1 && xsons == 0){
        ydau = ((xamount/3)*2)/xdau ;
        document.getElementById("R1dau").innerHTML = "2/3";
    }else{
        ydau = (xrest1/( (xsons*2) + xdau));
        document.getElementById("R1dau").innerHTML = "بالتعصيب";
    }
    document.getElementById("R2dau").innerHTML =  xdau + "/" + Math.round((ydau*xdau) * 10000)/10000 ;
    document.getElementById("R3dau").innerHTML = Math.round(ydau * 10000)/10000 ;
    document.getElementById("Gdau").innerHTML = "(يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنْثَيَيْنِ فَإِنْ كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ وَإِنْ كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ) سورة النساء،11.";
}
function grandd(){
    if(xgrandd != 0){
        window.Rgrandd.style.display = "block";
    }
    if(xdau <= 1 && xsons == 0 ){
        if( xdau == 0 && xgrandd == 1 && xgrands == 0){
            ygrandd = xamount/2 ;
            document.getElementById("R1grandd").innerHTML = "1/2";
        }else if(xdau == 0 && xgrandd > 1 && xgrands == 0){
            ygrandd = ((xamount/3)*2)/xgrandd ;
            document.getElementById("R1grandd").innerHTML = "2/3";
        }else if(xdau == 1 && xgrandd >= 1 && xgrands == 0){
            ygrandd = (xamount/6)/xgrandd ;
            document.getElementById("R1grandd").innerHTML = "1/6";
        }else{
            ygrandd = xrest1/( (xgrands*2) + xgrandd);
            document.getElementById("R1grandd").innerHTML = "بالتعصيب";
        }
        document.getElementById("R2grandd").innerHTML = xgrandd + "/" + Math.round((ygrandd*xgrandd) * 10000)/10000 ;
        document.getElementById("R3grandd").innerHTML = Math.round(ygrandd * 10000)/10000 ;
    }else{
        document.getElementById("R1grandd").innerHTML = "لا ترث";
    }
}
function bro3(){
    window.Rbro3.style.display = "block";
    if(xbro3 > 0 && xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xfather == 0 && xgrandf == 0){
        if(xbro3 == 1){
            ybro3 = xamount/6 ;
            document.getElementById("R1bro3").innerHTML = "1/6";
        }else{
            ybro3 = (xamount/3)/xbro3 ;
            document.getElementById("R1bro3").innerHTML = "1/3";
        }
        document.getElementById("R2bro3").innerHTML = xbro3 + "/" + Math.round((ybro3*xbro3) * 10000)/10000 ;
        document.getElementById("R3bro3").innerHTML = Math.round(ybro3 * 10000)/10000 ;
    }else{
        document.getElementById("R1bro3").innerHTML = " لا يرثوا";
    }
}
function sis1(){
    if(xsis1 != 0){
        window.Rsis1.style.display = "block";
    }
    if(xsis1 != 0 && xsons == 0 && xgrands == 0 && xfather == 0 && xgrandf ){
        if(xsis1 == 1 && xdau == 0 && xgrandd == 0 && xbro1 == 0){
            ysis1 = xamount/2 ;
            document.getElementById("R1sis1").innerHTML = "1/2";
        }else if(xsis1 > 1 && xdau == 0 && xgrandd == 0 && xbro1 == 0){
            ysis1 = ((xamount/3)*2)/xsis1 ;
            document.getElementById("R1sis1").innerHTML = "2/3";
        }else if((xdau == 1 || xgrandd == 1) && xbro1 == 0){
            ysis1 = xrest2 ;
            document.getElementById("R1sis1").innerHTML = "بالتعصيب";
        }else{
            ysis1 = xrest2/( (xbro1*2) + xsis1);
            document.getElementById("R1sis1").innerHTML = "بالتعصيب";
        }
        document.getElementById("R2sis1").innerHTML = xsis1 + "/" + Math.round((ysis1 * xsis1) * 10000)/10000 ;
        document.getElementById("R3sis1").innerHTML = Math.round((ysis1) * 10000)/10000 ;
        document.getElementById("Gsis1").innerHTML = "(يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ وَهُوَ يَرِثُهَا إِنْ لَمْ يَكُنْ لَهَا وَلَدٌ فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ)سورة النساء،176.";
    }else{
        document.getElementById("R1sis1").innerHTML = "لا ترث";
    }
}
function sis2(){
    if(xsis2 != 0){
        window.Rsis1.style.display = "block";
    }
    if(xsis2 != 0 && xsons == 0 && xgrands == 0 && xfather == 0 && xgrandf){
        if(xsis2 == 1 && xdau == 0 && xgrandd == 0 && xbro2 == 0){
            ysis2 = xamount/2 ;
            document.getElementById("R1sis2").innerHTML = "1/2";
        }else if(xsis2 > 1 && xdau == 0 && xgrandd == 0 && xbro2 == 0){
            ysis2 = ((xamount/3)*2)/xsis2 ;
            document.getElementById("R1sis2").innerHTML = "2/3";
        }else if((xdau == 1 || xgrandd == 1) && xbro2 == 0){
            ysis2 = xrest2 ;
            document.getElementById("R1sis1").innerHTML = "بالتعصيب";
        }else{
            ysis2 = xrest2/( (xbro2*2) + xsis2);
            document.getElementById("R1sis2").innerHTML = "بالتعصيب";
        }
        document.getElementById("R2sis2").innerHTML = xsis2 + "/" + Math.round((ysis2 * xsis2) * 10000)/10000 ;
        document.getElementById("R3sis2").innerHTML = Math.round((ysis2) * 10000)/10000 ;
        document.getElementById("Gsis2").innerHTML = "(يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ وَهُوَ يَرِثُهَا إِنْ لَمْ يَكُنْ لَهَا وَلَدٌ فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ)سورة النساء،176.";
    }else{
        document.getElementById("R1sis1").innerHTML = "لا ترث";
    }
}
function sons(){
    ysons = (xrest1/( (xsons*2) + xdau))*2;
    window.Rsons.style.display = "block";
    document.getElementById("R1sons").innerHTML = "بالتعصيب";
    document.getElementById("R2sons").innerHTML = xsons + "/" + Math.round((ysons * xsons) * 10000)/10000 ;
    document.getElementById("R3sons").innerHTML = Math.round((ysons) * 10000)/10000 ;
}
function grands(){
    if(xsons == 0){
        ygrands = (xrest1/( (xgrands*2) + xgrandd))*2;
        document.getElementById("R1grands").innerHTML = "بالتعصيب";
        document.getElementById("R2grands").innerHTML =xgrands + "/" + Math.round((ygrands * xgrands) * 10000)/10000 ;
        document.getElementById("R3grands").innerHTML = Math.round((ygrands) * 10000)/10000 ;
    }else{
        document.getElementById("R1grands").innerHTML = "لا يرث";
    }
    window.Rgrands.style.display = "block";
}
/* mirath alhawashi ----------------------------------------------------- */
function bro1(){
    if(xsons == 0 && xfather == 0 && xgrandf){
        ybro1 = (xrest2/( (xbro1*2) + xsis1))*2;
        document.getElementById("R1bro1").innerHTML = "بالتعصيب";
        document.getElementById("R2bro1").innerHTML = xbro1 + "/" + Math.round((ybro1 * xbro1) * 10000)/10000 ;
        document.getElementById("R3bro1").innerHTML = Math.round((ybro1) * 10000)/10000 ;
    }else{
        document.getElementById("R1bro1").innerHTML = "لا يرث";
    }
    window.Rbro1.style.display = "block";
}
function bro2(){
    if(xsons == 0 && xfather == 0 && xgrandf && xbro1 == 0){
        ybro2 = (xrest2/( (xbro2*2) + xsis2))*2;
        document.getElementById("R1bro2").innerHTML = "بالتعصيب";
        document.getElementById("R2bro2").innerHTML = xbro2 + "/" + Math.round((ybro2 * xbro2) * 10000)/10000 ;
        document.getElementById("R3bro2").innerHTML = Math.round((ybro2) * 10000)/10000 ;
    }else{
        document.getElementById("R1bro2").innerHTML = "لا يرث";
    }
    window.Rbro2.style.display = "block";
}
function uncle1(){
    if(xsons == 0 && xfather == 0 && xgrandf && xbro1 == 0 && xbro2 == 0){
        yuncle1 = (xrest2/xuncle1);
        document.getElementById("R1uncle1").innerHTML = "بالتعصيب";
        document.getElementById("R2uncle1").innerHTML = xuncle1 + "/" + Math.round((yuncle1 * xuncle1) * 10000)/10000 ;
        document.getElementById("R3uncle1").innerHTML = Math.round((yuncle1) * 10000)/10000 ;
    }else{
        document.getElementById("R1uncle1").innerHTML = "لا يرث";
    }
    window.Runcle1.style.display = "block";
}
function uncle2(){
    if(xsons == 0 && xfather == 0 && xgrandf && xbro1 == 0 && xbro2 == 0){
        yuncle2 = (xrest2/xuncle2);
        document.getElementById("R1uncle2").innerHTML = "بالتعصيب";
        document.getElementById("R2uncle2").innerHTML = xuncle2 + "/" + Math.round((yuncle2 * xuncle2) * 10000)/10000 ;
        document.getElementById("R3uncle2").innerHTML = Math.round((yuncle2) * 10000)/10000 ;
    }else{
        document.getElementById("R1uncle2").innerHTML = "لا يرث";
    }
    window.Runcle2.style.display = "block";
}
/* The rest is after the ashab alfarayid*/
function rest(){
    /* for father and grandfather ... */
    xrest = xamount-(yhusband + ywife + ymather + ygrandm1 + ygrandm2 + ydau + ygrandd + ybro3);
    /* for dau and sons .... */
    xrest1 = xamount-(yhusband + ywife + ymather + ygrandm1 + ygrandm2 + yfather + ygrandf );
    /* for sister  .... */
    xrest2 = xamount-(yhusband + ywife + ymather + ygrandm1 + ygrandm2 + yfather + ygrandf + ydau + ygrandd + ybro3);
}
/* Functions of increase and decrease-------------------------------------------------------------------- */
function plus1(x){
        var num = document.getElementById(x).value ;
        document.getElementById(x).value = 1 ;
}
function minus1(x){
    var num = document.getElementById(x).value ;
    document.getElementById(x).value = " ";
}
function plus10(x){
    var num = document.getElementById(x).value ;
    document.getElementById(x).value = 1 ;
    if(x=="husband"){
        document.getElementById("wife").value = " " ;
    }else{
        document.getElementById("husband").value = " " ;
    }
}
function minus10(x){
var num = document.getElementById(x).value ;
document.getElementById(x).value = " ";
}
function plus(x){
    var num = document.getElementById(x).value ;
    var y = 0 ;
    if(num>0){
        y = parseInt(num);
    }
    document.getElementById(x).value = y + 1 ;
}
function minus(x){
    var num = document.getElementById(x).value ;
    var y = 0 ;
    if(num>1){
        y = parseInt(num);
        document.getElementById(x).value = y - 1 ;
    }else{
        document.getElementById(x).value = " ";
    }
 }