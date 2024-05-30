const uname = document.getElementById("user-name")
const btn = document.getElementById("btn")

const my_name = document.getElementById("update-name")


btn.addEventListener("click", () => {
  localStorage.setItem("user", uname.value)
  console.log(`${uname.value} is stored in Local storage now.`)
  location.reload()
}
)


window.addEventListener("load", () => {
    const local_stroage_user = localStorage.getItem("user")
    my_name.innerText= local_stroage_user
})





