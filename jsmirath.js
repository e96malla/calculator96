/*------------------------------------------------------------------------------------------------------------------------
grandf  grandm1  grandm2  father  mather  husband  wife  sons  dau  grands  grandd  bro1  sis1 bro2 sis2  bro3 uncle1 uncle2

*/
var xgrandf  ,xgrandm1  ,xgrandm2  ,xfather  ,xmather  ,xhusband  ,xwife  ,xsons  ,xdau  ,xgrands  ,xgrandd  ,xbro1  ,xsis1 ,xbro2 ,xsis2  ,xbro3 ,xuncle1 ,xuncle2 ,xamount ,xrest ;
var totell=xrest=ygrandf=ygrandm1=ygrandm2=yfather=ymather=yhusband=ywife=ysons=ydau=ygrands=ygrandd=ybro1=ysis1=ybro2=ysis2=ybro3=yuncle1=yuncle2= 0 ;
var multifactor = 1;



/*------------------------------------------------------------------------------------------------------------------------
Functions of increase and decrease
*/
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
function plus1(x){
    document.getElementById(x).value = 1 ;
}
function minus1(x){
    document.getElementById(x).value = " ";
}
function plus2(){
    document.getElementById("husband").value = 1 ;
    document.getElementById("wife").value = " " ;
}
function minus2(){
    document.getElementById("husband").value = " ";
}
function plus3(){
    document.getElementById("husband").value = " ";
    var num = document.getElementById("wife").value ;
    var y = 0 ;
    if(num>0){
        y = parseInt(num);
    }
    if(num < 4){
        document.getElementById("wife").value = y + 1 ;
    }
}
function minus3(){
    var num = document.getElementById("wife").value ;
    var y = 0 ;
    if(num>1){
        y = parseInt(num);
        document.getElementById("wife").value = y - 1 ;
    }else{
        document.getElementById("wife").value = " ";
    }
}



/*------------------------------------------------------------------------------------------------------------------------

*/
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
            if(xsons == 0 && xdau == 0 && xgrands == 0 && xgrandd == 0){
                alfurud("husband" , 1 , 2 , yhusband);
                document.getElementById("Ghusband").innerHTML = "(وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ) سورة النساء،12.";
            }else{
                alfurud("husband" , 1 , 4 , yhusband);
                document.getElementById("Ghusband").innerHTML = "(إِنْ لَمْ يَكُنْ لَهُنَّ وَلَدٌ فَإِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ) سورة النساء،12.";
            }
        }if(xwife>=1){
            if(xsons == 0 && xdau == 0 && xgrands == 0 && xgrandd == 0){
                alfurud("wife" , xwife , 4 , ywife);
                document.getElementById("Gwife").innerHTML = "(وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِنْ لَمْ يَكُنْ لَكُمْ وَلَدٌ فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِنْ بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ) سورة النساء،12.";
            }else{
                alfurud("wife" , xwife , 8 , ywife);
                document.getElementById("Gwife").innerHTML = "(وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِنْ لَمْ يَكُنْ لَكُمْ وَلَدٌ فَإِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِنْ بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ) سورة النساء،12.";
            }
        }if(xmather==1){
            if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1== 0 && xbro2 == 0 && xbro3 == 0 && xsis1 == 0 && xsis2 == 0) && ((xfather == 1) && (xhusband == 1 || xwife == 1))){
                ymather = ((xamount - (yhusband + ywife))/3)*multifactor ;
                window.Rmather.style.display = "block";
                document.getElementById("R1mather").innerHTML = "ثلث الباقي";
                document.getElementById("R2mather").innerHTML = Math.round(ymather * 1000)/1000 ;
                document.getElementById("R5mather").innerHTML = " / " + xmather ;
                rest();
            }else if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1 <= 1 && xbro2 <= 1 && xbro3 <= 1 && xsis1 <= 1 && xsis2 <= 1) && ((xfather == 0) || (xhusband == 0 || xwife == 0))){
                alfurud("mather" , 1 , 3 , ymather);
            }else{
                alfurud("mather" , 1 , 6 , ymather);
            }
            document.getElementById("Gmather").innerHTML = "(وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِنْ كَانَ لَهُ وَلَدٌ فَإِنْ لَمْ يَكُنْ لَهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ فَإِنْ كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ مِنْ بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ) سورة النساء،11.";
        }if(xgrandm1==1){
            if(xmather == 0 && xfather == 0){
                if(xgrandm2 == 0){
                    alfurud("grandm1" , 1 , 6 , ygrandm1);
                }else{
                    alfurud("grandm1" , 1 , 12 , ygrandm1);
                }
                document.getElementById("Ggrandm1").innerHTML = "قال المغيرة بن شعبة: حضرت رسول الله صلى الله عليه وسلم أعطاها السدس.";
            }else{
                mahjub("grandm1" , 1 , "انثى");
            }
        }if(xgrandm2==1){
            if(xmather == 0){
                if(xgrandm1 == 0){
                    alfurud("grandm2" , 1 , 6 , ygrandm2);
                }else{
                    alfurud("grandm2" , 1 , 12 , ygrandm2);
                }
                document.getElementById("Ggrandm2").innerHTML = "قال المغيرة بن شعبة: حضرت رسول الله صلى الله عليه وسلم أعطاها السدس.";
            }else{
                mahjub("grandm2" , 1 , "انثى");
            }
        }if(xbro3>=1){
            if(xbro3 > 0 && xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xfather == 0 && xgrandf == 0){
                if(xbro3 == 1){
                    alfurud("bro3" , xbro3 , 6 , ybro3);
                }else{
                    alfurud("bro3" , xbro3 , 3 , ybro3);
                }
            }else{
                mahjub("bro3" , xbro3 , "ذكر");
            }
        }
        rest();
        if(xgrandf==1){
            if(xfather == 0){
                if(xsons >= 1 || xgrands >= 1 ){
                    alfurud("grandf" , 1 , 6 , ygrandf);
                }else if((xsons == 0 && xgrands == 0 ) && (xdau == 1 || xgrandd == 1)){
                    ygrandf = (xamount/6)*multifactor;
                    if((xrest-ygrandf)>0){
                        ygrandf = xrest * multifactor ;
                    }
                    window.Rgrandf.style.display = "block";
                    document.getElementById("R1grandf").innerHTML = "1/6+الباقي";
                    document.getElementById("R2grandf").innerHTML = Math.round(ygrandf * 1000)/1000 ;
                    document.getElementById("R5grandf").innerHTML = " / " + xgrandf ;
                    rest();
                }else{
                    altaesib("grandf" , 1 , 0 , "ذكر" , xrest , ygrandf);
                }
            }else{
                mahjub("grandf" , 1 , "ذكر");
            }
        }if(xfather==1){
            if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1== 0 && xbro2 == 0 && xbro3 == 0 && xsis1 == 0 && xsis2 == 0) && ((xmather == 1) && (xhusband == 1 || xwife == 1))){
                yfather = xrest *multifactor ;
                document.getElementById("R1father").innerHTML = "ثلثي الباقي";
                document.getElementById("Gfather").innerHTML = " مسألتي الغراوين ";
                rest();
            }else if(xsons >= 1 || xgrands >= 1 ){
                alfurud("father" , 1 , 6 , yfather);
            }else if((xsons == 0 && xgrands == 0 ) && (xdau >= 1 || xgrandd >= 1)){
                yfather = (xamount/6)*multifactor;
                if((xrest-yfather)>0){
                    yfather = xrest * multifactor ;
                }
                document.getElementById("R1father").innerHTML = "1/6+الباقي";
                document.getElementById("R5father").innerHTML = " / " + xfather ;
            }else{
                altaesib("father" , 1 , 0 , "ذكر" , xrest , yfather);
            }
            window.Rfather.style.display = "block";
            document.getElementById("R2father").innerHTML = Math.round(yfather * 1000)/1000 ;
            rest();
        }if(xdau>=1){
            if(xdau == 1 && xsons == 0){
                alfurud("dau" , xdau , 2 , ydau);
            }else if(xdau > 1 && xsons == 0){
                ydau = (((xamount/3)*multifactor)*2)/xdau ;
                window.Rdau.style.display = "block";
                document.getElementById("R1dau").innerHTML = "2/3";
                document.getElementById("R2dau").innerHTML = Math.round(ydau * 1000)/1000 ;
                document.getElementById("R5dau").innerHTML = " / " + xdau ;
                rest();
            }else{
                altaesib("dau" , xdau , xsons , "انثى" , xrest1 , ydau);
            }
            document.getElementById("Gdau").innerHTML = "(يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنْثَيَيْنِ فَإِنْ كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ وَإِنْ كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ) سورة النساء،11.";        
        }if(xgrandd>=1){
            if(xdau <= 1 && xsons == 0 ){
                if( xdau == 0 && xgrandd == 1 && xgrands == 0){
                    alfurud("grandd" , xgrandd , 2 , ygrandd);
                }else if(xdau == 0 && xgrandd > 1 && xgrands == 0){
                    ygrandd = (((xamount/3)*multifactor)*2)/xgrandd ;
                    window.Rgrandd.style.display = "block";
                    document.getElementById("R1grandd").innerHTML = "2/3";
                    document.getElementById("R2grandd").innerHTML = Math.round(ygrandd * 1000)/1000 ;
                    document.getElementById("R5grandd").innerHTML = " / " + xgrandd ;
                    rest();
                }else if(xdau == 1 && xgrandd >= 1 && xgrands == 0){
                    alfurud("grandd" , xgrandd , 6 , ygrandd);
                }else{
                    altaesib("grandd" , xgrandd , xgrands , "انثى" , xrest1 , ygrandd);
                }
            }else{
                mahjub("grandd" , xgrandd , "انثى");
            }
        }if(xsis1>=1){
            if(xrest2 > 0 && xsis1 != 0 && xsons == 0 && xgrands == 0 && xfather == 0 ){
                if(xsis1 == 1 && xdau == 0 && xgrandd == 0 && xbro1 == 0){
                    alfurud("sis1" , xsis1 , 2 , ysis1);
                }else if(xsis1 > 1 && xdau == 0 && xgrandd == 0 && xbro1 == 0){
                    ysis1 = (((xamount/3)*multifactor )*2)/xsis1 ;
                    window.Rsis1.style.display = "block";
                    document.getElementById("R1sis1").innerHTML = "2/3";
                    document.getElementById("R2sis1").innerHTML = Math.round((ysis1) * 1000)/1000 ;
                    document.getElementById("R5sis1").innerHTML = " / " + xsis1 ;
                    rest();
                }else if((xdau == 1 || xgrandd == 1) && xbro1 == 0){
                    alfurud("sis1" , xsis1 , 6 , ysis1);
                }else if(xbro1 != 0){
                    altaesib("sis1" , xsis1 , xbro1 , "انثى" , xrest2 , ysis1);
                }
                document.getElementById("Gsis1").innerHTML = "(يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ وَهُوَ يَرِثُهَا إِنْ لَمْ يَكُنْ لَهَا وَلَدٌ فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ)سورة النساء،176.";
            }else{
                mahjub("sis1" , xsis1 , "انثى");
            }
        }if(xsis2>=1){
            if(xrest2 > 0 && xsis2 != 0 && xsons == 0 && xgrands == 0 && xfather == 0 && xsis1 <= 1){
                if(xsis2 == 1 && xdau == 0 && xgrandd == 0 && xbro2 == 0){
                    alfurud("sis2" , xsis2 , 2 , ysis2);
                }else if(xsis2 > 1 && xdau == 0 && xgrandd == 0 && xbro2 == 0){
                    ysis2 = (((xamount/3)*multifactor )*2)/xsis2 ;
                    window.Rsis2.style.display = "block";
                    document.getElementById("R1sis2").innerHTML = "2/3";
                    document.getElementById("R2sis2").innerHTML = Math.round((ysis2) * 1000)/1000 ;
                    document.getElementById("R5sis2").innerHTML = " / " + xsis2 ;
                    rest();
                }else if((xdau == 1 || xgrandd == 1) && xbro2 == 0){
                    alfurud("sis2" , xsis2 , 6 , ysis2);
                }else if(xbro2 != 0){
                    altaesib("sis2" , xsis2 , xbro2 , "انثى" , xrest2 , ysis2);
                }
                document.getElementById("Gsis2").innerHTML = "(يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ إِنِ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ وَهُوَ يَرِثُهَا إِنْ لَمْ يَكُنْ لَهَا وَلَدٌ فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ)سورة النساء،176.";
            }else{
                mahjub("sis2" , xsis2 , "انثى");
            }
        }if(xsons>=1){
            if(xsons>=1){           // document.write(xsons);
                altaesib("sons" , xsons , xdau , "ذكر" , xrest1 , ysons);}

            document.getElementById("Gsons").innerHTML = "(يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنْثَيَيْنِ) سورة النساء،11.";
        }if(xgrands>=1){
            if( xsons == 0){
                altaesib("grands" , xgrands , xgrandd , "ذكر" , xrest1 , ygrands);
            }else{
                mahjub("grands" , xgrands , "ذكر");
            }
        }if(xbro1>=1){
            if( xsons == 0 && xfather == 0 ){
                altaesib("bro1" , xbro1 , xsis1 , "ذكر" , xrest2 , ybro1);
                document.getElementById("Gbro1").innerHTML = "(يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلالَةِ إِنْ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ وَهُوَ يَرِثُهَا إِنْ لَمْ يَكُنْ لَهَا وَلَدٌ فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ وَإِنْ كَانُوا إِخْوَةً رِجَالًا وَنِسَاءً فَلِلذَّكَرِ مِثْلُ حَظِّ الأُنثَيَيْنِ يُبَيِّنُ اللَّهُ لَكُمْ أَنْ تَضِلُّوا وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ)سورة النساء،176.";
            }else{
                mahjub("bro1" , xbro1 , "ذكر");
            }
        }if(xbro2>=1){
            if( xsons == 0 && xfather == 0 && xbro1 == 0){
                altaesib("bro2" , xbro2 , xsis2 , "ذكر" , xrest2 , ybro2);
                document.getElementById("Gbro2").innerHTML = "(يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلالَةِ إِنْ امْرُؤٌ هَلَكَ لَيْسَ لَهُ وَلَدٌ وَلَهُ أُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَ وَهُوَ يَرِثُهَا إِنْ لَمْ يَكُنْ لَهَا وَلَدٌ فَإِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثَانِ مِمَّا تَرَكَ وَإِنْ كَانُوا إِخْوَةً رِجَالًا وَنِسَاءً فَلِلذَّكَرِ مِثْلُ حَظِّ الأُنثَيَيْنِ يُبَيِّنُ اللَّهُ لَكُمْ أَنْ تَضِلُّوا وَاللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ)سورة النساء،176.";
            }else{
                mahjub("bro2" , xbro2 , "ذكر");
            }
        }if(xuncle1>=1){
            if(xrest2 > 0 && xsons == 0 && xfather == 0 && xgrandf == 0 && xbro1 == 0 && xbro2 == 0){
                altaesib("uncle1" , xuncle1 , 0 , "ذكر" , xrest2 , yuncle1);
            }else{
                mahjub("uncle1" , xuncle1 , "ذكر");
            }
        }if(xuncle2>=1){
            if(xrest2 > 0 && xsons == 0 && xfather == 0 && xgrandf == 0 && xbro1 == 0 && xbro2 == 0 && xuncle1 == 0){
                altaesib("uncle2" , xuncle2 , 0 , "ذكر" , xrest2 , yuncle2);
            }else{
                mahjub("uncle2" , xuncle2 , "ذكر");
            }
        }
        returnn();
    } 
   
}



/*------------------------------------------------------------------------------------------------------------------------
دالة ألوارثون بالفرض ، تتطلب الآتي بالترتيب :
اسم الوارث ، وعددهم  ، ومقام الفرض ، ونصيبهم
*/
function alfurud(alwarith , number , maqamAlfard , alnasib){
    /*
    المتغيرات التالية لتكوين "معرف" لكل وارث مثلا لنفرض ان الواث ولد
    alwarith = sons
    so x1 = R1sons ,,, this is ID will be in "y1"
    */
    var x1 = "R1";
    var x2 = "R2";
    var x3 = "R";
    var x4 = "R4";
    var x5 = "R5";
    var y1 = x1 + alwarith ;//النسبة
    var y2 = x2 + alwarith ;//نصيب الفرد
    var y3 = x3 + alwarith ;//block
    var y4 = x4 + alwarith ;//لجلب عنوان الوارث قبل التغيير
    var y5 = document.getElementById(y4).innerHTML + " / " + number;//EX: " الزوجة : / 4"
    var y6 = x5 + alwarith ;// عنوان الوارث الذي سيتغير
    alnasib = ((xamount/maqamAlfard)/number)*multifactor ;
    document.getElementById(y1).innerHTML = "1/" + maqamAlfard;
    document.getElementById(y2).innerHTML = Math.round(alnasib * 1000)/1000 ;
    document.getElementById(y3).style.display = "block";
    document.getElementById(y4).style.display = "none";//إخفاء العنوان الاول
    document.getElementById(y6).innerHTML = y5 ;
    switch (alwarith) {
        case "grandf": ygrandf = alnasib ; break;
        case "grandm1": ygrandm1 = alnasib ; break;
        case "grandm2": ygrandm2 = alnasib ; break;
        case "father": yfather = alnasib ; break;
        case "mather": ymather = alnasib ; break;
        case "husband": yhusband = alnasib ; break;
        case "wife": ywife = alnasib ; break;
        case "sons": ysons = alnasib ; break;
        case "dau": ydau = alnasib ; break;
        case "grands": ygrands = alnasib ; break;
        case "grandd": ygrandd = alnasib ; break;
        case "bro1": ybro1 = alnasib ; break;
        case "sis1": ysis1 = alnasib ; break;
        case "bro2": ybro2 = alnasib ; break;
        case "sis2": ysis2 = alnasib ; break;
        case "bro3": ybro3 = alnasib ; break;
        case "uncle1": yuncle1 = alnasib ; break;
        case "uncle2": yuncle2 = alnasib ; break;        
    }
    rest();
}



/*------------------------------------------------------------------------------------------------------------------------
دالة ألوارثون بالتعصيب ، تتطلب الآتي بالترتيب :
اسم الوارث ، وعددهم ، وهل ذكور فط ام مختلطون ، ونوعوهم ، والباقي ، ونصيبهم
*/
function altaesib(alwarith , number , isMixture , type , rest0 , alnasib){
    var x1 = "R1";
    var x2 = "R2";
    var x3 = "R";
    var x4 = "R4";
    var x5 = "R5";
    var y1 = x1 + alwarith ;//النسبة
    var y2 = x2 + alwarith ;//نصيب الفرد
    var y3 = x3 + alwarith ;//block
    var y4 = x4 + alwarith ;//لجلب عنوان الوارث قبل التغيير
    var y5 = document.getElementById(y4).innerHTML + " / " + number;//EX: " الزوجة : / 4"
    var y6 = x5 + alwarith ;// عنوان الوارث الذي سيتغير
    if(type == "ذكر"){
        alnasib = ((rest0/( (number*2) + isMixture))*2)*multifactor ;
        //باقي الورثة مقسوم على عدد الذكور مضاعف بالإضافة لععد الإناث ، الكل في 2 لان للذكر مثل حظ الأنثيين
    }else{
        alnasib = (rest0/( (isMixture*2) + number))* multifactor;
    }
    document.getElementById(y1).innerHTML = "بالتعصيب";
    document.getElementById(y2).innerHTML = Math.round((alnasib) * 1000)/1000 ;
    document.getElementById(y3).style.display = "block";
    document.getElementById(y4).style.display = "none";//إخفاء العنوان الاول
    document.getElementById(y6).innerHTML = y5 ;
    switch (alwarith) {
        case "grandf": ygrandf = alnasib ; break;
        case "grandm1": ygrandm1 = alnasib ; break;
        case "grandm2": ygrandm2 = alnasib ; break;
        case "father": yfather = alnasib ; break;
        case "mather": ymather = alnasib ; break;
        case "husband": yhusband = alnasib ; break;
        case "wife": ywife = alnasib ; break;
        case "sons": ysons = alnasib ; break;
        case "dau": ydau = alnasib ; break;
        case "grands": ygrands = alnasib ; break;
        case "grandd": ygrandd = alnasib ; break;
        case "bro1": ybro1 = alnasib ; break;
        case "sis1": ysis1 = alnasib ; break;
        case "bro2": ybro2 = alnasib ; break;
        case "sis2": ysis2 = alnasib ; break;
        case "bro3": ybro3 = alnasib ; break;
        case "uncle1": yuncle1 = alnasib ; break;
        case "uncle2": yuncle2 = alnasib ; break;        
    }
    rest();
}



/*------------------------------------------------------------------------------------------------------------------------
دالة المخرومون من الورثة تتطلب اسم الوارث وعددهم ونوعوا
وتعرض في خانة "النسبة" لا يرث او لا يرثوا ... حسب العدد والنوع
*/
function mahjub(alwarith , number , type){
    var x1 = "R1";
    var x3 = "R";
    var x4 = "R4";
    var x5 = "R5";
    var y1 = x1 + alwarith ;//النسبة
    var y3 = x3 + alwarith ;//block
    var y4 = x4 + alwarith ;//لجلب عنوان الوارث قبل التغيير
    var y5 = document.getElementById(y4).innerHTML + " / " + number;//EX: " الزوجة : / 4"
    var y6 = x5 + alwarith ;// عنوان الوارث الذي سيتغير
    if(type == "ذكر"){
        if(number == 1){
            document.getElementById(y1).innerHTML = "لا يرث";
        }else{
            document.getElementById(y1).innerHTML = "لا يرثوا";
        }
    }else{
        if(number == 1){
            document.getElementById(y1).innerHTML = "لا ترث";
        }else{
            document.getElementById(y1).innerHTML = "لا يرثن";
        }
    }
    document.getElementById(y3).style.display = "block";
    document.getElementById(y4).style.display = "none";//إخفاء العنوان الاول
    document.getElementById(y6).innerHTML = y5 ;
    rest();
}



/*------------------------------------------------------------------------------------------------------------------------
The rest is after the ashab alfarayid
*/
function rest(){
    // for father and grandfather ... 
    xrest = xamount-(yhusband + (ywife*xwife) + ymather + ygrandm1 + ygrandm2 + (ydau*xdau) + (ygrandd*xgrandd) + (ybro3*xbro3));
    // for dau and sons .... 
    xrest1 = xamount-(yhusband + (ywife*xwife) + ymather + ygrandm1 + ygrandm2 + yfather + ygrandf );
    // for sister  .... 
    xrest2 = xamount-(yhusband + (ywife*xwife) + ymather + ygrandm1 + ygrandm2 + yfather + ygrandf + (ydau*xdau) + (ygrandd*xgrandd) + (ybro3*xbro3));
}


/*------------------------------------------------------------------------------------------------------------------------

*/
function returnn(){
    totell = (yhusband + (ywife*xwife) + ymather + ygrandm1 + ygrandm2 + ygrandf + yfather + (ydau*xdau) + (ygrandd*xgrandd) + (ybro3*xbro3) + (ysis1*xsis1) + (ysis2*xsis2) + (ysons*xsons) + (ygrands*xgrands) + (ybro1*xbro1) + (ybro2*xbro2) + (yuncle1*xuncle1) + (yuncle2*xuncle2)) ;
    if(totell<xamount || totell>xamount){
        multifactor = (xamount/totell) ;
        check();
    }
    document.getElementById("amountTotell").style.display = "block";
    document.getElementById("amountTotell").innerHTML = "مجموع التركة = " + totell ; //مجموع التركة
}



/*------------------------------------------------------------------------------------------------------------------------

*/