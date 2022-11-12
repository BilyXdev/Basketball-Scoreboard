let homeScore = document.getElementById("home-scr")
let btn1H = document.getElementById("btn1H")
let btn2H = document.getElementById("btn2H")
let btn3H = document.getElementById("btn3H")
let leaderH = document.getElementById("leader-Hm")
let leaderG = document.getElementById("leader-Gst")

let guestScore = document.getElementById("guest-scr")
let btn1G = document.getElementById("btn1G")
let btn2G = document.getElementById("btn2G")
let btn3G = document.getElementById("btn3G")

let countH = 0
let countG = 0

btn1H.addEventListener("click",function addOnePoint() {
    countH += 1
    homeScore.textContent = countH
    itsLeader()
})
btn2H.addEventListener("click",function addTwoPoints() {
    countH += 2
    homeScore.textContent = countH
    itsLeader()
})
btn3H.addEventListener("click",function addThreePoints() {
    countH += 3
    homeScore.textContent = countH
    itsLeader()
})

btn1G.addEventListener("click",function addOnePoint() {
    countG += 1
    guestScore.textContent = countG
    itsLeader()
})
btn2G.addEventListener("click",function addTwoPoints() {
    countG += 2
    guestScore.textContent = countG
    itsLeader()
})
btn3G.addEventListener("click",function addThreePoints() {
    countG += 3
    guestScore.textContent = countG
    itsLeader()
})

function itsLeader() {
    if (countH > countG) {
        homeScore.style.color ="skyblue"
        leaderG.textContent = ""
        leaderH.textContent = "Leader"
        guestScore.style.color ="#F94F6D"
    } else if (countG > countH) {
        guestScore.style.color = "yellow"
        leaderH.textContent = ""
        leaderG.textContent = "Leader"
        homeScore.style.color ="#F94F6D"
    } else {
        homeScore.style.color ="#F94F6D"
        guestScore.style.color ="#F94F6D"
        leaderH.textContent = ""
        leaderG.textContent = ""
    }
}

let newGamebtn = document.getElementById("newGame")

newGamebtn.addEventListener("click",function resetScore() {
    countG -= countG
    guestScore.textContent = countG
    guestScore.style.color ="#F94F6D"
    countH -= countH
    homeScore.textContent = countH
    homeScore.style.color ="#F94F6D"
    leaderG.textContent = ""
    leaderH.textContent = ""
})