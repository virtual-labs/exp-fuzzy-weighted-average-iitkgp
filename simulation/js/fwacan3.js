var ctx3 = null;
	var canvas3,Z3=0;
	var x7,y7,xCo1,yCo1;
	var fmin,fmax;
	var x8,y8,x9,y9;
	var ax7=0,ay7=0,bx7=0,by7=108,cx7=54,cy7=108;
	var ax8=0,ay8=108,bx8=54,by8=0,cx8=108,cy8=108;
	var ax9=54,ay9=108,bx9=432,by9=0,cx9=432,cy9=108;
	var px7=0,px8=0,px9=0;
	var fzx1=0,fzh1=0,flh1=0,fhh1=0;
	var fzx2=0,fzh2=0,flh2=0,fhh2=0;
	var fzx3=0,fzh3=0,flh3=0,fhh3=0;
	var isPoint31 = true;
	var isPoint32 = true;
	var isPoint33 = true;
	
	function canvas33() {
	canvas3=document.getElementById("mycanvas3"),
	ctx3 = canvas3.getContext('2d'),
	canvas3.onmousemove = function(e) {
	var pos = getMousePos3(canvas3, e);
	}
	drawGrid3('deep gray', 18,18);
	linedraw3();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas3").click(function(e){
		getPosition3(e);
		is_in_triangle31(x7,y7,ax7,ay7,bx7,by7,cx7,cy7);
    	is_in_triangle32(x8,y8,ax8,ay8,bx8,by8,cx8,cy8);
		is_in_triangle33(x9,y9,ax9,ay9,bx9,by9,cx9,cy9);
	   /* flowratevalue1();
		flowratevalue2();
		flowratevalue3();
		document.getElementById("rslt").disabled=false;*/
	});
});

function getPosition3(event){
     var rect = canvas3.getBoundingClientRect();
      x7 = event.clientX - rect.left;
      y7 = event.clientY - rect.top;
      x8 = event.clientX - rect.left;
      y8 = event.clientY - rect.top;    
	  x9 = event.clientX - rect.left;
      y9 = event.clientY - rect.top;	
}
function getMousePos3(canvas3, evt) {
    var rect = canvas3.getBoundingClientRect();
/*	xCo = (evt.clientX - rect.left);
	yCo1 = (evt.clientY - rect.top);
*/    return {
     x7: evt.clientX - (rect.left) ,
     y7: evt.clientY - rect.top ,		
     x8: evt.clientX - (rect.left) ,
     y8: evt.clientY - rect.top  ,   
	 x9: evt.clientX - (rect.left) ,
     y9: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
   function drawGrid3(color, stepx, stepy) 
   {
   ctx3.fillStyle = "white";

   ctx3.lineWidth = 0.5;
   ctx3.strokeStyle = color;

   for (var i =0; i < canvas3.width; i += stepx) {
   ctx3.beginPath();
   ctx3.moveTo(i, 0);
   ctx3.lineTo(i, canvas3.height);
   ctx3.stroke();
   }

   for (var i = 0; i < canvas3.height; i += stepy) {
   ctx3.beginPath();
   ctx3.moveTo(0, i);
   ctx3.lineTo(canvas3.width, i);
   ctx3.stroke();
   
  }
 } 

function linedraw3(){
        ctx3.beginPath();
		ctx3.moveTo(0,0);
		ctx3.lineTo(54,108);
		ctx3.moveTo(0,108);
		ctx3.lineTo(54,0);
		ctx3.lineTo(108,108);
		ctx3.moveTo(54,108);
		ctx3.lineTo(432,0);
        ctx3.lineWidth=2.5;
        ctx3.strokeStyle="black";
		ctx3.stroke();
  }
function closePopup3() {
    document.getElementById('test3').style.display = 'none';
}
function flowrateok(){
    //document.getElementById('test3').style.display = 'block';
    fmin=document.getElementById('fmin').value;
    fmax=document.getElementById('fmax').value;
    if(fmin % 10 == 0 && fmax % 10 == 0)
    {
      if((fmin>=0 && fmin<=80) && (fmax>=0 && fmax<=80)){
        if(fmin<fmax){
    x1=parseInt(fmin)*5.4;
    x2=parseInt(fmax)*5.4;
    mid=(parseInt(x1)+parseInt(x2))/2;
    document.getElementById('test3').style.display = 'none';
    ctx3.beginPath();
    ctx3.moveTo(x1,108);
    ctx3.lineTo(mid,0);
    ctx3.lineTo(x2,108);
    ctx3.fillStyle = "#3374FF";
    ctx3.fill();
    ctx3.lineWidth=1.5;
    ctx3.stroke();         
    ctx3.strokeStyle="black";
	allow3 = true;
	if(allow1 == true && allow2 == true && allow4 == true && allow5 == true && allow6 == true) {
		$("#rslt").removeAttr("disabled");	
	}
    }
    else{
        alert("min value is always smaller than max value!!!");
    }
  }
                  else {
            alert("Please insert the values within range !!!");
        }
    }
    
    else{
        
        if(fmin % 10 != 0) {
            document.getElementById('fmin').value='';
            alert("fmin");
        }
        if(fmax % 10 != 0) {
            document.getElementById('fmax').value='';
            alert("fmax");
        }
    }
}
function flowrateclear(){
	document.getElementById('fmin').value="";
	document.getElementById('fmax').value="";
}

function  drawPoint31(x7,y7) {
		  ctx3.beginPath();
		  ctx3.fillStyle = "black";
		  //ctx3.arc(x7,y7,5, 0, Math.PI * 2, true);
		  //ctx3.fill();
          ctx3.strokeStyle="black";
		  ctx3.stroke;
    document.getElementById('test3').style.display = 'block';
	}
function  drawPoint32(x8,y8) {
		  ctx3.beginPath();
		  ctx3.fillStyle = "black";
		  //ctx3.arc(x8,y8,5, 0, Math.PI * 2, true);
		  //ctx3.fill();
          ctx3.strokeStyle="black";
		  ctx3.stroke;
    document.getElementById('test3').style.display = 'block';
	}
function  drawPoint33(x9,y9) {
		  ctx3.beginPath();
		  ctx3.fillStyle = "black";
		  //ctx3.arc(x9,y9,5, 0, Math.PI * 2, true);
		  //ctx3.fill();
          ctx3.strokeStyle="black";
		  ctx3.stroke;
    document.getElementById('test3').style.display = 'block';
}
function is_in_triangle31 (px7,py7,ax7,ay7,bx7,by7,cx7,cy7){
	
	if(isPoint31) {
		var v0 = [cx7-ax7,cy7-ay7];
		var v1 = [bx7-ax7,by7-ay7];
		var v2 = [px7-ax7,py7-ay7];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
				drawPoint31(px7,py7);	
				isPoint31 = false;
				isPoint32 = false;
				isPoint33 = false;
		}
	}
}
function is_in_triangle32 (px8,py8,ax8,ay8,bx8,by8,cx8,cy8){
	
	if(isPoint32) {
		var v0 = [cx8-ax8,cy8-ay8];
        var v1 = [bx8-ax8,by8-ay8];
		var v2 = [px8-ax8,py8-ay8];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
  		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
				drawPoint32(px8,py8);	
				isPoint31 = false;
				isPoint32 = false;
				isPoint33 = false;
		}
	}
}
function is_in_triangle33 (px9,py9,ax9,ay9,bx9,by9,cx9,cy9){
	
	if(isPoint33) {
		var v0 = [cx9-ax9,cy9-ay9];
		var v1 = [bx9-ax9,by9-ay9];
		var v2 = [px9-ax9,py9-ay9];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
				drawPoint33(px9,py9);
				isPoint31 = false;
				isPoint32 = false;
				isPoint33 = false;
				Z3=3;
		}
	}
}
  document.getElementById('clr').addEventListener('click', function() {
        ctx3.clearRect(0, 0, mycanvas3.width, mycanvas3.height);
		 drawGrid3('deep gray', 18,18);
		 linedraw3();
		document.getElementById('fmin').value='';
		document.getElementById('fmax').value='';
		document.getElementById("how").disabled=true;
		document.getElementById("rslt").disabled=true;
		 		isPoint31 = true;
				isPoint32 = true;
				isPoint33 = true;
  }, false);

/*function flowratevalue1()
{
	if(isPoint31==false)
   {
			fzx1=(80/400) * x7;
             if(x7 <= 50)
				{
					fzh1=((10- fzx1) / 10).toPrecision(3);
					flh1= ((1/10) * fzx1).toPrecision(3);

				}
			 if(x7 > 50 && x7 <= 100)
				{
					flh1=((20-fzx1)/10).toPrecision(3);
				}
			if(x7 >=50)
				{
					fhh1=((fzx1-10)/70).toPrecision(3);
				}				
   }
}
function flowratevalue2()
{
if(isPoint32==false)
   {
			fzx2=(80/400) * x8;
             if(x8 <= 50)
				{
					fzh2=((10- fzx2) / 10).toPrecision(3);
				    flh2= ((1/10) * fzx2).toPrecision(3);
				}
  		    if(x8 > 50 && x8 <= 100)
				{
					flh2=((20-fzx2)/10).toPrecision(3);
				}
			if(x8 >=50)
				{
					fhh2=((fzx2-10)/70).toPrecision(3);
				}				
}
   }
function flowratevalue3()
{
	if(isPoint33==false)
   {
			fzx3=(80/400) * x9;
             if(x9 <= 50)
				{
					fzh3=((10- fzx3) / 10).toPrecision(3);
					flh3= ((1/10) * fzx3).toPrecision(3);

				}
			 if(x9 > 50 && x9 <= 100)
				{
					flh3=((20-fzx3)/10).toPrecision(3);
				}
			if(x3 >=50)
				{
					fhh3=((fzx3-10)/70).toPrecision(3);
				}				
   }
}*/
