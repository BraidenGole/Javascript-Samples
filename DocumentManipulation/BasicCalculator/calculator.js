/**
 *  File            :   calculator.js
 *  Project         :   None
 *  Programmer      :   Braiden Gole
 *  First version   :   2021-02-19
 *  Description     :   This is a basic calculator in Javascript.
 */
const CLICKEVENT = "click"
const ONE = 1

var firstNumber = 0
var nextNumber = 0

var operation = ""
var displayCounter = 0

$("#screenLabel").html("0")

function clearScreen() {
    $("#screenLabel").html("")
}

function clearEntry() {
    var screenVal = document.getElementById("screenLabel").innerHTML
    screenVal = screenVal.slice(0, -1)
    $("#screenLabel").html(`${screenVal}`)
}

function mod() {
    var result = firstNumber % nextNumber
    console.log(result)
    $("#screenLabel").html(`${result}`)
}

function divide() {
    var result = firstNumber / nextNumber
    console.log(result)
    $("#screenLabel").html(`${result}`)
}

function multiply() {
    var result = firstNumber * nextNumber
    console.log(result)
    $("#screenLabel").html(`${result}`)
}

function subtract() {
    var result = firstNumber - nextNumber
    console.log(result)
    $("#screenLabel").html(`${result}`)
    return nextNumber - firstNumber
}

function add() {
    var result = firstNumber + nextNumber
    console.log(result)
    var x = document.getElementById("screenLabel")
    x.innerHTML = result
}

$(".circle").on(CLICKEVENT, function() {

    // Get the screen value then clear the screen and enter in the next number.
    firstNumber = $("#screenLabel").html()
    firstNumber = parseFloat(firstNumber)

    // Gather the operation.
    var value = $(this).val()
    operation = value

    $("#screenLabel").append(`${operation}`)
})

$(".circle2").on(CLICKEVENT, function() {
    if (displayCounter < ONE)
    {   
        $("#screenLabel").html("")
    }

    var value = $(this).val()
    nextNumber = parseFloat(value)
    $("#screenLabel").append(value)
    ++displayCounter
})

function equate() {
    switch (operation) {
        case "%":
            mod()
            break;
        case "/":
            divide()
            break;
        case "x":
            multiply()
            break;
        case "-":
            subtract()
            break;
        case "+":
            add()
            break;
    }
}
