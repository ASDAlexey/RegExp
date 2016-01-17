"use strict";
let str = `cat mat bat Hat ?at 0at`;
//[cb]at - выбрать все тройки у которые начинаются c с или b
//[^cb]at - выбрать все тройки которые не начинаются c с или b и заканчиваются на at
let regex = /[^cb]at/g;
const output = (str, regex, target)=> {
    target.innerHTML =
        str.replace(regex, str=>`<span>${str}</span>`)
};
output(str, regex, document.querySelector('pre'));
