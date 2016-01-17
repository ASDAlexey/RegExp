"use strict";
var str = "http://egghead.io\nnot a web address\nhttp://\nhttps://www.egghead.io";
//.-любой символ
var regex = /https?:\/\/.+/g; //s{0,1} - означает что символ s может как присутствовать так и отсутствовать
var output = function (str, regex, target) {
    target.innerHTML =
        str.replace(regex, function (str) { return ("<span>" + str + "</span>"); });
};
output(str, regex, document.querySelector('pre'));
//# sourceMappingURL=index3.js.map