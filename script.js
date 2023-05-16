const button = document.querySelector("button");
const result = document.querySelector("h1");
const coin = document.getElementById("coin")

const randomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
}

const textChanger = () => {
    let rnd = randomNumber(101);
    // console.log(rnd);
    result.style.opacity = 100
    if (rnd % 2 === 0){
        result.textContent = "Cara";
    }
    else{
        result.textContent = "Cruz";
    }
}

const coinReset = () => {
    coin.style.animation = `none`;
}

const resultReset = () =>{
    result.style.opacity = 0;
}

const disableButton = () => {
    button.disabled = true
    setTimeout(function(){
        button.disabled = false;
    }, 3050)
}

button.onclick = () => {
    disableButton();
    resultReset();
    coin.style.animation = `spin 3s forwards`;
    setTimeout(textChanger, 3000);
    setTimeout(coinReset, 3000);
}
