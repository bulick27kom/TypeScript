var fetchData = function (url, method) {
    console.log(method);
};
// const requestOptions: { url: string; method: 'GET' | 'POST' } = {
//     url: 'https://someurl.com',
//     method: 'GET',
// };
// const requestOptions = {
//     url: 'https://someurl.com',
//     method: 'GET' as "GET",
// };
// const requestOptions = {
//   url: 'https://someurl.com',
//   method: 'GET' as "GET",
// } as const;
var requestOptions = {
    url: 'https://someurl.com',
    method: 'GET',
};
fetchData('111', 'GET');
//fetchData(requestOptions.url, requestOptions.method as 'GET');
//fetchData(requestOptions.url, requestOptions.method );
fetchData(requestOptions.url, requestOptions.method);
var box = document.querySelector('.box');
box.style;
box === null || box === void 0 ? void 0 : box.classList;
var input = document.querySelector('input');
var someNumber = input.value;
console.log(someNumber * 2);
