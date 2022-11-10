let homeScore = document.getElementById("home-score-el");
let awayScore = document.getElementById("away-score-el");

let incrementBy1Btn = document.getElementById("increment-home-1-btn")
let incrementBy2Btn = document.getElementById("increment-home-2-btn")
let incrementBy3Btn = document.getElementById("increment-home-3-btn")

let incrementABy1Btn = document.getElementById("increment-away-1-btn")
let incrementABy2Btn = document.getElementById("increment-away-2-btn")
let incrementABy3Btn = document.getElementById("increment-away-3-btn")

let newGameBtn = document.getElementById("new-game-btn")

function incrementBy(scoreType, value) {
    // console.log(scoreType)
    let score = Number(scoreType.innerHTML)

    score += value
    
    scoreType.innerHTML = score
    
    if (+homeScore.innerHTML > +awayScore.innerHTML) {
        awayScore.classList.remove("winning")
        homeScore.classList.add("winning")
    }
     else {
        homeScore.classList.remove("winning")
        awayScore.classList.add("winning")
    } 
}

// home button
incrementBy1Btn.addEventListener('click', () => {
 incrementBy(homeScore, 1)   
})
incrementBy2Btn.addEventListener('click', () => {
 incrementBy(homeScore, 2)   
})
incrementBy3Btn.addEventListener('click', () => {
 incrementBy(homeScore, 3)   
})
// Away btns
incrementABy1Btn.addEventListener('click', () => {
 incrementBy(awayScore, 1)   
})
incrementABy2Btn.addEventListener('click', () => {
 incrementBy(awayScore, 2)   
})
incrementABy3Btn.addEventListener('click', () => {
 incrementBy(awayScore, 3)   
})

newGameBtn.addEventListener("click", () => {
    homeScore.innerHTML = 0
    awayScore.innerHTML = 0
    awayScore.classList.remove("winning")
     homeScore.classList.remove("winning")
})
