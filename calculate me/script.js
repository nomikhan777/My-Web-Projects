let string = "";
let arr = ['+', '-', '*', '/', '%']
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            const str = document.getElementById('result').value;
            // console.log(str)
            const lastChar = str.slice(0, str.length - 1)
            console.log(e.target.value)
            if (arr.includes(lastChar)) {
                console.log("triggered", str);
                resultWithoutLastChar = str.slice(0, result.length - 1);
                document.getElementById('result').value = resultWithoutLastChar + e.target.value;
            }
            else {
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.getElementById('result').value = string;
                // console.log('andar')
                // console.log(lastChar)
            }
        }

    })
})