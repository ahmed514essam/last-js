import addLocal from "./production.js"
var inpro = document.querySelector(".ol-pro")
var inpri = document.querySelector(".ol-pri")
var addPtn = document.querySelector(".ptn")
var ax = document.querySelector(".btn")

function show() {
    if (localStorage.length) {

        for (let [key, value] of Object.entries(localStorage)) {

            document.querySelector(".add").innerHTML += `

    <div class="two">
   
   <span class="oo">${key}</span>
   <span class="oo">${value}</span>
   <button class="btn">X</button>
   
   </div> 
   
   ` ;
        }
    } else {
        alert("Enter Your product")
    }
}

function dell() {
    localStorage.removeItem(key, value)
}


// ========================================================================

addPtn.addEventListener("click", () => {

    addLocal(inpro.value, inpri.value)
    show()

    document.querySelector(".footer").innerHTML += `    <span>Total Price : ${inpri.value} </span>`

})

ax.addEventListener("click", () => {
    dell()
})













