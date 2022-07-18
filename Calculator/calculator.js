

// ========== Display Function (to display values) ==========
function display(id) {
    console.log("clicked");
    var opArr = ['+', '-', '*', '/', '%'];
    var result = document.getElementById("result").value;
    var lastChar = result.charAt(result.length - 1);
    var value = document.getElementById(id).value;
    if (opArr.includes(lastChar) && opArr.includes(value)) {
        console.log("triggered");
        resultWithoutLastChar = result.slice(0, result.length - 1);
        document.getElementById("result").value = resultWithoutLastChar + value;
    }
    else {
        document.getElementById('result').value += value;
    }
}


// ========= Clear Function =======
function clearResult() {
    console.log("clicked");
    document.getElementById("result").value = " ";
}

// calculate values in the result bar
function calculate() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}