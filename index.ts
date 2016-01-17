"use strict";

const output = (str, regex, target)=> {
    target.innerHTML =
        str.replace(regex, str=>`<span>${str}</span>`)
};


let result;
let str = `Is this This`;

//let regex = new RegExp("is");
let regex = /is/gi;

//result=regex.test(str);//true/false
//result=regex.exec(str);//["is", index: 5, input: "Is this This"]

//result=str.match(regex);//["Is", "is", "is"]
//result = str.replace(regex, str => `XX`);//XX thXX ThXX
result = str.search(regex);//enter index first find //0
console.log(result);
output(str, regex, document.querySelector('pre'));
