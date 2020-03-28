function openmodal(){
        ship = document.selectship.radioShip.value;
        if(ship == ''){
            alert('Please select the Ship');

        }
        else{
            $("#myModal").modal() 
            modeltitle= document.getElementById("myModalLabel");
            modeltitle.innerHTML = "Red vs Blue";
            var elembox = document.getElementById("myBox");   
            var elem = document.getElementById("myAnimation"); 
            var elemboxline = document.getElementById("myBoxline");
            var elemline = document.getElementById("myAnimationline");   
            elem.style.bottom = '0px'; 
            elemboxline.style.height = '0px'; 
            elemline.style.height = '0px'; 
            elembox.style.bottom= '0px';
        }
}
function startplaying(){
    var modal = document.getElementById('myModal');
    ship = document.selectship.radioShip.value;
    var element = document.getElementById('myContainer'),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('height');
    finishline = parseFloat( top.slice(0, -2));
    console.log(finishline + " height");
    console.log(typeof finishline);
    //check the container height
   
    //end the height
    var min=5; 
    var max=15;  
    //firstbox
    var randomfirst = Math.random() * (+max - +min) + +min; 

    var elemline = document.getElementById("myAnimationline");   
    var elem = document.getElementById("myAnimation"); 
  var pos = 0;
  linehightred= 0;
  var id = setInterval(frame, randomfirst);
  
//secondbox
  var elembox = document.getElementById("myBox");   
  var elemboxline = document.getElementById("myBoxline");
  var posbox = 0;
  linehightblue=0;
  var randomsecond = Math.random() * (+max - +min) + +min;
  var idbox = setInterval(framebox, randomsecond);

  //logic run
  function frame() {
    if (pos >= finishline-50) {
      clearInterval(id);
      clearInterval(idbox);
      if(ship == 'red'){
        youWon();
        
      }
      else{
          youLose();
      }
     
      
    } else {
      pos++;
      linehightred++; 
      elem.style.bottom = pos + 'px'; 
      elemline.style.height=linehightred + 'px';
      
    }
  }
  

  function framebox() {
    if (posbox >=finishline-50) {
        clearInterval(id);
      clearInterval(idbox);
      if(ship == 'blue'){
       
        youWon();

      }
      else{
        youLose();


      }
      

    } else {
      posbox++; 
      linehightblue++;
      elembox.style.bottom = posbox + 'px'; 
      elemboxline.style.height=linehightblue + 'px';
      
    }
  }  
}


function youWon(){
    modalHead= document.getElementById("myModalHedaer");
   modeltitle= document.getElementById("myModalLabel");
   modeltitle.innerHTML = "You Won";
   $("#myModalshowprize").modal();
   document.getElementById("displaytheresult").classList.remove('textglowlose');
   document.getElementById("displaytheresult").innerHTML = "You Won";

   
}

function youLose(){
    modalHead= document.getElementById("myModalHedaer");
    modeltitle= document.getElementById("myModalLabel");
    modeltitle.innerHTML = "You Lose";
    $("#myModalshowprize").modal();
    document.getElementById("displaytheresult").classList.add('textglowlose');
    document.getElementById("displaytheresult").innerHTML = "You Lose";
   

}