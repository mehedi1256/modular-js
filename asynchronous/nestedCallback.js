function task(name, duration, callback) {
    console.log(`${name} started`);
    setTimeout(()=>{
        console.log(`${name} completed`);
        callback();
    }, duration);

    console.log(`${name} ended`);
}

task('task 1', 1000, ()=>{
    task('task 2', 1000, ()=> {
        task('task 3', 1000, ()=> {
            console.log('all task completed');
        })
    });
});