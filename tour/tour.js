/* START: hl1 slide*/

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	
        var second=document.getElementsByClassName('second');
        

function homeani()
{
    second[0].style.top="0px";
    second[0].style.opacity="1";
}
homeani();
        
	});



var ser=document.getElementsByClassName('ser-ss');
var frmimg=document.getElementsByClassName('frm-imgcon');
var hil=document.getElementsByClassName('hil');
var wid=document.getElementsByClassName('wid');
var temp=document.getElementsByClassName('templ');
var honey=document.getElementsByClassName('hony');


window.onscroll = function() {scrollani(),scrollanib()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

function scrollani() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        for(i=0;i<3;i++){
        ser[i].style.top="0px";
        ser[i].style.opacity="1";}
        
       
      
    }
    
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        hil[0].style.top="-20px";
        hil[0].style.opacity="1";
        
         wid[0].style.opacity="1";
         wid[0].style.top="0px";
            
                temp[0].style.opacity="1";
         temp[0].style.top="0px";
            
                honey[0].style.opacity="1";
         honey[0].style.top="0px";
       
      
    }
    
        /*if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
            frmimg[0].style.opacity="1";
       
            
        }*/
    
 
}






var w = parseInt(window.innerWidth);
var galaact = document.getElementsByClassName('tr-bx');
galaact[0].addEventListener('click',function(){
    gallery(1);
    incre1(1);
},false);

galaact[1].addEventListener('click',function(){
    gallery(2);
    incre2(1);
    scrollImg(0);
    
},false);

galaact[2].addEventListener('click',function(){
    gallery(3);
    incre3(1);
    scrollImg3(0);
},false);

galaact[3].addEventListener('click',function(){
    gallery(4);
    incre4(1);
    scrollImg4(0);
},false);

var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('hil');
var wid = document.getElementsByClassName('wid');
var templ = document.getElementsByClassName('templ');
var hony = document.getElementsByClassName('hony');
var bbhd = document.getElementsByClassName('bb-hhd');
var towbx = document.getElementsByClassName('tr-bx1');
 var frmimgcon = document.getElementsByClassName('frm-imgcon');
function gallery(g){

    if(g == 1){
        frmimgcon[0].classList.add("frmimg1");
        frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg4");
        galaimg[0].style.display="flex";
        
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        
        /*hil[0].style.background="url(images/hillc.svg)";
        */
        hony[0].classList.remove('hony1');
        wid[0].classList.remove('wid1');
        templ[0].classList.remove('templ1');

        
    hil[0].className="hil hil1";    
        bbhd[0].style.color="#d53132";
        galaact[0].style.borderBottom="3px solid #d53132";
        galaact[0].classList.add("tr-bx1");
     
        
       /* wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeycw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 2){
             frmimgcon[0].classList.add("frmimg2");
         frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg4");
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
       hil[0].classList.remove('hil1');
        templ[0].classList.remove('templ1');
        hony[0].classList.remove('hony1');
      /*  wid[0].style.background="url(images/wildc.svg)";*/
         wid[0].className="wid wid1";
   
        bbhd[1].style.color="#d53132";
        galaact[1].style.borderBottom="3px solid #d53132";
        galaact[1].classList.add("tr-bx1");
        
       /* hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
         
    }
    else if(g == 3){
        frmimgcon[0].classList.add("frmimg3");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg4");
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="flex";
        galaimg[3].style.display="none";
         wid[0].classList.remove('wid1');
          hil[0].classList.remove('hil1');
          hony[0].classList.remove('hony1');
        /*templ[0].style.background="url(images/templec.svg)";*/
        templ[0].className="templ templ1";
        bbhd[2].style.color="#d53132";
        galaact[2].style.borderBottom="3px solid #d53132";
        galaact[2].classList.add("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 4){
       frmimgcon[0].classList.add("frmimg4");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg1");
        
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="flex";
        
     /*   hony[0].style.background="url(images/honeycc.svg)";*/
        templ[0].classList.remove('templ1');
         wid[0].classList.remove('wid1');
          hil[0].classList.remove('hil1');
          
        hony[0].className="hony hony1";
        bbhd[3].style.color="#d53132";
        galaact[3].style.borderBottom="3px solid #d53132";
        galaact[3].classList.add("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
    }
}
gallery(1);

var ban11 = document.getElementsByClassName('fligt-con1');

var l =0;

 function incre1(m){
     l = l + m;
    if(l == -1){
         l = ban11.length-1;
     }
     if(l == ban11.length){
         l=0;
     }
    scrollImg1(l);
 }
function scrollImg1(k){
    ban11[0].style.display="none";
    ban11[1].style.display="none";
    ban11[2].style.display="none";
    ban11[k].style.display="block";
}
scrollImg1(0);
var xset1= setInterval(function(){incre1(1);},2200);










 var ban12 = document.getElementsByClassName('fligt-con2');

var j =0;

 function incre2(k){
     j = j + k;
     if(j == ban12.length){
         j=0;
     }
    scrollImg(j);
 }
function scrollImg(z){
    ban12[0].style.display="none";
    ban12[1].style.display="none";
    ban12[2].style.display="none";
    ban12[z].style.display="block";
}

var xset2= setInterval(function(){incre2(1);},2200);



 var ban13 = document.getElementsByClassName('fligt-con3');

var c =0;

 function incre3(d){
     c = c + d;
    /*if(c == -1){
         c = ban13.length-1;
     }*/
     if(c == ban13.length){
         c=0;
     }
    scrollImg3(c);
 }
function scrollImg3(f){
    ban13[0].style.display="none";
    ban13[1].style.display="none";
    ban13[2].style.display="none";
    ban13[f].style.display="block";
}

var xset3= setInterval(function(){incre3(1);},2200);




 var ban14 = document.getElementsByClassName('fligt-con4');

var o =0;

 function incre4(p){
     o = o + p;
    /*if(o == -1){
         o = ban14.length-1;
     }*/
     if(o == ban14.length){
         o=0;
     }
    scrollImg4(o);
 }
function scrollImg4(q){
    ban14[0].style.display="none";
    ban14[1].style.display="none";
    ban14[2].style.display="none";
    ban14[q].style.display="block";
}

var xset4= setInterval(function(){incre4(1);},2200);
