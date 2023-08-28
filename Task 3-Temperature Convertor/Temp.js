function myFunction() {
    var Temp_type=document.getElementById("select_temp").value;
    var Convert_Temp_type=document.getElementById("select_convert").value;
    var temp = parseFloat(document.getElementById("temp").value);
    var result = document.getElementById("demo");
    console.log(temp);
    console.log(Temp_type);
    console.log(Convert_Temp_type);

    if(isNaN(temp)){
        window.alert("Please Enter Temperture ");
     }
    if(Convert_Temp_type=="null"){
       window.alert("Please Select Temperture any Scale ");
    }
   
    if(Temp_type==Convert_Temp_type){
       result.innerHTML = temp;
    }

    if(Temp_type=="Celsius"){
        if(Convert_Temp_type=="Fahrenheit")
        result.innerHTML = (9/5 *temp)+32 + "\u2109";
        if(Convert_Temp_type=="Kelvin")
        result.innerHTML = temp+273 +"K";
        return;
    }else{
        result.innerHTML = "";
    }

    if(Temp_type=="Fahrenheit"){
        if(Convert_Temp_type=="Celsius")
        result.innerHTML = 5/9 * (temp-32) + "\u2103";
        if(Convert_Temp_type=="Kelvin")
        result.innerHTML = (5/9 * (temp-32))+273 +"K";
        return;
    }else{
        result.innerHTML = "";
    }

    if(Temp_type=="Kelvin"){
        if(Convert_Temp_type=="Celsius")
        result.innerHTML = temp-273 + "\u2103";
        if(Convert_Temp_type=="Fahrenheit")
        result.innerHTML = (9/5 * (temp-273))+32  + "\u2109";
        return;
    }else{
        result.innerHTML = "";
    }

}
function Reset(){
    document.getElementById("Temp").reset();
}

