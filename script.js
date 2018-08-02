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
        bio: "Jacob Marley was Ebeneezer Scrooge's ghostly former business parter in A Christmas Carol.",
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
        }
    ]

    function createQuestionsModules() {
        questionsContainer = document.getElementById("questionsContainer");
        for (let i = 0; i < contentArray.length; i++) {
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
            buttonAFL.innerHTML ="AFL Player";

            buttonLit = document.createElement("button");
            questionDiv.appendChild(buttonLit);
            buttonLit.setAttribute( "class", "buttonLit button");
            buttonLit.innerHTML = "Dickens charcter";

            bio = document.createElement("div");
            questionDiv.appendChild(bio);
            bio.setAttribute("class", "bio");
        }
        createQuestions();

    }
    

    function createQuestions(){
        questions = document.getElementsByClassName("questionDiv");
        for (let i = 0; i < questions.length; i++) {
            content = contentArray[i];
            questionPar = questions[i].firstElementChild.firstElementChild;
            questionPar.innerHTML = content.name; 
            // bio = questions[i].lastElementChild;
            // bio.innerHTML = content.bio;
            // AFLTrueFalse.push(content.AFL);
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

    createQuestionsModules()

    
   

    function AFLAnswer(e) {
        
        parent = e.target.parentNode;
        // bio = parent.lastElementChild;
        // bio.innerHTML = content.bio;
        e.target.disabled = "true";
        parent.children[2].disabled = "true";
        name = parent.firstElementChild.firstElementChild.innerHTML;



        for (let i = 0; i< contentArray.length; i++) {
          if (Object.values(contentArray[i]).indexOf(name) > -1 ) {
            AFL = contentArray[i].AFL;
            pic = contentArray[i].pic;
            parent.children[0].style.backgroundImage = "url('images/"+pic+".jpg')"
            parent.children[0].children[0].style.display = "none";
            parent.children[3].innerHTML = contentArray[i].bio;
            
          }  
        }

        if (AFL) {
            e.target.style.backgroundColor = "green";
        } else {
            e.target.style.backgroundColor = "red";
            parent.children[2].style.backgroundColor = "green";
        }
    }

    function litAnswer(e) {
        parent = e.target.parentNode;
        // bio = parent.lastElementChild;
        // bio.innerHTML = content.bio;
        e.target.disabled = "true";
        parent.children[1].disabled = "true";
        name = parent.firstElementChild.firstElementChild.innerHTML;

        for (let i = 0; i< contentArray.length; i++) {
            if (Object.values(contentArray[i]).indexOf(name) > -1 ) {
              AFL = contentArray[i].AFL;
              pic = contentArray[i].pic;
              parent.children[0].style.backgroundImage = "url('images/"+pic+".jpg')"
              parent.children[0].children[0].style.display = "none";
              parent.children[3].innerHTML = contentArray[i].bio;

            }  
        }
  
        if (AFL === false) {
              e.target.style.backgroundColor = "green";
          } else {
              e.target.style.backgroundColor = "red";
              parent.children[1].style.backgroundColor = "green";
        }
    }   
}