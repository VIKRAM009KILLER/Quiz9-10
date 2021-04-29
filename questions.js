var corr = 0

const myQuestions = [
  {
    question: "1. Who halted the Arab Invasion of India?",
    a: "Bappa Rawal",
    b: "Suheldev",
    c: "Raja Dahir",
    correctAnswer: "Bappa Rawal"
  },
  {
    question: "2. What is capital of Spain?",
    a: "Barcelona",
    b: "Madrid",
    c: "Valencia",
    correctAnswer: "Madrid"
  },
  {
    question: "3. Who has written the mythological fiction book series Rankshetram",
    a: "Utkarsh Srivastava",
    b: "Amish Tripathi",
    c: "Kevin Massal",
    correctAnswer: "Utkarsh Srivastava"
  },
  {
    question: "4. What does MSIT stands for",
    a: "Master of Science in Information Technology",
    b: "Master of Science in Industrial Technology",
    c: "Master of Science in Technical Info",
    correctAnswer: "Master of Science in Information Technology"
}
]

function quest(){
    console.log("run")
    

    1
    document.getElementById("q1").innerHTML = myQuestions[0].question;
    document.getElementById("opt11").innerHTML = myQuestions[0].a;
    document.getElementById("opt12").innerHTML = myQuestions[0].b;
    document.getElementById("opt13").innerHTML = myQuestions[0].c;

    // 2
    document.getElementById("q2").innerHTML = myQuestions[1].question;
    document.getElementById("opt21").innerHTML = myQuestions[1].a;
    document.getElementById("opt22").innerHTML = myQuestions[1].b;
    document.getElementById("opt23").innerHTML = myQuestions[1].c;

    // 3
    document.getElementById("q3").innerHTML = myQuestions[2].question;
    document.getElementById("opt31").innerHTML = myQuestions[2].a;
    document.getElementById("opt32").innerHTML = myQuestions[2].b;
    document.getElementById("opt33").innerHTML = myQuestions[2].c;
    
    //4
    document.getElementById("q4").innerHTML = myQuestions[3].question;
    document.getElementById("opt41").innerHTML = myQuestions[3].a;
    document.getElementById("opt42").innerHTML = myQuestions[3].b;
    document.getElementById("opt43").innerHTML = myQuestions[3].c;
}

function submit(){

   
    console.log("corr")

    // 1
    if (document.getElementById("r11").checked && myQuestions[0].a == myQuestions[0].correctAnswer){
        if (corr < 4){
        corr++;
        console.log(corr)
        }
    }

    // 2
    if (document.getElementById("r22").checked && myQuestions[1].b == myQuestions[1].correctAnswer){
      if (corr < 4){
        corr++;
        console.log(corr)
        }

    }

    // //  3
    if (document.getElementById("r31").checked && myQuestions[2].a == myQuestions[2].correctAnswer){
      if (corr < 4){
        corr++;
        console.log(corr)
        }

    }
    //4
    if (document.getElementById("r41").checked && myQuestions[3].a == myQuestions[3].correctAnswer){
      if (corr < 4){
        corr++;
        console.log(corr)
        }
  }
    document.getElementById('cd').innerHTML=" Your have scored :" + corr + "/4.";

    document.getElementById("result").innerHTML = uname + ", you have scored " + corr + "/4."
    clearInterval(int)
}

const start = 0.5;
let time = start*120;

const cdEle = document.getElementById("cd");
var int = setInterval(updateCD,1000)

function updateCD(){
  const min = Math.floor(time/60);
  let sec = time%60

  sec = sec < 1 ? '0' + sec : sec;

  cdEle.innerHTML = `${min}:${sec} sec`;
  time--;
  if (time < 0){
    submit()
  }
}
