$(document).ready(function(){     
        function displayRadioValue() {
            document.getElementById("result").innerHTML = "";
            var ele = document.getElementsByTagName('input');
              
            for(i = 0; i < ele.length; i++) {
                  
                    if(ele[i].checked)
                        document.getElementById("result").innerHTML
                                += ele[i].name + ":"
                                + ele[i].value + "<br>";
                }
            }
        })

var quizanswers_endpoint = "https://rc3ui1jaxh.execute-api.us-east-1.amazonaws.com/Prod/quiz-answers"  

  
  async function postquizanswers(sizeAnswer, climateAnswer, genderAnswer, rollAnswer, armsAnswer) {
    const response = await fetch(quizanswers_endpoint, {
      method: "POST",
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"sizeAnswer": sizeAnswer},
        {"climateAnswer": climateAnswer},
        {"genderAnswer": genderAnswer},
        {"rollAnswer": rollAnswer},
        {"armsAnswer": armsAnswer}
        )
    })
  }