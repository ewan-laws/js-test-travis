
const cloneShallow = obj => Object.assign({}, obj);

function cloneDeep(val) {
  const isArray = Array.isArray(val);
  const isObject = typeof val === "object" && !isArray;
  const isPrimative = !isArray && !isObject

  if (isObject) {
    const clonedObj = {}
    Object.keys(val)
          .forEach(key => {
            clonedObj[key] = cloneDeep(val[key]);
          })
    return clonedObj;
  }

  if (isArray) {
    return val.map(cloneDeep);
  }

  if (isPrimative) {
    return val;
  }
}

describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = cloneShallow(expected)

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
