var inputType = "Decimal";

function btnClick(id){
    console.log(id);
    if (id === "BinaryButton"){
        document.getElementById("BinaryButton").disabled = true;
        document.getElementById("DecimalButton").disabled = false;
        document.getElementById("HexButton").disabled = false;
        inputType = "Binary";
        console.log("Binary button clicked");
    }
    else if (id === "DecimalButton"){
        document.getElementById("BinaryButton").disabled = false;
        document.getElementById("DecimalButton").disabled = true;
        document.getElementById("HexButton").disabled = false;
        inputType = "Decimal";
        console.log("Decimal button clicked");
    }
    else{
        document.getElementById("BinaryButton").disabled = false;
        document.getElementById("DecimalButton").disabled = false;
        document.getElementById("HexButton").disabled = true;
        inputType = "Hex";
        console.log("Hex button clicked");
    }
    validateInput();
}

window.onload=function(){
    document.getElementById("BinaryButton").addEventListener("click", function(){btnClick("BinaryButton")});
    document.getElementById("DecimalButton").addEventListener("click", function(){btnClick("DecimalButton")});
    document.getElementById("HexButton").addEventListener("click", function(){btnClick("HexButton")});
}

function validateInput(){

}