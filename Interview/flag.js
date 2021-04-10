(function (flag) {
    let age = Boolean(NaN === NaN ? false : flag);
    console.log(age.toString()[Number(flag)]);
})([]);
