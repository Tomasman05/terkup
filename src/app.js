const radiusInput =document.querySelector("#radius")
const heightInput =document.querySelector("#height")
const areaInput =document.querySelector("#area")
const calcButton =document.querySelector("#calcButton")

calcButton.addEventListener("click",()=>{
    const radius= Number (radiusInput.value)
    const height= Number (heightInput.value)
    let area= (1.0/3) * Math.pow(radius, 2)*Math.PI*height
    areaInput.value=area
})