var speechrecognition=window.webkitspeechreconition;
var recognition=new speechrecognition();
var Textbox= document.getElementById("textbox");
function start(){
    Textbox.innerHTML="";
    recognition.start();
    
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    Textbox.innerHTML=content;
    console.log(content);
    if(content=="take my selfie")
    {
        console.log("taking selfie in 5 seconds");
        speak();
    }
    
}

function speak(){
     var synth=window.speechSynthesis;
     speak_data="taking your selfie in 5 seconds";
      var utterThis=new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
       Webcam.attach(camera);
       setTimeout(function()
       {
        take_selfie();
        save();
       },5000);
}
Webcam.set({
    width: 360,
    height: 250,
    Image_format:'png',
    png_quality: 90
})  ;
camera=document.getElementById("camera")
function take_selfie(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img  id="selfie-image" src="'+data_uri+'"/>';

    });
}
function save(){
    link=document.getElementById("link");
    Image=document.getElementById("selfie-image").src;
    link.href=Image;
    link.click();
}