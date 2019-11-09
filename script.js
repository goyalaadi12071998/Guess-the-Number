alert("If you restart the game at any stage then your result is always bad:(");

var arr=[0,0,0];
var score=0,attempts=0,bool_check=0;
function myFunction() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("start").style.display = "none";
  document.getElementById("score").innerHTML = score;
  document.getElementById("rest").style.display = "block";
  document.getElementById("b").style.display = "block";
  document.getElementById("attempts").innerHTML = attempts;
  document.getElementById("b1").style.display = "block";
  document.getElementById("b3").style.display = "block";
  document.getElementById("b2").style.display = "block";  
  for(var index=0;index<3;index++){
    var pos="b"+(index+1);
    document.getElementById(pos).innerHTML="???";
  }
  for(var index=0;index<3;index++){
    arr[index]=Math.floor((Math.random() * 100));
  }
  arr.sort();
  for(var index=1;index<=2;index++){
    if(arr[index]==arr[index-1]){
      arr[index]++;
      arr[index]%100;
    }
  }
  for(var index=0;index<3;index++){
    var swap_index=Math.floor((Math.random() * index) );
    var temp=arr[index];
    arr[index]=arr[swap_index];
    arr[swap_index]=temp; 
  }
  var displayindex=Math.floor((Math.random() * 2));
  var display_element=arr[displayindex];
  document.getElementById("display_num").innerHTML=display_element;
  bool_check=0;
}
function check(x){
  var display_number=document.getElementById("display_num").innerHTML;
  if(bool_check==0){
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;
    if(display_number==arr[x])
      score++;
      document.getElementById("score").innerHTML = score;
  }
  bool_check=1;
  for(var index=0;index<3;index++){
    var pos="b"+(index+1);
    // console.log(pos);
    document.getElementById(pos).innerHTML=arr[index];
  }
  // console.log(score);
  if(attempts==10){
    // score=0;
    // attempts=0;
    display_result(score);
  }  
}
function display_result(score){
    if(score <= 3){
        document.getElementById("result").innerHTML = "Bad";
    }
    if(score > 3 && score <= 6){
        document.getElementById("result").innerHTML = "Good";
    }if(score > 6){
        document.getElementById("result").innerHTML = "Excellent";
    }
    document.getElementById("b").style.display = "none";
    document.getElementById("rest").style.display = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("b1").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b2").style.display = "none"; 
}
function newGame(){
    score = 0;
    attempts = 0;
    myFunction();
}
function restart(){
    document.getElementById("display_num").innerHTML = "";
    display_result(0);
}