//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//end preloads screen//





var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);


var sidehdj=document.getElementsByClassName('sidehdj');
var mphilhd=document.getElementsByClassName('mphilhd');

var psidehdj=document.getElementById('psidehdj');
var consj1=document.getElementById('consj1');
var consj2=document.getElementById('consj2');
var intj=document.getElementById('intj');

window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 if(w>1000){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        
    
    }
     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

        
    
    }
     
     
     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {

         consj1.style.opacity="1";
 consj1.style.left="0px";
      consj2.style.opacity="1";
 consj2.style.left="0px";
    
         
    }
     
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {


      
    
         
    }
     
    
    
 }
    
     if(w>880){
    if (document.body.scrollTop > 1850 || document.documentElement.scrollTop > 1850) {


    
    }
         
    
    
     }


}







var bswit= document.getElementsByClassName('bswit');

var bsin= document.getElementsByClassName('bsin');

var hdtxt= document.getElementsByClassName('hdtxt');

var hdimg= document.getElementsByClassName('hdimg');

function bswitch(n){
    
    bsin[0].style.backgroundColor="#fcfcfc";
     bsin[1].style.backgroundColor="#fcfcfc";
    
    hdtxt[0].style.display="none";
    hdtxt[1].style.display="none";
    
    hdimg[0].style.display="none";
    hdimg[1].style.display="none";
    
    
        hdimg[n].style.display="block";
        hdtxt[n].style.display="none";
    
bsin[n].style.backgroundColor="#454545";
    
    

}

bswitch(0);

bswit[0].addEventListener('click',function() {bswitch(0);}, false);

bswit[1].addEventListener('click',function() {bswitch(1);}, false);


