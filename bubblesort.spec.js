describe("Bubble Sort", function() {
  describe("swap", function() {
    it("handles an empty array", function() {
      expect(bubbleSort([])).toEqual([]);
    });

    it("handles a single item", function() {
      expect(bubbleSort([4])).toEqual([4]);
      expect(bubbleSort([15])).toEqual([15]);
    });
    it("handles multipleitems", function() {
      expect(bubbleSort([6, 3, 9, 1, 15, 27])).toEqual([1, 3, 6, 9, 15, 27]);
      expect(bubbleSort([65, 97, 16, 23])).toEqual([16, 23, 65, 97]);
    });
  });
});
