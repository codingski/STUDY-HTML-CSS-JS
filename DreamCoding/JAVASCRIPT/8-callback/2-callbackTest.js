// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);

    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000)

    }
}


// 1. 사용자에게 id와 ps 를 입력받음
// 2. 서버에게 login
// 3. 로그인이 성공적으로 된다면 로그인한 사용자의 아이디를 다시 받아옴
// 4. 이 받아온 아이디를 이용해서 role을 요청해서 다시 받아옴
// 5. 역할이 성공적으로 받아와진다면 우리에게는 사용자의 object가 출력될거임


const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole}, you have a ${userWithRole} role`);
            },
            error => {
                console.log(error);
            }
            );
    },
    error => {console.log(error)})

    // onSuccess(user)

    //콜벡함수에 매개변수를 담아 돌려 줄 때 오브젝트의 변수명을
    //지정하지 않아도 되고 전달된 오브젝트는
    //그냥 함수명을 이용해 출력하는 것도 익숙치 않아서 받아들이기 어려웠네요 

    function onSuccess (name) {
        userStorage.getRoles(name)
    }