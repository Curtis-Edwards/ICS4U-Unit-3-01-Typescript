/*
* This program.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-04-23
*/

function reverseString(stringToReverse: string): string {
    /*
    * This function reverses a string, using recursion
    * @param accepts a string
    * @return the string backwards, using recursion
    */
    if (stringToReverse === "") {
        return ""
    } else {
        let firstCharacterOfString: string = stringToReverse[0]
        let restOfString: string = stringToReverse.slice(1)
        
        return reverseString(restOfString) + firstCharacterOfString
    }
}

let aString = "recusrsion"

console.log(`\nThe original string is: ${aString}`)
let theReverseString = reverseString(aString)
console.log(`The reversed string is: ${theReverseString}`)

console.log(`\nDone.`)