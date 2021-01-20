/**
 * File             :   sample2.js
 * Project          :   None
 * Programmer       :   Braiden Gole
 * First version    :   2021-01-18
 * Description      :   This is sample 2 for javascript. This sample will contain a introductory
 *                      function where we click the button on the page type in {first} {last}
 *                      name and it will display underlined.                    
 */

/**     -- Function header comment
 *  Function        :   introduction
 *  Description     :   This function will introduce the user that visits the page and runs
 *                      the script.
 *  Parameters      :   None
 *  Returns         :   None
 */
function introduction() {
    var name = prompt("Name: ")
    var lastName = prompt("Last name: ")
    const textDec = "text-decoration:underline;"
    document.write(`<h1>Welcome <span style='${textDec}'>${name} ${lastName}</span></h1>`)
    document.write("<h2>Please refresh your page and enter into the text field.</h2>")
}

/**     -- Function header comments
 *  Function        :   onScreenCount
 *  Description     :   This is a remainder counter for how many character
 *                      do we have remaining for our phone number field.
 *  Parameters      :   None
 *  Returns         :   None
 */
function onScreenCount() {
    var input = $("#mobile").on("keyup", function() {
        var countDown = 18
        var remaining = countDown - input.val().length
        $("#sample").html("<h6 style='font-size: 120%; margin-left: 30px;'>Remaining: " + remaining + "</h6>")
    })
}

/**     -- Function header comments
 *  Function        :   onTypeFormatter
 *  Description     :   This will adjust the format of the phone number as the
 *                      user types to ensure data will be entered in correctly and
 *                      consistantly.
 *  Parameters      :   None
 *  Returns         :   None
 */
function onTypeFormatter() {
    // Dont let the user submit the form until charater length has been met.
    $(".submitForm").attr("disabled", true)
    $("#mobile").on("keyup", function() {
        const REGEX = "/\D/g"
        const REPLACEVAL = ""
        const OPENBRACE = '('
        const CLOSEDBRACE = ") - "
        const DASH = " - "

        const MOBILELENGTH = $(this).val().length
        var phone = $(this).val().replace(REGEX, REPLACEVAL)

        if (MOBILELENGTH === 0) {
            phone = phone
        }
        else if (MOBILELENGTH === 1)
        {
            phone = OPENBRACE.concat(phone)
        }
        else if (MOBILELENGTH === 4) {
            phone = phone.concat(CLOSEDBRACE)
        }
        else if (MOBILELENGTH === 11)
        {
            phone = phone.concat(DASH)
        }

        // Assign the new value to the phone number.
        if (MOBILELENGTH === 18)
        {
            $(".submitForm").removeAttr("disabled")
        }
        $(this).val(phone)
    })
}
onScreenCount()
onTypeFormatter()
