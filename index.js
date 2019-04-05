class Thanos {
  constructor() {
    // unused constructor
  }

  snap(data) {
    if (data === undefined || data === null) {
      return data;
    }

    if (typeof data === "boolean") {
      return null;
    }

    if (typeof data === "number") {
      return data / 2;
    }

    if (typeof data === "string") {
      return data.slice(0, data.length / 2 + 1);
    }

    if (Array.isArray(data)) {
      let snappedArr = [];
      for (let i = 0; i < data.length / 2; i++) {
        snappedArr.push(data[i]);
      }
      return snappedArr;
    }

    if (data === Object(data)) {
      const keysArr = Object.keys(data);
      for (let i = keysArr.length / 2; i < keysArr.length; i++) {
        delete data[keysArr[i]];
      }
      return data;
    }
  }
}

module.exports = new Thanos();
