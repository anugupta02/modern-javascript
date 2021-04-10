(function (a, b, c) {
    console.log(Boolean([...arguments].slice(2, 3)[0].slice(3, 4)));
})("hello", "world", "india");
