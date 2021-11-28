let display = document.getElementById('display');
let i = 0;
let typeSpeed = 100;
let waitTime = 800; // for \w


let content = `Hello World/w/w\n\tThis is a simple typing effect.
\t\tHope you will find it useful! :D/w\n
\t\t\tIf you have any suggestions, feel free to make a pull request. Thanks!`;

/*
    \n: next line
    \t: tab
    \b: backspace
    /w: wait
    \`: ` char
*/
async function play() {
    if (i < content.length) {
        let char = content.charAt(i);
        if(char == '\t') char = '&nbsp;&nbsp;&nbsp;&nbsp;';
        if(char == '\n') char = '<br />';
        if(char == '\b') {
            char = '';
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
        }
        if(char == '/' && content.charAt(i + 1) == 'w') {
            char = '';
            i++;
            display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
            await sleep(waitTime/2);
            display.innerHTML += '|';
            await sleep(waitTime/2);
        }
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
        display.innerHTML += char + '|';
        i++;
        setTimeout(play, typeSpeed);
    }
    else if(i == content.length)
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

play();