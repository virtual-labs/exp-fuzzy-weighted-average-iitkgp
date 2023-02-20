	var ctx1 = null;
	var canvas1,Z1=0;
	var x1,y1=108,xCo1,yCo1;
	var pmin,pmax;
	var x2,y2=108,x3,y3;
	var ax1=0,ay1=0,bx1=0,by1=108,cx1=216,cy1=108;
	var ax2=0,ay2=108,bx2=216,by2=0,cx2=432,cy2=108;
	var ax3=216,ay3=108,bx3=432,by3=0,cx3=432,cy3=108;
	var px1=0,px2=0,px3=0;
	var pzx1=0,pzh1=0,plh1=0,phh1=0;
	var pzx2=0,pzh2=0,plh2=0,phh2=0;
	var pzx3=0,pzh3=0,plh3=0,phh3=0;
	var isPoint11 = true;
	var isPoint12 = true;
	var isPoint13 = true;
	
	function canvas11() {
	canvas1=document.getElementById("mycanvas1"),
	ctx1 = canvas1.getContext('2d'),
	canvas1.onmousemove = function(e) {
	var pos = getMousePos1(canvas1, e);
	}
	drawGrid1('deep gray', 18,18);
	linedraw1();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas1").click(function(e){
		getPosition1(e);
	    is_in_triangle11(x1,y1,ax1,ay1,bx1,by1,cx1,cy1);
    	is_in_triangle12(x2,y2,ax2,ay2,bx2,by2,cx2,cy2);
		is_in_triangle13(x3,y3,ax3,ay3,bx3,by3,cx3,cy3);
		//pressurevalue1();
		//pressurevalue2();
		//pressurevalue3();
	});
});

function getPosition1(event){
     var rect = canvas1.getBoundingClientRect();
      x1 = event.clientX - rect.left;
      y1 = event.clientY - rect.top;
      x2 = event.clientX - rect.left;
      y2 = event.clientY - rect.top;    
	  x3 = event.clientX - rect.left;
      y3 = event.clientY - rect.top;	
}
function getMousePos1(canvas1, evt) {
    var rect = canvas1.getBoundingClientRect();
	xCo1 = (evt.clientX - rect.left);
	yCo1 = (evt.clientY - rect.top);
    return {
     x1: evt.clientX - (rect.left) ,
     y1: evt.clientY - rect.top ,		
     x2: evt.clientX - (rect.left) ,
     y2: evt.clientY - rect.top  ,   
	 x3: evt.clientX - (rect.left) ,
     y3: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
   function drawGrid1(color, stepx, stepy) 
   {
   ctx1.fillStyle = "white";
   ctx1.lineWidth = 0.5;
   ctx1.strokeStyle = color;
   for (var i =0; i < canvas1.width; i += stepx) {
   ctx1.beginPath();
   ctx1.moveTo(i, 0);
   ctx1.lineTo(i, canvas1.height);
   ctx1.stroke();
   }
   for (var i = 0; i < canvas1.height; i += stepy) {
   ctx1.beginPath();
   ctx1.moveTo(0, i);
   ctx1.lineTo(canvas1.width, i);
   ctx1.stroke();
  }
 } 

function linedraw1(){
        ctx1.beginPath();
		ctx1.moveTo(0,0);
		ctx1.lineTo(216,108);
		ctx1.moveTo(0,108);
		ctx1.lineTo(216,0);
		ctx1.lineTo(432,108);
		ctx1.moveTo(216,108);
		ctx1.lineTo(432,0);
        ctx1.lineWidth=2.5;
        ctx1.strokeStyle="black";
		ctx1.stroke();
  }
/*function openPopup() {
    document.getElementById('test').style.display = 'block';
}
*/
function closePopup1() {
    document.getElementById('test1').style.display = 'none';
}
function pressureok(){
    pmin=document.getElementById('pmin').value;
    pmax=document.getElementById('pmax').value;
     if((pmin>=0 && pmin<=8) && (pmax>=0 && pmax<=8)){    
       if(pmin<pmax){
               x1=parseInt(pmin)*54;
            x2=parseInt(pmax)*54;
            mid=(parseInt(x1)+parseInt(x2))/2;
            document.getElementById('test1').style.display = 'none';
            ctx1.beginPath();
            ctx1.moveTo(x1,108);
            ctx1.lineTo(mid,0);
            ctx1.lineTo(x2,108);
            ctx1.fillStyle = "red";
            ctx1.fill();
            ctx1.lineWidth=1.5;
            ctx1.stroke();         
            ctx1.strokeStyle="black";
			allow1 = true;
			if(allow2 ==true && allow3 == true && allow4 == true && allow5 == true && allow6 == true) {
				$("#rslt").removeAttr("disabled");	
			}
        }
        else{
        alert("min value is always smaller than max value!!!");
        }
    }
    else{
        alert("Please insert the values within range !!!");
    }
}
function pressureclear(){
	document.getElementById('pmin').value="";
	document.getElementById('pmax').value="";
}
function  drawPoint12(x2,y2) {
		  ctx1.beginPath();
		  ctx1.fillStyle = "black";
		 ctx1.arc(x2,108,5, 0, Math.PI * 2, true);
		  ctx1.fill();
          ctx1.strokeStyle="black";
		  ctx1.stroke;
    //document.getElementById('test1').style.display = 'block';
	}
function  drawPoint13(x3,y3) {
		  ctx1.beginPath();
		  ctx1.fillStyle = "black";
		 ctx1.arc(x3,108,5, 0, Math.PI * 2, true);
		  ctx1.fill();
          ctx1.strokeStyle="black";
		  ctx1.stroke;
   // document.getElementById('test1').style.display = 'block';
	}


function is_in_triangle11 (px1,py1,ax1,ay1,bx1,by1,cx1,cy1){
		//alert("bjebbjb");
if(isPoint11) {
		var v0 = [cx1-ax1,cy1-ay1];
		var v1 = [bx1-ax1,by1-ay1];
		var v2 = [px1-ax1,py1-ay1];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
				//drawPoint11(px1,py1);	
				 document.getElementById('test1').style.display = 'block';
				isPoint11 = false;
				isPoint12 = false;
				isPoint13 = false;
				Z1=1;
		}
	}
}
function is_in_triangle12 (px2,py2,ax2,ay2,bx2,by2,cx2,cy2){
	if(isPoint12) {
		var v0 = [cx2-ax2,cy2-ay2];
        var v1 = [bx2-ax2,by2-ay2];
		var v2 = [px2-ax2,py2-ay2];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
				//drawPoint12(px2,py2);	
 document.getElementById('test1').style.display = 'block';
				isPoint11 = false;
				isPoint12 = false;
				isPoint13 = false;
				Z1=2;
		}
	}
}
function is_in_triangle13 (px3,py3,ax3,ay3,bx3,by3,cx3,cy3){
	if(isPoint13) {
		var v0 = [cx3-ax3,cy3-ay3];
		var v1 = [bx3-ax3,by3-ay3];
		var v2 = [px3-ax3,py3-ay3];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
 document.getElementById('test1').style.display = 'block';
				isPoint11 = false;
				isPoint12 = false;
				isPoint13 = false;
				Z1=3;
		}
	}
}
 document.getElementById('clr').addEventListener('click', function() {
        ctx1.clearRect(0, 0, mycanvas1.width, mycanvas1.height);
		 drawGrid1('deep gray', 18,18);
		 linedraw1();
			document.getElementById('pmin').value='';
			document.getElementById('pmax').value='';
		document.getElementById("how").disabled=true;
		document.getElementById("rslt").disabled=true;
		 		isPoint11 = true;
				isPoint12 = true;
				isPoint13 = true;
  }, false);
/*function pressurevalue1()
{
  if(isPoint11==false)
   { 
			pzx1=(8/400) * x1;
			if(x1 <= 200)
				{
					pzh1=((4- pzx1) / 4).toPrecision(3);
					plh1=((1/4) * pzx1).toPrecision(3);
				}
			else
				{
					plh1=((8- pzx1) / 4).toPrecision(3);
					phh1=((pzx1-4) / 4).toPrecision(3);
				}
	}
}
function pressurevalue2()
{
if(isPoint12==false)
   {
			pzx2=(8/400) * x2;
			if(x2<= 200)
				{
					pzh2=((4- pzx2) / 4).toPrecision(3);
					plh2=((1/4) * pzx2).toPrecision(3);
				}
			else
				{
					plh2=((8- pzx2) / 4).toPrecision(3);
					phh2=((pzx2-4) / 4).toPrecision(3);
				}
}
}
function pressurevalue3()
{
if(isPoint13==false)
   {
			pzx3=(8/400) * x3;
			if(x3 <= 200)
				{
					pzh3=((4- pzx3) / 4).toPrecision(3);
					plh3=((1/4) * pzx3).toPrecision(3);
				}
			else
				{
					plh3=((8- pzx3) / 4).toPrecision(3);
					phh3=((pzx3-4) / 4).toPrecision(3);
				}
}	
 }
*/ 
 
 
 
 
