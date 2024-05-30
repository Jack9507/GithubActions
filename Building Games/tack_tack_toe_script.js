let currentPLayer = "X"

for (let i = 0; i < 9; i++) {
    const cell = document.getElementById(`cell${i}`)
    cell.addEventListener("click", ()=>{
        console.log(cell.id)
        // console.log(cell.innerText=="")
        if(cell.innerText==""){
            cell.innerText = currentPLayer
            currentPLayer = currentPLayer=="X" ? "O": "X";
            checkforWin(currentPLayer)
        }
    })

}
function checkforWin(currentPLayer){
    const cell0txt = document.getElementById("cell0")
    const cell1txt = document.getElementById("cell1")
    const cell2txt = document.getElementById("cell2")
    const cell3txt = document.getElementById("cell3")
    const cell4txt = document.getElementById("cell4")
    const cell5txt = document.getElementById("cell5")
    const cell6txt = document.getElementById("cell6")
    const cell7txt = document.getElementById("cell7")
    const cell8txt = document.getElementById("cell8")
    
    if( cell0txt.innerText !="" && cell1txt.innerText != "" && cell2txt.innerText !="" && cell0txt.innerText == cell1txt.innerText && cell1txt.innerText == cell2txt.innerText ||
        cell3txt.innerText !="" && cell4txt.innerText != "" && cell5txt.innerText !="" && cell3txt.innerText == cell4txt.innerText && cell4txt.innerText == cell5txt.innerText ||
        cell6txt.innerText !="" && cell7txt.innerText != "" && cell8txt.innerText !="" &&  cell6txt.innerText == cell7txt.innerText && cell7txt.innerText == cell8txt.innerText ||
        cell0txt.innerText !="" && cell3txt.innerText != "" && cell6txt.innerText !="" &&  cell0txt.innerText == cell3txt.innerText && cell3txt.innerText == cell6txt.innerText ||
        cell1txt.innerText !="" && cell4txt.innerText != "" && cell7txt.innerText !="" &&   cell1txt.innerText == cell4txt.innerText && cell4txt.innerText == cell7txt.innerText ||
        cell2txt.innerText !="" && cell5txt.innerText != "" && cell8txt.innerText !="" &&   cell2txt.innerText == cell5txt.innerText && cell5txt.innerText == cell8txt.innerText ||
        cell0txt.innerText !="" && cell4txt.innerText != "" && cell8txt.innerText !="" &&   cell0txt.innerText == cell4txt.innerText && cell4txt.innerText == cell8txt.innerText ||
        cell2txt.innerText !="" && cell4txt.innerText != "" && cell6txt.innerText !="" &&   cell2txt.innerText == cell4txt.innerText && cell4txt.innerText == cell6txt.innerText
    ) {
        winner = currentPLayer;
        winner = winner=="X" ? "O": "X";
        console.log(`${winner} Won`) 
        return document.body.innerHTML=`${winner}<h1> YOU WON</h1>`
    }
    


}