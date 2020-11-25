class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                resolve(id);
            } else {
                reject(new Error('WRONG'));
            }
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            if(user === 'ellie') {
                resolve({name: 'ellie', role: 'admin'});
            } else {
                reject(new Error('Fucking Wrong'));
            }
        })
    }
}


const userStorage = new UserStorage();
const id = prompt('Enter Your ID');
const password = prompt('Enter Your PASSWORD');

userStorage.loginUser(id, password)
    .then(user => userStorage.getRoles(user))
    .then(user => alert(`Hello ${user.name} you have a ${user.role}`))
    .catch(console.log);
    