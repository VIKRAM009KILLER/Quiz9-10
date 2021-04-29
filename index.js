var user = document.getElementById("user")

var sibtn = document.getElementById("sibtn")
  
    sibtn.onclick = function(){
        var corr = 0
        localStorage.setItem("correctness", corr);
        localStorage.clear()
        var name = user.value;
        
        if (name==""){
            alert("Required details are missing")
            location.reload()
        }
        else {
            console.log(name)
            alert("Best of luck!!! " + name)
            window.open("http://127.0.0.1:5500/quiz.html", "_self")
        }
        localStorage.setItem("user", name)
       
        console.log(localStorage)
        console.log(name)
    }