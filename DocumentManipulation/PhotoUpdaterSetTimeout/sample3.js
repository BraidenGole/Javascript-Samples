/**
 *  File            :   sample3.js
 *  Project         :   None
 *  Programmer      :   Braiden Gole
 *  First version   :   2021-01-20
 *  Description     :   This is sample 3 for Javascript.
 * 
 *                  This is just a photo updater and the container is
 *                  designed like a carousel just for fun.
 */

/**     -- Function header comment
 *  Function        :   photoUpdater
 *  Description     :   This is a photo updater that will update the
 *                      carousel.
 *  Paraemters      :   None
 *  Returns         :   None
 */
function photoUpdater(incrementVar) {
    const ONE = 1
    const DOT = '.'
    const FIXEDIMGNAME = "Mario_"
    const DIRECTORY = "images/"
    const EXTENSION = "jpg"

    var objToUpdate = $("main")
    var nextImage = incrementVar
    var generateImage = ""

    var update = generateImage.concat(DIRECTORY, FIXEDIMGNAME, (nextImage + ONE), DOT, EXTENSION);
    ++eachPhoto;

    objToUpdate.css({"background-image": `url(${update})`})
    console.log(update)
}

// How long before the picture updates.
const LENGTH = 5
const DELAY = 2000

var eachPhoto = 0
for (var replacePhotos = 0; replacePhotos < LENGTH; replacePhotos++) {
    setTimeout(function() {
        photoUpdater(eachPhoto)
    }, DELAY * replacePhotos)
}