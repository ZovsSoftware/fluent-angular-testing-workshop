function scoreCalculator(scores) {

  return scores.reduce((acc, val) => {
    if( val < 0) {
      return acc;
    }
    return acc + val;
  }, 0);
};

// AAA -> Arrange, Act, Assert
describe('scoreCalculator', () => {

  it("should work with one number", () => {
    let sum = scoreCalculator([70]);
    expect(sum).toBe(70);
  });

  it("should work with more than one number", () => {
    let sum = scoreCalculator([50, 30]);
    expect(sum).toBe(80);
  });

  it (" should treat negative scores as zero", () => {
    let sum = scoreCalculator([50, 30, -65, -73]);
    expect(sum).toBe(80);
  });

  it ("should return zero with emtpy inpug", () => {
    let sum = scoreCalculator([]);
    expect(sum).toBe(0);
  });

});
