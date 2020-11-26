// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    return 'haha'
    // do network request in 10 sec...
}


const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
