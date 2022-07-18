const tempload = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb';


    setTimeout(()=>{
        temp.innerHTML = '&#xf2ca';
    },1000)



    setTimeout(()=>{
        temp.innerHTML = '&#xf2c9';
        temp.style.color = "#63031";
    },1000)

    setTimeout(()=>{
        temp.innerHTML = '&#xf2c8';
    },1000)


}






tempload();





