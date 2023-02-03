document.addEventListener("DOMContentLoaded", ready); 

function ready() {
    let miami = 0;
    let newYork = 0;
    let LosAngeles = 0;

    let btn = document.querySelectorAll("#btn")
    // let name = document.getElementById("name");

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
    result = (winner) => {//lets see if the parameters work
        console.log("la: " + LosAngeles);
        console.log("new york: " + newYork);
        console.log("miami: " + miami);
        if (miami > LosAngeles && miami > LosAngeles) {
            console.log("MIAMI WINS!!")
        } else if (LosAngeles > miami && LosAngeles > newYork) {
            console.log("LA WINS!!")
        } else if (newYork > miami && newYork > LosAngeles) {
            console.log("NEW YORK WINS!!")
        }
    }


    for (let i = 0; i < btn.length; i++) {
        btn[0].addEventListener("click", () => {
            validateName("intro-card-wrap", "q1", "error-start")//add parameters
        });
        btn[1].addEventListener("click", () => {
            answer("q1", "q2", "vanilla", "strawberry", "chocolate", "error")//add parameters
        });
        btn[2].addEventListener("click", () => {
            answer("q2", "q3", "reggaeton", "electronic", "rock", "error")//add parameters
        });
        btn[3].addEventListener("click", () => {
            answer("q3", "q4", "left", "right", "center", "error")//add parameters
        });
        btn[4].addEventListener("click", () => {
            answer("q4", "q5", "walk", "party", "stay", "error")//add parameters
        });
        btn[5].addEventListener("click", () => {
            answer("q5", "q6", "pizza", "burgers", "salad", "error")//add parameters
        });
        btn[6].addEventListener("click", () => {
            answer("q6", "q7", "horror", "comedy", "action", "error")//add parameters
        });
        btn[7].addEventListener("click", () => {
            answer("q7", "q8", "cold", "warm", "any", "error")//add parameters
        });
        btn[8].addEventListener("click", () => {
            answer("q8", "q9", "blue", "red", "green", "error")//add parameters
        });
        btn[9].addEventListener("click", () => {
            answer("q9", "q10", "cats", "dogs", "other", "error")//add parameters
        });
        btn[10].addEventListener("click", () => {
            result()//add parameters
        });
    }
}
