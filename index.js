document.addEventListener("DOMContentLoaded", ready); 

function ready() {
    let miami = 0;
    let newYork = 0;
    let LosAngeles = 0;

    let btn = document.querySelectorAll("#btn")

    validateName = (currentSlide, nextSlide, error) => {
        let name = document.getElementById("name");
        if (name.value == "") {
            document.getElementById(error).innerHTML = "Please don't leave it blank";
          } else {
            name = name.value;
            console.log("your name is: " + name);
            document.getElementById(currentSlide).style.display = "none";//current question
            document.getElementById(nextSlide).style.display = "block";//next question
          }
    }

    answer = (currentSlide, nextSlide, a1, a2, a3, error) => {
        if (document.getElementById(a1).checked) {//this is a1 
            miami += 1 ;
            console.log("miami: " + miami);
            document.getElementById(currentSlide).style.display = "none";//current question
            document.getElementById(nextSlide).style.display = "block";//next question
            // document.getElementById(error).innerHTML = ""; //this clears the error when you switch
        }
        else if (document.getElementById(a2).checked) {
            newYork += 1;
            console.log("new york: " + newYork);
            document.getElementById(currentSlide).style.display = "none";//current question
            document.getElementById(nextSlide).style.display = "block";//next question
            // document.getElementById(error).innerHTML = ""; //this clears the error when you switch
        }
        else if (document.getElementById(a3).checked) {
            LosAngeles += 1;
            console.log("la: " + LosAngeles);
            document.getElementById(currentSlide).style.display = "none";//current question
            document.getElementById(nextSlide).style.display = "block";//next questio
            // document.getElementById(error).innerHTML = ""; //this clears the error when you switchdocument.getElementById(error).innerHTML = "";
        }
        else {
            document.getElementById(error).innerHTML = "you need to select one";//this is parameter error// can also do a for loop for each error message
        }
    }


    //prototype
    result = (lastSlide, winner) => {//lets see if the parameters work
        let resultsWrap = document.getElementById("results-wrap");
        resultsWrap.style.display = "block";//make the results block visible

        let name = document.getElementById("name");
        let actualName = name.value

        resultsWrapLength = resultsWrap.children
        if (resultsWrapLength.length < 4) {
            let nameHeader = document.createElement("div");
            nameHeader.setAttribute("class", "result-name");
            nameHeader.innerHTML = `Congrats ${actualName}`;
            resultsWrap.prepend(nameHeader);
        } else {
        }

        let miamiResult = document.getElementById("miami");
        let newYorkResult = document.getElementById("ny");
        let losAngelesResult = document.getElementById("la");

        miamiResult.style.display = "none";
        newYorkResult.style.display = "none";
        losAngelesResult.style.display = "none";

        if (miami > LosAngeles && miami > LosAngeles) {
            console.log("MIAMI WINS!!");
            // winner = miamiResult;
            winner = "miami";
            document.getElementById(lastSlide).style.display = "none";//current question
            document.getElementById(winner).style.display = "block";//next questio
            //set timeout for the button
            setTimeout(displayButton, 2000);
        } else if (LosAngeles > miami && LosAngeles > newYork) {
            console.log("LA WINS!!")
            // winner = losAngelesResult;
            winner = "la";
            document.getElementById(lastSlide).style.display = "none";//current question
            document.getElementById(winner).style.display = "block";//next questio
            //set timeout for the button
            setTimeout(displayButton, 2000);
        } else {
            console.log("NEW YORK WINS!!")
            // winner = newYorkResult;
            winner = "ny";
            document.getElementById(lastSlide).style.display = "none";//current question
            document.getElementById(winner).style.display = "block";//next questio
            //set timeout for the button
            setTimeout(displayButton, 2000);
        }
    }

    displayButton = () => {
        //for loop to display all of the buttons 
        let resBtn = document.querySelectorAll("#again-btn");
        for (let i = 0; i < resBtn.length; i++) {
            resBtn[i].classList.add("btn-display");
            resBtn[i].style.opacity = "1";
            resBtn[i].addEventListener("click", () => {
                restartButton("results-wrap", "q1");
            });
        }
    }

    restartButton = (resultSlide, firstSlide) => {
        miami = 0;
        losAngeles = 0;
        newYork = 0;
        document.getElementById(resultSlide).style.display = "none";//current question
        document.getElementById(firstSlide).style.display = "block";
    }


    for (let i = 0; i < btn.length; i++) {
        btn[0].addEventListener("click", () => {
            validateName("intro-card-wrap", "q1", "error-start")//add parameters
        });
        btn[1].addEventListener("click", () => {
            answer("q1", "q2", "strawberry", "vanilla", "chocolate", "error")
        });
        btn[2].addEventListener("click", () => {
            answer("q2", "q3", "reggaeton", "electronic", "rock", "error1")
        });
        btn[3].addEventListener("click", () => {
            answer("q3", "q4", "left", "right", "center", "error2")
        });
        btn[4].addEventListener("click", () => {
            answer("q4", "q5", "party", "walk", "stay", "error3")
        });
        btn[5].addEventListener("click", () => {
            answer("q5", "q6", "salad", "burgers", "pizza", "error4")
        });
        btn[6].addEventListener("click", () => {
            answer("q6", "q7", "horror", "comedy", "action", "error5")
        });
        btn[7].addEventListener("click", () => {
            answer("q7", "q8", "warm", "cold", "any", "error6")
        });
        btn[8].addEventListener("click", () => {
            answer("q8", "q9", "blue", "red", "green", "error7")
        });
        btn[9].addEventListener("click", () => {
            answer("q9", "q10", "cats", "dogs", "other", "error8")
        });
        btn[10].addEventListener("click", () => {
            answer("q10", "results-wrap", "run", "asmr", "meditate", "error9");
            result("q10");
        });
    }
}
