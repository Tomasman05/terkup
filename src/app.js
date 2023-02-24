/*
* File: app.js
* Author: Vitovszki Tamás
* Copyright: 2023, Vitovszki Tamás
* Group: Szoft V
* Date: 2023-02-23
* Github: https://github.com/Tomasman05
* Licenc: GNU GPL
*/
const radiusInput =document.querySelector("#radius")
const heightInput =document.querySelector("#height")
const areaInput =document.querySelector("#area")
const calcButton =document.querySelector("#calcButton")
const result =document.querySelector("#result")
calcButton.addEventListener("click",()=>{
    const radius= Number (radiusInput.value)
    const height= Number (heightInput.value)
    let area= (1.0/3) * Math.pow(radius, 2)*Math.PI*height
    areaInput.value=area
    result.style.display="block"
})