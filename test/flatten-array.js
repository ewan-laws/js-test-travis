
const isArray = potentialArray => Array.isArray(potentialArray)

function flatten(arrayToFlatten) {
    let flattened = []
    const pushToFlattened = val => isArray(val)
          ? val.forEach(pushToFlattened)
          : flattened.push(val);
    pushToFlattened(arrayToFlatten)
    return flattened.sort();
}
describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = flatten([1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]]),
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    expect(arr).toEqual(expected);
  });
});
