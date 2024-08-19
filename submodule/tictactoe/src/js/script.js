let vezDoX = true
let crossState = []
let naughtState = []

let table = ["", "", "", "", "", "", "", "", ""]

const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

function getEl(element){
    return document.querySelector(element);
}

function getAllEl(element){
    return document.querySelectorAll(element);
}

function changePiece(position){
    let el = getAllEl(".game--column")[position]

    if(!el.classList.contains("cross") && !el.classList.contains("naught")){
        el.classList.add(vezDoX?"cross":"naught")
        getEl("#game--turn").innerText = vezDoX?"vez do O":"vez do X"
        vezDoX?crossState.push(position):naughtState.push(position)
        activeDangerAnimation()
        vezDoX?crossVerify():naughtVerify()
        table[position] = vezDoX?"x":"o"
        
        if(winVerify()){
            getEl("body").innerHTML = `<div id="ganhou"></div>`
            getEl("#ganhou").innerText += vezDoX?"X ganhou":"O ganhou"
            getEl("#ganhou").innerHTML += `<button onclick="window.location.reload()">resetar</button>`
        }
        
        vezDoX = !vezDoX
    }    
}

function crossVerify(){
    if(crossState.length > 3){
        getAllEl(".game--column")[crossState[0]].classList.remove("cross")
        table[crossState[0]] = ""
        crossState.shift()
    }
}

function naughtVerify(){
    if(naughtState.length > 3){
        getAllEl(".game--column")[naughtState[0]].classList.remove("naught")
        table[naughtState[0]] = ""
        naughtState.shift()
    }
}



function activeDangerAnimation(){
    let el = getAllEl(".game--column")
    if(!vezDoX && crossState.length == 3){
        el[naughtState[0]].classList.remove("danger")
        el[crossState[0]].classList.add("danger")

        return
    }else if(vezDoX && naughtState.length == 3){
        el[crossState[0]].classList.remove("danger")
        el[naughtState[0]].classList.add("danger")

        return
    }
}

function winVerify(){
    
    for(z of wins){
        let [a,b,c] = z
        if(table[a] !== "" && table[a] === table[b] && table[a] === table[c]){
            return true
        }
    }
}