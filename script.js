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

    

    function createQuestions(){
        questions = document.getElementsByClassName("questionDiv");
        // AFLTrueFalse = [];
        for (let i = 0; i < questions.length; i++) {
            content = contentArray[i];
            questionPar = questions[i].firstElementChild.firstElementChild;
            questionPar.innerHTML = content.name; 
            bio = questions[i].lastElementChild;
            bio.innerHTML = content.bio;
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

    createQuestions();

    
   

    function AFLAnswer(e) {
        
        parent = e.target.parentNode;
        bio = parent.lastElementChild;
        bio.style.display = "block";
        e.target.disabled = "true";
        parent.children[2].disabled = "true";
        name = parent.firstElementChild.firstElementChild.innerHTML;


        for (let i = 0; i< contentArray.length; i++) {
          if (Object.values(contentArray[i]).indexOf(name) > -1 ) {
            AFL = contentArray[i].AFL;
            pic = contentArray[i].pic;
            parent.children[0].style.backgroundImage = "url('images/"+pic+".jpg')"
            parent.children[0].children[0].style.display = "none";
            
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
        bio = parent.lastElementChild;
        bio.style.display = "block";
        e.target.disabled = "true";
        parent.children[1].disabled = "true";
        name = parent.firstElementChild.firstElementChild.innerHTML;

        for (let i = 0; i< contentArray.length; i++) {
            if (Object.values(contentArray[i]).indexOf(name) > -1 ) {
              AFL = contentArray[i].AFL;
              pic = contentArray[i].pic;
              parent.children[0].style.backgroundImage = "url('images/"+pic+".jpg')"
              parent.children[0].children[0].style.display = "none";

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