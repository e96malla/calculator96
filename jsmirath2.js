function alfurud(){
    if(xhusband==1){
        if(xsons == 0 && xdau == 0 && xgrands == 0 && xgrandd == 0){
            yhusband = xamount/2 ;
        }else{
            yhusband = xamount/4;
        }
    }if(xwife==1){
    if(xsons == 0 && xdau == 0 && xgrands == 0 && xgrandd == 0){
        ywife = xamount/4 ;
    }else{
        ywife = xamount/4;
    }
    }
    rest();
    if(xmather==1){
        if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1== 0 && xbro2 == 0 && xbro3 == 0 && xsis1 == 0 && xsis2 == 0) && ((xfather == 1) && (xhusband == 1 || xwife == 1))){
            ymather = ((xrest)/3) ;
        }else if((xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xbro1 <= 1 && xbro2 <= 1 && xbro3 <= 1 && xsis1 <= 1 && xsis2 <= 1) && ((xfather == 0) || (xhusband == 0 || xwife == 0))){
            ymather = xamount/3 ;
        }else{
            ymather = xamount/6 ;
        }
    }if(xgrandm1==1){
        if(xmather == 0 && xfather == 0){
            if(xgrandm2 == 0){
                ygrandm1 = xamount/6;
            }else{
                ygrandm1 = xamount/12;
            }
        }
    }if(xgrandm2==1){
        if(xmather == 0){
            if(xgrandm1 == 0){
                ygrandm2 = xamount/6;
            }else{
                ygrandm2 = xamount/12;
            }
        }
    }if(xgrandf==1){
        if(xfather == 0){
            if(xsons >= 1 || xgrands >= 1 ){
                ygrandf = xamount/6 ;
            }else{
                ygrandf = xrest ;
            }
        }
    }if(xfather==1){
        if(xsons >= 1 || xgrands >= 1 ){
            yfather = xamount/6 ;
        }else{
            yfather = xrest ;
        }
    }
    rest();
    if(xdau>=1){
        if(xdau == 1 && xsons == 0){
            ydau = xamount/2 ;
        }else if(xdau > 1 && xsons == 0){
            ydau = (((xamount/3))*2) ;
        }else{
            ydau = (xrest1/( (xsons*2) + xdau))*xdau;
        }
    }if(xgrandd>=1){
        if(xdau <= 1 && xsons == 0 ){
            if( xdau == 0 && xgrandd == 1 && xgrands == 0){
                ygrandd = xamount/2 ;
            }else if(xdau == 0 && xgrandd > 1 && xgrands == 0){
                ygrandd = (((xamount/3))*2);
            }else if(xdau == 1 && xgrandd >= 1 && xgrands == 0){
                ygrandd = ((xamount/6)) ;
            }else{
                ygrandd = (xrest1/( (xgrands*2) + xgrandd))*xgrandd;
            }
        }
    }if(xbro3>=1){
        if(xbro3 > 0 && xsons == 0 && xgrands == 0 && xdau == 0 && xgrandd == 0 && xfather == 0 && xgrandf == 0){
            if(xbro3 == 1){
                ybro3 = xamount/6 ;
            }else{
                ybro3 = (xamount/3) ;
            }
        }
    }
    rest();
    if(xsis1>=1){
        if(xsis1 != 0 && xsons == 0 && xgrands == 0 && xfather == 0 && xgrandf == 0 ){
            if(xsis1 == 1 && xdau == 0 && xgrandd == 0 && xbro1 == 0){
                ysis1 = xamount/2 ;
            }else if(xsis1 > 1 && xdau == 0 && xgrandd == 0 && xbro1 == 0){
                ysis1 = ((xamount/3)*2) ;
            }else if((xdau == 1 || xgrandd == 1) && xbro1 == 0){
                ysis1 = xamount/6 ;
            }else{
                ysis1 = (xrest2/( (xbro1*2) + xsis1))*xsis1;
            }
        }
    }if(xsis2>=1){
        if(xsis2 != 0 && xsons == 0 && xgrands == 0 && xfather == 0 && xgrandf == 0){
            if(xsis2 == 1 && xdau == 0 && xgrandd == 0 && xbro2 == 0){
                ysis2 = xamount/2 ;
            }else if(xsis2 > 1 && xdau == 0 && xgrandd == 0 && xbro2 == 0){
                ysis2 = ((xamount/3)*2);
            }else if((xdau == 1 || xgrandd == 1) && xbro2 == 0){
                ysis2 = xamount/6 ;
            }else{
                ysis2 = (xrest2/( (xbro2*2) + xsis2))*xsis2;
            }
        }
    }if(xsons>=1){
        ysons = xrest1;
    }if(xgrands>=1){
        if(xsons == 0){
            ygrands = xrest1;
        }
    }if(xbro1>=1){
        if(xsons == 0 && xfather == 0 && xgrandf ==0){
            ybro1 = xrest2;
        }
    }if(xbro2>=1){
        if(xsons == 0 && xfather == 0 && xgrandf == 0 && xbro1 == 0){
            ybro2 = xrest2;
        }
    }if(xuncle1>=1){
        if(xsons == 0 && xfather == 0 && xgrandf == 0 && xbro1 == 0 && xbro2 == 0){
            yuncle1 = xrest2;
        }
    }if(xuncle2>=1){
        if(xsons == 0 && xfather == 0 && xgrandf == 0 && xbro1 == 0 && xbro2 == 0 && xuncle1 == 0){
            yuncle2 = xrest2;
        }
    }
    totell = (yhusband + ywife + ymather + ygrandm1 + ygrandm2 + ygrandf + yfather + ydau + ygrandd + ybro3 + ysis1 + ysis2 + ysons + ygrands + ybro1 + ybro2 + yuncle1 + yuncle2) ;
    if(totell>xamount){
        multifactor = (xamount/totell) ;
        check();
    }
    ygrandf=ygrandm1=ygrandm2=yfather=ymather=yhusband=ywife=ysons=ydau=ygrands=ygrandd=ybro1=ysis1=ybro2=ysis2=ybro3=yuncle1=yuncle2= 0 ;
}