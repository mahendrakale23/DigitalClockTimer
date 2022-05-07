var cl=console.log;
var digiClock=document.getElementById('digiClock');
var digiClock2=document.getElementById('digiClock2');

// var date=new Date();
// cl(date);
// var setDate=date.setTime(12);
// cl(setDate);

function digitalClock(){
         var date=new Date();
         var hours=date.getHours();
         var min=date.getMinutes();
         var sec=date.getSeconds();
         // var session="AM";
		 // var hours=hours>12;
		  var session="AM";
		 if(hours>12){
			 var session="PM";
			 hours=hours-12;
		 }
		 if(hours<10){
			 hours="0"+hours;
		 }
		 if(min<10){
			 min="0"+min;
		 }
		 if(sec<10){
			 sec="0"+sec;
		 }
		 
		 
         var result=hours+":"+min+":"+sec+" "+session;
          digiClock.innerHTML=result;
		  setTimeout(digitalClock,1000);
		 
		
}
digitalClock();


function digitalClock2(){
var date1=new Date();
// cl(ldate);
var lhr=date1.getHours();
// cl(lhr);
var lmin=date1.getMinutes();
// cl(lmin);
var lsec=date1.getSeconds();
// cl(lsec);
         if(lhr>12){
		  var session="PM";
		  lhr=lhr-12;
		 }
		 if(lhr<10){
			 lhr="0"+lhr;
		 }
		 if(lmin<10){
			 lmin="0"+lmin;
		 }
		 if(lsec<10){
			 lsec="0"+lsec;
		 }
		 
		  var result1=lhr+":"+lmin+":"+lsec+" "+session;
		   digiClock2.innerHTML=result1;
		   setTimeout(digitalClock2,1000);
}
digitalClock2();