var inputType = 10;

function convertInput() {
    var inputString = document.getElementById("userInput").value, input, pass = true;
    if (inputString === "") {
        document.getElementById("BinaryValue").innerHTML = "0";
        document.getElementById("DecimalValue").innerHTML = "0";
        document.getElementById("HexValue").innerHTML = "0";
        return;
    }
    if (inputType === 2) {
        if (!/^[0-1]+$/.test(inputString)) {
            pass = false;
        }
    } else if (inputType === 16) {
        if (!/^[a-fA-F\d]+$/.test(inputString)) {
            pass = false;
        }
    } else {
        if (!/^[0-9]+$/.test(inputString)) {
            pass = false;
        }
    }
    if (!pass) {
        document.getElementById("BinaryValue").innerHTML = "Invalid Input";
        document.getElementById("DecimalValue").innerHTML = "Invalid Input";
        document.getElementById("HexValue").innerHTML = "Invalid Input";
        return;
    }
    input = parseInt(inputString, inputType);
    document.getElementById("BinaryValue").innerHTML = input.toString(2);
    document.getElementById("DecimalValue").innerHTML = input.toString(10);
    document.getElementById("HexValue").innerHTML = input.toString(16);
}

function btnClick(id) {
    if (id === "BinaryButton") {
        document.getElementById("BinaryButton").disabled = true;
        document.getElementById("DecimalButton").disabled = false;
        document.getElementById("HexButton").disabled = false;
        inputType = 2;
    } else if (id === "DecimalButton") {
        document.getElementById("BinaryButton").disabled = false;
        document.getElementById("DecimalButton").disabled = true;
        document.getElementById("HexButton").disabled = false;
        inputType = 10;
    } else {
        document.getElementById("BinaryButton").disabled = false;
        document.getElementById("DecimalButton").disabled = false;
        document.getElementById("HexButton").disabled = true;
        inputType = 16;
    }
    convertInput();
}

window.onload = function () {
    document.getElementById("BinaryButton").addEventListener("click", function () {
        btnClick("BinaryButton");
    });
    document.getElementById("DecimalButton").addEventListener("click", function () {
        btnClick("DecimalButton");
    });
    document.getElementById("HexButton").addEventListener("click", function () {
        btnClick("HexButton");
    });
    document.getElementById("userInput").addEventListener("keyup", function () {
        convertInput();
    });
};