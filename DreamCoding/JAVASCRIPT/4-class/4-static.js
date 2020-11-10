// 4. Static properties and methods
// Too soon!
// object 에 상관없이 공통적으로 class에서 써야 할때 static을 사용
// 메모리 사용을 줄여줄 수 있음
class Article {
    static publisher = 'Codingski';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();