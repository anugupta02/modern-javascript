const helloPromise  = function() {
    return new Promise(function(resolve, reject) {
        const message = `Hi, How are you!`;

        resolve(message)
    });
}

const demoPromise= function() {

    myFirstPromise
        .then(helloPromise)
        .then((successMsg) => {
            console.log("Success:" + successMsg);
        })
        .catch((errorMsg) => {
            console.log("Error:" + errorMsg);
        })
}

demoPromise();
