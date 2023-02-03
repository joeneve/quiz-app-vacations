<div class="container">
  <div class="question-block" id="question-block-one">
    <div class="question-prompt">
      <div class="question-title">
        <p>what's your favorite city?</p>
      </div>
      <div class="options">
        <form>
          <div class="block">
            <label>Miami</label>
            <input type="radio" id="miami" name="fav_city">
          </div>
          <div class="block">
            <label>New york</label>
            <input type="radio" id="newYork" name="fav_city">
          </div>
          <div class="block">
            <label>Los Angeles</label>
            <input type="radio" id="la" name="fav_city">
          </div>
          <div id="error"></div>
        </form> 
      </div>
    </div>
    <button class="button" id="btn">click me</button>
  </div>
  <div class="question-block" id="question-block-two">
    <div class="question-prompt">
      <div class="question-title">
        <p>what's your favorite flavor?</p>
      </div>
      <div class="options">
        <form>
          <div class="block">
            <label>Chocolate</label>
            <input type="radio" id="miami" name="fav_city">
          </div>
          <div class="block">
            <label>Vanilla</label>
            <input type="radio" id="newYork" name="fav_city">
          </div>
          <div class="block">
            <label>Strawberry</label>
            <input type="radio" id="la" name="fav_city">
          </div>
          <div id="error"></div>
        </form> 
      </div>
    </div>
    <button class="button" id="btn">click me</button>
  </div>
</div>

* {
  margin: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
}

.container {
  border: 1px solid black;
}

.question-block {
  width: 300px;
  border: 1px solid red;
  padding: 20px;
}

.options, form {
  display: flex;
  flex-direction: column;
  align-items: start;
}

input[type="radio"] {
  background-color: black;
}

#question-block-two {
  display: none;
}

let miami = 0;
let newYork = 0;
let LosAngeles = 0;

let answers = {"miami": 0, "newYork": 0, "la": 0};

let btn = document.querySelector("#btn");
let q1 = document.getElementById("question-block-one");
let q2 = document.getElementById("question-block-two");

btn.addEventListener("click", function() {
  check()
});

//this will have a parameters when calling it for the button, 
//call the buttons and add the parameters for each block
check = (currentQuestion, nextQuestion, a1, a2, a3, error) => {
  if (document.getElementById("miami").checked) {
    miami += 1;
    console.log(miami);
    q1.style.display = "none";//current question
    q2.style.display = "block";//next question
  }
  else if (document.getElementById("newYork").checked) {
    newYork += 1;
    console.log(newYork);
    q1.style.display = "none";
    q2.style.display = "block";
  }
  else if (document.getElementById("la").checked) {
    la += 1;
    console.log(la);
    q1.style.display = "none";
    q2.style.display = "block";
  }
  else {
    document.getElementById("error").innerHTML = "you need to select one";
  }
}

//https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/

//https://www.w3schools.com/html/html_form_input_types.asp






NOTES: 

ALSO, I THINK FOR THE BUTTONS WE CAN PROBABLY CALL THEM WITH A FOR LOOP THEN FOR EACH INDEX, CALL THE EVENT LISTENER WITH THE FUNCTION AND ITS SPECIFIC PARAMETERS, I THINK THIS CAN WORK 






//this is the logistic for doing the for loop on the buttons 

<p>for loop the buttons, to see if it works</p> 
<p>1) do 3 blocks of containers, with buttons on them</p>
<p>query select, the buttons, for loops the butttons, add different color of background color fro each index</p>

<div class="container">
  <div class="block1 block">
    <h3>tile 1</h3>
    <p>this is the first tile, and therefore the first pargraph</p>
    <button>click for next</button>
  </div>
  <div class="block2 block">
    <h3>tile 2</h3>
    <p>this is the first tile, and therefore the first pargraph</p>
    <button>click for next</button>
  </div>
  <div class="block3 block">
    <h3>tile 3</h3>
    <p>this is the first tile, and therefore the first pargraph</p>
    <button>click for next</button>
  </div>
</div>

* {
  box-sizing: border-box;
}

div:nth-child(1) {
  border: 1px solid red;
}
div:nth-child(2) {
  border: 1px solid blue;
}
div:nth-child(3) {
  border: 1px solid green;
}

.block {
  width: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  padding: 20px;
  border-radius: 10px;
}

let buttons = document.querySelectorAll("button");

console.log(buttons.length);

for (let i = 0; i < buttons.length; i++) {
  buttons[0].style.color = "blue";
  buttons[1].style.color = "green";
  buttons[2].style.color = "red";
  
  buttons[0].style.display = "block";
  buttons[1].style.display = "none";
  buttons[2].style.display = "none";
  
  buttons[0].addEventListener("click", function() {
    displayHide(buttons[0], buttons[1]);
  });
  
  buttons[1].addEventListener("click", function() {
    displayHide(buttons[1], buttons[2]);
  });
  
  //so the idea for the quiz would be like this:
  buttons[2].addEventListener("click", function() {
    displayHide(buttons[2], buttons[0]);
  });
  
}

displayHide = (hide, display) => {
  hide.style.display = "none";
  display.style.display = "block";
}


#####

quiz app logistics

10 questions
3 answers

have a start page, that describes a little bit about the app and you can click start 

at the end, when it gives you the results, theres a restart button 

each question has a question 1/10 in the corner 

a vacations quiz app, where you should go on vacation

answers are 
- miami
- los angeles
- new york

what's 

1) what's your favorite ice cream flavor
a) vanilla
b) strawberry
c) chocolate

2) what type of music would you prefer to listen?
a) reggaeton
b) electronic
c) metal

3) left or right
a) left
b) right
c) none

4) what do you prefer to do?
a) walk on a park 
b) partying
c) stay at home

5) favorite food?
a) pizza
b) burgers
c) salad

6) favorite types of movies? 
a) horror
b) comedy
c) action

7) what climate do you prefer? 
a) cold
b) hot
c) any is okay

8) favorite color? 
a) blue
b) red
c) green

9) prefer cats or dogs?
a) cats
b) dogs
c) other pet

10) what would you rather do
a) run
b) listen to asmr
c) meditate



#### complete logistics

<div class="container">
  <div class="question-block" id="question-block-one">
    <div class="question-prompt">
      <div class="question-title">
        <p>what's your favorite city?</p>
      </div>
      <div class="options">
        <form>
          <div class="block">
            <label>Miami</label>
            <input type="radio" id="miami" name="fav_city">
          </div>
          <div class="block">
            <label>New york</label>
            <input type="radio" id="newYork" name="fav_city">
          </div>
          <div class="block">
            <label>Los Angeles</label>
            <input type="radio" id="la" name="fav_city">
          </div>
          <div id="error"></div>
        </form> 
      </div>
    </div>
    <button class="button" id="btn">click me</button>
  </div>
  <div class="question-block" id="question-block-two">
    <div class="question-prompt">
      <div class="question-title">
        <p>what's your favorite flavor?</p>
      </div>
      <div class="options">
        <form>
          <div class="block">
            <label>Chocolate</label>
            <input type="radio" id="chocolate" name="fav_city">
          </div>
          <div class="block">
            <label>Vanilla</label>
            <input type="radio" id="vanilla" name="fav_city">
          </div>
          <div class="block">
            <label>Strawberry</label>
            <input type="radio" id="strawberry" name="fav_city">
          </div>
          <div id="error2"></div>
        </form> 
      </div>
    </div>
    <button class="button" id="btn">click me</button>
  </div>
  <div class="question-block" id="question-block-three">
    <div class="question-prompt">
      <div class="question-title">
        <p>Left or right?</p>
      </div>
      <div class="options">
        <form>
          <div class="block">
            <label>Left</label>
            <input type="radio" id="left" name="fav_city">
          </div>
          <div class="block">
            <label>Right</label>
            <input type="radio" id="right" name="fav_city">
          </div>
          <div class="block">
            <label>None</label>
            <input type="radio" id="none" name="fav_city">
          </div>
          <div id="error3"></div>
        </form> 
      </div>
    </div>
    <button class="button" id="btn">click me</button>
  </div>
</div>


* {
  margin: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
}

.container {
  border: 1px solid black;
}

.question-block {
  width: 300px;
  border: 1px solid red;
  padding: 20px;
}

.options, form {
  display: flex;
  flex-direction: column;
  align-items: start;
}

input[type="radio"] {
  background-color: black;
}

#question-block-two, #question-block-three {
  display: none;
}


let miami = 0;
let newYork = 0;
let LosAngeles = 0;

// let answers = {"miami": 0, "newYork": 0, "la": 0};

let btn = document.querySelectorAll("#btn");//need to do a for loop with all the buttons

// btn.addEventListener("click", function() {
//   check()
// });

// let buttons = document.querySelectorAll("#btn")

for (let i = 0; i < btn.length; i++) {
  btn[0].addEventListener("click", () => {
    check("question-block-one", "question-block-two", "miami", "newYork", "la", "error");
  });
  btn[1].addEventListener("click", () => {
    check("question-block-two", "question-block-three", "chocolate", "vanilla", "strawberry", "error2");
  });
  btn[2].addEventListener("click", () => {
    check("question-block-three", "question-block-one", "left", "right", "none", "error3");
  });
}

//this will have a parameters when calling it for the button, 
//call the buttons and add the parameters for each block
check = (currentQuestion, nextQuestion, a1, a2, a3, error) => {
  if (document.getElementById(a1).checked) {//this is a1 
    miami += 1;
    console.log("miami: " + miami);
    document.getElementById(currentQuestion).style.display = "none";//current question
    document.getElementById(nextQuestion).style.display = "block";//next question
  }
  else if (document.getElementById(a2).checked) {
    newYork += 1;
    console.log("new york: " + newYork);
    document.getElementById(currentQuestion).style.display = "none";//current question
    document.getElementById(nextQuestion).style.display = "block";//next question
  }
  else if (document.getElementById(a3).checked) {
    LosAngeles += 1;
    console.log("la: " + LosAngeles);
    document.getElementById(currentQuestion).style.display = "none";//current question
    document.getElementById(nextQuestion).style.display = "block";//next question
  }
  else {
    document.getElementById(error).innerHTML = "you need to select one";//this is parameter error// can also do a for loop for each error message
  }
}