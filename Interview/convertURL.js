var getAbsoluteUrl = (function() {
    let a;
    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;

        return a.href;
    };
})();

console.log("getAbsoluteURL",getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', 'test')) //=> https://vwo.com/ecommerce-ab-testing/test
console.log("getAbsoluteURL",getAbsoluteUrl('https://vwo.com?q=hello'))   //=> https://vwo.com/?q=hello"

console.log("getAbsoluteURL",getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', '../test'))  //=> https://vwo.com/test
console.log("getAbsoluteURL",getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', '//google.com'))  //=> https://google.com
console.log("getAbsoluteURL",getAbsoluteUrl(document.baseURI, 'test'))   //=> https://vwo.com/test (Assuming you are running this function on https://vwo.com)
