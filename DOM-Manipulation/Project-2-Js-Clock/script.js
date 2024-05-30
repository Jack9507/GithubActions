function getTime() {
    const mytime = new Date();
    console.log(mytime)
    const extracted_time= `${mytime.getHours()}:${mytime.getMinutes()}:${mytime.getSeconds()}`

    const dom1 = document.getElementById("time")
    dom1.innerText = extracted_time
}

getTime()
// setTimeout(() => {
// console.log("after 2 sec's")    
// }, 2000);

// let interval = setInterval(getTime, 1000)

// const mybtn = document.getElementById("stop")
// mybtn.addEventListener("click", () => {
//     clearInterval(interval)
// })

const time_from_user = document.getElementById("usertime")
const start_btn = document.getElementById("start")
const stop_btn = document.getElementById("stop")
let intervalid

start_btn.addEventListener("click", starttime)
stop_btn.addEventListener("click", stoptime)

function starttime(){
    console.log(time_from_user.value)
    intervalid= setInterval(task, 1000)
    // setInterval(() => {console.log(time_from_user)},1000);
    // time_from_user = time_from_user -1;
}

function task(){
    time_from_user.value--
}

function stoptime(){
    clearInterval(intervalid)
    time_from_user.value = 10
}