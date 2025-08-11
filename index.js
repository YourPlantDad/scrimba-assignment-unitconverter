/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
inputEl.value = 2
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let converted = {
    meter: 0,
    feet: 0,
    liter: 0,
    gallon: 0,
    kilogram: 0,
    pound: 0
}

const conversionrate = {
    length: 3.281,
    volume: 0.264,
    mass: 2.204
}

function calculateConversions(number) {
    converted.meter     = number / conversionrate.length
    converted.feet      = number * conversionrate.length
    
    converted.liter     = number / conversionrate.volume
    converted.gallon    = number * conversionrate.volume
    
    converted.kilogram = number / conversionrate.mass
    converted.pound     = number * conversionrate.mass
}

function render() {
    lengthEl.innerText = `${inputEl.value} meter = ${converted.feet.toFixed(3)} feet | ${inputEl.value} feet = ${converted.meter.toFixed(3)} meter`
    volumeEl.innerText = `${inputEl.value} liter = ${converted.gallon.toFixed(3)} gallon | ${inputEl.value} gallon = ${converted.liter.toFixed(3)} liter`
    massEl.innerText = `${inputEl.value} kilo = ${converted.pound.toFixed(3)} pound | ${inputEl.value} pound = ${converted.kilogram.toFixed(3)} kilo`
}

convertBtn.addEventListener("click", function() {
        calculateConversions(inputEl.value)
        render()
})

calculateConversions(inputEl.value)
render()