var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage="Dice"+randomnumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2="Dice"+randomnumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomnumber1 > randomnumber2 )
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS :)"
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS :)"
}
else{
    document.querySelector("h1").innerHTML="OH NOO !! DRAW:("
}