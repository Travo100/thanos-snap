const Thanos = require("./thanos");
const myObj = {
    name: "Bill",
    email: "billy@bill.com",
    cat: "dog"
};

console.log(Thanos.snap(0));
console.log(Thanos.snap("TravisThompson"));
console.log(Thanos.snap([1, 2, 3, 4]));
console.log(Thanos.snap(myObj));

console.log(Thanos.snap(1000));
console.log(Thanos.snap("A quick brown fox jumps over the lazy dog"));
console.log(Thanos.snap([5, 10, 1555, 2052, 221, "mom", "dad"]));
console.log(Thanos.snap(myObj));