window.onload = init;

function init() {

    contentArray = [
        { name: "Curtly Hampton",
        AFL: true,
        bio: "Curtly Hampton played for GWS and Adelaide before retirng this year.",
        pic: "hampton"
        }, 

        { name: "Jacob Marley",
        AFL: false,
        bio: "Jacob Marley was Scrooge's former business parter in A Christmas Carol.",
        pic: "marley"
        },

        { name: "Lloyd Meek",
        AFL: true,
        bio: "Lloyd Meek was pick 69 for Fremantle at the 2017 draft.",
        pic: "meek"
        },

        { name: "Uriah Heep",
        AFL: false,
        bio: "Uriah Heep was a sycophantic lawyer in David Copperfield.",
        pic: "heep"
        },

        { name: "Dyson Heppell",
        AFL: true,
        bio: "Dyson Heppell is the captain of the Essendon Football Club.",
        pic: "heppell"
        },

        { name: "Sydney Carton",
        AFL: false,
        bio: "Sydney Carton was a shrewd, self-sacrificing lawyer in A Tale of Two Cities.",
        pic: "carton"
        },

        { name: "Charlie Spargo",
        AFL: true,
        bio: "Charlie Spargo made his AFL debut this year for the Melbourne Football Club.",
        pic: "spargo"
        },

        { name: "Bentley Drummle",
        AFL: false,
        bio: "Bentley Drummle was Pip's lifelong nemesis in Great Expectations.",
        pic: "drummle"
        },

        { name: "Tom Hawkins",
        AFL: true,
        bio: "Tom Hawkins has won two premierships with the Geelong Football Club.",
        pic: "hawkins"
        },

        { name: "Jarvis Lorry",
        AFL: false,
        bio: "Larvis Lorry was a confirmed bachelor in A Tale of Two Cities.",
        pic: "lorry"
        },
    ];

    let correctAnswers = 0;
    let answeredQuestions = 0;
    let numbers = [];

    createQuestionsModules()
    
    //Randomly suffles objects in contentArray to be used in question modules
    function shuffle(o) {
        for (let i = 0; i <= (contentArray.length)-1; i++) {
            numbers.push(i);
        }
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    // Populates questionsContainer with question modules
    function createQuestionsModules() {
        questionsContainer = document.getElementById("questionsContainer");
        for (let i = 0; i < 5; i++) {
            questionDiv = document.createElement("div");
            questionsContainer.appendChild(questionDiv);
            questionDiv.setAttribute("class", "questionDiv")

            question = document.createElement("div");
            questionDiv.appendChild(question);
            question.setAttribute("class", "question");

            questionPar = document.createElement("p");
            question.appendChild(questionPar);
            questionPar.setAttribute("class", "questionPar");
            
            buttonAFL = document.createElement("button");
            questionDiv.appendChild(buttonAFL);
            buttonAFL.setAttribute( "class", "buttonAFL button");
            buttonAFL.innerHTML ="AFL <br> Player";

            buttonLit = document.createElement("button");
            questionDiv.appendChild(buttonLit);
            buttonLit.setAttribute( "class", "buttonLit button");
            buttonLit.innerHTML = "Dickens <br> character";

            bio = document.createElement("div");
            questionDiv.appendChild(bio);
            bio.setAttribute("class", "bio");
        }
        createQuestions();

    }
    
    // Populates question modules with content
    function createQuestions(){
        let random = shuffle(numbers);
        questions = document.getElementsByClassName("questionDiv");

        for (let i = 0; i < questions.length; i++) {
            content = contentArray[random[i]];
            questionPar = questions[i].firstElementChild.firstElementChild;
            questionPar.innerHTML = content.name; 
        }

        AFLButtons = document.getElementsByClassName("buttonAFL");
        for (let i = 0; i < AFLButtons.length; i++) {
                AFLButtons[i].onclick = AFLAnswer;
            }

        litButtons = document.getElementsByClassName("buttonLit");
        for (let i = 0; i < litButtons.length; i++) {
            litButtons[i].onclick = litAnswer; 
        }

    }

    //Reveals answer to question when button is clicked
   function button(e) {
        let name = parent.firstElementChild.firstElementChild.innerHTML;
        answeredQuestions = answeredQuestions +1;

        for (let i = 0; i< contentArray.length; i++) {
            if (Object.values(contentArray[i]).indexOf(name) > -1 ) {
                AFL = contentArray[i].AFL;
                pic = contentArray[i].pic;
                parent.children[0].style.backgroundImage = "url('images/"+pic+".jpg')"
                parent.children[0].children[0].style.display = "none";
                parent.children[3].innerHTML = contentArray[i].bio;
            }  
        }    

        
        

        
    }

    //Reveals and records whether answer was correct if AFL button is clicked
    function AFLAnswer(e) { 
        
        parent = e.target.parentNode;
        button(e);
        e.target.disabled = "true";
        parent.children[2].disabled = "true";
        

        if (AFL) {
            e.target.style.backgroundColor = "green";
            parent.children[3].setAttribute("class", "right");
            correctAnswers = correctAnswers + 1;
        } else {
            e.target.style.backgroundColor = "red";
            parent.children[2].style.backgroundColor = "green";
            parent.children[3].setAttribute("class", "wrong");
        }

        if (answeredQuestions >= document.getElementsByClassName("questionDiv").length) {
            getResults();
        } 
    }

    //Reveals and records whether answer was correct if Dickens button is clicked
    function litAnswer(e) {
        parent = e.target.parentNode;
        button(e);
        e.target.disabled = "true";
        parent.children[1].disabled = "true";
        
  
        if (AFL === false) {
              e.target.style.backgroundColor = "green";
              parent.children[3].setAttribute("class", "right");
              correctAnswers = correctAnswers + 1;
          } else {
              e.target.style.backgroundColor = "red";
              parent.children[1].style.backgroundColor = "green";
              parent.children[3].setAttribute("class", "wrong");
        }

        if (answeredQuestions >= document.getElementsByClassName("questionDiv").length) {
            getResults();
        } 
    }   

    //Reveals final overall result when final question is answered
    function getResults() {
        result = document.getElementById("result");
        result.style.display = "block";
        let numberOfQuestions = document.getElementsByClassName("questionDiv").length;

        if (correctAnswers > (numberOfQuestions*0.6)) {
            result.innerHTML =  "You got " + correctAnswers+"/"+numberOfQuestions+". Well done, you either know a lot about football or literature."
        } else if (correctAnswers > (numberOfQuestions*0.4)) {
            result.innerHTML =  "You got " + correctAnswers+"/"+numberOfQuestions+". Not bad but you could do better."
        } else {
            result.innerHTML =  "You got " + correctAnswers+"/"+numberOfQuestions+". You need to read more books and watch more sport"
        }

        newButton = document.getElementById("newButton");
        newButton.style.display = "block";
        newButton.onclick = newQuiz;

    }

    //Reloads quiz with new questions
    function newQuiz() {
        location.reload();
        window.scrollTo(0, 0);
    }
}