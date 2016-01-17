"use strict";
let str = `Cat
sat on
the hat`;
let regex = /../g;//fild two any symbols without line break
const output = (str, regex, target)=> {
    target.innerHTML =
        str.replace(regex, str=>`<span>${str}</span>`)
};
output(str, regex, document.querySelector('pre'));
