const title = document.querySelector(".turn")
let turn = 'x'
function game(id){
    let b = document.getElementById(id);
    if( turn === 'x' && b.innerText === ''){
        b.innerText = 'X'
        turn='o'
        b.style.backgroundColor= "rgb(36, 135, 222)"
        title.innerText = "O Turn"
    }else if(turn === 'o' && b.innerText === ''){
        b.innerText = 'o'
        turn='x'
        b.style.backgroundColor= "rgb(14, 196, 44)"
        title.innerText = "X Turn"
    }
    arbitration()
}
let butns = []
arbitration = () =>{
    for (i=1 ; i<10 ; i++){
        butns[i] = document.getElementById("square" + i).innerText
    }
    if(butns[1] === butns[2] && butns[2] === butns[3] && butns[1] !='' ){
        title.innerText = (butns[1]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[4] === butns[5] && butns[5] === butns[6] && butns[4] !='' ){
        title.innerText = (butns[4]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[7] === butns[8] && butns[8] === butns[9] && butns[7] !='' ){
        title.innerText = (butns[7]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[1] === butns[4] && butns[4] === butns[7] && butns[1] !='' ){
        title.innerText = (butns[1]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[2] === butns[5] && butns[5] === butns[8] && butns[2] !='' ){
        title.innerText = (butns[2]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[3] === butns[6] && butns[6] === butns[9] && butns[3] !='' ){
        title.innerText = (butns[3]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[1] === butns[5] && butns[5] === butns[9] && butns[1] !='' ){
        title.innerText = (butns[1]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    if(butns[3] === butns[5] && butns[5] === butns[7] && butns[3] !='' ){
        title.innerText = (butns[3]+" Winner")
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
    else if(butns[1] != '' && butns[2] != '' && butns[3] != '' && butns[4] != '' && butns[5] != '' && butns[6] != '' && butns[7] != '' && butns[8] != '' && butns[9] != '' )
    {
        title.innerText = "There is no winner";
        setInterval(function(){title.innerText += "."} , 1000)
        setTimeout(function(){location.reload() }, 4000)
    }
}
