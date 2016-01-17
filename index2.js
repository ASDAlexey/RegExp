"use strict";
var str = "Cat\nsat on\nthe hat";
var regex = /../g; //fild two any symbols without line break
var output = function (str, regex, target) {
    target.innerHTML =
        str.replace(regex, function (str) { return ("<span>" + str + "</span>"); });
};
output(str, regex, document.querySelector('pre'));
//# sourceMappingURL=index2.js.map