function printMessage(mes) {
    if (Array.isArray(mes)) {
        mes.forEach(function (element) {
            console.log(element);
        });
    }
    else if (typeof mes === 'number') {
        console.log(mes.toFixed());
    }
    else {
        console.log(mes);
    }
}
printMessage(4);
var box = document.querySelector('.box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () { });
