const Palindrome = str => {

    // remove all Alphanumeric : Alphanumeric :- A to Z & 0-9
    str = str.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();

    console.log(str, str.length)
    let start = 0, end = str.length-1;

    while (start < end) { // Two Pointers TECH.
        if(str[start] !== str[end]) return false;

        start++
        end--
    }
    return true;

    

}
console.log("Palindrome  ===> ", Palindrome("A man, a plan, a canal: Panama"));