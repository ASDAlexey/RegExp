"use strict";
var str = "cat mat bat Hat ?at 0at";
//[cb]at - выбрать все тройки у которые начинаются c с или b
//[^cb]at - выбрать все тройки которые не начинаются c с или b и заканчиваются на at
var regex = /[^cb]at/g;
var output = function (str, regex, target) {
    target.innerHTML =
        str.replace(regex, function (str) { return ("<span>" + str + "</span>"); });
};
output(str, regex, document.querySelector('pre'));
//# sourceMappingURL=index5.js.map