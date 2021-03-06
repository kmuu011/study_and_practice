class Person {
    age;

    constructor(age) {
        this.age = age;
    }

    dataMigration (obj) {
        for(const k in new Person()){
            if(obj[k] === undefined) continue;
            this[k] = obj[k]
        }
    }
}

class Minwoo extends Person {
    constructor(age) {
        super(age);
    }
}

const minwoo = new Minwoo(25);

const obj = {age: 28, name: '미누'};

minwoo.dataMigration(obj);

//dataMigration으로 해당 객체의 기본 키만 옮기게 했으므로 name이 함께 출력되지 않음.
console.log(minwoo);
