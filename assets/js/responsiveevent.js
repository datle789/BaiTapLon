const subnavMobile1 = document.querySelector(".subnav-1-mobile")
const iconDown1 = document.querySelector(".icon-down-1")
const iconUp1 = document.querySelector(".icon-up-1")
const subnavIcon=document.querySelector(".subnav-div-icon")

iconDown1.addEventListener("click",()=>{
    iconDown1.classList.add('disable')
    iconUp1.classList.remove('disable')
    subnavMobile1.classList.add('open')
})

iconUp1.addEventListener("click", () =>{
    iconDown1.classList.remove('disable')
    iconUp1.classList.add('disable')
    subnavMobile1.classList.remove('open')
})





const subnavMobile2 = document.querySelector(".subnav-2-mobile")
const iconDown2 = document.querySelector(".icon-down-2")
const iconUp2 = document.querySelector(".icon-up-2")

iconDown2.addEventListener("click",()=>{
    iconDown2.classList.add('disable')
    iconUp2.classList.remove('disable')
    subnavMobile2.classList.add('open')
})

iconUp2.addEventListener("click", () =>{
    iconDown2.classList.remove('disable')
    iconUp2.classList.add('disable')
    subnavMobile2.classList.remove('open')
})



const subnavMobile3 = document.querySelector(".subnav-3-mobile")
const iconDown3 = document.querySelector(".icon-down-3")
const iconUp3 = document.querySelector(".icon-up-3")

iconDown3.addEventListener("click",()=>{
    iconDown3.classList.add('disable')
    iconUp3.classList.remove('disable')
    subnavMobile3.classList.add('open')
})

iconUp3.addEventListener("click", () =>{
    iconDown3.classList.remove('disable')
    iconUp3.classList.add('disable')
    subnavMobile3.classList.remove('open')
})



const subnavMobile4 = document.querySelector(".subnav-4-mobile")
const iconDown4 = document.querySelector(".icon-down-4")
const iconUp4 = document.querySelector(".icon-up-4")

iconDown4.addEventListener("click",()=>{
    iconDown4.classList.add('disable')
    iconUp4.classList.remove('disable')
    subnavMobile4.classList.add('open')
})

iconUp4.addEventListener("click", () =>{
    iconDown4.classList.remove('disable')
    iconUp4.classList.add('disable')
    subnavMobile4.classList.remove('open')
})
