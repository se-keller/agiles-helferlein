describe("NPS", function() {
  it("100 if only promoters", function() {
    expect(calculateNps(1,0,0)).toBe(100);
  });
  it("0 if only indifferent", function() {
    expect(calculateNps(0,1,0)).toBe(0);
  });
  it("-100 if only detractors", function() {
    expect(calculateNps(0,0,1)).toBe(-100);
  });
  it("33 if twice promoters than detractors and no indifferent", function() {
    expect(calculateNps(2,0,1)).toBe(33);
  });
  it("0 for NaN inputs", function() {
    expect(calculateNps("NaN","NaN","NaN")).toBe(0);
  });
});