// 3. Fields (public, private)
// Too soon!
//  privateField는 클래스 내부에서만 값이 보여지고, 접근이 되고, 변경이 가능하지만
// class 외부에서는 값을 읽을 수도, 변경할 수도 없음.
// 최근에 나온것이어서 잘 쓰여지지 않음
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();

console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined