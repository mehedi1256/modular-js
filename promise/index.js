const promise_obj = new Promise((resolve, reject) => {
    if (true) {
        resolve('Promise Success');
    } else {
        reject('Promise Failed');
    }
});

console.log(
    promise_obj
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
        .finally((a=10) => console.log(`Promise finished ${a}`))
);