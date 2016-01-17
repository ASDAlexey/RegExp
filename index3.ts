"use strict";
let str = `http://egghead.io
not a web address
http://
https://www.egghead.io`;
//.-любой символ
let regex = /https?:\/\/.+/g;//s{0,1} - означает что символ s может как присутствовать так и отсутствовать
const output = (str, regex, target)=> {
    target.innerHTML =
        str.replace(regex, str=>`<span>${str}</span>`)
};
output(str, regex, document.querySelector('pre'));
