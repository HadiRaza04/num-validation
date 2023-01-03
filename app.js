const myFunc = () => {
    const num = document.getElementById("num");
    if(!num.validation){
        document.getElementById("demo").innerHTML = num.validationMessage;
        console.log(num.validationMessage);
    }
}
const overFunc = () => {
    const number1 = document.getElementById("num 1");
    let text = "Value Ok";
    if(number1.validity.rangeOverflow){
        text = "Value too large";
    }
    else{
        text = "Input Ok.";
    }
    document.getElementById("demo1").innerHTML = text;
}
const lowFunc = () => {
    const number2 = document.getElementById("num 2");
    let text1 = "Value Ok";
    if(number2.validity.rangeUnderflow){
        text1 = "Value too short";
    }
    else{
        text1 = "Input Ok.";
    }
    document.getElementById("demo2").innerHTML = text1;
}