//Random number genarator function
function numberGenaret(){
    const genaretedNumber=Math.round(Math.random()*10000);
    document.getElementById('pinGeneratorInput').value=genaretedNumber;
};
//Keypad button input function
function buttonInput(num){
    const inputNumber = document.getElementById('inputNumber').value;
if (inputNumber.length<4){
    document.getElementById('inputNumber').value+=num;
    }; 
};
 //make back space function
 function backSpace(){
     let inputMyCode = document.getElementById('inputNumber').value;
     document.getElementById('inputNumber').value =inputMyCode.substring(0,inputMyCode.length-1);
 };

 // Clear button
 function clearAll(){
    document.getElementById('inputNumber').value='';
 };
 //compare code
 function compare(){
   const genaratedValue = document.getElementById('pinGeneratorInput').value;
   const givenValue= document.getElementById('inputNumber').value;
   let trycount = parseInt(document.getElementById('tryCount').innerText);
    if (trycount>0){
        if (genaratedValue == givenValue){
            document.getElementById("pinNotMatch").style.display='none';
            document.getElementById("pinMatch").style.display='block';
        }
        else{
            document.getElementById("pinNotMatch").style.display='block';
            document.getElementById("pinMatch").style.display='none';
            trycount--;
        };
        document.getElementById('tryCount').innerText=trycount;
        document.getElementById('pinGeneratorInput').value='';
        document.getElementById('inputNumber').value='';
    } else{
        document.getElementById('inputNumber').value="This is block"
    }
 }