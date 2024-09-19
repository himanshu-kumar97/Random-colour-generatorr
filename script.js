const getColor = () => {
    //Hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    console.log(randomNumber);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    const colorCode = document.getElementById('color-code');
    colorCode.innerText = randomCode;

}

// event call
const button = document.getElementById('btn');
button.addEventListener('click', getColor);

//initial call
getColor();
