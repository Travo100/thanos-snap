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

  it("should snap ['foo', 'bar'] into ['foo']", function() {
    const snappedValue = Thanos.snap(["foo", "bar"]);
    expect(snappedValue).eql(["foo"]);
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

  it("should snap Object into into Object/2", function() {
    const snappedValue = Thanos.snap({
      name: "Jim",
      realName: "Bean"
    });
    expect(snappedValue).eql({
      name: "Jim"
    });
  });

  it("should snap a boolean(true) into null", function() {
    const snappedValue = Thanos.snap(true);
    expect(snappedValue).equal(null);
  });

  it("should snap a boolean(false) into null", function() {
    const snappedValue = Thanos.snap(true);
    expect(snappedValue).equal(null);
  });

  it("should snap a undefined and return back undefined", function() {
    const snappedValue = Thanos.snap();
    expect(snappedValue).equal(undefined);
  });

  it("should snap a null and return back null", function() {
    const snappedValue = Thanos.snap(null);
    expect(snappedValue).equal(null);
  });
});
