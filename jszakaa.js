function resultAmount(){
    var n = 0 ;
    var xamount , xprice , r ;
    xamount =parseInt(document.getElementById("amount").value*1);
    xprice =parseInt(document.getElementById("price").value*1);
    n = xprice*85 ;
    if(xamount > 0 && xprice > 0){
        if(xamount>=n){
            r = xamount/40 ;
        }else{
            r = "المال أقل من النصاب"
        }
    }else{
        r = "الرجاء ادخال المبلغ وسعر الجرام";
    }
    window.R1amount.style.display = "block";
    document.getElementById("R1amount").value = r ;
}
function resultGold(){
    var n = 85 ;
    var xamount ,  r ;
    xamount =parseInt(document.getElementById("gold").value*1);
    if(xamount > 0){
        if(xamount>=n){
            r = xamount/40 ;
        }else{
            r = "الذهب أقل من النصاب"
        }
    }else{
        r = "الرجاء ادخال الذهب بالجرام";
    }
    window.R1gold.style.display = "block";
    document.getElementById("R1gold").value = r ;
}
function resultSilver(){
    var n = 595 ;
    var xamount ,  r ;
    xamount =parseInt(document.getElementById("silver").value*1);
    if(xamount > 0){
        if(xamount>=n){
            r = xamount/40 ;
        }else{
            r = "الفضة أقل من النصاب"
        }
    }else{
        r = "الرجاء ادخال مقدار الفضة بالجرام";
    }
    window.R1silver.style.display = "block";
    document.getElementById("R1silver").value = r ;
}
function resultCamels(){
    var xamount ,  r , x , y ;
    xamount =parseInt(document.getElementById("camels").value*1);
    if(xamount > 0){
        if(xamount<=149){
            if(xamount<5){
                r = " أقل من النصاب"
            }else if(xamount>=5 && xamount<=9){
                r = "شاه" ;
            }else if(xamount>=10 && xamount<=14){
                r = "شاتان" ;
            }else if(xamount>=15 && xamount<=19){
                r = "ثلاث شياه" ;
            }else if(xamount>=20 && xamount<=24){
                r = "أربع شياه" ;
            }else if(xamount>=25 && xamount<=35){
                r = "بنت مخاض" ;
            }else if(xamount>=36 && xamount<=45){
                r = "بنت لبون" ;
            }else if(xamount>=46 && xamount<=60){
                r = "حقة" ;
            }else if(xamount>=61 && xamount<=75){
                r = "جذعة" ;
            }else if(xamount>=76 && xamount<=90){
                r = "بنتا لبون" ;
            }else if(xamount>=91 && xamount<=120){
                r = "حقتان" ;
            }else if(xamount>=121 && xamount<=129){
                r = "ثلاث بنات لبون" ;
            }else if(xamount>=130 && xamount<=139){
                r = "حقة وبنتا لبون" ;
            }else{
                r = "حقتان وبنتا لبون" ;
            }
            document.getElementById("R1camels").value = r ;
        }else{
            x = xamount % 40 ;
            y = xamount % 50 ;
            if(x<y){
                if(x>=10 && x<=19){
                    r = Math.floor(xamount/40);
                    document.getElementById("R1camels").value = (r-1)+" بنت لبون وحقة " ;
                }else if(x>=20 && x<=29){
                    r = Math.floor(xamount/40);
                    document.getElementById("R1camels").value = (r-2)+" بنت لبون وحقتان " ;
                }else if(x>=30 && x<=39){
                    r = Math.floor(xamount/40);
                    document.getElementById("R1camels").value = (r-3)+" بنت لبون وثلاث حقاق " ;
                }else{
                    r = Math.floor(xamount/40);
                    document.getElementById("R1camels").value = r+" بنت لبون " ;
                }
            }else{
                if(y>=20){
                    r = Math.floor(xamount/50);
                    document.getElementById("R1camels").value = (r-2)+" حقاق وثلاث بنات لبون" ;
                }else{
                    r = Math.floor(xamount/50);
                    document.getElementById("R1camels").value = r+" حقاق " ;
                }
            }
        }
    }else{
        r = "الرجاء ادخال عدد الإبل  ";
        document.getElementById("R1camels").value = r ;
    }
    window.R1camels.style.display = "block";
}
function resultSheep(){
    var xamount , r ;
    xamount =parseInt(document.getElementById("sheep").value*1);
    if(xamount < 1){
        document.getElementById("R1sheep").value = "الرجاء إدخال عدد الغنم";
    }else{
        if(xamount<40){
            r = "لا شيء فيها";
        }else if(xamount>=40 && xamount<=120){
            r = "شاه";
        }else if(xamount>=121 && xamount<=200){
            r = "شاتان";
        }else{
            r = Math.floor(xamount/100);
        }
        document.getElementById("R1sheep").value = r+" شياه " ;
    }
    window.R1sheep.style.display = "block";
}
function resultCows(){
    var n = 5 ;
    var xamount ,  r , x , y ;
    xamount =parseInt(document.getElementById("cows").value*1);
    if(xamount < 1){
        document.getElementById("R1cows").value = "الرجاء إدخال عدد البقر";
    }else{
        if(xamount<30){
            r = "لا شيء فيها";
            document.getElementById("R1cows").value = r ;
        }else if(xamount>=30 && xamount<=39){
            r = "تبيع";
            document.getElementById("R1cows").value = r ;
        }else if(xamount>=40 && xamount<=59){
            r = "مسنة" ;
            document.getElementById("R1cows").value = r ;
        }else if(xamount>=60 && xamount<=69){
            r = "تبيعان";
            document.getElementById("R1cows").value = r ;
        }else{
            x = xamount % 30 ;
            y = xamount % 40 ;
            if(x<=y){
                if(x>=10 && x<=19){
                    r = Math.floor(xamount/30);
                    document.getElementById("R1cows").value = (r-1)+" تبيع ومسنة " ;
                }else if(x>=20 && x<=29){
                    r = Math.floor(xamount/30);
                    document.getElementById("R1cows").value = (r-2)+" تبيع ومسنتان " ;
                }else{
                    r = Math.floor(xamount/30);
                    document.getElementById("R1cows").value = r+" تبيع " ;
                }
            }else{
                if(y>=10){
                    r = Math.floor(xamount/40);
                    document.getElementById("R1cows").value = (r-2)+" مسنة وثلاثة تبيع " ;
                }else{
                    r = Math.floor(xamount/40);
                    document.getElementById("R1cows").value = r+" مسنة " ;
                }
            }
        }
    }
    window.R1cows.style.display = "block";   
}
function resultFruits(){
    var xamount , r  , x , y ;
    x = document.getElementById("way").value;
    xamount =parseInt(document.getElementById("fruits").value*1);
    y = xamount / 2 ;
    if(xamount<1 || x=="طريقة الري :"){
        document.getElementById("R1fruits").value = "الرجاء تعبئة الفراغات";
    }else{
        if(xamount<652){
            document.getElementById("R1fruits").value = "لا شيء فيها";
        }else{
            if(x == "بدون تكلفة"){
                r = xamount/10;
            }else if(x == "بتكلفة"){
                r = xamount/20;
            }else{
                r = (y/10)+(y/20);
            }
            document.getElementById("R1fruits").value = (Math.round((r) * 100)/100)+" كيلو جرام " ;
        }
    }
    window.R1fruits.style.display = "block";
}