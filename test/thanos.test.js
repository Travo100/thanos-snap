const Thanos = require("../index");
const expect = require("chai").expect;

describe("thanos snap", function() {
  it("should snap 4 into 2", function() {
    const snappedValue = Thanos.snap(4);
    expect(snappedValue).equal(2);
  });

  it("should snap 'Iron Man' into 'Iron '", function() {
    const snappedValue = Thanos.snap("Iron Man");
    expect(snappedValue).equal("Iron ");
  });

  it("should snap [1, 2, 3, 4] into [1, 2]", function() {
    const snappedValue = Thanos.snap([1, 2, 3, 4]);
    expect(snappedValue).eql([1, 2]);
  });

  it("should snap Object into into Object/2", function() {
    const snappedValue = Thanos.snap({
      name: "Spider Man",
      realName: "Peter Parker",
      sideKick: true,
      mood: "Doesn't feel so good."
    });
    expect(snappedValue).eql({
      name: "Spider Man",
      realName: "Peter Parker"
    });
  });
});

// console.log(Thanos.snap(4));
// console.log(Thanos.snap("Iron Man"));
// console.log(Thanos.snap([1, 2, 3, 4]));
console.log(Thanos.snap());