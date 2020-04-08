describe("Split Array function", function() {
  it("if given an empty array, returns an empty array", function() {
    // your code here
    expect(split([])).toEqual([]);
  });
  it("if given a single input, returns that input", function() {
    // your code here
    expect(split([3])).toEqual([3]);
    expect(split([67])).toEqual([67]);
  });
  it("is able to split an array into two halves", function() {
    // your code here
    expect(split([3, 78, 20, 5])).toEqual([
      [3, 78],
      [20, 5]
    ]);
    expect(split([2, 6, 40, 23, 7])).toEqual([
      [2, 6],
      [40, 23, 7]
    ]);
  });
  describe("Merge function", function() {
    it("is able to merge two odd arrays", function() {
      // test the merging algorithm
      expect(merge([3], [4, 5])).toEqual([3, 4, 5]);
      expect(merge([5, 6, 9], [4, 10])).toEqual([4, 5, 6, 9, 10]);
    });
  });
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(merge([3], [4])).toEqual([3, 4]);
    expect(merge([5, 6], [4, 9])).toEqual([4, 5, 6, 9]);
  });
  describe("MergeSort function", function() {
    it("takes in a single array", function() {
      // test the merging algorithm
      expect(mergeSort([3, 2, 5])).toEqual([2, 3, 5]);
      expect(mergeSort([5, 6, 10, 4, 9])).toEqual([4, 5, 6, 9, 10]);
      expect(mergeSort([5, 6, 9, 4, 10, 12])).toEqual([4, 5, 6, 9, 10, 12]);
    });
  });
  it("if given an empty array or only one value returns that array", function() {
    // test the merging algorithm
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([5])).toEqual([5]);
  });
});
