var calc = document.getElementsByClassName("button")[0]

var q1 = document.getElementById("billAmount")
var q2 = document.getElementById("select")
var q3 = document.getElementById("numsOfPeople")
var main = document.getElementById("main")

calc.addEventListener("click", submit)

function submit(){
    if (calc.children[0].textContent == "Calculate!") {

        if(allCheck() == false){
            alert("Please enter value accordingly")
            return 0;
        }

        var ans = ((q1.value/100.0)*(q2.value/q3.value)).toFixed(2)

        calc.children[0].textContent = "Re-calculate!"
        
        var answer = document.createElement("div")
        answer.className = "q4"
        answer.innerHTML =  `<h2 class="text-one">Your Tip share is <span class="ans">$${ans}</span>.</h2>`
        main.append(answer);
    } else {
        calc.children[0].textContent = "Calculate!"
        main.children[4].remove()
        q1.value = ""
        q2.value = 0
        q3.value = ""
        calc.style.background = "none"
        calc.style.color = "white"
    }

}

function allCheck(){
    if ((q1.value == "") || (q2.value == 0) || (q3.value == "")){
        return false
    }
    return true
}
