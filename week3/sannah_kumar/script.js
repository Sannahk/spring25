function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
    let newValue = parseInt(document.getElementById("counter").innerText);
    let messageElement = document.getElementById("message");

    let messages = {
        10: "5 cookies! EASY WORK 🎉",
        50: "Amazing! DAMNN she ate 50 cookies! 🍪",
        100: "GGOOODDDMANNN She is a cookie master! 100 cookies! 🏆"
    };

    if (messages[newValue]) {
        messageElement.innerText = messages[newValue]; 
        confetti();

       
        setTimeout(() => {
            messageElement.innerText = "eat eat eat eat eat ";
        }, 3000);
    }
}

