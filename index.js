"use strict";
var output = function (str, regex, target) {
    target.innerHTML =
        str.replace(regex, function (str) { return ("<span>" + str + "</span>"); });
};
var result;
var str = "Is this This";
//let regex = new RegExp("is");
var regex = /is/gi;
//result=regex.test(str);//true/false
//result=regex.exec(str);//["is", index: 5, input: "Is this This"]
//result=str.match(regex);//["Is", "is", "is"]
//result = str.replace(regex, str => `XX`);//XX thXX ThXX
result = str.search(regex); //enter index first find //0
console.log(result);
output(str, regex, document.querySelector('pre'));
//# sourceMappingURL=index.js.map