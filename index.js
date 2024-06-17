//Home Score Variable
hScore = document.getElementById("hScore")
htt = 0
hScore.textContent = 00
//Away Score Variable
aScore = document.getElementById("aScore")
att = 0
aScore.textContent = 00
//functional variable
function hScoreAdd(int){
    htt += int
    console.log("Home Score: " + htt)
    hScore.textContent = htt
}
function hScoreReset(){
   console.log("Home Score Reset | " + "Last Score: " + htt)
    htt = 0
    hScore.textContent = htt
}
function aScoreAdd(int){
    att += int
    console.log("Away Score: " + att)
    aScore.textContent = att
}
function aScoreReset(){
    console.log("Away Score Reset | " + "Last Score: " + att)
    att = 0
    aScore.textContent = att
}