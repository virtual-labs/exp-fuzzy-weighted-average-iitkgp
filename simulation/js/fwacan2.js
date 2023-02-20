var ctx2 = null;
var canvas2,Z2=0;
	var x4,y4,x5,y5,x6,y6;
	var tmin,tmax;
	var ax4=0,ay4=0,bx4=0,by4=108,cx4=108,cy4=108;
	var ax5=0,ay5=108,bx5=108,by5=0,cx5=216,cy5=108;
	var ax6=108,ay6=108,bx6=432,by6=0,cx6=432,cy6=108;
	var px4=0,px5=0,px6=0;
	var tzx1=0,tzh1=0,tlh1=0,thh1=0;
	var tzx2=0,tzh2=0,tlh2=0,thh2=0;
	var tzx3=0,tzh3=0,tlh3=0,thh3=0;
	var isPoint21 = true;
	var isPoint22 = true;
	var isPoint23 = true;
	
function canvas22() {
	canvas2=document.getElementById("mycanvas2"),
	ctx2 = canvas2.getContext('2d'),
	canvas2.onmousemove = function(e) {
	var pos = getMousePos2(canvas2, e);
	}
	drawGrid2('deep gray', 18,18);
	linedraw2();
}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas2").click(function(e){
		getPosition2(e); 
		is_in_triangle21(x4,y4,ax4,ay4,bx4,by4,cx4,cy4);
    	is_in_triangle22(x5,y5,ax5,ay5,bx5,by5,cx5,cy5);
		is_in_triangle23(x6,y6,ax6,ay6,bx6,by6,cx6,cy6);
        //temperaturevalue1();
		//temperaturevalue2();
		//temperaturevalue3();
	});
});
function getPosition2(event){
     var rect = canvas2.getBoundingClientRect();
      x4 = event.clientX - rect.left;
      y4 = event.clientY - rect.top;
      x5 = event.clientX - rect.left;
      y5 = event.clientY - rect.top;    
	  x6 = event.clientX - rect.left;
      y6 = event.clientY - rect.top;	
}
function getMousePos2(canvas2, evt) {
    var rect = canvas2.getBoundingClientRect();
	xCo2 = (evt.clientX - rect.left);
	yCo2 = (evt.clientY - rect.top);
    return {
     x4: evt.clientX - (rect.left) ,
     y4: evt.clientY - rect.top ,		
     x5: evt.clientX - (rect.left) ,
     y5: evt.clientY - rect.top  ,   
	 x6: evt.clientX - (rect.left) ,
     y6: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
function drawGrid2(color, stepx, stepy) {
   ctx2.fillStyle = "white";
   

   ctx2.lineWidth = 0.5;
   ctx2.strokeStyle = color;

   for (var i =0; i <canvas2.width; i += stepx) {
   ctx2.beginPath();
   ctx2.moveTo(i, 0);
   ctx2.lineTo(i, canvas2.height);
   ctx2.stroke();
   }

   for (var i = 0; i < canvas2.height; i += stepy) {
   ctx2.beginPath();
   ctx2.moveTo(0, i);
   ctx2.lineTo(canvas2.width, i);
   ctx2.stroke();
  }
}
function linedraw2(){
        ctx2.beginPath();
		ctx2.moveTo(0,0);
		ctx2.lineTo(108, 108);
		ctx2.moveTo(0,108);
		ctx2.lineTo(108, 0);
		ctx2.lineTo(216,108);
		ctx2.moveTo(108,108);
		ctx2.lineTo(432, 0);
        ctx2.lineWidth=2.5;
		ctx2.strokeStyle="black";
		ctx2.stroke();
  }
function closePopup2() {
    document.getElementById('test2').style.display = 'none';
}
function temperatureok(){
    tmin=document.getElementById('tmin').value;
    tmax=document.getElementById('tmax').value;
        if(tmin % 100 == 0 && tmax % 100 == 0)
            {
             if((tmin>=0 && tmin<=800) && (tmax>=0 && tmax<=800)){
                if(tmin<tmax){
            x1=parseInt(tmin)*0.54;
            x2=parseInt(tmax)*0.54;
            mid=(parseInt(x1)+parseInt(x2))/2;
            document.getElementById('test2').style.display = 'none';
            ctx2.beginPath();
            ctx2.moveTo(x1,108);
            ctx2.lineTo(mid,0);
            ctx2.lineTo(x2,108);
            ctx2.fillStyle = "#33FF55";
            ctx2.fill();
            ctx2.lineWidth=1.5;
            ctx2.stroke();         
            ctx2.strokeStyle="black";
			allow2 = true;
			if(allow1 == true && allow3 == true && allow4 == true && allow5 == true && allow6 == true) {
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
                if(tmin % 100 != 0) {
                    document.getElementById('tmin').value='';
                    alert("tmin");
                }
                if(tmax % 100 != 0) {
                    document.getElementById('tmax').value='';
                    alert("tmax");
                }
            }
  }
function temperatureclear(){
	      document.getElementById('tmin').value="";
	      document.getElementById('tmax').value="";
}
function  drawPoint21(x4,y4) {
		  ctx2.beginPath();
		  ctx2.fillStyle = "black";
		  //ctx2.arc(x4,y4,5, 0, Math.PI * 2, true);
		  //ctx2.fill();
          ctx2.strokeStyle="black";
		  ctx2.stroke;
          document.getElementById('test2').style.display = 'block';
	}
function  drawPoint22(x5,y5) {
			ctx2.beginPath();
			ctx2.fillStyle = "black";
			//ctx2.arc(x5,y5,5, 0, Math.PI * 2, true);
			//ctx2.fill();
			ctx2.strokeStyle="black";
			ctx2.stroke;
			document.getElementById('test2').style.display = 'block';
	}
function  drawPoint23(x6,y6) {
			ctx2.beginPath();
			ctx2.fillStyle = "black";
			// ctx2.arc(x6,y6,5, 0, Math.PI * 2, true);
			//ctx2.fill();
			ctx2.strokeStyle="black";
			ctx2.stroke;
			document.getElementById('test2').style.display = 'block';
	}
function is_in_triangle21 (px4,py4,ax4,ay4,bx4,by4,cx4,cy4){
	
	if(isPoint21) {
		var v0 = [cx4-ax4,cy4-ay4];
		var v1 = [bx4-ax4,by4-ay4];
		var v2 = [px4-ax4,py4-ay4];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) 
		{
			drawPoint21(px4,py4);	
			isPoint21 = false;
			isPoint22 = false;
			isPoint23 = false;
			Z2=1;
        }
	}
}
function is_in_triangle22 (px5,py5,ax5,ay5,bx5,by5,cx5,cy5){
	
	if(isPoint22) {
		var v0 = [cx5-ax5,cy5-ay5];
        var v1 = [bx5-ax5,by5-ay5];
		var v2 = [px5-ax5,py5-ay5];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
			drawPoint22(px5,py5);	
			isPoint21 = false;
			isPoint22 = false;
			isPoint23 = false;
			Z2=2;
		}
	}
}
function is_in_triangle23 (px6,py6,ax6,ay6,bx6,by6,cx6,cy6){
	
	if(isPoint23) {
		var v0 = [cx6-ax6,cy6-ay6];
		var v1 = [bx6-ax6,by6-ay6];
		var v2 = [px6-ax6,py6-ay6];
		
		var dot00 = (v0[0]*v0[0]) + (v0[1]*v0[1]);
		var dot01 = (v0[0]*v1[0]) + (v0[1]*v1[1]);
		var dot02 = (v0[0]*v2[0]) + (v0[1]*v2[1]);
		var dot11 = (v1[0]*v1[0]) + (v1[1]*v1[1]);
		var dot12 = (v1[0]*v2[0]) + (v1[1]*v2[1]);
		
		var invDenom = 1/ (dot00 * dot11 - dot01 * dot01);
		
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
		
		if((u >= 0) && (v >= 0) && (u + v < 1)) {
			drawPoint23(px6,py6);
			isPoint21 = false;
			isPoint22 = false;
			isPoint23 = false;
			Z2=3;
		}
	}
}
 document.getElementById('clr').addEventListener('click', function() {
			ctx2.clearRect(0, 0, mycanvas2.width, mycanvas2.height);
			drawGrid2('deep gray', 18,18);
			linedraw2();
			document.getElementById('tmin').value='';
			document.getElementById('tmax').value='';
			document.getElementById("how").disabled=true;
			document.getElementById("rslt").disabled=true;
			isPoint21 = true;
			isPoint22 = true;
			isPoint23 = true;
  }, false);
function temperaturevalue1()
{
	if(isPoint21==false)
   {
			tzx1=(800/400) * x4;
			if(x4 <= 100)
				{
					tzh1=((200- tzx1) / 200).toPrecision(3);
				}
		    if(x4 <= 100)
				{
					tlh1=((1/200) * tzx1).toPrecision(3);
				}
            if(x4 > 100 && x4 <= 200)
				{
				tlh1=((400-tzx1)/200).toPrecision(3);
				}
            if(x4 >= 100)
				{
					thh1=((tzx1-200)/600).toPrecision(3);
				}				
}
}
function temperaturevalue2()
{
if(isPoint22==false)
   {
			tzx2=(800/400) * x5;
			if(x5 <= 100)
				{
					tzh2=((200- tzx2) / 200).toPrecision(3);
				}
		    if(x5 <= 100)
				{
					tlh2=((1/200) * tzx1).toPrecision(3);
				}
            if(x5 > 100 && x5 <= 200)
				{
				tlh2=((400-tzx2)/200).toPrecision(3);
				}
            if(x5 >= 100)
				{
					thh2=((tzx2-200)/600).toPrecision(3);
				}				
}
}
function temperaturevalue3()
{
if(isPoint23==false)
   {
			tzx3=(800/400) * x6;
			if(x6 <= 100)
				{
					tzh3=((200- tzx3) / 200).toPrecision(3);
				}
		    if(x6 <= 100)
				{
					tlh3=((1/200) * tzx3).toPrecision(3);
				}
            if(x6> 100 && x6 <= 200)
				{
				   tlh3=((400-tzx3)/200).toPrecision(3);
				}
            if(x6 >= 100)
				{
					thh3=((tzx3-200)/600).toPrecision(3);
				}				
}	
 }	 
