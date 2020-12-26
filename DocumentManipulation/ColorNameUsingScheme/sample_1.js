/**
 *  File            :   sample_1.js
 *  Project         :   None
 *  Programmer      :   Braiden Gole
 *  First version   :   2020-12-26
 *  Description     :   This is a small sample of simple document manipulation.
 *                      using a external javascript file.
 * 
 * [SOURCE]: Created a color scheme using: https://coolors.co
 */

// This function will generate the random color from the list of colors in the
// scheme of colors.
function color_scheme_randomization() {
    const hash = '#'
    const hex_scheme_colors = ["1F363D", "40798C", "70A9A1", "9EC1A3", "CFE0C3"]
    const LENGTHOFSCHEME = hex_scheme_colors.length
    var calculate_random_index = Math.floor(Math.random() * (LENGTHOFSCHEME))
    var create_code = hash + hex_scheme_colors[calculate_random_index]
    const HEXCODE = create_code
    return HEXCODE
}

// This function will set the color first instancec of "braiden_gole" applied to a
// widget as a class such as a <h1 class="braiden_gole">Braiden Gole</h1>.
function calling_interface() {
    setInterval(function set_color() {
        var random_color_in_scheme = color_scheme_randomization()
        var braiden = document.getElementsByClassName("braiden_gole")[0]
        braiden.style.color = random_color_in_scheme
    }, 300)
}

// Call the interface that will fire the function.
calling_interface()

