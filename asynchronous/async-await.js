async function printMsg() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('Promise resolved');
        }, 2000);
    });

    let result = await promise;
    console.log(result);

    console.log('Code execution finished.');
}

printMsg();
console.log('Code execution started.');

/* class Animal {
    async catName() {
        return await 'Cat';
    }
}

const cat_obj = new Animal();
cat_obj.catName().then((result) => console.log(result)); */