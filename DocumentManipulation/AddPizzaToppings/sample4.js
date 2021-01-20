/**
 *  File            :   sample4.js
 *  Project         :   None
 *  Programmer      :   Braiden Gole
 *  First version   :   2021-01-20
 *  Description     :   This is sample 4 for Javascript.
 * 
 *      Your are to CLICK THE BUTTON not | ENTER | !
 */

var listOfToppings = []
var toppingsIter = 0
var unpack = 0

/**     -- Function header comment
 *  Function        :   addToppings
 *  Description     :   This function will add one topping at a time
 *                      and then insert it into the container.
 *  Parameters      :   None
 *  Returns         :   None
 */
function addTopping() {
    var value = $("#toppings").val()
    listOfToppings[toppingsIter] = value
    
    // Insert the newly entered value into the document.
    insertToppingToDoc(listOfToppings)
    ++toppingsIter

    // Clear the form field.
    $("#toppings").val("")
}

/**     -- Function header comment
 *  Function        :   insertToppingToDoc
 *  Description     :   This function will take in an entry and insert the
 *                      entry into the container to fill.
 *  Parameters      :   list
 *  Returns         :   None
 */
function insertToppingToDoc(list) {
    var parentCreation = document.createElement("p")
    var newNode = document.createTextNode(list[unpack])
    parentCreation.appendChild(newNode)

    var containerToFill = document.getElementById("fillWithData")
    containerToFill.appendChild(parentCreation)
    ++unpack
}
