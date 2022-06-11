const { handleNums, findMean, findMedian, findMode } = require("./helper");

describe("handleNums", function () {
  it("returns an array of numbers", function () {
    expect(handleNums("1,2,3,4")).toEqual([1, 2, 3, 4]);
  });
  it("returns an error if NaN", function () {
    expect(handleNums("1,2,3,pie")).toEqual("Shit's fucked, yo");
  });
});

describe("findMean", function () {
  it("returns the average of an array", function (){
    expect(findMean([4,5,6])).toEqual(5)
  })
})

describe("findMedian", function(){
  it("returns the median of an array with an odd length", function(){
    expect(findMedian([8,2,6])).toEqual(6)
  })
  it("returns the median of an array with an even length", function(){
    expect(findMedian([8,2,6,6])).toEqual(6)
  })
})

describe("#findMode", function () {
  it("finds the mode", function () { 
    expect(findMode([1,1,1,2,2,3])).toEqual(1)
  })
  it("finds the mode", function () { 
    expect(findMode([1,1,2,2,3,3,3])).toEqual(3)
  })
})